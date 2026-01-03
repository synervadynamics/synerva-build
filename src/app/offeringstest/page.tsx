"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import { SectionIndex } from "@/components/SectionIndex";
import { ScrollProgress } from "@/components/ScrollProgress";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const sectionMap = [
  { id: "hiring", label: "Hiring" },
  { id: "scope-bands", label: "Scope" },
  { id: "core-offerings", label: "Offerings" },
  { id: "final-cta", label: "CTA" },
];

const coreOfferings = [
  {
    title: "Operator Hourly",
    summary:
      "Best for sharp, high-leverage problems where senior judgment creates outsized impact.",
    detail:
      "Operator Hourly is used for audits, positioning, fixes, unblocking stalled work, and fast execution when decisiveness matters more than volume.",
    ratio: "aspect-[3/2]",
  },
  {
    title: "Flat-Rate Projects",
    summary:
      "Defined deliverables, clear acceptance criteria, and a finish line agreed on before work begins.",
    detail:
      "Flat-Rate Projects are built for clients who want certainty without drift, with scope and outcomes locked before execution starts.",
    ratio: "aspect-[3/2]",
  },
  {
    title: "Build with Synerva",
    summary:
      "When strategy, writing, design, build, automation, and analytics need to ship as one coherent release.",
    detail:
      "Build with Synerva is a fully integrated engagement for complex systems that don’t survive piecemeal execution or fragmented ownership.",
    ratio: "aspect-square",
  },
];

export default function OfferingsTestPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeOffering, setActiveOffering] = useState(0);

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

          <div className="flex flex-col gap-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="flex flex-col gap-6 text-balance">
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
                    Whether you need a single intervention or a fully
                    interconnected system, there are clear ways to
                    engage—without drift, noise, or unnecessary process.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-transparent p-0 backdrop-blur-2xl">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-transparent p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                  <div className="overflow-hidden rounded-2xl border border-white/8">
                    <VideoPlaceholder
                      label="Hero image placeholder"
                      ratio="aspect-[4/3]"
                      className="rounded-2xl"
                    />
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
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  WHAT YOU’RE ACTUALLY HIRING
                </p>
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.25"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                >
                  A decision system, not a role or a team
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
                    <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl">
                      <VideoPlaceholder
                        label="Hiring image placeholder"
                        ratio="aspect-[3/4]"
                        className="rounded-2xl"
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
        id="scope-bands"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto max-w-6xl space-y-6 text-white">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/62">
              SCOPE DISCIPLINE
            </p>
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Predictable work. Explicit limits.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-4"
          >
            <div className="w-full self-start h-fit flex flex-col">
              <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 flex items-start">
                <VideoPlaceholder
                  label="Scope visual placeholder"
                  ratio="aspect-[2/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-4 text-lg text-white/75">
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
              <ul className="space-y-4 text-sm text-white/78">
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
          </motion.div>
        </div>
      </section>

      <section
        id="core-offerings"
        className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
      >
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-white">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/62">
              CORE OFFERINGS
            </p>
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Primary entry points
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="bubble-drift grid gap-6 rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:grid-cols-3 lg:p-8"
          >
            {coreOfferings.map((card, index) => (
              <div
                key={card.title}
                onMouseEnter={() => setActiveOffering(index)}
                onFocus={() => setActiveOffering(index)}
                tabIndex={0}
                className={`flex h-full flex-col gap-4 rounded-[2rem] border border-white/12 bg-transparent p-5 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl transition ${
                  activeOffering === index
                    ? "border-white/30 shadow-[0_42px_140px_-80px_rgba(0,0,0,0.82)]"
                    : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <VideoPlaceholder
                    label={`${card.title} placeholder`}
                    ratio={card.ratio}
                    className="rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {card.title}
                  </p>
                  <p className="text-sm text-white/80">{card.summary}</p>
                </div>
                <p
                  className={`overflow-hidden text-sm text-white/70 transition-all duration-300 ${
                    activeOffering === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {card.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="clarity-diagnostic"
        className="relative px-6 pb-20 pt-14 sm:px-10 sm:pb-22 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-18"
      >
        <div className="bubble-drift relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(14,30,52,0.76)] via-[rgba(14,26,42,0.7)] to-[rgba(10,20,34,0.7)] p-8 text-white shadow-[0_52px_170px_-86px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-12 lg:p-14">
          <div className="relative space-y-6 text-white">
            <h2
              data-type-compression="headline"
              data-type-compression-line-height="1.25"
              data-type-compression-letter-spacing="0"
              className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
            >
              Start with a Clarity Diagnostic
            </h2>
            <div className="max-w-3xl space-y-4 text-lg text-white/80">
              <p>
                For teams who know something isn’t working but don’t yet want to
                commit to a full engagement, the Clarity Diagnostic provides a
                fast, structured entry point.
              </p>
              <p>
                In a short, fixed-scope engagement, constraints are identified,
                decision bottlenecks are surfaced, and the problem is compressed
                into clear next steps. Some clients stop there. Others use it to
                determine whether Operator Hourly, a Flat-Rate Project, or a
                full Build with Synerva engagement makes sense.
              </p>
              <p>No obligation to proceed beyond the diagnostic.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="additional-capabilities"
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
              Additional Capabilities
            </h2>
          </div>
          <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
                <h3 className="text-2xl font-semibold">Writing &amp; Ghostwriting</h3>
                <p>
                  Writing is treated as structure, not volume. Work focuses on
                  voice, logic, proof, and durability across revisions and
                  releases, not just draft quality.
                </p>
                <p>
                  Engagements range from shortform copy and campaigns to
                  longform systems and books. Pricing is scoped after intake
                  based on research depth, length, and revision cycles, with
                  milestone-based delivery designed to hold up beyond draft one.
                </p>
              </div>
              <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
                <h3 className="text-2xl font-semibold">Graphic Design</h3>
                <p>
                  Design is approached as a deployable system, not isolated
                  assets. Emphasis is placed on hierarchy, consistency, and
                  cross-channel integrity rather than surface aesthetics.
                </p>
                <p>
                  Engagements may be hourly or scoped sprints depending on asset
                  count and system maturity. Deliverables are export-ready,
                  correctly sized, and built to work together across contexts,
                  not just look good in isolation.
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/50">
              These capabilities are available within Operator Hourly,
              Flat-Rate Projects, or Build with Synerva engagements.
            </p>
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        className="relative overflow-visible px-6 pb-20 pt-14 sm:px-10 sm:pb-22 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-18"
      >
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2236] to-[#0a1320] px-8 py-10 text-white shadow-[0_52px_160px_-82px_rgba(0,0,0,0.84)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-2xl sm:text-3xl">
            If you’re ready to move, choose an entry point and we’ll handle the
            compression.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-black"
          >
            If you’re not sure yet, start with clarity.
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
