"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import QuietDivineCard from "./QuietDivineCard";
import type { QuietDivineArtwork } from "../captions";

type QuietDivineGridProps = {
  artworks: QuietDivineArtwork[];
  onSelect: (artwork: QuietDivineArtwork) => void;
};

export default function QuietDivineGrid({ artworks, onSelect }: QuietDivineGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.16 });

  return (
    <section id="gallery" ref={ref} className="relative mt-16 space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">The Quiet Divine — Full series</p>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Click a frame to enlarge</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.slug}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
            animate={
              inView
                ? { opacity: 1, y: 0, transition: { delay: index * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                : undefined
            }
          >
            <QuietDivineCard artwork={artwork} onClick={() => onSelect(artwork)} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
