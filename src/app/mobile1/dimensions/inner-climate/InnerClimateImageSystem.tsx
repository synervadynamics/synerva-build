"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { innerClimateArtworks } from "@/lib/dimensions/innerClimateArtworks";

type ViewMode = "grid" | "linear";

type TouchPoint = {
  x: number;
  y: number;
};

type PanState = {
  x: number;
  y: number;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export default function InnerClimateImageSystem() {
  const images = useMemo(() => [...innerClimateArtworks], []);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState<PanState>({ x: 0, y: 0 });
  const touchStart = useRef<TouchPoint | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);
  const touchState = useRef<{
    startX: number;
    startY: number;
    startPanX: number;
    startPanY: number;
    startDistance: number;
    startZoom: number;
  } | null>(null);

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

  useEffect(() => {
    if (activeIndex === null) {
      document.body.classList.remove("artwork-open");
      document.body.classList.remove("overflow-hidden");
      window.dispatchEvent(new CustomEvent("artwork-close"));
      return;
    }

    document.body.classList.add("artwork-open");
    document.body.classList.add("overflow-hidden");
    window.dispatchEvent(new CustomEvent("artwork-open"));

    return () => {
      document.body.classList.remove("artwork-open");
      document.body.classList.remove("overflow-hidden");
      window.dispatchEvent(new CustomEvent("artwork-close"));
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      setIsDescriptionOpen(false);
      setZoom(MIN_ZOOM);
      setPan({ x: 0, y: 0 });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        showNext();
      }
      if (event.key === "ArrowLeft") {
        showPrev();
      }
      if (event.key === "Escape") {
        closeViewer();
      }
    };
    const handleExitRequest = () => closeViewer();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("artwork-exit", handleExitRequest as EventListener);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("artwork-exit", handleExitRequest as EventListener);
    };
  }, [activeIndex]);

  const clampPan = (nextPan: PanState, nextZoom = zoom) => {
    if (!imageFrameRef.current) return nextPan;
    const rect = imageFrameRef.current.getBoundingClientRect();
    const maxX = Math.max(0, (rect.width * (nextZoom - 1)) / 2);
    const maxY = Math.max(0, (rect.height * (nextZoom - 1)) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
      y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
    };
  };

  const handleImageTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      const [touchA, touchB] = Array.from(event.touches);
      const distance = Math.hypot(
        touchA.clientX - touchB.clientX,
        touchA.clientY - touchB.clientY,
      );
      touchState.current = {
        startX: 0,
        startY: 0,
        startPanX: pan.x,
        startPanY: pan.y,
        startDistance: distance,
        startZoom: zoom,
      };
      return;
    }

    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchState.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
      startDistance: 0,
      startZoom: zoom,
    };
  };

  const handleImageTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchState.current) return;
    if (event.touches.length === 2 && touchState.current.startDistance > 0) {
      event.preventDefault();
      const [touchA, touchB] = Array.from(event.touches);
      const distance = Math.hypot(
        touchA.clientX - touchB.clientX,
        touchA.clientY - touchB.clientY,
      );
      const nextZoom = Math.min(
        MAX_ZOOM,
        Math.max(
          MIN_ZOOM,
          (distance / touchState.current.startDistance) * touchState.current.startZoom,
        ),
      );
      setZoom(nextZoom);
      if (nextZoom <= MIN_ZOOM) {
        setPan({ x: 0, y: 0 });
      }
      return;
    }

    if (event.touches.length === 1 && zoom > MIN_ZOOM) {
      event.preventDefault();
      const touch = event.touches[0];
      const deltaX = touch.clientX - touchState.current.startX;
      const deltaY = touch.clientY - touchState.current.startY;
      const nextPan = clampPan({
        x: touchState.current.startPanX + deltaX,
        y: touchState.current.startPanY + deltaY,
      });
      setPan(nextPan);
    }
  };

  const handleImageTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) {
      touchState.current = null;
      return;
    }

    if (zoom > MIN_ZOOM) {
      touchState.current = null;
      touchStart.current = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    touchState.current = null;

    const horizontalSwipe = Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY);

    if (horizontalSwipe) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
    }
  };

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
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95" role="dialog" aria-modal="true">
          <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-black/95 px-4 py-3">
            <button
              type="button"
              onClick={closeViewer}
              className="rounded-full border border-white/30 px-3 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/70"
            >
              Exit
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className="rounded-full border border-white/30 px-3 py-2 text-lg text-white/70"
              >
                ←
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="rounded-full border border-white/30 px-3 py-2 text-lg text-white/70"
              >
                →
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pb-8 pt-16">
            <div className="mx-auto w-full max-w-[92vw]">
              <div
                ref={imageFrameRef}
                className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
                onTouchStart={handleImageTouchStart}
                onTouchMove={handleImageTouchMove}
                onTouchEnd={handleImageTouchEnd}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={images[activeIndex].imageSrc}
                    alt={`Surface Tension artwork ${images[activeIndex].id}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-contain"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                      transformOrigin: "center",
                      transition: zoom === MIN_ZOOM ? "transform 150ms ease" : "none",
                      touchAction: "none",
                    }}
                  />
                </div>
              </div>
              <div className="mt-5 px-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/60">
                    {images[activeIndex].artworkNumber}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsDescriptionOpen((value) => !value)}
                    className="rounded-full border border-white/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/70"
                  >
                    {isDescriptionOpen ? "Hide description" : "Read description"}
                  </button>
                </div>
                {images[activeIndex].title ? (
                  <h3 className="mt-2 text-[1.05rem] font-semibold leading-snug text-white">
                    {images[activeIndex].title}
                  </h3>
                ) : null}
                {isDescriptionOpen && images[activeIndex].description ? (
                  <p className="mt-3 whitespace-pre-line text-[0.98rem] leading-6 text-white/85">
                    {images[activeIndex].description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
