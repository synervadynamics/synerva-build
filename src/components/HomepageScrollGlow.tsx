"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const transitionEase = [0.22, 1, 0.36, 1] as const;
const rampStart = 0.15;
const fullAt = 0.35;
const defaultDecayStart = 0.26;
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

const buildThresholds = (steps: number) =>
  Array.from({ length: steps + 1 }, (_, index) => index / steps);

const computeIntensity = (
  ratio: number,
  isDecreasing: boolean,
  decayStart: number,
) => {
  if (ratio <= rampStart) return 0;
  if (!isDecreasing) {
    if (ratio < fullAt) {
      return (ratio - rampStart) / (fullAt - rampStart);
    }
    return 1;
  }
  if (ratio >= decayStart) return 1;
  return Math.max(0, ratio / decayStart);
};

export default function HomepageScrollGlow() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const scrollDirection = useRef<"up" | "down">("down");
  const lastScroll = useRef(0);
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const aboutRef = useRef<HTMLElement | null>(null);

  const thresholds = useMemo(() => buildThresholds(100), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollDirection.current = latest > lastScroll.current ? "down" : "up";
    lastScroll.current = latest;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setRatios((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            next[entry.target.id] = entry.intersectionRatio;
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

  const activeSectionId = useMemo(() => {
    let bestId: (typeof sectionIds)[number] = "hero";
    let bestRatio = -1;
    sectionIds.forEach((id) => {
      const ratio = ratios[id] ?? 0;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestId = id;
      }
    });
    return bestId;
  }, [ratios]);

  const useSectionOpacity = (
    id: string,
    baseOpacity: number,
    durationMs: number,
    decayStart: number = defaultDecayStart,
  ) => {
    const opacity = useMotionValue(0);
    const lastRatio = useRef(0);
    const ratio = ratios[id] ?? 0;

    useEffect(() => {
      const isDecreasing = ratio < lastRatio.current;
      lastRatio.current = ratio;
      const intensity = computeIntensity(ratio, isDecreasing, decayStart);
      const gatedIntensity = activeSectionId === id ? intensity : 0;
      const target = gatedIntensity * baseOpacity;
      const current = opacity.get();
      const isDecaying = target < current;
      let duration = durationMs / 1000;

      if (scrollDirection.current === "up" && isDecaying) {
        duration *= 0.75;
      }

      animate(opacity, target, {
        duration,
        ease: transitionEase,
      });
    }, [
      id,
      ratio,
      baseOpacity,
      durationMs,
      decayStart,
      opacity,
      activeSectionId,
    ]);

    return opacity;
  };

  const heroOpacity = useSectionOpacity("hero", 0.11, 900);
  const narrativeOpacity = useSectionOpacity("narrative", 0.145, 820);
  const offeringsOpacity = useSectionOpacity("offerings", 0.12, 760);
  const systemsThatHoldOpacity = useSectionOpacity("systems-that-hold", 0.155, 1000);
  const systemsOpacity = useSectionOpacity("systems", 0.115, 920);
  const publicationsOpacity = useSectionOpacity("publications", 0.095, 720);
  const merchOpacity = useSectionOpacity("merch", 0.135, 840);
  const aboutBaseOpacity = useSectionOpacity("about", 0.105, 800);

  const narrativeDriftX = useTransform(scrollYProgress, [0, 1], ["-3vw", "3vw"]);
  const narrativeDriftY = useTransform(scrollYProgress, [0, 1], ["-3vh", "3vh"]);
  const systemsThatHoldDriftX = useTransform(scrollYProgress, [0, 1], ["-2vw", "2vw"]);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutExitFade = useTransform(aboutScrollProgress, [0, 0.8, 1], [1, 1, 0]);
  const aboutOpacity = useTransform(
    [aboutBaseOpacity, aboutExitFade],
    ([opacity, fade]) => (opacity as number) * (fade as number),
  );

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          background:
            "radial-gradient(75% 75% at 65% 40%, #1F6F5B 0%, transparent 60%)",
          opacity: 0.1,
          mixBlendMode: "screen",
        }}
      />
    );
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: heroOpacity,
          background:
            "radial-gradient(75% 75% at 65% 40%, #1F6F5B 0%, transparent 60%)",
          mixBlendMode: "screen",
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
            "linear-gradient(25deg, rgba(58,110,78,0) 15%, rgba(58,110,78,1) 48%, rgba(58,110,78,0) 82%)",
          mixBlendMode: "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: offeringsOpacity,
          background:
            "radial-gradient(38% 40% at 20% 48%, #6A8F5A 0%, transparent 70%), radial-gradient(38% 40% at 50% 52%, #6A8F5A 0%, transparent 70%), radial-gradient(38% 40% at 80% 48%, #6A8F5A 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: systemsThatHoldOpacity,
          x: systemsThatHoldDriftX,
          background:
            "radial-gradient(140% 45% at 50% 72%, #8B7A3A 0%, transparent 65%)",
          mixBlendMode: "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: systemsOpacity,
          background:
            "radial-gradient(32% 38% at 18% 46%, #486B55 0%, transparent 70%), radial-gradient(28% 34% at 18% 46%, #2D4338 0%, transparent 68%), radial-gradient(32% 38% at 50% 50%, #486B55 0%, transparent 70%), radial-gradient(28% 34% at 50% 50%, #2D4338 0%, transparent 68%), radial-gradient(32% 38% at 82% 46%, #486B55 0%, transparent 70%), radial-gradient(28% 34% at 82% 46%, #2D4338 0%, transparent 68%)",
          mixBlendMode: "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: publicationsOpacity,
          background:
            "radial-gradient(120% 120% at 50% 55%, #5E6F66 0%, transparent 72%)",
          mixBlendMode: "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: merchOpacity,
          background:
            "radial-gradient(40% 45% at 50% 55%, #7A5C3E 0%, transparent 62%)",
          mixBlendMode: "soft-light",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: aboutOpacity,
          background:
            "radial-gradient(65% 60% at 50% 72%, #2F4F4A 0%, transparent 66%)",
          mixBlendMode: "soft-light",
        }}
      />
    </>
  );
}
