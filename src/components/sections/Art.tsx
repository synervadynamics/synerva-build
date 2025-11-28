"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArtFrame } from "@/components/ArtFrame";
import { art as artCopy } from "@/copy";
import { artGallery } from "@/data/art-gallery";

const previewGallery = artGallery.slice(0, 3);

export const Art = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 });

  return (
    <section
      id="art"
      ref={ref}
      className="relative isolate overflow-hidden px-6 pb-24 pt-14 sm:px-10 sm:pb-26 sm:pt-16 lg:px-16 lg:pb-30 lg:pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/12 via-fuchsia-500/6 to-amber-400/12 opacity-80 blur-3xl" aria-hidden />
      <div className="absolute inset-x-0 top-12 mx-auto h-2/3 max-w-6xl rounded-[3rem] border border-white/10 bg-white/5" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{artCopy.title}</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">Art That Teaches the Systems to Feel</h2>
              <p className="max-w-4xl text-lg text-white/72">{artCopy.tagline}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Placeholder studies — final renders incoming.</p>
            </div>
            <Link
              href="/art"
              className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_60px_-40px_rgba(0,0,0,0.6)] transition hover:bg-white/90"
            >
              {artCopy.cta}
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewGallery.map((piece, index) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  : undefined
              }
              className="flex flex-col gap-3"
            >
              <ArtFrame piece={piece} showDescription={false} />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span className="text-white">{piece.title}</span>
                  <span className="text-white/50">{piece.medium}</span>
                </div>
                <p className="text-sm text-white/65">{piece.description}</p>
                <Link
                  href="/art#gallery"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
                >
                  View in showcase →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
