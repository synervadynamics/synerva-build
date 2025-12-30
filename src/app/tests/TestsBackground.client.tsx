"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./tests-background.css";

gsap.registerPlugin(ScrollTrigger);

export default function TestsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scroller = document.querySelector(
      ".tests-scroll"
    ) as HTMLElement | null;

    if (!canvas || !scroller) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let maxScroll = 0;

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      maxScroll = Math.max(1, scroller.scrollHeight - scroller.clientHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    // Intentionally visible diagnostic palette
    const colors = [
      [90, 100, 110],
      [70, 90, 120],
      [110, 95, 80],
      [60, 70, 85],
    ];

    let scrollProgress = 0;
    let drift = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let pointerTargetX = 0.5;
    let pointerTargetY = 0.5;

    const updateScroll = () => {
      scrollProgress = Math.min(1, Math.max(0, scroller.scrollTop / maxScroll));
    };

    updateScroll();
    scroller.addEventListener("scroll", updateScroll);
    const updatePointer = (event: PointerEvent) => {
      const rect = scroller.getBoundingClientRect();
      pointerTargetX = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width)
      );
      pointerTargetY = Math.min(
        1,
        Math.max(0, (event.clientY - rect.top) / rect.height)
      );
    };
    scroller.addEventListener("pointermove", updatePointer);
    scroller.addEventListener("pointerdown", updatePointer);

    ScrollTrigger.create({
      scroller,
      trigger: scroller,
      start: "top top",
      end: () => `+=${maxScroll}`,
      scrub: true,
      onUpdate: (self) => {
        scrollProgress = self.progress;
      },
    });

    const lerp = (a: number, b: number, t: number) =>
      a + (b - a) * t;

    const render = () => {
      drift += 0.002;
      pointerX = lerp(pointerX, pointerTargetX, 0.06);
      pointerY = lerp(pointerY, pointerTargetY, 0.06);

      const index = scrollProgress * (colors.length - 1);
      const lower = Math.floor(index);
      const upper = Math.min(colors.length - 1, lower + 1);
      const t = index - lower;

      const base = colors[lower];
      const next = colors[upper];

      const r = lerp(base[0], next[0], t);
      const g = lerp(base[1], next[1], t);
      const b = lerp(base[2], next[2], t);

      const brightness = 1 + scrollProgress * 0.25;
      const angle =
        Math.sin(drift + scrollProgress * Math.PI) * 0.2 +
        (pointerX - 0.5) * 0.35;

      const gradient = ctx.createLinearGradient(
        width * angle,
        0,
        width * (1 - angle),
        height
      );

      gradient.addColorStop(
        0,
        `rgb(${r * brightness}, ${g * brightness}, ${b * brightness})`
      );
      gradient.addColorStop(
        1,
        `rgb(${r * 0.6}, ${g * 0.6}, ${b * 0.6})`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const blobA = ctx.createRadialGradient(
        width *
          (0.25 +
            Math.sin(drift * 1.2 + scrollProgress * 3) * 0.15 +
            (pointerX - 0.5) * 0.2),
        height *
          (0.35 +
            Math.cos(drift * 0.9 + scrollProgress * 2) * 0.18 +
            (pointerY - 0.5) * 0.22),
        0,
        width *
          (0.25 +
            Math.sin(drift * 1.2 + scrollProgress * 3) * 0.15 +
            (pointerX - 0.5) * 0.2),
        height *
          (0.35 +
            Math.cos(drift * 0.9 + scrollProgress * 2) * 0.18 +
            (pointerY - 0.5) * 0.22),
        Math.max(width, height) * 0.55
      );
      blobA.addColorStop(
        0,
        `rgba(${r * 1.2}, ${g * 1.1}, ${b * 1.4}, 0.65)`
      );
      blobA.addColorStop(1, "rgba(0, 0, 0, 0)");

      const blobB = ctx.createRadialGradient(
        width *
          (0.7 +
            Math.sin(drift * 1.4 - scrollProgress * 2) * 0.2 +
            (pointerX - 0.5) * -0.18),
        height *
          (0.65 +
            Math.cos(drift * 1.1 + scrollProgress * 2.5) * 0.2 +
            (pointerY - 0.5) * -0.2),
        0,
        width *
          (0.7 +
            Math.sin(drift * 1.4 - scrollProgress * 2) * 0.2 +
            (pointerX - 0.5) * -0.18),
        height *
          (0.65 +
            Math.cos(drift * 1.1 + scrollProgress * 2.5) * 0.2 +
            (pointerY - 0.5) * -0.2),
        Math.max(width, height) * 0.6
      );
      blobB.addColorStop(
        0,
        `rgba(${r * 0.7}, ${g * 1.35}, ${b * 0.9}, 0.55)`
      );
      blobB.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = blobA;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = blobB;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      scroller.removeEventListener("scroll", updateScroll);
      scroller.removeEventListener("pointermove", updatePointer);
      scroller.removeEventListener("pointerdown", updatePointer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="tests-background-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}
