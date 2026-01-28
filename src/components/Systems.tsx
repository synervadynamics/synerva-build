// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import { copy } from "@/data/copy";
import Image from "next/image";
import Link from "next/link";

type SystemsProps = {
  mobileVariant?: "default" | "beats";
};

export const Systems = ({ mobileVariant = "default" }: SystemsProps) => {
  const sectionCopy = copy.systemsSection;
  void mobileVariant;
  const systemCards = sectionCopy.cards;

  return (
    <section
      id="systems"
      className="relative px-4 pb-5 pt-5 sm:px-10 sm:pb-10 sm:pt-8 md:pb-8 md:pt-7 lg:px-16 lg:pb-9 lg:pt-8"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 text-white md:gap-7 lg:gap-8">
        <div className="contrast-field space-y-3 md:shrink-0">
          {sectionCopy.eyebrow ? (
            <p className="text-xs uppercase tracking-[0.4em] text-white/62">
              {sectionCopy.eyebrow}
            </p>
          ) : null}
          <h2
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-[2.9rem] [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:2.9rem] lg:[--section-title-line:3.05rem]"
          >
            {sectionCopy.heading}
          </h2>
          <div className="max-w-3xl space-y-3 text-xs text-white/60 sm:text-sm">
            {sectionCopy.body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[2.5rem] border border-white/12 bg-transparent p-4 sm:gap-6 sm:p-6 lg:grid-cols-2 lg:p-8">
          {systemCards.map((card) => {
            return (
              <article
                key={card.title}
                tabIndex={0}
                className="relative flex h-full flex-col gap-4 rounded-[2rem] border border-white/10 bg-transparent p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:gap-5 sm:p-5 md:h-[520px] lg:h-[560px]"
              >
                <div className="relative w-full overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/5">
                  <div className="relative w-full aspect-[4/5] md:h-[400px] md:aspect-auto lg:h-[440px]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="rounded-[1.65rem] object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <p className="text-sm text-white/70 sm:text-base">{card.body}</p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center pt-1 sm:pt-2">
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
