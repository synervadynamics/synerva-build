"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const Offerings = () => {
  const shouldReduceMotion = useReducedMotion();
  const offerings = copy.offerings;

  return (
    <section
      id="offerings"
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
            {offerings.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {offerings.heading}
          </h2>
          <p className="text-lg text-white/75">{offerings.body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift grid gap-6 rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:grid-cols-3 lg:p-8"
        >
          {offerings.cards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col gap-4 rounded-[2rem] border border-white/12 bg-transparent p-5 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl"
            >
              <VideoPlaceholder
                label="offerings-card-placeholder"
                ratio="aspect-[16/10]"
              />
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {card.title}
                </p>
                <p className="text-sm text-white/70">{card.meta}</p>
              </div>
              <p className="text-sm text-white/80">{card.text}</p>
              <div className="mt-auto pt-2">
                <Link
                  href={card.href}
                  className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {offerings.microline}
        </p>
      </div>
    </section>
  );
};

export default Offerings;
