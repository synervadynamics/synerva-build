"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { surfaceTensionArtworks } from "@/lib/dimensions/surfaceTensionArtworks";

type ViewMode = "grid" | "linear";

type TouchPoint = {
  x: number;
  y: number;
};

export default function SurfaceTensionImageSystem() {
  const images = useMemo(() => [...surfaceTensionArtworks], []);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStart = useRef<TouchPoint | null>(null);

  const openViewer = (index: number) => {
    setActiveIndex(index);
  };

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  };

  const showPrev = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    const horizontalSwipe = Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY);
    const verticalSwipe = deltaY > 60 && Math.abs(deltaY) > Math.abs(deltaX);
    const tap = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;

    if (tap) {
      closeViewer();
      return;
    }

    if (horizontalSwipe) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
      return;
    }

    if (verticalSwipe) {
      closeViewer();
    }
  };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeIndex]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setViewMode("grid")}
          aria-pressed={viewMode === "grid"}
          className={`rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] transition ${
            viewMode === "grid"
              ? "border-white bg-white text-black"
              : "border-white/25 text-white/70"
          }`}
        >
          Overview Grid
        </button>
        <button
          type="button"
          onClick={() => setViewMode("linear")}
          aria-pressed={viewMode === "linear"}
          className={`rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] transition ${
            viewMode === "linear"
              ? "border-white bg-white text-black"
              : "border-white/25 text-white/70"
          }`}
        >
          Linear Scroll
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 gap-3">
          {images.map((image, index) => (
            <button
              key={`grid-${image.id}`}
              type="button"
              onClick={() => openViewer(index)}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Image
                src={image.imageSrc}
                alt={`Surface Tension artwork ${image.id}`}
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
              <span className="sr-only">Open image {image.id}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <div
              key={`linear-${image.id}`}
              className="rounded-[2rem] border border-white/20 bg-white/[0.04] p-4"
            >
              <button
                type="button"
                onClick={() => openViewer(index)}
                className="relative min-h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <Image
                  src={image.imageSrc}
                  alt={`Surface Tension artwork ${image.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <span className="sr-only">Open image {image.id}</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={closeViewer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 px-3 py-2 text-lg text-white/70"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 px-3 py-2 text-lg text-white/70"
          >
            →
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            className="absolute right-4 top-4 rounded-full border border-white/30 px-3 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/70"
          >
            Close
          </button>
          <div
            className="relative w-full max-w-[85vw] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/5] max-h-[75vh] w-full">
              <Image
                src={images[activeIndex].imageSrc}
                alt={`Surface Tension artwork ${images[activeIndex].id}`}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
