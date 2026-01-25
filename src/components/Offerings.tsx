// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";

const offeringsMedia = {
  "Operator Hourly": {
    src: "/homepage-post-12-25-2025/operator-hourly-v1b.png",
    alt: "Operator Hourly offering",
    width: 1536,
    height: 1024,
  },
  "Flat-Rate Projects": {
    src: "/homepage-post-12-25-2025/flat-rate-projects-v8.png",
    alt: "Flat-rate sprints offering",
    width: 1536,
    height: 1024,
  },
  "Build with Synerva": {
    src: "/homepage-post-12-25-2025/build-with-synerva-v6.png",
    alt: "Full-stack system builds offering",
    width: 1024,
    height: 1024,
  },
} as const;

export const Offerings = () => {
  const shouldReduceMotion = useReducedMotion();
  const offerings = copy.offerings;

  return (
    <section
      id="offerings"
      className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-white">
        <div className="contrast-field space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {offerings.eyebrow}
          </p>
          <h2
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
          >
            {offerings.heading}
          </h2>
          <p
            data-type-compression="subhead"
            data-type-compression-line-height="1.5"
            data-type-compression-letter-spacing="0"
            className="text-lg text-white/75"
          >
            {offerings.body}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift grid gap-4 rounded-[2.5rem] border border-white/12 bg-transparent p-4 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:gap-6 sm:p-6 lg:grid-cols-3 lg:p-8"
        >
          {offerings.cards.map((card) => {
            const media =
              offeringsMedia[card.title as keyof typeof offeringsMedia];

            return (
              <div
                key={card.title}
                className="flex h-full flex-col gap-2 rounded-[2rem] border border-white/12 bg-transparent p-3 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl sm:gap-3 sm:p-5"
              >
                {media ? (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      className="h-auto w-full object-cover max-h-[40vh] sm:max-h-none"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {card.title}
                  </p>
                  <p className="text-sm text-white/70">{card.meta}</p>
                </div>
                <p className="text-sm text-white/80">{card.text}</p>
                <div className="mt-auto pt-1 sm:pt-2">
                  <Link
                    href={card.href}
                    className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {offerings.microline}
        </p>
      </div>
    </section>
  );
};

export default Offerings;
