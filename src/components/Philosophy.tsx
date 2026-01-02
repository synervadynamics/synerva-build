// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import { copy } from "@/data/copy";

export const Philosophy = () => {

  return (
    <section
      id="philosophy"
      className="relative px-6 pb-20 pt-14 sm:px-10 sm:pb-22 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-18"
    >
      <div className="bubble-drift relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(14,30,52,0.76)] via-[rgba(14,26,42,0.7)] to-[rgba(10,20,34,0.7)] p-8 text-white shadow-[0_52px_170px_-86px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-12 lg:p-14">
        <div className="relative space-y-6 text-white">
          <blockquote
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
          >
            {copy.philosophy.quote}
          </blockquote>
          <p className="max-w-3xl text-lg text-white/80">{copy.philosophy.p1}</p>
          <p className="max-w-3xl text-lg text-white/80">{copy.philosophy.p2}</p>
        </div>
      </div>
    </section>
  );
};
