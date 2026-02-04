// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { copy } from "@/data/copy";
import { merchV1Categories } from "@/data/merch-v1";

export const Merch = () => {
  const shouldReduceMotion = useReducedMotion();
  const merch = copy.merch;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard =
    merchV1Categories[activeIndex] ?? merchV1Categories[0] ?? null;

  return (
    <section
      id="merch"
      className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 text-white sm:gap-10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <div className="contrast-field space-y-5">
              <p className="role-body text-xs uppercase tracking-[0.4em] text-white/62">
                {merch.eyebrow}
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="role-authority section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                {merch.heading}
              </h2>
              <div className="space-y-4 text-lg text-white/75">
                {merch.body.map((paragraph) => (
                  <p key={paragraph} className="role-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="role-body text-xs uppercase tracking-[0.3em] text-white/50">
                {merch.microline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
              <Link href={merch.ctas.primary.href} className="role-body inline-cta">
                {merch.ctas.primary.label} →
              </Link>
              <Link href={merch.ctas.secondary.href} className="role-body inline-cta">
                {merch.ctas.secondary.label} →
              </Link>
            </div>
            <div className="bubble-drift mt-6 hidden rounded-[2rem] border border-white/12 bg-white/[0.03] p-4 shadow-[0_30px_120px_-80px_rgba(0,0,0,0.8)] sm:block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[3/2] w-full">
                  {activeCard ? (
                    <Image
                      src={activeCard.previewImage}
                      alt={`${activeCard.title} preview`}
                      fill
                      className="rounded-2xl object-cover"
                      sizes="(min-width: 1024px) 44vw, (min-width: 768px) 80vw, 100vw"
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:hidden">
              {merchV1Categories.map((card) => (
                <article
                  key={card.title}
                  className="space-y-3 rounded-2xl border border-white/12 bg-white/[0.03] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative aspect-[4/3] w-full max-h-[40vh] sm:max-h-none">
                      <Image
                        src={card.previewImage}
                        alt={`${card.title} preview`}
                        fill
                        className="rounded-2xl object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="role-body text-xs uppercase tracking-[0.35em] text-white/60">
                      Collection
                    </p>
                    <h3 className="role-body text-2xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="role-body text-sm text-white/70">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.ctaHref}
                    className="role-body inline-cta"
                  >
                    {card.ctaLabel} →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hidden space-y-6 sm:block"
          >
            <div className="grid gap-5">
              {merchV1Categories.map((card, index) => (
                <div
                  key={card.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition ${
                    activeIndex === index
                      ? "border-white/30 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.55)]"
                      : ""
                  }`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.12] transition-opacity duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-[0.14]"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 45%, #7A5C3E 0%, transparent 60%)",
                      mixBlendMode: "soft-light",
                    }}
                  />
                  <div className="relative z-10 space-y-3">
                    <p className="role-body text-xs uppercase tracking-[0.35em] text-white/60">
                      Collection
                    </p>
                    <h3 className="role-body text-2xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="role-body text-sm text-white/70">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.ctaHref}
                    className="role-body inline-cta mt-4"
                  >
                    {card.ctaLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
