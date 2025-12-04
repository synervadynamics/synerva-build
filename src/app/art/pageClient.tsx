 "use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import { ArtFrame, type ArtPiece } from "@/components/ArtFrame";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const artCopy = copy.pages.art;
const gallery = copy.art.gallery;

export default function ArtShowcasePageClient() {
  const [active, setActive] = useState<ArtPiece | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-black/75 to-cyan-500/15" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/55 p-10 backdrop-blur-3xl shadow-[0_60px_180px_-90px_rgba(0,0,0,0.75)]">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/60">
            <Link href="/" className="text-white/70 transition hover:text-white">
              ← Home
            </Link>
            <span className="h-px w-8 bg-white/20" aria-hidden />
            <span>{artCopy.eyebrow}</span>
          </div>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{artCopy.heading}</h1>
          <p className="text-lg text-white/75">{artCopy.description}</p>
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">{artCopy.note}</p>
          <Link
            href={artCopy.cta.href}
            className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-white/90"
          >
            {artCopy.cta.label}
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,225,255,0.14),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_38%)] opacity-70" />
        <div className="relative mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{copy.art.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl text-white">{copy.art.heading}</h2>
              <p className="mt-2 max-w-3xl text-sm text-white/70">{copy.art.intro}</p>
            </div>
            <Link
              href={copy.art.cta.href}
              className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              {copy.art.cta.label}
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map(piece => (
              <button
                key={piece.title}
                onClick={() => setActive(piece)}
                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <ArtFrame piece={piece} className="transition-transform duration-300 group-hover:scale-[1.02]" showDescription />
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: shouldReduceMotion ? 0 : 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} detail`}
          >
            <motion.div
              initial={{ scale: shouldReduceMotion ? 1 : 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={event => event.stopPropagation()}
              className="relative w-full max-w-3xl rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0b0f19] via-[#0f1828] to-[#05070d] p-6 shadow-[0_50px_140px_-80px_rgba(0,0,0,0.75)]"
            >
              <div className={`relative mb-6 overflow-hidden rounded-[1.6rem] border border-white/12 ${active.ratio ?? "aspect-[4/5]"} ${active.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_70%_75%,rgba(0,255,255,0.12),transparent_35%)] mix-blend-screen opacity-70" />
                <div className="absolute inset-6 rounded-[1rem] border border-white/10" />
              </div>
              <div className="space-y-2 text-white">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                  <span>{active.label}</span>
                  <span className="h-px w-6 bg-white/20" aria-hidden />
                  <span>{active.medium}</span>
                </div>
                <h3 className="text-3xl font-semibold leading-tight">{active.title}</h3>
                <p className="text-base text-white/75">{active.description}</p>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="mt-4 inline-flex rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
