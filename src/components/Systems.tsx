"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import Image from "next/image";
import Link from "next/link";

export const Systems = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionCopy = copy.systemsSection;

  return (
    <section id="systems" className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14">
      <div className="relative mx-auto max-w-6xl space-y-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">
            {sectionCopy.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl">{sectionCopy.heading}</h2>
          <div className="space-y-4 text-lg text-white/75">
            {sectionCopy.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift rounded-[2.75rem] border border-white/20 bg-gradient-to-br from-[rgba(13,27,38,0.86)] via-[rgba(16,30,42,0.78)] to-[rgba(10,20,32,0.88)] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),_0_55px_170px_-90px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:p-8"
        >
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {sectionCopy.cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[2.25rem] border border-white/15 bg-gradient-to-b from-[rgba(16,30,42,0.92)] via-[rgba(15,28,40,0.86)] to-[rgba(12,24,34,0.92)] p-6 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.85)]"
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(6,12,20,0.9)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                  {card.descriptor}
                </p>
                <p className="mt-3 text-base text-white/85">{card.body}</p>
                <p className="mt-4 text-sm text-white/55">{card.status}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-6 rounded-full bg-white/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="mt-auto inline-flex w-fit rounded-full border border-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                >
                  LEARN MORE
                </Link>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
