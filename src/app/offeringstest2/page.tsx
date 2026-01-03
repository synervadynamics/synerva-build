"use client";

import Link from "next/link";
import Image from "next/image";
import { copy } from "@/data/copy";
import { SectionIndex } from "@/components/SectionIndex";
import { ScrollProgress } from "@/components/ScrollProgress";

const imagePaths = {
  hero: "/offerings-subpage-jan-3/hero.PNG",
  hiring: "/offerings-subpage-jan-3/what-you're-actually-hiring.PNG",
  scope: "/offerings-subpage-jan-3/scope-discipline.PNG",
  operator: "/offerings-subpage-jan-3/operator-hourly.PNG",
  flatRate: "/offerings-subpage-jan-3/flat-rate-projects.jpg",
  build: "/offerings-subpage-jan-3/build-with-synerva.PNG",
} as const;

const sectionMap = [
  { id: "hiring", label: "Hiring" },
  { id: "scope-discipline", label: "Scope" },
  { id: "operator-hourly", label: "Hourly" },
  { id: "flat-rate-projects", label: "Flat-Rate" },
  { id: "build-with-synerva", label: "Build" },
];

export default function OfferingsTestPage() {
  return (
    <main className="relative text-white">
      <ScrollProgress />

      <section
        id="hero"
        className="relative min-h-screen px-6 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16 lg:px-16 lg:pb-10 lg:pt-20"
      >
        <div className="hero-grid" />
        <div className="hero-gradient" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
          <header className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-[0.5em] text-white/70 hover:text-white"
            >
              Synerva Dynamics
            </Link>
            <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              {copy.global.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <SectionIndex sections={sectionMap} />
          </header>

          <div className="flex flex-1 flex-col justify-center">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="flex flex-col gap-6 text-balance lg:min-h-[70vh] lg:justify-center">
                <h1
                  data-type-compression="headline"
                  data-type-compression-line-height="1.05"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl [--section-title-size:2.25rem] [--section-title-line:2.5rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:3rem] sm:[--section-title-line:3rem] lg:[--section-title-size:3.75rem] lg:[--section-title-line:3.75rem] xl:[--section-title-size:4.5rem] xl:[--section-title-line:4.5rem]"
                >
                  <span className="reveal-line">
                    <span className="block">
                      Choose the entry point. We’ll do the compression.
                    </span>
                  </span>
                </h1>
                <div className="space-y-4 text-lg text-white/80 sm:text-xl">
                  <p>
                    Most firms sell isolated services. Synerva applies
                    intelligence across the full loop, so work ships faster,
                    costs less, and doesn’t require babysitting after launch.
                  </p>
                  <p>
                    This work is not driven by volume, ceremony, or handoffs. It
                    is driven by structure, judgment, and release logic.
                  </p>
                  <p>
                    Whether you need a single intervention or a fully
                    interconnected system, there are clear ways to
                    engage—without drift, noise, or unnecessary process.
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center lg:justify-end">
                <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-transparent p-0 backdrop-blur-2xl">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-transparent p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                    <div className="relative aspect-[9/16] w-full rounded-2xl border border-white/8 lg:h-[70vh] lg:w-auto">
                      <Image
                        src={imagePaths.hero}
                        alt="Synerva Dynamics offerings hero"
                        fill
                        className="object-contain"
                        sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, 100vw"
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

      <section
        id="hiring"
        className="relative px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-10"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.25"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                >
                  What You’re Actually Hiring
                </h2>
                <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
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
                  <div className="rounded-2xl border border-[#E0DCD4] bg-white/[0.04] p-3 sm:p-4">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={imagePaths.hiring}
                        alt="What you’re actually hiring"
                        fill
                        className="object-cover"
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

      <section
        id="scope-discipline"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto max-w-6xl space-y-6 text-white">
          <div className="space-y-4">
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Scope Discipline
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center">
            <div className="w-full">
              <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
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
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="space-y-4 text-base text-white/75">
                <p>
                  To keep work predictable and pricing fair, all engagements are
                  scoped after intake. Pricing reflects output and complexity,
                  not vibes.
                </p>
                <p>
                  Every project lives inside a defined scope band. Expansion is
                  deliberate. Nothing grows silently, and expectations don’t
                  shift midstream.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-white/78">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>Band 1: Single asset or short deliverable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>Band 2: Campaign pack or multi-asset set</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>Band 3: System build</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>
                    Band 4: Deep production (books, multi-week cycles)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="operator-hourly"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 text-white">
          <div className="space-y-2">
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Operator Hourly
            </h2>
            <p className="text-base text-white/75">
              When Momentum Matters More Than Ceremony
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 lg:max-w-[760px]">
              <Image
                src={imagePaths.operator}
                alt="Operator Hourly visual"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 760px, 100vw"
              />
            </div>
          </div>

          <div className="space-y-4 text-base text-white/75">
            <p className="text-lg text-white/85">$100 CAD per hour</p>
            <p>
              Used when the goal is to audit, fix, unblock, or ship without
              waiting for a full specification cycle. This mode exists for live
              work under uncertainty, where judgment matters more than
              documentation.
            </p>
            <p>You are not buying time. You are buying progress with fewer cycles.</p>
            <div className="space-y-3">
              <p className="text-base text-white/85">How It Works</p>
              <ul className="space-y-3 text-sm text-white/78">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>Minimum: 1 hour</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>Billed in 15-minute increments after</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-white/40" />
                  <span>
                    Short written recap after each working block:
                    <span className="mt-2 block text-white/70">
                      what changed
                    </span>
                    <span className="block text-white/70">what shipped</span>
                    <span className="block text-white/70">what happens next</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="flat-rate-projects"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 text-white">
          <div className="space-y-2">
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Flat-Rate Projects
            </h2>
            <p className="text-base text-white/75">When Scope Is Clean</p>
          </div>

          <div className="rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 lg:max-w-[760px]">
              <Image
                src={imagePaths.flatRate}
                alt="Flat-Rate Projects visual"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 760px, 100vw"
              />
            </div>
          </div>

          <div className="space-y-4 text-base text-white/75">
            <p>
              Flat-rate work exists for clients who want certainty. The finish
              line is defined first. Deliverables are explicit. Acceptance
              criteria are agreed on before work begins.
            </p>
            <p>If you want a fixed quote that does not drift, this is how it happens.</p>
            <div className="space-y-3">
              <p className="text-base text-white/85">Common Flat-Rate Engagements</p>
              <div className="space-y-4 text-sm text-white/75">
                <p>
                  <span className="text-white">Brand Voice Kit — $600–$1,200 CAD</span>
                  <span className="mt-2 block text-white/70">
                    Tone rules, constraints, patterns, and QA logic so output
                    stays consistent across people, channels, and time.
                  </span>
                </p>
                <p>
                  <span className="text-white">
                    Offer + Positioning Sprint — $900–$1,800 CAD
                  </span>
                  <span className="mt-2 block text-white/70">
                    Message hierarchy, objection handling, proof structure, and
                    CTA logic organized so decisions don’t reset.
                  </span>
                </p>
                <p>
                  <span className="text-white">
                    Landing Page Sprint — $900–$2,500 CAD
                  </span>
                  <span className="mt-2 block text-white/70">
                    One goal. One path. One clean conversion narrative.
                  </span>
                </p>
                <p>
                  <span className="text-white">
                    Website Launch Map (10 days) — $1,500–$3,000 CAD
                  </span>
                  <span className="mt-2 block text-white/70">
                    Sitemap, page goals, content requirements, build sequence,
                    and launch checklist.
                  </span>
                </p>
                <p>
                  <span className="text-white">Full Build — From $5,000 CAD</span>
                  <span className="mt-2 block text-white/70">
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
        id="build-with-synerva"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.25"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                >
                  Build With Synerva
                </h2>
                <p className="text-sm text-white/60">
                  What You’re Actually Hiring
                </p>
                <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
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
                <div className="flex w-full flex-col">
                  <div className="rounded-2xl border border-[#E0DCD4] bg-white/[0.04] p-3 sm:p-4">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={imagePaths.build}
                        alt="Build with Synerva visual"
                        fill
                        className="object-cover"
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
    </main>
  );
}
