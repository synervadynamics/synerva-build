"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/dimensions/common/ImageCard";
import { parallaxLoomImages } from "@/lib/dimensions/parallaxLoomImages";

export default function ParallaxLoomGallery() {
  const images = useMemo(() => [...parallaxLoomImages], []);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setCurrentIndex(null);
    setIsZoomed(false);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((idx) => {
      if (idx === null) return idx;
      return (idx + 1) % images.length;
    });
    setIsZoomed(false);
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((idx) => {
      if (idx === null) return idx;
      return (idx - 1 + images.length) % images.length;
    });
    setIsZoomed(false);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const activeImage = currentIndex !== null ? images[currentIndex] : null;

  return (
    <section className="parallax-loom-gallery space-y-6">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <div className="qd-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, idx) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {isOpen && activeImage ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Parallax Loom image viewer"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox backdrop"
            onClick={closeLightbox}
          />
          <div className="relative z-10 w-full max-w-5xl space-y-4">
            <div
              className={`relative mx-auto w-full max-h-[80vh] rounded-2xl border border-white/15 bg-black/50 shadow-[0_18px_48px_rgba(0,0,0,0.45)] ${
                isZoomed
                  ? "overflow-auto cursor-grab active:cursor-grabbing"
                  : "overflow-hidden"
              }`}
            >
              <div className="relative w-full aspect-[3/4] max-h-[80vh]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className={`object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
                  priority
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
                aria-hidden
              />

              <div className="absolute inset-y-0 left-0 flex items-center px-3">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                  aria-label="Previous image"
                >
                  Prev
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-3">
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                aria-label="Close lightbox"
              >
                Close
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-white/70 truncate">
                {activeImage.caption ?? activeImage.alt}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed((z) => !z)}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                >
                  {isZoomed ? "Zoom out" : "Zoom in"}
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
