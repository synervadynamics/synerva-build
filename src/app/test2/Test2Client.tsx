"use client";

import { useEffect, useMemo, useState } from "react";
import LiquidGradient from "@/components/LiquidGradient.client";

const scrollSchemes = [
  ["#F15A22", "#0A0E27", "#F15A22", "#0A0E27", "#F15A22", "#0A0E27"],
  ["#FF6C50", "#193A3A", "#40E0D0", "#0A0E27", "#FF6C50", "#193A3A"],
  ["#7B5CFF", "#101224", "#F26633", "#2D6B6D", "#D1AF9C", "#0A0E27"],
  ["#1C9AA3", "#0A0E27", "#F9C77E", "#244049", "#1C9AA3", "#0A0E27"],
  ["#F15A22", "#0A0E27", "#40E0D0", "#0A0E27", "#F15A22", "#0A0E27"],
] as const;

const hexToRgb = (hex: string) => {
  const cleaned = hex.replace("#", "");
  const value = parseInt(cleaned, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${[r, g, b]
    .map((v) => Math.round(v).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const interpolateSchemes = (progress: number) => {
  const total = scrollSchemes.length - 1;
  const clamped = Math.min(0.9999, Math.max(0, progress));
  const scaled = clamped * total;
  const index = Math.floor(scaled);
  const t = scaled - index;
  const start = scrollSchemes[index];
  const end = scrollSchemes[index + 1] ?? scrollSchemes[index];
  return start.map((color, idx) => {
    const from = hexToRgb(color);
    const to = hexToRgb(end[idx]);
    return rgbToHex(
      lerp(from.r, to.r, t),
      lerp(from.g, to.g, t),
      lerp(from.b, to.b, t),
    );
  }) as [string, string, string, string, string, string];
};

export default function Test2Client() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const next =
        maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;
      setScrollProgress(next);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const colors = useMemo(
    () => interpolateSchemes(scrollProgress),
    [scrollProgress],
  );

  return (
    <main className="relative min-h-screen text-white">
      <LiquidGradient
        className="absolute inset-0 z-0"
        colors={colors}
        interactionStrength={2.2}
        speed={1.35}
        intensity={1.8}
        gradientCount={12}
        gradientSize={0.5}
        color1Weight={0.7}
        color2Weight={1.7}
      />
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 ring-1 ring-white/40">
            <div className="relative z-10 space-y-6 p-12">
              <div className="text-xs uppercase tracking-[0.4em] text-white/60">
                Test Section
              </div>
              <h2 className="text-4xl font-medium sm:text-5xl">
                Interactive Liquid Gradient
              </h2>
              <p className="max-w-xl text-lg text-white/75">
                Scroll to cycle through five evolving color states while the
                liquid gradient remains interactive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative h-[420vh]" aria-hidden="true" />
    </main>
  );
}
