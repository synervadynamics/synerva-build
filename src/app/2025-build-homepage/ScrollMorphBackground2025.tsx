"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const DEFAULT_IMAGE_SOURCES = [
  "/jan-4-new-background-transition/v8/1.png",
  "/jan-4-new-background-transition/v8/2.png",
  "/jan-4-new-background-transition/v8/3.png",
  "/jan-4-new-background-transition/v8/4.png",
];

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

const drawCover = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number
) => {
  const imageRatio = image.width / image.height;
  const canvasRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;

  if (imageRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = height * imageRatio;
  } else {
    drawWidth = width;
    drawHeight = width / imageRatio;
  }

  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};

type ScrollMorphBackgroundProps = {
  imageSources?: string[];
};

export function ScrollMorphBackground({
  imageSources = DEFAULT_IMAGE_SOURCES,
}: ScrollMorphBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let frameId = 0;
    let cancelled = false;
    let images: HTMLImageElement[] = [];
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
      if (cancelled || images.length === 0) return;

      ctx.clearRect(0, 0, size.width, size.height);

      if (shouldReduceMotion || images.length === 1) {
        drawCover(ctx, images[0], size.width, size.height);
        return;
      }

      const segmentCount = images.length - 1;
      const position = currentProgress * segmentCount;
      const index = clamp(Math.floor(position), 0, segmentCount - 1);
      const localProgress = position - index;
      const lowBlend = blendCurve(localProgress);
      const highBlend = blendCurve(localProgress - 0.08);
      const blurAmount = Math.max(4, Math.min(size.width, size.height) * 0.01);

      drawCover(ctx, images[index], size.width, size.height);
      ctx.save();
      ctx.globalAlpha = lowBlend * 0.85;
      ctx.filter = `blur(${blurAmount}px)`;
      drawCover(ctx, images[index + 1], size.width, size.height);
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = highBlend;
      ctx.filter = "none";
      drawCover(ctx, images[index + 1], size.width, size.height);
      ctx.restore();

      if (grainCtx && grainFrame % 2 === 0) {
        const imageData = grainCtx.createImageData(grainSize, grainSize);
        for (let i = 0; i < imageData.data.length; i += 4) {
          const value = 128 + Math.floor((Math.random() - 0.5) * 30);
          imageData.data[i] = value;
          imageData.data[i + 1] = value;
          imageData.data[i + 2] = value;
          imageData.data[i + 3] = 30;
        }
        grainCtx.putImageData(imageData, 0, 0);
        ctx.save();
        ctx.globalAlpha = 0.04;
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

    const loadImages = async () => {
      const loaded = await Promise.all(
        imageSources.map(
          (source) =>
            new Promise<HTMLImageElement>((resolve, reject) => {
              const image = new Image();
              image.src = source;
              image.onload = () => resolve(image);
              image.onerror = () => reject(new Error(`Failed to load ${source}`));
            })
        )
      );

      return loaded;
    };

    resize();
    updateProgress();

    loadImages()
      .then((loaded) => {
        if (cancelled) return;
        images = loaded;
        currentProgress = targetProgress;
        if (!shouldReduceMotion) {
          frameId = requestAnimationFrame(tick);
        } else {
          render();
        }
      })
      .catch(() => {
        if (!cancelled && images[0]) render();
      });

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSources, shouldReduceMotion]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSources[0]})` }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
    </div>
  );
}
