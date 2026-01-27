"use client";

import {
  type MotionValue,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const transitionEase = [0.22, 1, 0.36, 1] as const;
const switchThreshold = 0.02;

// Invariants: these are structural constraints, not stylistic preferences.
const activationWindow = 0.15; // Section center within ±15% of viewport center defines activity.
const singleActiveGlowInvariant = true; // Exactly one section glow may be active at any time.
const enterDurationSeconds = 0.7;
const exitDurationDownSeconds = 0.7;
const exitDurationUpSeconds = 0.5;
const resetDurationMs = 150; // A brief zero-glow reset between sections is required.
const minStableOpacity = 0.11; // Production floor raised to ensure visibility.
const targetRangeMin = 0.13;
const targetRangeMax = 0.17;
const absoluteMaxOpacity = 0.18;
const arrivalRampMs = 300;
const isDev = process.env.NODE_ENV !== "production";
const sectionIds = [
  "hero",
  "narrative",
  "offerings",
  "systems-that-hold",
  "systems",
  "publications",
  "merch",
  "about",
] as const;
type SectionId = (typeof sectionIds)[number];
type GlowState = "inactive" | "entering" | "active" | "exiting";
type GlowPhase = GlowState;
type SectionMetrics = {
  centerOffset: number;
};

const buildThresholds = (steps: number) =>
  Array.from({ length: steps + 1 }, (_, index) => index / steps);

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const parseRgba = (value: string) => {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return { r: 0, g: 0, b: 0, a: 1 };
  const parts = match[1].split(",").map((p) => Number.parseFloat(p.trim()));
  const [r = 0, g = 0, b = 0, a = 1] = parts;
  return { r, g, b, a: Number.isFinite(a) ? a : 1 };
};

const srgbToLinear = (channel: number) => {
  const c = channel / 255;
  if (c <= 0.04045) return c / 12.92;
  return ((c + 0.055) / 1.055) ** 2.4;
};

const computeLuminance = (r: number, g: number, b: number) =>
  0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);

export default function HomepageScrollGlow() {
  /*
   * This system is intentionally perceptible.
   * Do not reduce opacity, remove reset moments, or allow overlapping glows
   * without validating perceptibility on standard displays.
   */
  const shouldReduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const searchParams = useSearchParams();
  const glowDebug = searchParams.get("glowdebug") === "1";
  const perceptibilityModeActive = glowDebug;
  const scrollDirection = useRef<"up" | "down">("down");
  const lastScroll = useRef(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [metrics, setMetrics] = useState<Record<SectionId, SectionMetrics>>(
    () =>
      sectionIds.reduce(
        (acc, id) => {
          acc[id] = { centerOffset: Number.POSITIVE_INFINITY };
          return acc;
        },
        {} as Record<SectionId, SectionMetrics>,
      ),
  );
  const aboutRef = useRef<HTMLElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("hero");
  const [pendingSectionId, setPendingSectionId] = useState<SectionId | null>(
    null,
  );
  const [sectionStates, setSectionStates] = useState<Record<SectionId, GlowState>>(
    () =>
      sectionIds.reduce(
        (acc, id) => {
          acc[id] = id === "hero" ? "entering" : "inactive";
          return acc;
        },
        {} as Record<SectionId, GlowState>,
      ),
  );
  const [activeOpacityValue, setActiveOpacityValue] = useState(0);
  const [activePhase, setActivePhase] = useState<GlowPhase>("entering");
  const [phaseProgress, setPhaseProgress] = useState(0);
  const phaseStartRef = useRef<number>(performance.now());
  const phaseDurationRef = useRef<number>(enterDurationSeconds * 1000);
  const phaseProgressRef = useRef(0);
  const [resetInProgress, setResetInProgress] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetInProgressRef = useRef(resetInProgress);
  const [backgroundLuminance, setBackgroundLuminance] = useState(0);
  const [opacities, setOpacities] = useState<Record<SectionId, number>>(
    () =>
      sectionIds.reduce(
        (acc, id) => {
          acc[id] = 0;
          return acc;
        },
        {} as Record<SectionId, number>,
      ),
  );

  const thresholds = useMemo(() => buildThresholds(100), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollDirection.current = latest > lastScroll.current ? "down" : "up";
    setDirection(scrollDirection.current);
    lastScroll.current = latest;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const viewportCenter = window.innerHeight / 2;
        setMetrics((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const id = entry.target.id as SectionId;
            if (!sectionIds.includes(id)) return;
            const rect = entry.boundingClientRect;
            const center = rect.top + rect.height / 2;
            next[id] = {
              centerOffset: center - viewportCenter,
            };
          });
          return next;
        });
      },
      { threshold: thresholds },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        if (id === "about") {
          aboutRef.current = element;
        }
      }
    });

    return () => observer.disconnect();
  }, [thresholds]);

  const candidateSectionId = useMemo(() => {
    const viewportHeight = typeof window === "undefined" ? 0 : window.innerHeight;
    const windowSize = viewportHeight * activationWindow;
    let bestId: SectionId = "hero";
    let bestDistance = Number.POSITIVE_INFINITY;
    let bestWithinWindow = false;
    sectionIds.forEach((id) => {
      const offset = metrics[id]?.centerOffset ?? Number.POSITIVE_INFINITY;
      const distance = Math.abs(offset);
      const withinWindow = distance <= windowSize;
      if (withinWindow && !bestWithinWindow) {
        bestWithinWindow = true;
        bestDistance = distance;
        bestId = id;
        return;
      }
      if (withinWindow && bestWithinWindow && distance < bestDistance) {
        bestDistance = distance;
        bestId = id;
        return;
      }
      if (!bestWithinWindow && distance < bestDistance) {
        bestDistance = distance;
        bestId = id;
      }
    });
    return bestId;
  }, [metrics]);

  const heroOpacity = useMotionValue<number>(0);
  const narrativeOpacity = useMotionValue<number>(0);
  const offeringsOpacity = useMotionValue<number>(0);
  const systemsThatHoldOpacity = useMotionValue<number>(0);
  const systemsOpacity = useMotionValue<number>(0);
  const publicationsOpacity = useMotionValue<number>(0);
  const merchOpacity = useMotionValue<number>(0);
  const aboutBaseOpacity = useMotionValue<number>(0);

  const opacityById = useMemo<Record<SectionId, MotionValue<number>>>(
    () => ({
      hero: heroOpacity,
      narrative: narrativeOpacity,
      offerings: offeringsOpacity,
      "systems-that-hold": systemsThatHoldOpacity,
      systems: systemsOpacity,
      publications: publicationsOpacity,
      merch: merchOpacity,
      about: aboutBaseOpacity,
    }),
    [
      heroOpacity,
      narrativeOpacity,
      offeringsOpacity,
      systemsThatHoldOpacity,
      systemsOpacity,
      publicationsOpacity,
      merchOpacity,
      aboutBaseOpacity,
    ],
  );

  const sectionConfig = useMemo(
    () =>
      ({
        hero: { baseOpacity: 0.145 },
        narrative: { baseOpacity: 0.162 },
        offerings: { baseOpacity: 0.152 },
        "systems-that-hold": { baseOpacity: 0.17 },
        systems: { baseOpacity: 0.145 },
        publications: { baseOpacity: 0.135 },
        merch: { baseOpacity: 0.155 },
        about: { baseOpacity: 0.148 },
      }) satisfies Record<SectionId, { baseOpacity: number }>,
    [],
  );

  const lastTargetById = useRef<Record<SectionId, number>>(
    sectionIds.reduce(
      (acc, id) => {
        acc[id] = 0;
        return acc;
      },
      {} as Record<SectionId, number>,
    ),
  );
  const pendingSectionRef = useRef<SectionId | null>(null);

  useEffect(() => {
    pendingSectionRef.current = pendingSectionId;
  }, [pendingSectionId]);
  useEffect(() => {
    resetInProgressRef.current = resetInProgress;
  }, [resetInProgress]);

  useEffect(() => {
    const updateLuminance = () => {
      const bodyStyle = window.getComputedStyle(document.body);
      const { r, g, b } = parseRgba(bodyStyle.backgroundColor || "rgb(0,0,0)");
      setBackgroundLuminance(computeLuminance(r, g, b));
    };
    updateLuminance();
    window.addEventListener("resize", updateLuminance);
    return () => window.removeEventListener("resize", updateLuminance);
  }, []);

  useEffect(
    () => () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (pendingSectionId || candidateSectionId === activeSectionId) return;
    setPendingSectionId(candidateSectionId);
    setResetInProgress(false);
    resetInProgressRef.current = false;
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    setSectionStates((prev) => ({
      ...prev,
      [activeSectionId]: "exiting",
    }));
    setActivePhase("exiting");
    phaseStartRef.current = performance.now();
    phaseDurationRef.current =
      (scrollDirection.current === "up"
        ? exitDurationUpSeconds
        : exitDurationDownSeconds) * 1000;
  }, [candidateSectionId, activeSectionId, pendingSectionId]);

  const commitPendingSwitch = (nextId: SectionId) => {
    setActiveSectionId(nextId);
    setPendingSectionId(null);
    setSectionStates(
      sectionIds.reduce(
        (acc, id) => {
          if (id === nextId) {
            acc[id] = "entering";
          } else {
            acc[id] = "inactive";
          }
          return acc;
        },
        {} as Record<SectionId, GlowState>,
      ),
    );
    setActivePhase("entering");
    phaseStartRef.current = performance.now();
    phaseDurationRef.current = enterDurationSeconds * 1000;
  };

  const startReset = (nextId: SectionId) => {
    if (resetInProgressRef.current) return;
    setResetInProgress(true);
    resetInProgressRef.current = true;
    setActivePhase("inactive");
    phaseStartRef.current = performance.now();
    phaseDurationRef.current = resetDurationMs;
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = setTimeout(() => {
      setResetInProgress(false);
      resetInProgressRef.current = false;
      commitPendingSwitch(nextId);
    }, resetDurationMs);
  };

  const warnRef = useRef<Record<string, boolean>>({});
  const warnOnce = (key: string, message: string) => {
    if (!isDev || warnRef.current[key]) return;
    warnRef.current[key] = true;
    // eslint-disable-next-line no-console
    console.warn(`[glow] ${message}`);
  };

  useEffect(() => {
    if (!isDev) return;
    const activeIds = sectionIds.filter((id) => (opacities[id] ?? 0) > 0.001);
    if (singleActiveGlowInvariant && activeIds.length > 1) {
      warnOnce(
        "multi-active",
        `Multiple glows active simultaneously: ${activeIds.join(", ")}`,
      );
    }
  }, [opacities]);

  useEffect(() => {
    const pendingId = pendingSectionId;
    if (!pendingId) return;
    const activeOpacity = opacityById[activeSectionId].get();
    if (activeOpacity <= switchThreshold) {
      startReset(pendingId);
    }
  }, [pendingSectionId, activeSectionId, opacityById]);

  useMotionValueEvent(heroOpacity, "change", (latest) => {
    if (activeSectionId === "hero") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(narrativeOpacity, "change", (latest) => {
    if (activeSectionId === "narrative") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(offeringsOpacity, "change", (latest) => {
    if (activeSectionId === "offerings") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(systemsThatHoldOpacity, "change", (latest) => {
    if (activeSectionId === "systems-that-hold") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(systemsOpacity, "change", (latest) => {
    if (activeSectionId === "systems") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(publicationsOpacity, "change", (latest) => {
    if (activeSectionId === "publications") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(merchOpacity, "change", (latest) => {
    if (activeSectionId === "merch") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });
  useMotionValueEvent(aboutBaseOpacity, "change", (latest) => {
    if (activeSectionId === "about") {
      setActiveOpacityValue(latest);
      const pendingId = pendingSectionRef.current;
      if (pendingId && latest <= switchThreshold) {
        startReset(pendingId);
      }
    }
  });

  useMotionValueEvent(heroOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, hero: latest })),
  );
  useMotionValueEvent(narrativeOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, narrative: latest })),
  );
  useMotionValueEvent(offeringsOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, offerings: latest })),
  );
  useMotionValueEvent(systemsThatHoldOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, "systems-that-hold": latest })),
  );
  useMotionValueEvent(systemsOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, systems: latest })),
  );
  useMotionValueEvent(publicationsOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, publications: latest })),
  );
  useMotionValueEvent(merchOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, merch: latest })),
  );
  useMotionValueEvent(aboutBaseOpacity, "change", (latest) =>
    setOpacities((prev) => ({ ...prev, about: latest })),
  );

  useEffect(() => {
    sectionIds.forEach((id) => {
      const opacity = opacityById[id];
      const { baseOpacity } = sectionConfig[id];
      const clampedBase = clamp(baseOpacity, targetRangeMin, targetRangeMax);
      const activeTargetOpacity = clamp(
        clampedBase,
        minStableOpacity,
        absoluteMaxOpacity,
      );
      if (isDev && id === activeSectionId && activeTargetOpacity < minStableOpacity) {
        warnOnce(
          `opacity-floor-${id}`,
          `${id} target opacity ${activeTargetOpacity.toFixed(3)} is below floor ${minStableOpacity.toFixed(2)}`,
        );
      }
      if (
        isDev &&
        id === activeSectionId &&
        backgroundLuminance > 0.4 &&
        activeTargetOpacity <= minStableOpacity + 0.01
      ) {
        warnOnce(
          `blend-suppression-${id}`,
          `${id} may be suppressed by bright backgrounds with blend modes; consider screen or +0.01 opacity`,
        );
      }
      const gatedTarget =
        resetInProgress
          ? 0
          : pendingSectionId && id !== activeSectionId
          ? 0
          : id === activeSectionId && !pendingSectionId
            ? activeTargetOpacity
            : 0;
      const target = Math.max(0, gatedTarget);
      const previousTarget = lastTargetById.current[id] ?? -1;
      if (Math.abs(previousTarget - target) < 0.001) {
        return;
      }
      lastTargetById.current[id] = target;

      const current = opacity.get();
      const isDecaying = target < current;
      const duration = isDecaying
        ? scrollDirection.current === "up"
          ? exitDurationUpSeconds
          : exitDurationDownSeconds
        : enterDurationSeconds;
      const rampFraction = Math.min(0.45, arrivalRampMs / (enterDurationSeconds * 1000));

      const onComplete = () => {
        if (!pendingSectionRef.current && id === activeSectionId && target > 0) {
          setActivePhase("active");
          phaseProgressRef.current = 1;
          setPhaseProgress(1);
        }
      };

      if (target > 0 && !isDecaying) {
        animate(opacity, [0, minStableOpacity, target], {
          duration,
          ease: transitionEase,
          times: [0, rampFraction, 1],
          onComplete,
        });
      } else {
        animate(opacity, target, {
          duration,
          ease: transitionEase,
          onComplete,
        });
      }

      setSectionStates((prev) => {
        const nextState: GlowState =
          target <= 0.001
            ? "inactive"
            : id === activeSectionId
              ? current < target - 0.005
                ? "entering"
                : "active"
              : prev[id] === "exiting"
                ? "exiting"
                : "inactive";
        if (prev[id] === nextState) return prev;
        return { ...prev, [id]: nextState };
      });
    });
  }, [
    activeSectionId,
    pendingSectionId,
    opacityById,
    sectionConfig,
    resetInProgress,
    backgroundLuminance,
  ]);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      const duration = phaseDurationRef.current;
      if (duration <= 0) {
        phaseProgressRef.current = 1;
        setPhaseProgress(1);
        rafId = requestAnimationFrame(tick);
        return;
      }
      const elapsed = performance.now() - phaseStartRef.current;
      const progress = Math.max(0, Math.min(1, elapsed / duration));
      phaseProgressRef.current = progress;
      setPhaseProgress(progress);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const narrativeDriftX = useTransform(scrollYProgress, [0, 1], ["-3vw", "3vw"]);
  const narrativeDriftY = useTransform(scrollYProgress, [0, 1], ["-3vh", "3vh"]);
  const systemsThatHoldDriftX = useTransform(scrollYProgress, [0, 1], ["-2vw", "2vw"]);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutExitFade = useTransform(aboutScrollProgress, [0, 0.9, 1], [1, 1, 0]);
  const aboutOpacity = useTransform(
    [aboutBaseOpacity, aboutExitFade],
    ([opacity, fade]) => (opacity as number) * (fade as number),
  );

  if (shouldReduceMotion) {
    return (
      <>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[6]"
          style={{
            background:
              "radial-gradient(75% 75% at 65% 40%, #1F6F5B 0%, transparent 60%)",
            opacity: 0.1,
            mixBlendMode: perceptibilityModeActive ? "normal" : "screen",
          }}
        />
        {glowDebug ? (
          <div className="pointer-events-none fixed inset-0 z-[7] border border-dashed border-white/35" />
        ) : null}
        {perceptibilityModeActive ? (
          <div className="pointer-events-none fixed left-3 top-3 z-[60] w-56 rounded border border-white/15 bg-black/70 p-2 font-mono text-[11px] text-white/90">
            <div>PERCEPTIBILITY MODE ACTIVE</div>
            <div>Active section: {activeSectionId}</div>
            <div>Active glow: {activeSectionId}</div>
            <div>Opacity: {activeOpacityValue.toFixed(3)}</div>
            <div>Background L: {backgroundLuminance.toFixed(3)}</div>
            <div>Direction: {direction}</div>
            <div>Phase: {activePhase}</div>
            <div>Timer: {(phaseProgress * 100).toFixed(0)}%</div>
            <div>State: {sectionStates[activeSectionId]}</div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <>
      {glowDebug ? (
        <div className="pointer-events-none fixed inset-0 z-[7] border border-dashed border-white/35" />
      ) : null}
      {perceptibilityModeActive ? (
        <div className="pointer-events-none fixed left-3 top-3 z-[60] w-56 rounded border border-white/15 bg-black/70 p-2 font-mono text-[11px] text-white/90">
          <div>PERCEPTIBILITY MODE ACTIVE</div>
          <div>Active section: {activeSectionId}</div>
          <div>Active glow: {activeSectionId}</div>
          <div>Opacity: {activeOpacityValue.toFixed(3)}</div>
          <div>Background L: {backgroundLuminance.toFixed(3)}</div>
          <div>Direction: {direction}</div>
          <div>Phase: {activePhase}</div>
          <div>Timer: {(phaseProgress * 100).toFixed(0)}%</div>
          <div>State: {sectionStates[activeSectionId]}</div>
        </div>
      ) : null}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: heroOpacity,
          background:
            "radial-gradient(82% 78% at 66% 40%, #1E7C67 0%, transparent 62%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "screen",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: narrativeOpacity,
          x: narrativeDriftX,
          y: narrativeDriftY,
          background:
            "linear-gradient(25deg, rgba(40,140,150,0) 12%, rgba(40,140,150,1) 48%, rgba(40,140,150,0) 84%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: offeringsOpacity,
          background:
            "radial-gradient(42% 44% at 20% 48%, #9A8F38 0%, transparent 72%), radial-gradient(42% 44% at 50% 52%, #9A8F38 0%, transparent 72%), radial-gradient(42% 44% at 80% 48%, #9A8F38 0%, transparent 72%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "screen",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: systemsThatHoldOpacity,
          x: systemsThatHoldDriftX,
          background:
            "radial-gradient(150% 50% at 50% 72%, #B26A3A 0%, transparent 66%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "screen",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: systemsOpacity,
          background:
            "radial-gradient(36% 42% at 18% 46%, #2F4E72 0%, transparent 72%), radial-gradient(32% 38% at 18% 46%, #1E2F48 0%, transparent 70%), radial-gradient(36% 42% at 50% 50%, #2F4E72 0%, transparent 72%), radial-gradient(32% 38% at 50% 50%, #1E2F48 0%, transparent 70%), radial-gradient(36% 42% at 82% 46%, #2F4E72 0%, transparent 72%), radial-gradient(32% 38% at 82% 46%, #1E2F48 0%, transparent 70%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: publicationsOpacity,
          background:
            "radial-gradient(128% 128% at 50% 55%, #6B5A8A 0%, transparent 74%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: merchOpacity,
          background:
            "radial-gradient(44% 49% at 50% 55%, #B14A3A 0%, transparent 64%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "screen",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: aboutOpacity,
          background:
            "radial-gradient(70% 64% at 50% 72%, #3A4F8F 0%, transparent 68%)",
          mixBlendMode: perceptibilityModeActive ? "normal" : "soft-light",
        }}
      />
    </>
  );
}
