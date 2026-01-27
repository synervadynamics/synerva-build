// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type SystemsProps = {
  mobileVariant?: "default" | "beats";
};

export const Systems = ({ mobileVariant = "default" }: SystemsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionCopy = copy.systemsSection;
  void mobileVariant;
  const bodyParagraphs = sectionCopy.body.split("\n\n");
  const verisenseCard = sectionCopy.cards.find((card) => card.title === "Verisense");
  const lucentraCard = sectionCopy.cards.find((card) => card.title === "Lucentra");

  const systemCards = [
    {
      key: "verisense",
      direction: "left" as const,
      image: verisenseCard?.image ?? sectionCopy.cards[0]?.image ?? "",
      imageAlt: verisenseCard?.imageAlt ?? "Verisense interface preview",
      headline: "Read the signal. Ignore the noise.",
      title: "Verisense",
      body: `Verisense surfaces how communication is actually landing beneath the words.

Tone, intent, confidence, avoidance, friction.
The signals that shape decisions long before they appear in transcripts, decks, or metrics.

Its development is continuously informed by live work across strategy and execution.`,
    },
    {
      key: "lucentra",
      direction: "right" as const,
      image: lucentraCard?.image ?? sectionCopy.cards[1]?.image ?? "",
      imageAlt: lucentraCard?.imageAlt ?? "Lucentra interface preview",
      headline: "People leave. Structure stays.",
      title: "Lucentra",
      body: `Lucentra preserves strategic structure over time.

It captures how decisions are made, why they were made, and what they depend on, so progress doesn’t decay as people rotate or priorities shift.

Its architecture evolves directly from the work it supports.`,
    },
  ];

  return (
    <section
      id="systems"
      className="relative px-4 pb-6 pt-6 sm:px-10 sm:pb-14 sm:pt-10 lg:px-16 lg:pb-14 lg:pt-10"
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
          className="flex flex-col gap-4 overflow-hidden md:h-[min(60vh,45rem)] md:flex-row md:items-stretch md:gap-6 md:overflow-hidden"
        >
          {systemCards.map((card) => {
            const isLeftCard = card.direction === "left";
            const trackStyle = {
              "--card-shift": shouldReduceMotion ? "0%" : isLeftCard ? "0%" : "-100%",
              "--card-shift-hover": shouldReduceMotion ? "0%" : "-50%",
            } as CSSProperties;

            return (
              <article
                key={card.key}
                tabIndex={0}
                style={trackStyle}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/35 bg-white/[0.03] shadow-[0_40px_140px_-110px_rgba(0,0,0,0.88)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:h-full md:min-h-0 md:flex-1 md:[--panel-pad:1.6rem] md:focus-visible:[--card-shift:var(--card-shift-hover)] md:group-hover:[--card-shift:var(--card-shift-hover)]"
              >
                <div
                  className={
                    shouldReduceMotion
                      ? "flex h-full w-full flex-col"
                      : "flex h-full w-full flex-col md:w-[200%] md:flex-row md:[transform:translateX(var(--card-shift))] md:transition-transform md:duration-[350ms] md:ease-in-out"
                  }
                >
                  <div
                    className={`relative flex h-full w-full flex-col overflow-hidden border-white/12 bg-black/40 ${
                      shouldReduceMotion
                        ? "rounded-t-[1.9rem] border-b border-white/12"
                        : "md:rounded-[1.65rem] md:border md:border-white/15"
                    } ${!shouldReduceMotion && !isLeftCard ? "md:order-2" : ""}`}
                  >
                    <div
                      className={`relative flex h-full w-full items-center justify-center px-5 py-6 sm:px-6 sm:py-7 md:px-[var(--panel-pad)] md:py-[var(--panel-pad)] ${
                        !shouldReduceMotion ? (isLeftCard ? "md:justify-start" : "md:justify-end") : ""
                      }`}
                    >
                      <div className="relative aspect-[9/16] h-full max-h-[min(62vh,40rem)] w-full max-w-[min(24rem,78%)] md:max-w-[48%]">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          className="rounded-[1.4rem] object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex h-full w-full flex-col justify-center border-white/12 bg-[#060708] px-6 py-7 text-left sm:px-7 sm:py-8 ${
                      shouldReduceMotion ? "rounded-b-[1.9rem]" : ""
                    } md:rounded-[1.65rem] md:border md:border-white/15 md:px-[var(--panel-pad)] md:py-[var(--panel-pad)] ${
                      !shouldReduceMotion && !isLeftCard ? "md:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl font-medium text-white sm:text-[1.55rem] lg:text-[1.75rem]">
                      {card.headline}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60 sm:text-sm">
                      {card.title}
                    </p>
                    <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-white/80 lg:text-[1.02rem]">
                      {card.body.split("\n\n").map((paragraph) => (
                        <p key={`${card.title}-${paragraph}`} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
