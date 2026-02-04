"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { copy } from "@/data/copy";
import { CascadingText } from "@/components/CascadingText";
import { SectionIndex } from "@/components/SectionIndex";
import type { Easing } from "framer-motion";

const sectionMap = [
  { id: "narrative", label: "Orientation" },
  { id: "offerings", label: "Offerings" },
  { id: "deliver", label: "Deliverables" },
  { id: "systems", label: "Systems" },
  { id: "publications", label: "Publications" },
  { id: "synerva-dimensions", label: "Artwork" },
  { id: "merch", label: "Merch" },
  { id: "about", label: "About" },
];

type MainHeroProps = {
  mobileVariant?: "default" | "beats";
};

export const MainHero = ({ mobileVariant = "default" }: MainHeroProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const easeCurve = [0.16, 1, 0.3, 1] as Easing;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate px-4 pb-4 pt-4 min-h-0 sm:min-h-screen sm:px-10 sm:pb-10 sm:pt-16 lg:px-16 lg:pb-10 lg:pt-20"
      suppressHydrationWarning
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {mobileVariant === "beats" ? (
          <>
            <div className="flex flex-col lg:hidden">
              <div className="flex flex-col justify-start gap-3 pb-2 pt-4 min-h-0 sm:min-h-[80svh] sm:justify-center sm:gap-4 sm:pb-6 sm:pt-10">
                <p className="role-body text-[0.65rem] uppercase tracking-[0.5em] text-white/60">
                  {copy.hero.eyebrow}
                </p>
                <h1
                  data-type-compression="headline"
                  data-type-compression-line-height="1.05"
                  data-type-compression-letter-spacing="0"
                  className="role-authority section-header-lock text-4xl font-light leading-[1.05] text-white [--section-title-size:2.25rem] [--section-title-line:2.5rem] [--section-title-tracking:-0.025em]"
                >
                  {copy.hero.headline.map((line) => (
                    <span key={line} className="reveal-line">
                      <span className="block">{line}</span>
                    </span>
                  ))}
                </h1>
              </div>
              <div className="flex flex-col justify-start gap-3 py-3 min-h-0 sm:min-h-[80svh] sm:justify-center sm:gap-4 sm:py-10">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.1"
                  data-type-compression-letter-spacing="0"
                  className="role-body text-2xl font-light leading-snug text-white"
                >
                  {copy.hero.title}
                </h2>
                <p
                  data-type-compression="subhead"
                  data-type-compression-line-height="1.45"
                  data-type-compression-letter-spacing="0"
                  className="role-orientation text-[0.95rem] leading-6 text-white/80"
                >
                  {copy.hero.subhead}
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 py-3 min-h-0 sm:min-h-[70svh] sm:justify-center sm:py-8">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.2"
                  data-type-compression-letter-spacing="0"
                  className="role-body text-lg font-light leading-snug text-white/85"
                >
                  {copy.hero.proofs[2].value}
                </h2>
              </div>
            </div>
            <div className="hidden flex-col gap-10 lg:flex">
              <header className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
                <Link
                  href="/"
                  className="role-body font-mono text-xs uppercase tracking-[0.5em] text-white/70 hover:text-white"
                >
                  Synerva Dynamics
                </Link>
                <SectionIndex sections={sectionMap} variant="homepage" />
              </header>
              <div className="flex flex-col gap-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                  <div className="flex flex-col gap-6 text-balance">
                    <div className="contrast-field space-y-6">
                      <p className="role-body text-xs uppercase tracking-[0.5em] text-white/60">
                        {copy.hero.eyebrow}
                      </p>
                      <h1
                        data-type-compression="headline"
                        data-type-compression-line-height="1.05"
                        data-type-compression-letter-spacing="0"
                        className="role-authority section-header-lock text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl [--section-title-size:2.25rem] [--section-title-line:2.5rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:3rem] sm:[--section-title-line:3rem] lg:[--section-title-size:3.75rem] lg:[--section-title-line:3.75rem] xl:[--section-title-size:4.5rem] xl:[--section-title-line:4.5rem]"
                      >
                        {copy.hero.headline.map((line) => (
                          <span key={line} className="reveal-line">
                            <span className="block">{line}</span>
                          </span>
                        ))}
                      </h1>
                      <p
                        data-type-compression="subhead"
                        data-type-compression-line-height="1.5"
                        data-type-compression-letter-spacing="0"
                      className="role-orientation max-w-3xl text-lg text-white/80 sm:text-xl"
                    >
                      {copy.hero.subhead}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href="/contact" className="role-body inline-cta">
                        START WITH A 30-MINUTE PLAN
                      </Link>
                      <Link href="/offerings" className="role-body inline-cta">
                        EXPLORE OFFERINGS
                      </Link>
                    </div>
                  </div>
                </div>

                  <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-transparent p-0 backdrop-blur-2xl">
                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-transparent p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                      <div className="overflow-hidden rounded-2xl border border-white/8">
                        <Image
                          src="/homepage-post-12-25-2025/synerva-hero-5.png"
                          alt="Synerva Dynamics hero graphic"
                          width={1536}
                          height={1024}
                          className="aspect-[4/3] w-full object-cover"
                          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 460px, 100vw"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <div className="grid gap-6 text-sm text-white/70 grid-cols-2 md:grid-cols-3">
                    {copy.hero.proofs.map(({ label, value }, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : undefined}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.6,
                          ease: easeCurve,
                        }}
                        className="min-h-[104px] rounded-2xl border border-white/12 bg-transparent px-6 py-6 text-center shadow-[0_24px_80px_-50px_rgba(0,0,0,0.78)] transition hover:border-white/35 backdrop-blur-2xl sm:min-h-0 sm:py-4"
                      >
                        <p className="role-body text-[0.6rem] uppercase tracking-[0.35em] text-white/60">
                          {label}
                        </p>
                        <p className="role-body mt-2 font-mono text-[0.75rem] text-white whitespace-normal break-words leading-snug sm:leading-normal sm:text-sm">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              <CascadingText
                className="role-body mt-0 pt-0 sm:mt-8 sm:pt-6"
                items={[
                  "Web Systems",
                  "Automation Loops",
                  "Analytics Clarity",
                  "Brand Orchestration",
                ]}
                speed={70}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <Link
                href="/"
                className="role-body font-mono text-xs uppercase tracking-[0.5em] text-white/70 hover:text-white"
              >
                Synerva Dynamics
              </Link>
              <SectionIndex sections={sectionMap} variant="homepage" />
            </header>
            <div className="flex flex-col gap-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                <div className="flex flex-col gap-6 text-balance">
                  <div className="contrast-field space-y-6">
                    <p className="role-body text-xs uppercase tracking-[0.5em] text-white/60">
                      {copy.hero.eyebrow}
                    </p>
                    <h1
                      data-type-compression="headline"
                      data-type-compression-line-height="1.05"
                      data-type-compression-letter-spacing="0"
                      className="role-authority section-header-lock text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl [--section-title-size:2.25rem] [--section-title-line:2.5rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:3rem] sm:[--section-title-line:3rem] lg:[--section-title-size:3.75rem] lg:[--section-title-line:3.75rem] xl:[--section-title-size:4.5rem] xl:[--section-title-line:4.5rem]"
                    >
                      {copy.hero.headline.map((line) => (
                        <span key={line} className="reveal-line">
                          <span className="block">{line}</span>
                        </span>
                      ))}
                    </h1>
                    <p
                      data-type-compression="subhead"
                      data-type-compression-line-height="1.5"
                      data-type-compression-letter-spacing="0"
                      className="role-orientation max-w-3xl text-lg text-white/80 sm:text-xl"
                    >
                      {copy.hero.subhead}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href="/contact" className="role-body inline-cta">
                        START WITH A 30-MINUTE PLAN
                      </Link>
                      <Link href="/offerings" className="role-body inline-cta">
                        EXPLORE OFFERINGS
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-transparent p-0 backdrop-blur-2xl">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-transparent p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                    <div className="overflow-hidden rounded-2xl border border-white/8">
                      <Image
                        src="/homepage-post-12-25-2025/synerva-hero-5.png"
                        alt="Synerva Dynamics hero graphic"
                        width={1536}
                        height={1024}
                        className="aspect-[4/3] w-full object-cover"
                        sizes="(min-width: 1280px) 560px, (min-width: 1024px) 460px, 100vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {!isMobile && (
                <div className="grid gap-6 text-sm text-white/70 grid-cols-2 md:grid-cols-3">
                  {copy.hero.proofs.map(({ label, value }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : undefined}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.6,
                        ease: easeCurve,
                      }}
                      className="min-h-[104px] rounded-2xl border border-white/12 bg-transparent px-6 py-6 text-center shadow-[0_24px_80px_-50px_rgba(0,0,0,0.78)] transition hover:border-white/35 backdrop-blur-2xl sm:min-h-0 sm:py-4"
                    >
                      <p className="role-body text-[0.6rem] uppercase tracking-[0.35em] text-white/60">
                        {label}
                      </p>
                      <p className="role-body mt-2 font-mono text-[0.75rem] text-white whitespace-normal break-words leading-snug sm:leading-normal sm:text-sm">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            <CascadingText
              className="role-body mt-0 pt-0 sm:mt-8 sm:pt-6"
              items={[
                "Web Systems",
                "Automation Loops",
                "Analytics Clarity",
                "Brand Orchestration",
              ]}
              speed={70}
            />
          </div>
        )}
      </div>
    </section>
  );
};
