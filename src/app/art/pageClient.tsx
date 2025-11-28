"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { AmbientVideo } from "@/components/AmbientVideo";
import { ArtFrame, type ArtPiece } from "@/components/ArtFrame";
import { art as artCopy } from "@/copy";
import { pages_art } from "@/copy/pages";
import { artGallery } from "@/data/art-gallery";

const artPageCopy = pages_art;

export default function ArtPageClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<ArtPiece | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className="bg-[var(--bg)] text-white">
      <section ref={ref} className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/hero/hero_main_render.webp" opacity={shouldReduceMotion ? 0.22 : 0.42} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-black/80 to-cyan-500/12" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-white/10 bg-black/50 p-8 backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
        >
          <div className="space-y-6">
            <Link href="/" className="inline-flex w-fit text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
              ← Home
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{artCopy.title}</p>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{artPageCopy.hero.title}</h1>
            <p className="text-lg text-white/72">{artPageCopy.hero.subtitle}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{artPageCopy.emptyMessage}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#gallery"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_60px_-40px_rgba(0,0,0,0.6)] transition hover:bg-white/90"
              >
                {artCopy.cta}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
              >
                Request a dedicated drop
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-4 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/4 via-slate-900/70 to-black p-6 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)]"
          >
            <ArtFrame piece={artGallery[0]} />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
              <span>Placeholder study</span>
              <span>Modal preview ready</span>
            </div>
            <p className="text-sm text-white/70">
              Click any tile below to open the modal. The gallery uses placeholder gradients until final renders drop.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section id="gallery" className="relative overflow-hidden px-6 py-18 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-black opacity-75 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Placeholder gallery grid</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Click a frame to enlarge</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {artGallery.map((piece, index) => (
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

      <AnimatePresence>
        {selected ? (
          <motion.div
            key={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl space-y-4 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-white/4 via-slate-900/80 to-black p-6 shadow-[0_60px_180px_-80px_rgba(0,0,0,0.9)]"
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
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CTA />
      <Footer />
    </div>
  );
}
