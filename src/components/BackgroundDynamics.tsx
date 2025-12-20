"use client";

import { useEffect } from "react";

export const BackgroundDynamics = () => {
  useEffect(() => {
    const root = document.documentElement;
    const palettes = [
      {
        // Blue to green.
        g1: [120, 200, 255, 0.3],
        g2: [80, 220, 200, 0.24],
        g3: [120, 255, 210, 0.22],
        g4: [90, 180, 255, 0.18],
        g5: [70, 240, 210, 0.2],
        g6: [120, 210, 255, 0.18],
        g7: [90, 255, 225, 0.16],
        g8: [120, 180, 255, 0.14],
      },
      {
        // Green to teal.
        g1: [90, 255, 200, 0.28],
        g2: [70, 200, 255, 0.22],
        g3: [120, 255, 190, 0.2],
        g4: [120, 220, 255, 0.18],
        g5: [70, 230, 255, 0.2],
        g6: [90, 255, 210, 0.18],
        g7: [120, 200, 255, 0.16],
        g8: [90, 255, 220, 0.14],
      },
      {
        // Yellow to orange.
        g1: [255, 215, 120, 0.3],
        g2: [255, 170, 90, 0.24],
        g3: [255, 210, 140, 0.22],
        g4: [255, 180, 120, 0.18],
        g5: [255, 200, 110, 0.2],
        g6: [255, 150, 110, 0.18],
        g7: [255, 200, 140, 0.16],
        g8: [255, 170, 120, 0.14],
      },
      {
        // Orange to red.
        g1: [255, 160, 110, 0.3],
        g2: [255, 120, 100, 0.24],
        g3: [255, 140, 130, 0.22],
        g4: [255, 110, 90, 0.18],
        g5: [255, 170, 120, 0.2],
        g6: [255, 120, 120, 0.18],
        g7: [255, 150, 140, 0.16],
        g8: [255, 120, 110, 0.14],
      },
      {
        // Red to purple.
        g1: [255, 120, 160, 0.28],
        g2: [200, 100, 255, 0.22],
        g3: [255, 140, 200, 0.2],
        g4: [170, 110, 255, 0.18],
        g5: [220, 120, 255, 0.2],
        g6: [255, 120, 200, 0.18],
        g7: [180, 120, 255, 0.16],
        g8: [220, 140, 255, 0.14],
      },
    ] as const;

    const mix = (a: number, b: number, t: number) => a + (b - a) * t;
    const mixColor = (a: readonly number[], b: readonly number[], t: number) => [
      mix(a[0], b[0], t),
      mix(a[1], b[1], t),
      mix(a[2], b[2], t),
      mix(a[3], b[3], t),
    ];
    const toRgba = (color: readonly number[]) =>
      `rgba(${Math.round(color[0])},${Math.round(color[1])},${Math.round(
        color[2],
      )},${color[3].toFixed(3)})`;

    const setGradientColors = (progress: number) => {
      const clamped = Math.min(1, Math.max(0, progress));
      const steps = palettes.length - 1;
      const scaled = clamped * steps;
      const index = Math.min(steps - 1, Math.floor(scaled));
      const t = scaled - index;
      const from = palettes[index];
      const to = palettes[index + 1];

      root.style.setProperty("--g1", toRgba(mixColor(from.g1, to.g1, t)));
      root.style.setProperty("--g2", toRgba(mixColor(from.g2, to.g2, t)));
      root.style.setProperty("--g3", toRgba(mixColor(from.g3, to.g3, t)));
      root.style.setProperty("--g4", toRgba(mixColor(from.g4, to.g4, t)));
      root.style.setProperty("--g5", toRgba(mixColor(from.g5, to.g5, t)));
      root.style.setProperty("--g6", toRgba(mixColor(from.g6, to.g6, t)));
      root.style.setProperty("--g7", toRgba(mixColor(from.g7, to.g7, t)));
      root.style.setProperty("--g8", toRgba(mixColor(from.g8, to.g8, t)));
    };

    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;
    let targetSpeed = 0;
    let currentSpeed = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let lastTime = performance.now();
    let raf = 0;

    const handlePointer = (event: PointerEvent) => {
      targetX = event.clientX / window.innerWidth;
      targetY = event.clientY / window.innerHeight;
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const dt = Math.max(now - lastTime, 16);
      const speed = Math.sqrt(dx * dx + dy * dy) / (dt / 1000);
      targetSpeed = Math.min(1, speed / 800);
      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
    };

    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      root.style.setProperty(
        "--grad-scroll-60",
        `${(scrolled * 60).toFixed(2)}%`,
      );
      root.style.setProperty(
        "--grad-scroll-42",
        `${(scrolled * 42).toFixed(2)}%`,
      );
      setGradientColors(scrolled);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentSpeed += (targetSpeed - currentSpeed) * 0.24;
      root.style.setProperty("--grad-x", `${(currentX * 100).toFixed(2)}%`);
      root.style.setProperty("--grad-y", `${(currentY * 100).toFixed(2)}%`);
      root.style.setProperty(
        "--cursor-x",
        `${(currentX * 100).toFixed(2)}%`,
      );
      root.style.setProperty(
        "--cursor-y",
        `${(currentY * 100).toFixed(2)}%`,
      );
      root.style.setProperty("--cursor-speed", currentSpeed.toFixed(4));
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handlePointer(
      new PointerEvent("pointermove", {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      }),
    );
    handleScroll();
    tick();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
};

export default BackgroundDynamics;
