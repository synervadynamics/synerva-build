"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/dimensions/common/ImageCard";
import { quietDivineArtworks } from "@/lib/dimensions/quietDivineArtworks";

export default function QuietDivineGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const pointerState = useRef({
    isPanning: false,
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
  });

  const minZoom = 1;
  const maxZoom = 2.5;
  const zoomStep = 0.2;

  const openModal = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return idx;
      return (idx + 1) % quietDivineArtworks.length;
    });
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return idx;
      return (idx - 1 + quietDivineArtworks.length) % quietDivineArtworks.length;
    });
  }, []);

  const zoomIn = useCallback(() => {
    setZoomLevel((value) => Math.min(maxZoom, value + zoomStep));
  }, [maxZoom, zoomStep]);

  const zoomOut = useCallback(() => {
    setZoomLevel((value) => Math.max(minZoom, value - zoomStep));
  }, [minZoom, zoomStep]);

  const updateContainerSize = useCallback(() => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setContainerSize({ width: rect.width, height: rect.height });
  }, []);

  const clampPan = useCallback(
    (nextPan: { x: number; y: number }) => {
      if (zoomLevel <= 1) {
        return { x: 0, y: 0 };
      }
      const maxX = Math.max(
        0,
        (containerSize.width * zoomLevel - containerSize.width) / 2,
      );
      const maxY = Math.max(
        0,
        (containerSize.height * zoomLevel - containerSize.height) / 2,
      );
      return {
        x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
        y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
      };
    },
    [containerSize.height, containerSize.width, zoomLevel],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (zoomLevel <= 1) return;
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      pointerState.current = {
        isPanning: true,
        startX: event.clientX,
        startY: event.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
      setIsDragging(true);
    },
    [pan.x, pan.y, zoomLevel],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerState.current.isPanning) return;
      const deltaX = event.clientX - pointerState.current.startX;
      const deltaY = event.clientY - pointerState.current.startY;
      const nextPan = {
        x: pointerState.current.startPanX + deltaX,
        y: pointerState.current.startPanY + deltaY,
      };
      setPan(clampPan(nextPan));
    },
    [clampPan],
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerState.current.isPanning) return;
      pointerState.current.isPanning = false;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      setIsDragging(false);
    },
    [],
  );

  useEffect(() => {
    if (activeIndex === null) {
      setZoomLevel(1);
      setIsVisible(false);
      setPan({ x: 0, y: 0 });
      return;
    }

    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomIn();
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        zoomOut();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, closeModal, showNext, showPrev, zoomIn, zoomOut]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }
    updateContainerSize();
    const handleResize = () => {
      updateContainerSize();
      setPan((prev) => clampPan(prev));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, clampPan, updateContainerSize]);

  useEffect(() => {
    if (zoomLevel <= 1) {
      setPan({ x: 0, y: 0 });
      return;
    }
    setPan((prev) => clampPan(prev));
  }, [clampPan, zoomLevel]);

  const zoomPercent = useMemo(() => Math.round(zoomLevel * 100), [zoomLevel]);

  const activeArtwork =
    activeIndex !== null ? quietDivineArtworks[activeIndex] : null;

  return (
    <section className="quiet-divine-gallery space-y-6">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <div className="qd-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quietDivineArtworks.map((artwork, idx) => (
          <ImageCard
            key={artwork.index}
            image={{
              src: artwork.image,
              alt: artwork.title,
              order: idx,
            }}
            onClick={() => openModal(idx)}
          />
        ))}
      </div>

      {activeArtwork ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quiet-divine-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close artwork details"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-4xl">
            <div className="rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`transition-opacity duration-300 delay-150 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    Artwork {activeArtwork.index}
                  </p>
                  <h3
                    id="quiet-divine-modal-title"
                    className="mt-3 text-2xl font-semibold"
                  >
                    {activeArtwork.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Previous artwork"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Next artwork"
                  >
                    →
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div
                  ref={imageContainerRef}
                  className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 select-none ${
                    zoomLevel > 1
                      ? isDragging
                        ? "cursor-grabbing"
                        : "cursor-grab"
                      : "cursor-default"
                  }`}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  <div
                    className="absolute inset-0 transition-transform transition-opacity duration-300"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel * (isVisible ? 1 : 0.96)})`,
                      transformOrigin: "center",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <Image
                      src={activeArtwork.image}
                      alt={activeArtwork.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-contain"
                      draggable={false}
                      priority
                    />
                  </div>
                </div>
                <div
                  className={`space-y-4 text-base leading-relaxed text-white/80 transition-opacity duration-300 delay-150 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p>{activeArtwork.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={zoomOut}
                    className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Zoom out"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={zoomIn}
                    className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                </div>
                <span>Zoom {zoomPercent}%</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
