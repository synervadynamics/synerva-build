"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const BackgroundDynamics = () => {
  useEffect(() => {
    const root = document.documentElement;
    const stage = document.querySelector<HTMLElement>(".gradient-stage");
    root.style.setProperty("--grad-x", "50%");
    root.style.setProperty("--grad-y", "50%");
    root.style.setProperty("--cursor-x", "50vw");
    root.style.setProperty("--cursor-y", "50vh");
    const safe = (v: number, fallback: number) =>
      Number.isFinite(v) ? v : fallback;

    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;
    let targetSpeed = 0;
    let currentSpeed = 0;
    let scrollHue = 210;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let lastTime = performance.now();
    let raf = 0;
    let resizeObserver: ResizeObserver | null = null;

    const updateStageHeight = () => {
      if (!stage) return;
      const nextHeight = Math.max(
        document.body.scrollHeight,
        window.innerHeight * 2,
      );
      stage.style.height = `${nextHeight}px`;
      ScrollTrigger.refresh();
    };

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

    const updateScrollVars = (scrolled: number) => {
      const clamped = Math.min(1, Math.max(0, scrolled));
      if (!Number.isFinite(clamped)) return;
      const shift = (clamped - 0.5) * 40;
      const opacity = 0.92 + clamped * 0.08;
      scrollHue = clamped * 720;
      const baseHue = scrollHue % 360;
      root.style.setProperty("--auto-hue", baseHue.toFixed(2));
      root.style.setProperty("--auto-hue-2", ((baseHue + 70) % 360).toFixed(2));
      root.style.setProperty("--auto-hue-3", ((baseHue + 150) % 360).toFixed(2));
      root.style.setProperty("--auto-hue-4", ((baseHue + 260) % 360).toFixed(2));
      root.style.setProperty("--bg-x", `${(50 + clamped * 18).toFixed(2)}%`);
      root.style.setProperty("--bg-y", `${(50 + clamped * 22).toFixed(2)}%`);
      root.style.setProperty("--bg-shift", `${shift.toFixed(1)}px`);
      root.style.setProperty("--bg-opacity", opacity.toFixed(3));
      root.style.setProperty("--scroll-hue", scrollHue.toFixed(2));
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentSpeed += (targetSpeed - currentSpeed) * 0.24;
      const gradX = safe(currentX * 100, 50);
      const gradY = safe(currentY * 100, 50);
      const cursorX = safe(currentX * window.innerWidth, window.innerWidth / 2);
      const cursorY = safe(
        currentY * window.innerHeight,
        window.innerHeight / 2,
      );
      root.style.setProperty("--grad-x", `${gradX}%`);
      root.style.setProperty("--grad-y", `${gradY}%`);
      root.style.setProperty(
        "--cursor-x",
        `${cursorX}px`,
      );
      root.style.setProperty(
        "--cursor-y",
        `${cursorY}px`,
      );
      root.style.setProperty("--cursor-speed", currentSpeed.toFixed(4));
      raf = window.requestAnimationFrame(tick);
    };

    gsap.registerPlugin(ScrollTrigger);
    const scrollState = { progress: 0 };
    const scrollTween = gsap.to(scrollState, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: () => Math.max(1, document.body.scrollHeight - window.innerHeight),
        scrub: 0.6,
      },
      onUpdate: () => updateScrollVars(scrollState.progress),
    });

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("resize", updateStageHeight, { passive: true });
    updateStageHeight();
    ScrollTrigger.refresh();
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateStageHeight);
      resizeObserver.observe(document.body);
    }
    handlePointer(
      new PointerEvent("pointermove", {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      }),
    );
    updateScrollVars(
      window.scrollY / (document.body.scrollHeight - window.innerHeight || 1),
    );
    tick();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("resize", updateStageHeight);
      resizeObserver?.disconnect();
      window.cancelAnimationFrame(raf);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return null;
};

export default BackgroundDynamics;
