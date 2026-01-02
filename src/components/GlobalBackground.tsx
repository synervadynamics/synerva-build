"use client";

import { useEffect } from "react";

const DEBUG_PARAM = "bgdebug";

const setVar = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value);
};

const setStaticVars = () => {
  setVar("--mx", "0%");
  setVar("--my", "0%");
  setVar("--h", "0");
  setVar("--p", "0.5");
  setVar("--scroll", "0.5");
};

const shouldReduceMotion = () => {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
};

export default function GlobalBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const params = new URLSearchParams(window.location.search);
    if (params.get(DEBUG_PARAM) === "1") {
      root.dataset.bgDebug = "1";
    } else {
      delete root.dataset.bgDebug;
    }

    let raf = 0;
    let last = 0;
    let running = false;

    const resetCursor = () => {
      setVar("--cursor-x", `${window.innerWidth / 2}px`);
      setVar("--cursor-y", `${window.innerHeight / 2}px`);
    };

    const handlePointer = (event: PointerEvent) => {
      setVar("--cursor-x", `${event.clientX}px`);
      setVar("--cursor-y", `${event.clientY}px`);
    };

    const tick = (time: number) => {
      if (!running) return;
      if (time - last < 33) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      last = time;
      const t = time / 1000;
      const mx = Math.sin(t * 0.16) * 8;
      const my = Math.cos(t * 0.12) * 6;
      const h = Math.sin(t * 0.07) * 28;
      const p = (Math.sin(t * 0.32) + 1) / 2;
      const maxScroll =
        document.body.scrollHeight - window.innerHeight || 1;
      const scroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setVar("--mx", `${mx.toFixed(2)}%`);
      setVar("--my", `${my.toFixed(2)}%`);
      setVar("--h", h.toFixed(2));
      setVar("--p", p.toFixed(3));
      setVar("--scroll", scroll.toFixed(3));
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
      if (shouldReduceMotion()) {
        stop();
        setStaticVars();
        return;
      }
      start();
    };

    handlePreference();
    motionQuery.addEventListener("change", handlePreference);
    pointerQuery.addEventListener("change", handlePreference);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerleave", resetCursor, { passive: true });
    resetCursor();

    return () => {
      motionQuery.removeEventListener("change", handlePreference);
      pointerQuery.removeEventListener("change", handlePreference);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", resetCursor);
      stop();
    };
  }, []);

  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-mesh" />
      <div className="bg-aurora" />
      <div className="bg-vignette" />
      <div className="bg-cursor-glow" />
      <div className="bg-noise" />
    </div>
  );
}
