"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const Merch = () => {
  const shouldReduceMotion = useReducedMotion();
  const merch = copy.merch;

  return (
    <section
      id="merch"
      className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/62">
              {merch.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {merch.heading}
            </h2>
            <div className="space-y-4 text-lg text-white/75">
              {merch.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {merch.microline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={merch.ctas.primary.href}
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
              >
                {merch.ctas.primary.label}
              </Link>
              <Link
                href={merch.ctas.secondary.href}
                className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                {merch.ctas.secondary.label}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="grid gap-5">
              {merch.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                >
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      {card.meta}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/70">{card.text}</p>
                  </div>
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                  >
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {merch.placeholders.labels.map((label) => (
                <VideoPlaceholder
                  key={label}
                  label={label}
                  ratio="aspect-[3/2]"
                  ariaLabel={merch.placeholders.alt}
                  className="rounded-2xl"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
