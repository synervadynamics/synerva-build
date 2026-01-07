// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { copy } from "@/data/copy";

export const Publications = () => {
  const shouldReduceMotion = useReducedMotion();
  const publications = copy.publications;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const activeItem = publications.items[imageIndex];
  const imageTransition = {
    duration: shouldReduceMotion ? 0 : 0.35,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  } as const;

  return (
    <section
      id="publications"
      className="relative px-4 py-4 sm:px-10 sm:py-4 lg:px-16 lg:py-4"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 text-white">
          <div className="contrast-field space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">
              PUBLICATIONS
            </p>
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              {publications.heading}
            </h2>
            <p
              data-type-compression="subhead"
              data-type-compression-line-height="1.625"
              data-type-compression-letter-spacing="0"
              className="text-base leading-relaxed text-white/75"
            >
              {publications.body}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:hidden">
            {publications.items.map((item) => {
              const isCtaDisabled = !item.href;
              return (
                <article
                  key={item.title}
                  className="space-y-3 rounded-2xl border border-white/12 bg-white/[0.03] p-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={1024}
                      height={1536}
                      className="block h-auto w-full object-cover object-top max-h-[40vh] sm:max-h-none"
                      sizes="100vw"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      Publication
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white/95">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-white/70">
                      {item.teaser}
                    </p>
                    {isCtaDisabled ? (
                      <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        {item.cta}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hidden gap-4 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-4 items-start grid-rows-[min-content] sm:grid"
          >
            <div className="w-full self-start h-fit flex flex-col">
              <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 flex items-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={imageTransition}
                    className="pointer-events-none"
                  >
                    <Image
                      src={activeItem.image.src}
                      alt={activeItem.image.alt}
                      width={1024}
                      height={1536}
                      className="block w-auto h-auto rounded-2xl object-cover object-top"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div
              className="flex flex-col gap-2"
              onMouseLeave={() => {
                setExpandedIndex(null);
                setImageIndex(0);
              }}
            >
              {publications.items.map((item, index) => {
                const isActive = index === expandedIndex;
                const isCtaDisabled = !item.href;
                return (
                  <article
                    key={item.title}
                    onMouseEnter={() => {
                      setExpandedIndex(index);
                      setImageIndex(index);
                    }}
                    onFocus={() => {
                      setExpandedIndex(index);
                      setImageIndex(index);
                    }}
                    onClick={() => {
                      setExpandedIndex(index);
                      setImageIndex(index);
                    }}
                    tabIndex={0}
                    className={`cursor-pointer rounded-3xl border border-white/12 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none ${
                      isActive ? "bg-white/[0.06]" : ""
                    }`}
                    aria-expanded={isActive}
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      Publication
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white/95">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-white/70">
                      {item.teaser}
                    </p>
                    <div
                      className={`overflow-hidden text-sm leading-relaxed text-white/70 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "mt-3 max-h-[1200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="space-y-2">
                        {item.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    {isCtaDisabled ? (
                      <span className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        {item.cta}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        tabIndex={isActive ? 0 : -1}
                        className="mt-4 inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
