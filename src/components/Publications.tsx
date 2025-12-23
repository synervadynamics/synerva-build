"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const Publications = () => {
  const shouldReduceMotion = useReducedMotion();
  const publications = copy.publications;

  return (
    <section
      id="publications"
      className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {publications.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {publications.heading}
          </h2>
          <p className="text-lg text-white/75">{publications.body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {publications.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <VideoPlaceholder
                label="publications-card-placeholder"
                ratio="aspect-[2/3]"
              />
              <h3 className="text-2xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{card.text}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
