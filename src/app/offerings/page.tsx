import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offerings",
});

const heroChips = [
  "Clarity Diagnostic",
  "Operator Hourly",
  "Hourly",
  "Flat-Rate",
];

const pricingBullets = [
  "Hourly\nUsed when speed, judgment, and momentum matter more than formal scoping.",
  "Flat-Rate\nUsed when the finish line can be defined cleanly in advance.",
  "If scope changes, you’ll know before it changes. Nothing expands silently.",
];

const hourlyRules = [
  "How It Works\nMinimum: 1 hour",
  "Billed in 15-minute increments after",
  "Short written recap after each working block:\nwhat changed\nwhat shipped\nwhat happens next",
];

const sprintExamples = [
  {
    title: "Common Flat-Rate Engagements",
    detail: "",
  },
  {
    title: "Brand Voice Kit — $600–$1,200 CAD",
    detail:
      "Tone rules, constraints, patterns, and QA logic so output stays consistent across people, channels, and time.",
  },
  {
    title: "Offer + Positioning Sprint — $900–$1,800 CAD",
    detail:
      "Message hierarchy, objection handling, proof structure, and CTA logic organized so decisions don’t reset.",
  },
  {
    title: "Landing Page Sprint — $900–$2,500 CAD",
    detail: "One goal. One path. One clean conversion narrative.",
  },
  {
    title: "Website Launch Map (10 days) — $1,500–$3,000 CAD",
    detail:
      "Sitemap, page goals, content requirements, build sequence, and launch checklist.",
  },
  {
    title: "Full Build — From $5,000 CAD",
    detail: "For teams that want a functioning system, not a polished first draft.",
  },
];

const contentOfferings = [
  {
    title: "Writing (Shortform + Longform)",
    body:
      "Common formats include website copy, landing pages, email sequences, case studies, scripts, decks, and campaign packs.",
    pricing:
      "Pricing is hourly or quoted as a fixed deliverable after intake, based on research depth and revision intensity.",
    deliverable:
      "You receive a clean final draft, with optional variants when options improve outcomes.",
  },
  {
    title: "Ghostwriting (Books + Longform)",
    body: "Books require systems, not motivation.",
    examples:
      "Engagements may include architecture only, co-writing, or full ghostwriting.",
    pricing:
      "Pricing is quoted after intake due to variability in length, interviews, research, and revision cycles.",
    deliverable:
      "Delivery is milestone-based, with a structure that survives past draft one.",
  },
  {
    title: "Graphic Design",
    body: "Design is treated as a deployable system.",
    examples:
      "Assets are built to hold together across channels, not just look good in isolation.",
    pricing:
      "Pricing runs hourly or as a scoped sprint depending on asset count and system maturity.",
    deliverable:
      "You receive export-ready assets sized correctly for their channels, plus source files when agreed.",
  },
];

const scopeBands = [
  "Band 1: single asset or short deliverable",
  "Band 2: campaign pack",
  "Band 3: system build",
  "Band 4: deep production (books, multi-week cycles)",
];

const timelineRows = [
  {
    label: "Focused intake to understand the situation, constraints, and goal",
    synerva: "A clear framing of the problem you’re actually dealing with.",
    typical: "the core constraint",
  },
  {
    label: "Real-time diagnosis of where leverage actually is",
    synerva: "Enough certainty to act immediately, with or without Synerva.",
    typical: "viable paths forward",
  },
  {
    label: "Identification of what not to work on right now",
    synerva:
      "This is the correct starting point when you don’t want to spend more money guessing.",
    typical: "the fastest way to create lift",
  },
  {
    label: "Ranked next steps, sequenced for impact",
    synerva:
      "A recommendation on whether Synerva is the right fit for the next phase, or not",
    typical: "",
  },
];

export default function OfferingsPage() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-black/60 p-10 shadow-[0_64px_180px_-88px_rgba(0,0,0,0.82)] backdrop-blur-3xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex justify-start">
                <Link
                  href="/"
                  className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
                >
                  ← Home
                </Link>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Offerings
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">
                Senior-level execution, delivered in a small fraction of
                traditional time and cost.
              </h1>
              <p className="text-base text-white/72">
                The homepage explains why Synerva works. This page explains how
                to engage, what you receive, and what to expect when money is
                involved. This is not a list of services. It is a set of clear
                entry points into work that normally requires a firm, multiple
                senior roles, and months of coordination. If this fits what
                you’re trying to ship, the path forward should feel
                straightforward. If it doesn’t, that should be clear as well.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Start with a 30-minute plan
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                >
                  Initiate Contact
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)] aspect-[9/16]">
                <Image
                  src="/visuals/offerings-subpage/offerings-subpage.PNG"
                  alt="Offerings visual"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl">What You’re Actually Hiring</h2>
          <p className="text-lg text-white/75">
            Synerva performs the category of work typically handled by senior
            brand strategists, lead designers, principal writers, and
            experienced operators. The compression comes from structure, not
            shortcuts. Strategy, execution, and judgment are not split across
            roles. They live in one loop. That is why work that normally
            stretches across quarters can be delivered in days or weeks, and
            why costs stay in the thousands instead of six figures. This is
            senior-level work without senior-level overhead.
          </p>
        </div>
      </section>

      <section
        id="pricing"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6 rounded-[2.5rem] border border-white/12 bg-transparent p-8 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl">How Engagement Works</h2>
            <p className="text-lg text-white/75">
              Synerva does not sell retainers by default. It does not sell vague
              scopes. It does not bill for process. Work is priced in one of two
              ways, depending on what the situation requires. Engagement Types
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            {pricingBullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="operator-hourly"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl">
              When Momentum Matters More Than Ceremony
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Operator Hourly
            </p>
            <p className="text-lg text-white/75">
              {"$100 CAD per hour\n\nUsed when the goal is to audit, fix, unblock, or ship without waiting for a full specification cycle.\n\nThis mode exists for live work under uncertainty, where judgment matters more than documentation.\n\nYou are not buying time. You are buying progress with fewer cycles."}
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            {hourlyRules.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="sprints"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl">
              When Scope Is Clean
            </h2>
            <p className="text-lg text-white/75">
              {"Flat-Rate Projects\n\nFlat-rate work exists for clients who want certainty.\n\nThe finish line is defined first. Deliverables are explicit. Acceptance criteria are agreed on before work begins.\n\nIf you want a fixed quote that does not drift, this is how it happens."}
            </p>
          </div>
          <div className="grid gap-4">
            {sprintExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {""}
          </p>
        </div>
      </section>

      <section
        id="content"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              {""}
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Writing, Content, and Design
            </h2>
            <p className="text-lg text-white/75">
              Content here is treated as structure, not volume. That includes
              voice, rhythm, proof, release logic, and how work holds up after
              launch.
            </p>
          </div>
          <div className="grid gap-6">
            {contentOfferings.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.body}</p>
                {"formats" in item ? (
                  <p className="mt-3 text-sm text-white/70">{item.formats}</p>
                ) : null}
                {"proof" in item ? (
                  <p className="mt-3 text-sm text-white/70">{item.proof}</p>
                ) : null}
                {"options" in item && item.options ? (
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {item.options.map((option) => (
                      <li key={option} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-5 rounded-full bg-white/40" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-3 text-sm text-white/70">
                  {item.pricing}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {item.deliverable}
                </p>
                {"examples" in item ? (
                  <p className="mt-3 text-sm text-white/70">{item.examples}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="scope-bands"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-4">
          <h2 className="text-3xl sm:text-4xl">Scope Bands</h2>
          <p className="text-lg text-white/75">
            To keep pricing fair and predictable, work is scoped after intake.
            Pricing reflects output and complexity, not vibes.
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            {scopeBands.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="timelines"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl">
              Start Here When Clarity Is the Bottleneck
            </h2>
            <p className="text-sm text-white/70">
              {"Clarity Diagnostic\n$75–$125 CAD\n\nA short, paid diagnostic designed to collapse uncertainty into a clear decision.\n\nThis is not a consultation and not a sales call. It is a bounded analysis of a real problem you’re actively trying to solve, using the same senior-level judgment applied in full engagements."}
            </p>
          </div>
          <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6">
            <div className="grid gap-3 text-xs uppercase tracking-[0.3em] text-white/60 md:grid-cols-[1.2fr_1fr_1fr]">
              <span>What It Includes</span>
              <span>What You Walk Away With</span>
              <span>Clarity on:</span>
            </div>
            <div className="mt-4 grid gap-4">
              {timelineRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-3 border-t border-white/10 pt-4 text-sm text-white/75 md:grid-cols-[1.2fr_1fr_1fr]"
                >
                  <span className="text-white">{row.label}</span>
                  <span>{row.synerva}</span>
                  <span>{row.typical}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-white/70">
            {""}
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/60 p-10 text-center backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-4xl">
            How to Proceed
          </h2>
          <p className="text-base text-white/72">
            {"Reality Check\nThe goal is not speed for its own sake.\n\nThe goal is senior-level output without senior-level overhead.\n\nThat’s why work ships in days or weeks instead of months, and why costs stay in the thousands instead of six figures.\n\nCompression comes from fewer loops, tighter QA, and preserved judgment—not from cutting corners.\n\nIf you already know what you need, choose the entry point that fits the scope.\n\nIf you don’t, start with the Clarity Diagnostic. You’ll leave knowing exactly what to do next, and why."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
            >
              Start with a 30-minute plan
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
