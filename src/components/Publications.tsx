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
      className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-16 lg:pt-12"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
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
          className="grid gap-8 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:items-start lg:gap-10"
        >
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[9/16] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={imageTransition}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeItem.image.src}
                      alt={activeItem.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col"
            onMouseLeave={() => {
              setExpandedIndex(null);
              setImageIndex(0);
            }}
          >
            {publications.items.map((item, index) => {
              const isActive = index === expandedIndex;
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
                  className={`cursor-pointer border-b border-white/10 py-5 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] first:border-t focus:outline-none ${
                    isActive
                      ? "bg-white/[0.04] px-4"
                      : "bg-transparent px-3"
                  }`}
                  aria-expanded={isActive}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white/95">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{item.teaser}</p>
                  <div
                    className={`overflow-hidden text-sm text-white/70 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "mt-4 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div className="space-y-4">
                      {item.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <Link
                        href={item.href}
                        tabIndex={isActive ? 0 : -1}
                        className="inline-flex text-xs font-semibold tracking-[0.2em] text-white/90 transition hover:text-white"
                      >
                        {item.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
