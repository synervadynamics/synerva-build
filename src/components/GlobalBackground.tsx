"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DEBUG_PARAM = "bgdebug";

const setVar = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value);
};

const setStaticVars = () => {
  setVar("--mx", "0%");
  setVar("--my", "0%");
};

const shouldReduceMotion = () => {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
};

export default function GlobalBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const params = new URLSearchParams(window.location.search);
    const isOfferings = pathname === "/offerings";
    if (isOfferings) {
      root.dataset.bgMode = "offerings";
    } else {
      delete root.dataset.bgMode;
    }

    if (params.get(DEBUG_PARAM) === "1") {
      root.dataset.bgDebug = "1";
    } else {
      delete root.dataset.bgDebug;
    }

    let raf = 0;
    let last = 0;
    let running = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let isScrolling = false;

    const isMac =
      /Macintosh|Mac OS X/i.test(navigator.userAgent) ||
      /Mac/i.test(navigator.platform);
    const hasWebGL2 = (() => {
      try {
        const canvas = document.createElement("canvas");
        return Boolean(canvas.getContext("webgl2"));
      } catch {
        return false;
      }
    })();
    const computeReduceGpu = () =>
      shouldReduceMotion() || (!hasWebGL2 && isMac) || (isMac && isOfferings);
    const setReducedFlag = (value: boolean) => {
      if (value) {
        root.dataset.bgReduced = "1";
      } else {
        delete root.dataset.bgReduced;
      }
    };
    setReducedFlag(computeReduceGpu());
    const minFrameMs = isOfferings ? 100 : 33;

    const tick = (time: number) => {
      if (!running) return;
      if (time - last < minFrameMs) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      if (isOfferings && isScrolling) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      last = time;
      const t = time / 1000;
      const mx = Math.sin(t * 0.16) * 8;
      const my = Math.cos(t * 0.12) * 6;
      setVar("--mx", `${mx.toFixed(2)}%`);
      setVar("--my", `${my.toFixed(2)}%`);
      raf = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: coarse)");

    const handlePreference = () => {
      const reduceGpu = computeReduceGpu();
      setReducedFlag(reduceGpu);
      if (reduceGpu) {
        stop();
        setStaticVars();
        return;
      }
      start();
    };

    handlePreference();
    motionQuery.addEventListener("change", handlePreference);
    pointerQuery.addEventListener("change", handlePreference);

    const handleScroll = () => {
      if (!isOfferings) return;
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 200);
    };

    if (isOfferings) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      motionQuery.removeEventListener("change", handlePreference);
      pointerQuery.removeEventListener("change", handlePreference);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (isOfferings) {
        window.removeEventListener("scroll", handleScroll);
      }
      stop();
    };
  }, [pathname]);

  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-mesh" />
      <div className="bg-aurora" />
      <div className="bg-vignette" />
      <div className="bg-noise" />
    </div>
  );
}
