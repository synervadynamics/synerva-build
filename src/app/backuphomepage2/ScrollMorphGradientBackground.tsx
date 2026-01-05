"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const blendCurve = (value: number) => {
  const extended = clamp((value + 0.2) / 1.4, 0, 1);
  const softened = smoothstep(0.08, 0.92, extended);
  return softened * softened * (2 - softened);
};

type ColorStop = {
  offset: number;
  color: string;
};

type LinearLayer = {
  start: [number, number];
  end: [number, number];
  stops: ColorStop[];
};

type RadialLayer = {
  center: [number, number];
  radius: number;
  stops: ColorStop[];
  alpha?: number;
};

type GradientState = {
  base: LinearLayer;
  glows: RadialLayer[];
};

const GRADIENT_STATES: GradientState[] = [
  {
    base: {
      start: [0.05, 0.05],
      end: [0.95, 1],
      stops: [
        { offset: 0, color: "#0b1116" },
        { offset: 0.45, color: "#0f1a22" },
        { offset: 0.75, color: "#13252d" },
        { offset: 1, color: "#0b1116" },
      ],
    },
    glows: [
      {
        center: [0.25, 0.15],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#13252d" },
          { offset: 0.55, color: "#0f1a22" },
          { offset: 1, color: "#0b1116" },
        ],
        alpha: 0.35,
      },
      {
        center: [0.75, 0.85],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#0f1e24" },
          { offset: 1, color: "#0b1116" },
        ],
        alpha: 0.22,
      },
    ],
  },
  {
    base: {
      start: [0.08, 0],
      end: [0.9, 1],
      stops: [
        { offset: 0, color: "#0d2a2a" },
        { offset: 0.5, color: "#123536" },
        { offset: 0.8, color: "#1a3f3b" },
        { offset: 1, color: "#0b2123" },
      ],
    },
    glows: [
      {
        center: [0.2, 0.2],
        radius: 0.85,
        stops: [
          { offset: 0, color: "#1a3f3b" },
          { offset: 0.6, color: "#123536" },
          { offset: 1, color: "#0d2a2a" },
        ],
        alpha: 0.32,
      },
      {
        center: [0.8, 0.8],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#0f2f2f" },
          { offset: 1, color: "#0b2123" },
        ],
        alpha: 0.2,
      },
    ],
  },
  {
    base: {
      start: [0.1, 0],
      end: [0.9, 1],
      stops: [
        { offset: 0, color: "#0a1c2f" },
        { offset: 0.48, color: "#0e2740" },
        { offset: 0.78, color: "#14345a" },
        { offset: 1, color: "#081622" },
      ],
    },
    glows: [
      {
        center: [0.28, 0.18],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#14345a" },
          { offset: 0.55, color: "#0e2740" },
          { offset: 1, color: "#0a1c2f" },
        ],
        alpha: 0.3,
      },
      {
        center: [0.78, 0.85],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#0d2334" },
          { offset: 1, color: "#081622" },
        ],
        alpha: 0.18,
      },
    ],
  },
  {
    base: {
      start: [0.1, 0],
      end: [0.95, 1],
      stops: [
        { offset: 0, color: "#151515" },
        { offset: 0.45, color: "#1d2a28" },
        { offset: 0.75, color: "#2a3a33" },
        { offset: 1, color: "#111516" },
      ],
    },
    glows: [
      {
        center: [0.25, 0.2],
        radius: 0.85,
        stops: [
          { offset: 0, color: "#2a3a33" },
          { offset: 0.6, color: "#1d2a28" },
          { offset: 1, color: "#151515" },
        ],
        alpha: 0.3,
      },
      {
        center: [0.78, 0.82],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#3a2f1f" },
          { offset: 0.5, color: "#202725" },
          { offset: 1, color: "#111516" },
        ],
        alpha: 0.12,
      },
    ],
  },
];

const drawLinearLayer = (
  ctx: CanvasRenderingContext2D,
  layer: LinearLayer,
  width: number,
  height: number
) => {
  const gradient = ctx.createLinearGradient(
    width * layer.start[0],
    height * layer.start[1],
    width * layer.end[0],
    height * layer.end[1]
  );
  layer.stops.forEach((stop) => gradient.addColorStop(stop.offset, stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
};

const drawRadialLayer = (
  ctx: CanvasRenderingContext2D,
  layer: RadialLayer,
  width: number,
  height: number
) => {
  const radius = Math.max(width, height) * layer.radius;
  const gradient = ctx.createRadialGradient(
    width * layer.center[0],
    height * layer.center[1],
    0,
    width * layer.center[0],
    height * layer.center[1],
    radius
  );
  layer.stops.forEach((stop) => gradient.addColorStop(stop.offset, stop.color));
  ctx.save();
  ctx.globalAlpha = layer.alpha ?? 1;
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
};

const drawGradient = (
  ctx: CanvasRenderingContext2D,
  state: GradientState,
  width: number,
  height: number
) => {
  drawLinearLayer(ctx, state.base, width, height);
  state.glows.forEach((glow) => drawRadialLayer(ctx, glow, width, height));
};

export function ScrollMorphGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let cancelled = false;
    let targetProgress = 0;
    let currentProgress = 0;
    let grainFrame = 0;
    const grainSize = 96;
    const grainCanvas = document.createElement("canvas");
    grainCanvas.width = grainSize;
    grainCanvas.height = grainSize;
    const grainCtx = grainCanvas.getContext("2d");

    const size = {
      width: 1,
      height: 1,
      pixelRatio: 1,
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(window.innerWidth * pixelRatio));
      const height = Math.max(1, Math.floor(window.innerHeight * pixelRatio));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      size.width = width;
      size.height = height;
      size.pixelRatio = pixelRatio;
    };

    const handleResize = () => {
      resize();
      render();
    };

    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const maxScroll = Math.max(1, scrollHeight - window.innerHeight);
      targetProgress = clamp(scrollTop / maxScroll, 0, 1);
    };

    const render = () => {
      if (cancelled) return;

      ctx.clearRect(0, 0, size.width, size.height);

      if (shouldReduceMotion || GRADIENT_STATES.length === 1) {
        drawGradient(ctx, GRADIENT_STATES[0], size.width, size.height);
        return;
      }

      const segmentCount = GRADIENT_STATES.length - 1;
      const position = currentProgress * segmentCount;
      const index = clamp(Math.floor(position), 0, segmentCount - 1);
      const localProgress = position - index;
      const lowBlend = blendCurve(localProgress);
      const highBlend = blendCurve(localProgress - 0.08);
      const blurAmount = Math.max(4, Math.min(size.width, size.height) * 0.01);

      drawGradient(ctx, GRADIENT_STATES[index], size.width, size.height);
      ctx.save();
      ctx.globalAlpha = lowBlend * 0.85;
      ctx.filter = `blur(${blurAmount}px)`;
      drawGradient(ctx, GRADIENT_STATES[index + 1], size.width, size.height);
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = highBlend;
      ctx.filter = "none";
      drawGradient(ctx, GRADIENT_STATES[index + 1], size.width, size.height);
      ctx.restore();

      if (grainCtx && grainFrame % 2 === 0) {
        const imageData = grainCtx.createImageData(grainSize, grainSize);
        for (let i = 0; i < imageData.data.length; i += 4) {
          const value = 128 + Math.floor((Math.random() - 0.5) * 24);
          imageData.data[i] = value;
          imageData.data[i + 1] = value;
          imageData.data[i + 2] = value;
          imageData.data[i + 3] = 26;
        }
        grainCtx.putImageData(imageData, 0, 0);
        ctx.save();
        ctx.globalAlpha = 0.03;
        ctx.globalCompositeOperation = "soft-light";
        ctx.drawImage(grainCanvas, 0, 0, size.width, size.height);
        ctx.restore();
      }
      grainFrame += 1;
    };

    const tick = () => {
      if (cancelled) return;
      currentProgress += (targetProgress - currentProgress) * 0.06;
      render();
      frameId = requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      updateProgress();
    };

    resize();
    updateProgress();
    currentProgress = targetProgress;

    if (!shouldReduceMotion) {
      frameId = requestAnimationFrame(tick);
    } else {
      render();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: GRADIENT_STATES[0].base.stops[0].color }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
