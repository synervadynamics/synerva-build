// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.

import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-10"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                FOUNDER
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                About the Founder
              </h2>
              <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
                <p>
                  Synerva Dynamics was founded by Kyle Gruarin, a marketing
                  operator, business owner, and systems builder who learned
                  most of what he knows by doing things the hard way and paying
                  attention when they went wrong.
                </p>
                <p>
                  Kyle holds a BA in Psychology, an MBA, and most of a BSc in
                  Computer Science. He has also spent years working in
                  marketing management, marketing research, and business
                  ownership roles. His work has involved designing strategy,
                  analyzing behavior, and making decisions with real
                  consequences attached. Budgets. Deadlines. Clients. Mistakes.
                  Fixes.
                </p>
                <p>
                  This was never marketing as theory. It was marketing as
                  practice. Work done with imperfect information, limited time,
                  and no room to hide behind slides.
                </p>
                <p>
                  Before Synerva, Kyle spent fifteen years in bars and
                  restaurants, working nearly every role imaginable. Serving.
                  Bartending. Managing. Cleaning up messes in real time, where
                  mistakes are immediate and recovery matters more than being
                  right. It’s an unusually effective way to learn how people,
                  pressure, and systems actually behave.
                </p>
                <p>
                  Synerva grew out of that overlap. The studio focuses on
                  building systems that compound. Visual systems. Cognitive
                  frameworks. Operational structures. Not to impress, but to
                  reduce friction and make good decisions easier to repeat when
                  things get messy.
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col">
                <div className="rounded-2xl border border-[#E0DCD4] bg-white/[0.04] p-3 sm:p-4">
                  <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl">
                    <Image
                      src="/homepage-post-12-25-2025/about-the-founder.PNG"
                      alt="Portrait of Kyle Gruarin"
                      width={900}
                      height={1200}
                      className="h-auto w-full max-h-[340px] rounded-2xl object-contain sm:max-h-[380px] lg:max-h-[400px]"
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
