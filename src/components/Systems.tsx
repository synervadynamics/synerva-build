// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import Image from "next/image";
import Link from "next/link";

type SystemsProps = {
  mobileVariant?: "default" | "beats";
};

export const Systems = ({ mobileVariant = "default" }: SystemsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionCopy = copy.systemsSection;
  void mobileVariant;
  const bodyParagraphs = sectionCopy.body.split("\n\n");

  return (
    <section
      id="systems"
      className="relative px-4 pb-6 pt-6 sm:px-10 sm:pb-14 sm:pt-10 lg:px-16 lg:pb-16 lg:pt-12"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-7 text-white lg:gap-8">
        <div className="contrast-field space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {sectionCopy.eyebrow}
          </p>
          <h2
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-[2.9rem] [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:2.9rem] lg:[--section-title-line:3.05rem]"
          >
            {sectionCopy.heading}
          </h2>
          <div className="space-y-3 text-base text-white/78 sm:text-[1.02rem]">
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="max-w-4xl text-xs text-white/60 sm:text-sm">
            {sectionCopy.developmentNote}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-stretch gap-4 md:grid-cols-2 lg:gap-6"
        >
          {sectionCopy.cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[1.8rem] border border-white/20 bg-white/[0.03] p-4 shadow-[0_40px_140px_-110px_rgba(0,0,0,0.88)] backdrop-blur-xl sm:p-5"
            >
              <div className="mb-4 overflow-hidden rounded-2xl border border-white/12 bg-black/30">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={1600}
                  height={1000}
                  className="h-auto w-full max-h-40 rounded-2xl object-contain sm:max-h-44 lg:max-h-48"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-medium text-white sm:text-[1.35rem]">
                {card.headline}
              </h3>
              <p className="mt-1.5 text-xs uppercase tracking-[0.32em] text-white/60 sm:text-sm">
                {card.title}
              </p>
              <div className="mt-3 space-y-3 text-sm text-white/80 sm:text-[0.98rem]">
                {card.body.split("\n\n").map((paragraph) => (
                  <p key={`${card.title}-${paragraph}`} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </motion.div>

        <div className="flex justify-center pt-1 sm:pt-3">
          <Link
            href={sectionCopy.cta.href}
            className="inline-flex rounded-full border border-white/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
          >
            {sectionCopy.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
};
