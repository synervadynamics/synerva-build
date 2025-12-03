"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { QUIET_DIVINE_ASSET_PATH, type QuietDivineArtwork } from "../captions";

type QuietDivineModalProps = {
  artwork: QuietDivineArtwork | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function QuietDivineModal({ artwork, isOpen, onClose }: QuietDivineModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && artwork ? (
        <motion.div
          key={artwork.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-5xl space-y-5 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-white/4 via-slate-900/80 to-black p-6 shadow-[0_60px_180px_-80px_rgba(0,0,0,0.9)]"
            onClick={event => event.stopPropagation()}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image
                src={`${QUIET_DIVINE_ASSET_PATH}${artwork.filename}`}
                alt={artwork.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/5" aria-hidden />
            </div>
            <div className="space-y-3 text-white">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                <span>Piece {artwork.order.toString().padStart(2, "0")}</span>
                <span className="text-white/50">Series 001</span>
              </div>
              <h2 className="text-2xl">{artwork.title}</h2>
              <p className="text-sm text-white/70">{artwork.longCaption}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white/10"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-white/90"
                  onClick={onClose}
                >
                  Commission this energy
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
