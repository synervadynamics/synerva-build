"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/dimensions/common/ImageCard";
import { quietDivineArtworks } from "@/lib/dimensions/quietDivineArtworks";

export default function QuietDivineGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, closeModal]);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
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
                <div>
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
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                  <Image
                    src={activeArtwork.image}
                    alt={activeArtwork.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="space-y-4 text-base leading-relaxed text-white/80">
                  <p>{activeArtwork.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
