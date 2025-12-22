"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";

const casesPageCopy = copy.pages.cases;
const caseDetails = copy.cases.details;

export default function CasesPageClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[var(--bg)] text-white">
      <section
        ref={ref}
        className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16"
      >
        <AmbientVideo
          src="/visuals/hero/synerva-hero-shot-2025.png"
          opacity={shouldReduceMotion ? 0.25 : 0.4}
          blur
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-5xl flex-col gap-6"
        >
          <div className="flex justify-start">
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
            >
              ← Home
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {casesPageCopy.eyebrow}
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {casesPageCopy.heading}
          </h1>
          <p className="text-lg text-white/70">{casesPageCopy.description}</p>
          <p className="text-sm text-white/60">{casesPageCopy.note}</p>
          <Link
            href={casesPageCopy.cta.href}
            className="w-fit rounded-full border border-white/50 px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10"
          >
            {casesPageCopy.cta.label}
          </Link>
        </motion.div>
      </section>

      <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/92 via-black/76 to-black/88" />
        <div className="relative mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Challenge · Solution · Results
            </p>
            <h2 className="text-3xl sm:text-4xl text-white">
              Proof that clarity outperforms chaos
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseDetails.map((detail) => (
              <div
                key={detail.title}
                className="group rounded-3xl border border-white/12 bg-gradient-to-br from-[#0d1626] via-[#0f1f32] to-[#0a1422] p-6 shadow-[0_38px_140px_-80px_rgba(0,0,0,0.82)] transition hover:border-white/30"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>{detail.industry}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] text-white/70">
                    Case
                  </span>
                </div>
                <h3 className="mt-3 text-2xl text-white">{detail.title}</h3>
                <p className="mt-2 text-sm text-white/70">{detail.summary}</p>
                <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/60">
                    Challenge
                  </p>
                  <p className="text-sm">{detail.challenge}</p>
                </div>
                <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/60">
                    Solution
                  </p>
                  <p className="text-sm">{detail.solution}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/60">
                    Systems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detail.systems.map((system) => (
                      <span
                        key={system}
                        className="rounded-full border border-white/20 px-3 py-1 text-[0.75rem]"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/60">
                    Results
                  </p>
                  <ul className="space-y-1 text-sm">
                    {detail.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {detail.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                {detail.quote ? (
                  <div className="mt-4 rounded-2xl border border-white/12 bg-white/5 p-4 text-sm text-white/75 italic">
                    {detail.quote}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
