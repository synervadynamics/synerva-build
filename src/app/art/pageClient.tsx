"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";
import { ArtFrame, type ArtPiece } from "@/components/ArtFrame";

const artPageCopy = copy.pages.art;
const gallery = copy.art.gallery;

export default function ArtPageClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<ArtPiece | null>(null);

  return (
    <div className="bg-[var(--bg)] text-white">
      <section ref={ref} className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/hero/hero_main_render.webp" opacity={shouldReduceMotion ? 0.2 : 0.38} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl space-y-6"
        >
          <Link href="/" className="inline-flex w-fit text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
            ← Home
          </Link>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{artPageCopy.eyebrow}</p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{artPageCopy.heading}</h1>
          <p className="text-lg text-white/72">{artPageCopy.description}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">{artPageCopy.note}</p>
          <Link
            href={artPageCopy.cta.href}
            className="inline-flex w-fit rounded-full border border-white/60 px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10"
          >
            {artPageCopy.cta.label}
          </Link>
        </motion.div>
      </section>

      <section id="art-gallery" className="relative overflow-hidden px-6 py-18 sm:px-10 lg:px-16">
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-black opacity-70 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Placeholder gallery</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Click a frame to enlarge</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((piece, index) => (
              <motion.button
                key={piece.title}
                type="button"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, transition: { delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    : undefined
                }
                onClick={() => setSelected(piece)}
                className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black/60"
                aria-label={`Expand ${piece.title}`}
              >
                <ArtFrame piece={piece} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute inset-0 cursor-pointer"
            aria-label="Close art preview"
          />
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 w-full max-w-5xl space-y-4 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-white/4 via-slate-900/80 to-black p-6 shadow-[0_60px_180px_-80px_rgba(0,0,0,0.9)]"
            onClick={event => event.stopPropagation()}
          >
            <ArtFrame piece={selected} />
            <div className="space-y-3 text-white">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                <span>{selected.medium}</span>
                <span>{selected.label}</span>
              </div>
              <h2 className="text-2xl">{selected.title}</h2>
              <p className="text-sm text-white/70">{selected.description}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white/10"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-white/90"
                  onClick={() => setSelected(null)}
                >
                  Commission this energy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}

      <CTA />
      <Footer />
    </div>
  );
}
