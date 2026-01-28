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
      className="relative px-4 pb-6 pt-6 sm:px-10 sm:pb-10 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-12"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 text-white sm:gap-8 lg:gap-10">
        <div className="contrast-field flex flex-col items-center space-y-3">
          <h2
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-center text-3xl leading-tight sm:text-4xl lg:text-[2.9rem] [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:2.9rem] lg:[--section-title-line:3.05rem]"
          >
            {sectionCopy.heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-start md:gap-10 lg:gap-12">
          <div className="max-w-3xl space-y-4 text-base font-normal text-white/80 sm:text-lg">
            {sectionCopy.body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-end gap-5 sm:gap-6 md:justify-self-end">
            {systemCards.map((card) => {
              return (
                <article
                  key={card.title}
                  className="relative flex w-full max-w-[20.5rem] flex-col gap-3 rounded-[2rem] border border-white/12 bg-transparent p-3 sm:max-w-[22rem] sm:gap-4 sm:p-4"
                >
                  <div className="relative w-full overflow-hidden rounded-[1.65rem] border border-white/12 bg-white/5">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="rounded-[1.65rem] object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {card.headline}
                    </p>
                    <p className="text-sm text-white/70 sm:text-base">
                      {card.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center pt-2 sm:pt-3">
          <Link
            href={sectionCopy.cta.href}
            className="inline-flex rounded-full border border-white/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            {sectionCopy.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
};
