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

        <div className="flex flex-col gap-5 md:flex-row md:items-stretch md:gap-6 lg:gap-7">
          {systemCards.map((card) => {
            return (
              <article
                key={card.title}
                tabIndex={0}
                className="relative flex flex-col overflow-hidden rounded-[1.9rem] border-2 border-white/70 bg-white/[0.03] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:flex-1"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.9rem]">
                  <div className="flex h-full w-full flex-col md:flex-row md:items-stretch md:gap-8 md:px-6 md:py-6 lg:px-8">
                    <div className="relative flex w-full flex-col overflow-hidden rounded-t-[1.9rem] border-b border-white/20 md:w-[65%] md:rounded-[1.65rem] md:border-0">
                      <div className="relative flex w-full items-center justify-center px-5 py-6 sm:px-6 sm:py-7 md:px-0 md:py-0">
                        <div className="relative w-full overflow-hidden rounded-[1.65rem] aspect-[16/10] md:aspect-auto md:min-h-[520px] lg:min-h-[600px]">
                          <Image
                            src={card.image}
                            alt={card.imageAlt}
                            fill
                            className="rounded-[1.65rem] object-contain object-center"
                            sizes="(max-width: 1024px) 100vw, 65vw"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col justify-start rounded-b-[1.9rem] px-6 py-6 text-left sm:px-7 sm:py-7 md:w-[35%] md:rounded-[1.65rem] md:px-0 md:py-0">
                      <h3 className="text-xl font-medium text-white sm:text-[1.55rem] lg:text-[1.75rem]">
                        {card.headline}
                      </h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60 sm:text-sm">
                        {card.title}
                      </p>
                      <div className="mt-4 space-y-4 text-[0.98rem] font-light leading-7 text-white/80 lg:text-[1.02rem]">
                        {card.body.split("\n\n").map((paragraph) => (
                          <p key={`${card.title}-${paragraph}`} className="whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
