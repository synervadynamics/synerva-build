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

type RGB = {
  r: number;
  g: number;
  b: number;
};

const GRADIENT_STATES: GradientState[] = [
  {
    base: {
      start: [0.05, 0.05],
      end: [0.95, 1],
      stops: [
        { offset: 0, color: "#0a1117" },
        { offset: 0.38, color: "#0e1a24" },
        { offset: 0.68, color: "#112634" },
        { offset: 1, color: "#0a1218" },
      ],
    },
    glows: [
      {
        center: [0.25, 0.15],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#17333a" },
          { offset: 0.55, color: "#0f1f28" },
          { offset: 1, color: "#0a1218" },
        ],
        alpha: 0.32,
      },
      {
        center: [0.75, 0.85],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#0f2428" },
          { offset: 0.6, color: "#0c1a21" },
          { offset: 1, color: "#0a1218" },
        ],
        alpha: 0.2,
      },
      {
        center: [0.62, 0.35],
        radius: 0.7,
        stops: [
          { offset: 0, color: "#12303a" },
          { offset: 0.45, color: "#0e2026" },
          { offset: 1, color: "#0a1218" },
        ],
        alpha: 0.2,
      },
    ],
  },
  {
    base: {
      start: [0.08, 0],
      end: [0.9, 1],
      stops: [
        { offset: 0, color: "#0b2123" },
        { offset: 0.46, color: "#0f2f32" },
        { offset: 0.76, color: "#18413d" },
        { offset: 1, color: "#0b1b1f" },
      ],
    },
    glows: [
      {
        center: [0.2, 0.2],
        radius: 0.85,
        stops: [
          { offset: 0, color: "#1f4a46" },
          { offset: 0.6, color: "#123536" },
          { offset: 1, color: "#0b2123" },
        ],
        alpha: 0.3,
      },
      {
        center: [0.8, 0.8],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#113338" },
          { offset: 0.6, color: "#0e262a" },
          { offset: 1, color: "#0b1b1f" },
        ],
        alpha: 0.18,
      },
      {
        center: [0.7, 0.3],
        radius: 0.75,
        stops: [
          { offset: 0, color: "#0f2f46" },
          { offset: 0.5, color: "#112b36" },
          { offset: 1, color: "#0b1b1f" },
        ],
        alpha: 0.16,
      },
    ],
  },
  {
    base: {
      start: [0.1, 0],
      end: [0.9, 1],
      stops: [
        { offset: 0, color: "#081728" },
        { offset: 0.45, color: "#0c2238" },
        { offset: 0.78, color: "#103150" },
        { offset: 1, color: "#071521" },
      ],
    },
    glows: [
      {
        center: [0.28, 0.18],
        radius: 0.9,
        stops: [
          { offset: 0, color: "#15415f" },
          { offset: 0.55, color: "#0d2b43" },
          { offset: 1, color: "#081728" },
        ],
        alpha: 0.28,
      },
      {
        center: [0.78, 0.85],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#0d2837" },
          { offset: 0.6, color: "#091c2a" },
          { offset: 1, color: "#071521" },
        ],
        alpha: 0.16,
      },
      {
        center: [0.65, 0.32],
        radius: 0.7,
        stops: [
          { offset: 0, color: "#1b4756" },
          { offset: 0.5, color: "#103246" },
          { offset: 1, color: "#071521" },
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
        { offset: 0, color: "#121414" },
        { offset: 0.45, color: "#1a2725" },
        { offset: 0.76, color: "#25342e" },
        { offset: 1, color: "#101314" },
      ],
    },
    glows: [
      {
        center: [0.25, 0.2],
        radius: 0.85,
        stops: [
          { offset: 0, color: "#273c35" },
          { offset: 0.6, color: "#1c2b28" },
          { offset: 1, color: "#121414" },
        ],
        alpha: 0.28,
      },
      {
        center: [0.78, 0.82],
        radius: 0.95,
        stops: [
          { offset: 0, color: "#3a2f1f" },
          { offset: 0.5, color: "#262d26" },
          { offset: 1, color: "#101314" },
        ],
        alpha: 0.1,
      },
      {
        center: [0.6, 0.35],
        radius: 0.72,
        stops: [
          { offset: 0, color: "#1f3231" },
          { offset: 0.55, color: "#1a2523" },
          { offset: 1, color: "#101314" },
        ],
        alpha: 0.18,
      },
    ],
  },
];

const parseHexColor = (value: string): RGB => {
  const normalized = value.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;
  const int = Number.parseInt(full, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
};

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

const lerpColor = (from: string, to: string, t: number) => {
  const start = parseHexColor(from);
  const end = parseHexColor(to);
  const r = Math.round(lerp(start.r, end.r, t));
  const g = Math.round(lerp(start.g, end.g, t));
  const b = Math.round(lerp(start.b, end.b, t));
  return `rgb(${r}, ${g}, ${b})`;
};

const interpolateStops = (from: ColorStop[], to: ColorStop[], t: number) =>
  from.map((stop, index) => ({
    offset: stop.offset,
    color: lerpColor(stop.color, to[index].color, t),
  }));

const interpolateLinearLayer = (
  from: LinearLayer,
  to: LinearLayer,
  t: number
): LinearLayer => ({
  start: from.start,
  end: from.end,
  stops: interpolateStops(from.stops, to.stops, t),
});

const interpolateRadialLayer = (
  from: RadialLayer,
  to: RadialLayer,
  t: number
): RadialLayer => ({
  center: from.center,
  radius: from.radius,
  stops: interpolateStops(from.stops, to.stops, t),
  alpha: lerp(from.alpha ?? 1, to.alpha ?? 1, t),
});

const interpolateGradientState = (
  from: GradientState,
  to: GradientState,
  t: number
): GradientState => ({
  base: interpolateLinearLayer(from.base, to.base, t),
  glows: from.glows.map((glow, index) =>
    interpolateRadialLayer(glow, to.glows[index], t)
  ),
});

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
      const blendT = blendCurve(localProgress);
      const composite = interpolateGradientState(
        GRADIENT_STATES[index],
        GRADIENT_STATES[index + 1],
        blendT
      );

      drawGradient(ctx, composite, size.width, size.height);

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
