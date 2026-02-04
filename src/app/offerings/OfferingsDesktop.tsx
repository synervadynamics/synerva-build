"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import styles from "./offerings.module.css";

const imagePaths = {
  hero: "/offerings-subpage-jan-3/hero-v3.JPG",
  hiring: "/homepage-post-12-25-2025/operator-hourly-final-1.png",
  scope: "/homepage-post-12-25-2025/scope-discipline-final-1.png",
  operator: "/offerings-subpage-jan-3/operator-hourly-v67.PNG",
  flatRate: "/offerings-subpage-jan-3/flat-rate-projects-v1b.PNG",
  build: "/homepage-post-12-25-2025/build-with-synerva-final-1.png",
} as const;

const sectionMap = [
  { id: "hiring", labelLines: ["HIRING"] },
  { id: "scope", labelLines: ["SCOPE"] },
  { id: "hourly", labelLines: ["HOURLY"] },
  { id: "flat-rate", labelLines: ["FLAT-RATE"] },
  { id: "full-build", labelLines: ["FULL BUILD"] },
  { id: "additional-capabilities", labelLines: ["ADDITIONAL", "CAPABILITIES"] },
  { id: "clarity-diagnostic", labelLines: ["CLARITY", "DIAGNOSTIC"] },
  { id: "next-steps", labelLines: ["NEXT", "STEPS"] },
];

export default function OfferingsDesktop() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>(
    sectionMap[0]?.id ?? "",
  );
  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionMap.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const items = useMemo(
    () =>
      sectionMap.map((item) => ({
        ...item,
        isActive: activeSection === item.id,
      })),
    [activeSection],
  );

  return (
    <main className={`${styles.offeringsPage} ${styles.offeringsPageDesktop} relative`}>
      <SubpageStaticBackground
        imageUrl="/subpage-backgrounds/offerings-v3.png"
        showOverlay={false}
      />
      <div className="pointer-events-none fixed inset-0 z-[4] bg-[color:var(--offerings-panel-fill)]" />
      <div className="relative z-10">
        <ScrollProgress />

        <div>
          <section
            id="hero"
            className="relative overflow-visible px-6 pt-14 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20"
          >
            <div className="hero-grid" />
            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
              <header ref={headerRef} className="flex flex-col gap-4 pb-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="font-mono text-xs uppercase tracking-[0.5em] text-[color:var(--offerings-link)]">
                    <span className="block">Synerva</span>
                    <span className="block">Dynamics</span>
                  </div>
                  <div className="flex flex-wrap items-start gap-x-6 gap-y-4 text-xs uppercase tracking-[0.3em] text-[color:var(--offerings-link)]">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(event) => scrollToSection(event, item.id)}
                        className={`flex w-fit flex-col items-center gap-2 transition ${
                          item.isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
                        }`}
                        aria-current={item.isActive ? "true" : undefined}
                      >
                        <span className="text-center leading-tight">
                          {item.labelLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                        <span
                          className={`h-1 w-full rounded-full bg-[color:var(--offerings-divider)] transition ${
                            item.isActive ? "opacity-100" : "opacity-60"
                          }`}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </header>
              <div className="relative mx-auto max-w-5xl rounded-[3rem] border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] p-10 shadow-[0_64px_180px_-88px_rgba(0,0,0,0.82)]">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6 text-balance">
                    <h1
                      data-type-compression="headline"
                      data-type-compression-line-height="1.05"
                      data-type-compression-letter-spacing="0"
                      className="section-header-lock text-4xl font-light leading-[1.05] text-[color:var(--ink-human)] sm:text-5xl lg:text-6xl xl:text-7xl [--section-title-size:2.25rem] [--section-title-line:2.5rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:3rem] sm:[--section-title-line:3rem] lg:[--section-title-size:3.75rem] lg:[--section-title-line:3.75rem] xl:[--section-title-size:4.5rem] xl:[--section-title-line:4.5rem]"
                    >
                      <span className="reveal-line">
                        <span className="block">
                          Choose the entry point. We’ll do the compression.
                        </span>
                      </span>
                    </h1>
                  <div className="space-y-4 text-lg text-[color:var(--ink-editorial)] sm:text-xl">
                    <p>
                      Most firms sell isolated services. Synerva applies
                      intelligence across the full loop, so work ships faster,
                      costs less, and doesn’t require babysitting after launch.
                    </p>
                    <p>
                      This work is not driven by volume, ceremony, or handoffs.
                      It is driven by structure, judgment, and release logic.
                    </p>
                    <p>
                      Whether you need a single intervention or a fully
                      interconnected system, there are clear ways to engage—without
                      drift, noise, or unnecessary process.
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <div className="w-full max-w-[600px] overflow-visible rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-3 sm:p-4">
                      <div className="aspect-[856/676] w-full overflow-hidden rounded-xl">
                        <img
                          src={imagePaths.hero}
                          alt="Synerva Dynamics offerings hero"
                          className="h-full w-full rounded-xl object-cover object-[50%_50%] opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[240px]">
                    <Link href="/contact" className={styles.btnPrimary}>
                      Start a Conversation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          <section
            id="hiring"
            className="relative px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-10"
          >
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] px-8 py-12 text-[color:var(--ink-editorial)] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
                <div className="flex max-w-2xl flex-col gap-4">
                  <div className="space-y-3 text-sm leading-snug text-[color:var(--ink-editorial)] sm:text-base">
                    <p>
                      You’re not hiring a role, a team, or a bundle of services.
                      You’re hiring a continuously applied decision system.
                    </p>
                    <p>
                      Synerva combines strategy, execution, and release logic into
                      a single operating loop. Judgment is applied where it
                      matters most, handoffs are minimized, and work is built to
                      hold together after launch, not fall apart the moment it’s
                      shipped.
                    </p>
                    <p>
                      The result is less time spent coordinating, fewer revisions
                      caused by misalignment, and output that survives contact
                      with the real world.
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <div className="flex w-full flex-col">
                    <div
                      className={`${styles.mediaCompactWide} overflow-visible rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-4 sm:p-5`}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                        <Image
                          src={imagePaths.hiring}
                          alt="What you’re actually hiring"
                          fill
                          className="rounded-xl object-cover"
                          sizes="(min-width: 1024px) 32vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>

        <section
          id="scope"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto max-w-6xl space-y-6 text-[color:var(--ink-editorial)]">
            <div className="space-y-4">
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                Scope Discipline
              </h2>
            </div>

            <div className="rounded-3xl border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] p-5 text-[color:var(--ink-editorial)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center">
                <div className="w-full">
                  <div className="rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-6">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[color:var(--offerings-outline-secondary)]">
                      <Image
                        src={imagePaths.scope}
                        alt="Scope discipline visual"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 35vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-center gap-6">
                  <div className="space-y-4 text-base text-[color:var(--ink-editorial)]">
                    <p>
                      To keep work predictable and pricing fair, all engagements are
                      scoped after intake. Pricing reflects output and complexity,
                      not vibes, urgency, or shifting interpretation once work is
                      underway. What’s being built, how much of it, and how tightly
                      it needs to hold together are all defined up front.
                    </p>
                    <p>
                      Every project lives inside a defined scope band. That boundary
                      is explicit and shared. Expansion is deliberate and surfaced
                      early, not absorbed quietly as expectations drift. Nothing
                      grows silently, and scope does not stretch midstream without
                      acknowledgment, adjustment, and re-alignment.
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-[color:var(--ink-analytical)]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-[color:var(--offerings-bullet)]" />
                      <span>Band 1: Single asset or short deliverable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-[color:var(--offerings-bullet)]" />
                      <span>Band 2: Campaign pack or multi-asset set</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-[color:var(--offerings-bullet)]" />
                      <span>Band 3: System build</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-[color:var(--offerings-bullet)]" />
                      <span>
                        Band 4: Deep production (books, multi-week cycles)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="hourly"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto flex max-w-6xl flex-col gap-6 text-[color:var(--ink-editorial)]">
            <div className="space-y-2">
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                Operator Hourly
              </h2>
              <p className="text-base text-[color:var(--ink-editorial)]">
                When Momentum Matters More Than Ceremony
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-3 text-base text-[color:var(--ink-editorial)]">
                  <p className="text-lg text-[color:var(--ink-analytical)]">
                    $100 CAD per hour
                  </p>
                  <p>
                    Used to audit, unblock, re-prioritize, or ship under real
                    conditions. Designed for situations where clarity and judgment
                    matter more than documentation.
                  </p>
                  <p>
                    You are not buying time. You are buying progress with fewer
                    cycles.
                  </p>
                </div>

                <div className="max-w-xl space-y-3 text-sm leading-snug text-[color:var(--ink-analytical)]">
                  <p className="text-base text-[color:var(--ink-analytical)]">
                    How it Works
                  </p>
                  <div className="space-y-2">
                    <p className="text-[color:var(--ink-analytical)]">
                      Minimum: 1 Hour
                    </p>
                    <p>
                      Work begins immediately inside the live system. Time is used
                      to assess structure, surface constraints, and determine where
                      intervention will have the most impact before action is taken.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[color:var(--ink-analytical)]">
                      Billed: In 15-minute increments after
                    </p>
                    <p>
                      Billing scales with what&apos;s required to restore momentum.
                      There is no fixed cadence or obligation to continue once
                      clarity is reached and progress is unblocked.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[color:var(--ink-analytical)]">
                      After each working block: Short written recap
                    </p>
                    <p className="text-[color:var(--ink-analytical)]">
                      A concise summary outlines:
                    </p>
                    <ul className="space-y-1 text-sm text-[color:var(--ink-analytical)]">
                      <li>what changed</li>
                      <li>what shipped</li>
                      <li>what happens next</li>
                    </ul>
                    <p>
                      This preserves continuity without creating unnecessary
                      documentation or slowing execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-center lg:justify-end">
                <div className="w-full max-w-[480px] overflow-hidden rounded-[28px] border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imagePaths.operator}
                      alt="Operator Hourly visual"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 420px, 100vw"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1 px-6 pb-6 pt-4 text-center">
                    <p className="text-base text-[color:var(--ink-editorial)]">
                      Judgment applied across your system.
                    </p>
                    <p className="text-sm text-[color:var(--ink-editorial)]">
                      A system-level view that replaces coordination overhead with
                      decisive action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="flat-rate"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto flex max-w-5xl flex-col gap-6 text-[color:var(--ink-editorial)]">
            <div className="space-y-2">
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                Flat-Rate Projects
              </h2>
              <p className="text-base text-[color:var(--ink-editorial)]">
                When Scope Is Clean
              </p>
            </div>

            <div className="space-y-4 text-base text-[color:var(--ink-editorial)]">
              <p>
                Flat-rate work exists for clients who want certainty. The finish
                line is defined first. Deliverables are explicit. Acceptance
                criteria are agreed on before work begins.
              </p>
              <p>
                If you want a fixed quote that does not drift, this is how it happens.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="flex w-full justify-center lg:justify-start">
                <div className="w-full lg:w-[90%]">
                  <div className="rounded-[28px] border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-3">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-[22px]">
                      <img
                        src={imagePaths.flatRate}
                        alt="Flat-Rate Projects"
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-base text-[color:var(--ink-analytical)]">
                  Common Flat-Rate Engagements
                </p>
                <div className="space-y-4 text-sm text-[color:var(--ink-analytical)]">
                  <p>
                    <span className="text-[color:var(--ink-analytical)]">
                      Brand Voice Kit — $600–$1,200 CAD
                    </span>
                    <span className="mt-2 block text-[color:var(--ink-analytical)]">
                      Tone rules, constraints, patterns, and QA logic so output
                      stays consistent across people, channels, and time.
                    </span>
                  </p>
                  <p>
                    <span className="text-[color:var(--ink-analytical)]">
                      Offer + Positioning Sprint — $900–$1,800 CAD
                    </span>
                    <span className="mt-2 block text-[color:var(--ink-analytical)]">
                      Message hierarchy, objection handling, proof structure, and
                      CTA logic organized so decisions don’t reset.
                    </span>
                  </p>
                  <p>
                    <span className="text-[color:var(--ink-analytical)]">
                      Landing Page Sprint — $900–$2,500 CAD
                    </span>
                    <span className="mt-2 block text-[color:var(--ink-analytical)]">
                      One goal. One path. One clean conversion narrative.
                    </span>
                  </p>
                  <p>
                    <span className="text-[color:var(--ink-analytical)]">
                      Website Launch Map (10 days) — $1,500–$3,000 CAD
                    </span>
                    <span className="mt-2 block text-[color:var(--ink-analytical)]">
                      Sitemap, page goals, content requirements, build sequence,
                      and launch checklist.
                    </span>
                  </p>
                  <p>
                    <span className="text-[color:var(--ink-analytical)]">
                      Full Build — From $5,000 CAD
                    </span>
                    <span className="mt-2 block text-[color:var(--ink-analytical)]">
                      For teams that want a functioning system, not a polished
                      first draft.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="full-build"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] p-5 text-[color:var(--ink-editorial)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
                <div
                  className="flex max-w-2xl flex-col gap-4"
                >
                  <h2
                    data-type-compression="headline"
                    data-type-compression-line-height="1.25"
                    data-type-compression-letter-spacing="0"
                    className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                  >
                    Build With Synerva
                  </h2>
                  <div className="space-y-3 text-sm leading-snug text-[color:var(--ink-editorial)] sm:text-base">
                    <p>
                      Synerva performs the category of work typically handled by
                      senior brand strategists, lead designers, principal writers,
                      and experienced operators.
                    </p>
                    <p>
                      The compression comes from structure, not shortcuts.
                      Strategy, execution, and judgment are not split across
                      roles. They live in one loop.
                    </p>
                    <p>
                      That is why work that normally stretches across quarters can
                      be delivered in days or weeks, and why costs stay in the
                      thousands instead of six figures.
                    </p>
                    <p>This is senior-level work without senior-level overhead.</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <div className="w-full">
                    <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                      <div className="rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-2 sm:p-3">
                        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                          <Image
                            src={imagePaths.build}
                            alt="Build with Synerva visual"
                            fill
                            className="object-cover object-[40%_50%]"
                            sizes="(min-width: 1024px) 36vw, 100vw"
                          />
                        </div>
                      </div>
                      <div className="rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-2 sm:p-3">
                        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                          <Image
                            src={imagePaths.build}
                            alt="Build with Synerva visual"
                            fill
                            className="object-cover object-[60%_50%]"
                            sizes="(min-width: 1024px) 32vw, 100vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10 pt-2 sm:px-10 sm:pb-12 lg:px-16 lg:pb-12">
          <div className="mx-auto flex max-w-6xl justify-center">
            <div className="w-full max-w-[240px]">
              <Link href="/contact" className={styles.btnPrimary}>
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        <section
          id="additional-capabilities"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] p-5 text-[color:var(--ink-editorial)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
              <div className="flex flex-col gap-8">
                <div className="flex max-w-2xl flex-col gap-4">
                  <h2
                    data-type-compression="headline"
                    data-type-compression-line-height="1.25"
                    data-type-compression-letter-spacing="0"
                    className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                  >
                    Additional Capabilities
                  </h2>
                  <div className="space-y-4 text-sm leading-snug text-[color:var(--ink-editorial)] sm:text-base">
                    <div className="space-y-2">
                      <p className="text-base text-[color:var(--ink-structural)]">
                        Writing & Ghostwriting
                      </p>
                      <p>
                        Writing is treated as structure, not volume. Work focuses
                        on voice, logic, proof, and durability across revisions
                        and releases, not just draft quality.
                      </p>
                      <p>
                        Engagements range from shortform copy and campaigns to
                        longform systems and books. Pricing is scoped after intake
                        based on research depth, length, and revision cycles,
                        with milestone-based delivery designed to hold up beyond
                        draft one.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base text-[color:var(--ink-structural)]">
                        Graphic Design
                      </p>
                      <p>
                        Design is approached as a deployable system, not isolated
                        assets. Emphasis is placed on hierarchy, consistency, and
                        cross-channel integrity rather than surface aesthetics.
                      </p>
                      <p>
                        Engagements may be hourly or scoped sprints depending on
                        asset count and system maturity. Deliverables are
                        export-ready, correctly sized, and built to work together
                        across contexts, not just look good in isolation.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base text-[color:var(--ink-structural)]">
                        Plans & Reports
                      </p>
                      <p>
                        Plans and reports are built as decision tools, not
                        presentation artifacts. Work includes business plans,
                        marketing plans, go-to-market strategies, executive slide
                        decks with presentation scripts, analytics summaries,
                        budget models, and strategic reports designed to support
                        clear action.
                      </p>
                    </div>
                    <p className="text-base text-[color:var(--ink-editorial)]">
                      These capabilities are available within Operator Hourly,
                      Flat-Rate Projects, or Build with Synerva engagements.
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="w-full max-w-[300px]">
                    <div className="rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-3">
                      <div className="aspect-[5/4] w-full overflow-hidden rounded-xl">
                        <img
                          src="/offerings-subpage-jan-3/additional-capabilities-4-6.PNG"
                          alt="Additional capabilities visual"
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="clarity-diagnostic"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-3xl border border-[color:var(--offerings-outline-primary)] bg-[color:var(--offerings-panel-fill)] p-5 text-[color:var(--ink-editorial)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div className="flex max-w-2xl flex-col gap-4">
                  <h2
                    data-type-compression="headline"
                    data-type-compression-line-height="1.25"
                    data-type-compression-letter-spacing="0"
                    className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                  >
                    Start with a Clarity Diagnostic
                  </h2>
                  <div className="space-y-3 text-sm leading-snug text-[color:var(--ink-editorial)] sm:text-base">
                    <p>
                      For teams who know something isn’t working but don’t yet
                      want to commit to a full engagement, the Clarity Diagnostic
                      offers a fast, structured entry point.
                    </p>
                    <p>
                      In a short, fixed-scope engagement, constraints are
                      identified, decision bottlenecks are surfaced, and the
                      problem is compressed into clear next steps. Some clients
                      stop there. Others use it to determine whether Operator
                      Hourly, a Flat-Rate Project, or a full Build with Synerva
                      engagement makes sense.
                    </p>
                    <p>No obligation to proceed beyond the diagnostic.</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <div className="flex w-full flex-col">
                    <div
                      className={`${styles.mediaCompactWide} rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-4 sm:p-5`}
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                        <img
                          src="/offerings-subpage-jan-3/clarity-diagnostic-v3.png"
                          alt="Clarity diagnostic visual"
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="next-steps"
          
          className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.25"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-3xl leading-tight text-[color:var(--ink-structural)] sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                >
                  Next Steps
                </h2>
                <div className="space-y-4 text-sm leading-snug text-[color:var(--ink-human)] sm:text-base">
                  <p>
                    You don’t need to commit to a full system build to move
                    forward.
                    <br />
                    You just need to choose where judgment enters the loop.
                  </p>
                  <p>
                    If speed and unblockage matter most, Operator Hourly applies
                    decision-making directly inside live work.
                    <br />
                    If the finish line is clear and you want certainty, Flat-Rate
                    Projects lock scope, criteria, and delivery before execution
                    begins.
                    <br />
                    If what you need is cohesion across strategy, execution, and
                    release, Build With Synerva compresses senior-level work into
                    a single operating system.
                  </p>
                  <p>
                    And if the right entry point isn’t obvious yet, start with a
                    Clarity Diagnostic. It’s designed to surface constraints,
                    define leverage, and determine which path actually makes
                    sense before time or money is wasted.
                  </p>
                  <p>
                    Choose an entry point.
                    <br />
                    The compression happens automatically.
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Get in touch with Synerva"
                  className={styles.btnPrimary}
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex w-full items-center justify-center lg:justify-end">
                <div className="flex w-full max-w-[320px] flex-col lg:max-w-[360px]">
                  <div className="rounded-2xl border border-[color:var(--offerings-outline-secondary)] bg-[color:var(--offerings-panel-fill)] p-4 sm:p-5">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                      <img
                        src="/offerings-subpage-jan-3/next-steps-v3.PNG"
                        alt="Systemic architectural visual"
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
