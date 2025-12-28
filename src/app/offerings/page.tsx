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
  "$100 CAD/hr",
  "Hourly or flat-rate",
  "Scoped bands available",
  "Start with a 30-minute plan",
];

const pricingBullets = [
  "Hourly when the work needs speed and judgment",
  "Flat-rate when the scope can be defined cleanly",
  "If scope expands, you’ll know before it expands",
];

const hourlyRules = [
  "Minimum 1 hour",
  "Billed in 15-minute increments after",
  "Short recap after each working block (what changed, what shipped, what’s next)",
];

const sprintExamples = [
  {
    title: "30-Minute Plan Call — $100 CAD",
    detail: "A focused diagnosis and a ranked launch path.",
  },
  {
    title: "Brand Voice Kit — $600 to $1,200 CAD",
    detail: "Tone rules, constraints, patterns, and QA logic so output stays consistent.",
  },
  {
    title: "Offer + Positioning Sprint — $900 to $1,800 CAD",
    detail: "Message hierarchy, objections, proof structure, and CTA logic.",
  },
  {
    title: "Landing Page Sprint (Copy + Structure + Direction) — $900 to $2,500 CAD",
    detail: "One goal, one path, one clean conversion narrative.",
  },
  {
    title: "Website Launch Map (10 days) — $1,500 to $3,000 CAD",
    detail: "Sitemap, page goals, content requirements, build sequence, launch checklist.",
  },
  {
    title: "Full Build — from $5,000 CAD",
    detail: "When you want a real system, not a pretty first draft.",
  },
];

const contentOfferings = [
  {
    title: "1) Writing (Shortform + Longform)",
    body: "Clear writing that holds up under scrutiny, not just scrolling.",
    formats:
      "Website copy · landing pages · email sequences · case studies · thought leadership · scripts · decks · campaign packs",
    pricing:
      "Writing is billed hourly or quoted as a fixed deliverable after intake, based on research depth and revision intensity.",
    deliverable:
      "A final draft in a clean doc format, with an optional variant set when the output benefits from options (headlines, hooks, CTAs).",
  },
  {
    title: "2) Ghostwriting (Books + Longform)",
    body:
      "If you want a book, you need a system: outline architecture, voice constraints, chapter logic, cadence, and a revision protocol that survives real life.",
    proof: "Already shipped: The Rockstar Server Playbook.",
    options: [
      "Architecture only: outline, chapter map, voice rules, writing plan",
      "Co-writing: you provide raw material, Synerva structures, drafts, and polishes",
      "Full ghostwriting: Synerva drafts the manuscript; you steer and approve",
    ],
    pricing:
      "Book work is quoted after intake because length, interviews, research, and revision cycles change the true scope. You’ll receive a milestone-based estimate, not a hand-wavy number.",
    deliverable:
      "A manuscript delivered in milestones (architecture → draft → revisions → final), plus a clean system for what happens after draft one.",
  },
  {
    title: "3) Graphic Design (Wide Range)",
    body:
      "Design that behaves like a system: consistent under pressure, usable across channels, and built to deploy cleanly.",
    examples:
      "Brand assets · campaign kits · social templates · decks · print · merch graphics · web visuals · content design systems",
    pricing:
      "Design runs hourly or as a scoped sprint depending on number of assets and how defined the brand system already is.",
    deliverable:
      "Export-ready assets sized for their channels, plus source files when relevant and agreed.",
  },
];

const scopeBands = [
  "Band 1: Single asset or short deliverable",
  "Band 2: Campaign pack",
  "Band 3: System build",
  "Band 4: Deep production (books, multi-week production cycles)",
];

const timelineRows = [
  {
    label: "Brand voice kit",
    synerva: "1–3 days ($600–$1,200)",
    typical: "2–4 weeks ($3k–$10k+)",
  },
  {
    label: "Landing page sprint",
    synerva: "2–5 days ($900–$2,500)",
    typical: "2–6 weeks ($4k–$15k+)",
  },
  {
    label: "Website launch map",
    synerva: "5–10 days ($1,500–$3,000)",
    typical: "4–10 weeks ($7k–$25k+)",
  },
  {
    label: "Full brand system",
    synerva: "1–3 weeks (scope-based)",
    typical: "6–12+ weeks (scope-based)",
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
                High-output execution, without the headcount tax.
              </h1>
              <p className="text-base text-white/72">
                Synerva is built around one advantage: decisions persist.
                Standards don’t evaporate. Work compresses instead of
                multiplying. That’s the difference between “busy” and “done.”
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
          <h2 className="text-3xl sm:text-4xl">What Synerva does</h2>
          <p className="text-lg text-white/75">
            Synerva helps founders and teams ship brand, web, content, and
            systems faster and cleaner. That includes positioning and voice,
            writing and ghostwriting, graphic design across formats, web builds,
            and the operational loops that keep output consistent.
          </p>
        </div>
      </section>

      <section
        id="pricing"
        className="relative px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl space-y-6 rounded-[2.5rem] border border-white/12 bg-transparent p-8 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl">Simple pricing. No fog.</h2>
            <p className="text-lg text-white/75">
              Most firms bill you for drag: meetings, handoffs, translation
              layers, and revision loops. Synerva bills you for progress,
              tracked against a clear outcome.
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
            <h2 className="text-3xl sm:text-4xl">Operator Hourly</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              $100 CAD/hr
            </p>
            <p className="text-lg text-white/75">
              Ideal when the goal is momentum: audit, clarify, fix, ship. You’re
              not buying “time.” You’re buying a cleaner outcome with fewer
              cycles.
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
              Flat-rate, when scope is clean.
            </h2>
            <p className="text-lg text-white/75">
              Fixed scope. Defined deliverables. Clear acceptance criteria.
              Built for clients who want a quote that does not drift.
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
            If you want a fixed quote, we define the finish line first.
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
              Content
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Writing, ghostwriting, and design that ships.
            </h2>
            <p className="text-lg text-white/75">
              Content is not “more posts.” It’s structure: voice, rhythm, proof,
              and release logic. Synerva produces shortform, longform, full
              books, and graphic design across applications, with pricing scoped
              to what you’re actually making.
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
                  <p className="mt-3 text-sm text-white/70">
                    Formats: {item.formats}
                  </p>
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
                  Pricing note: {item.pricing}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  What you receive: {item.deliverable}
                </p>
                {"examples" in item ? (
                  <p className="mt-3 text-sm text-white/70">
                    Examples: {item.examples}
                  </p>
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
          <h2 className="text-3xl sm:text-4xl">
            Pricing depends on output, not vibes.
          </h2>
          <p className="text-lg text-white/75">
            To keep it fair and fast, content is priced by scope band after
            intake. You get a clear estimate, then the work moves.
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
              Typical timelines and cost ranges
            </h2>
            <p className="text-sm text-white/70">
              Ranges vary by scope and approval cycles. “Typical firm workflow”
              means multiple roles, handoffs, meetings, and revision loops.
            </p>
          </div>
          <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6">
            <div className="grid gap-3 text-xs uppercase tracking-[0.3em] text-white/60 md:grid-cols-[1.2fr_1fr_1fr]">
              <span>Project</span>
              <span>Synerva</span>
              <span>Typical workflow</span>
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
            The goal isn’t speed for its own sake. It’s momentum without drift:
            fewer loops, tighter QA, clearer proof.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/60 p-10 text-center backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Start with the fastest clarity injection.
          </h2>
          <p className="text-base text-white/72">
            If you’re unsure what to do first, start with the 30-minute plan.
            You’ll leave with a ranked list of interventions and the shortest
            path to lift.
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
