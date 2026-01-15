"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const IMAGE_COUNT = 30;

type ViewMode = "grid" | "linear";

type TouchPoint = {
  x: number;
  y: number;
};

export default function ParallaxLoomImageSystem() {
  const images = useMemo(
    () => Array.from({ length: IMAGE_COUNT }, (_, index) => index),
    [],
  );
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

    const horizontalSwipe =
      Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY);
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
          {images.map((index) => (
            <button
              key={`grid-${index}`}
              type="button"
              onClick={() => openViewer(index)}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <span className="sr-only">Open image {index + 1}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {images.map((index) => (
            <div
              key={`linear-${index}`}
              className="rounded-[2rem] border border-white/20 bg-white/[0.04] p-4"
            >
              <button
                type="button"
                onClick={() => openViewer(index)}
                className="relative min-h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <span className="sr-only">Open image {index + 1}</span>
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
            <div className="aspect-[4/5] max-h-[75vh] w-full" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
