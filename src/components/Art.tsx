"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { copy } from "@/data/copy";
import { ArtFrame } from "@/components/ArtFrame";

export const Art = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const gallery = copy.art.gallery;

  return (
    <section
      id="art"
      className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-10 sm:pb-26 sm:pt-16 lg:px-16 lg:pb-30 lg:pt-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-amber-400/10 opacity-70 blur-3xl"
        aria-hidden
      />
      <div ref={ref} className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{copy.art.eyebrow}</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">{copy.art.heading}</h2>
              <p className="max-w-4xl text-lg text-white/72">{copy.art.intro}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">{copy.art.note}</p>
            </div>
            <Link
              href={copy.art.cta.href}
              className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_60px_-40px_rgba(0,0,0,0.6)] transition hover:bg-white/90"
            >
              {copy.art.cta.label}
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((piece, index) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
                <Link href={copy.art.cta.href} className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 hover:text-white">
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
