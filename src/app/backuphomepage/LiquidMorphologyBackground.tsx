"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

import imageOne from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5153.jpg";
import imageTwo from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5155.jpg";
import imageThree from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5156.jpg";
import imageFour from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5157.jpg";
import imageFive from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_4254.jpg";

const IMAGE_SOURCES = [
  imageOne.src,
  imageTwo.src,
  imageThree.src,
  imageFour.src,
  imageFive.src,
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const fade = (t: number) => t * t * (3 - 2 * t);

const hash = (x: number, y: number) => {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
};

const valueNoise = (x: number, y: number) => {
  const x0 = Math.floor(x);
  const x1 = x0 + 1;
  const y0 = Math.floor(y);
  const y1 = y0 + 1;

  const sx = fade(x - x0);
  const sy = fade(y - y0);

  const n00 = hash(x0, y0);
  const n10 = hash(x1, y0);
  const n01 = hash(x0, y1);
  const n11 = hash(x1, y1);

  const nx0 = lerp(n00, n10, sx);
  const nx1 = lerp(n01, n11, sx);

  return lerp(nx0, nx1, sy);
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

export function LiquidMorphologyBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;
    let cancelled = false;
    let startTime = 0;
    let images: HTMLImageElement[] = [];

    const maskCanvas = document.createElement("canvas");
    const maskContext = maskCanvas.getContext("2d");

    const bufferCanvas = document.createElement("canvas");
    const bufferContext = bufferCanvas.getContext("2d");

    if (!maskContext || !bufferContext) return;

    ctx.imageSmoothingEnabled = true;
    bufferContext.imageSmoothingEnabled = true;

    const size = {
      width: 0,
      height: 0,
      maskWidth: 0,
      maskHeight: 0,
    };

    let maskData = maskContext.createImageData(1, 1);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width * pixelRatio));
      const height = Math.max(1, Math.floor(rect.height * pixelRatio));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      bufferCanvas.width = width;
      bufferCanvas.height = height;

      size.width = width;
      size.height = height;
      size.maskWidth = Math.max(160, Math.floor(rect.width / 5));
      size.maskHeight = Math.max(90, Math.floor(rect.height / 5));

      maskCanvas.width = size.maskWidth;
      maskCanvas.height = size.maskHeight;
      maskData = maskContext.createImageData(size.maskWidth, size.maskHeight);
    };

    const handleResize = () => resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);
    resize();

    const loadImages = async () => {
      const loaded = await Promise.all(
        IMAGE_SOURCES.map(
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

    const drawStatic = () => {
      if (!images[0]) return;
      ctx.clearRect(0, 0, size.width, size.height);
      drawCover(ctx, images[0], size.width, size.height);
    };

    const render = (timestamp: number) => {
      if (cancelled) return;

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const slideDuration = 16000;
      const transitionDuration = 6000;
      const holdDuration = slideDuration - transitionDuration;
      const slideCount = images.length;
      const totalDuration = slideDuration * slideCount;

      const progressTime = elapsed % totalDuration;
      const currentIndex = Math.floor(progressTime / slideDuration);
      const slideTime = progressTime - currentIndex * slideDuration;
      const nextIndex = (currentIndex + 1) % slideCount;

      const transitionProgress =
        slideTime < holdDuration
          ? 0
          : clamp((slideTime - holdDuration) / transitionDuration, 0, 1);

      ctx.clearRect(0, 0, size.width, size.height);
      drawCover(ctx, images[currentIndex], size.width, size.height);

      if (transitionProgress > 0) {
        bufferContext.clearRect(0, 0, size.width, size.height);
        drawCover(bufferContext, images[nextIndex], size.width, size.height);

        const timeOffset = elapsed * 0.00025;
        const noiseScale = 0.055;
        const edgeWidth = 0.18;
        const data = maskData.data;

        for (let y = 0; y < size.maskHeight; y += 1) {
          for (let x = 0; x < size.maskWidth; x += 1) {
            const index = (y * size.maskWidth + x) * 4;
            const nX = x * noiseScale + timeOffset * 1.2;
            const nY = y * noiseScale + timeOffset * 0.9;
            const n = valueNoise(nX, nY);
            const alpha = smoothstep(n - edgeWidth, n + edgeWidth, transitionProgress);
            data[index] = 255;
            data[index + 1] = 255;
            data[index + 2] = 255;
            data[index + 3] = Math.floor(alpha * 255);
          }
        }

        maskContext.putImageData(maskData, 0, 0);
        bufferContext.globalCompositeOperation = "destination-in";
        bufferContext.drawImage(maskCanvas, 0, 0, size.width, size.height);
        bufferContext.globalCompositeOperation = "source-over";

        ctx.drawImage(bufferCanvas, 0, 0);
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    loadImages()
      .then((loaded) => {
        if (cancelled) return;
        images = loaded;
        if (shouldReduceMotion) {
          drawStatic();
          return;
        }
        animationFrame = window.requestAnimationFrame(render);
      })
      .catch(() => {
        if (!cancelled) drawStatic();
      });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_SOURCES[0]})` }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
    </div>
  );
}
