import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import ExpandablePillars from "./ExpandablePillars";

export const metadata = buildPageMetadata({
  title: "Start Here — Synerva Dynamics",
  description: "Work with Synerva Dynamics.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <div className="relative bg-[var(--bg)] text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[2] bg-black/80" />

      <div className="relative z-10">
        <section className="relative overflow-visible px-6 py-28 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <div className="space-y-8">
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Build what actually moves the business forward.
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl">
                Strategy, brand, digital builds, and automation — delivered as
                focused upgrades or complete project builds.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Book a 20-Minute Clarity Call
                </Link>
                <Link
                  href="#engagement-options"
                  className="inline-flex w-fit rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  See Engagement Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl space-y-8">
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                You Don’t Need More Activity.
                <br />
                You Need the Right Asset Built Correctly.
              </h2>
              <div className="space-y-6 text-base text-white/80 sm:text-lg">
                <p>Synerva works across four integrated pillars:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Strategy &amp; Direction</li>
                  <li>Brand &amp; Messaging</li>
                  <li>Digital &amp; Product Builds</li>
                  <li>Automation &amp; Optimization</li>
                </ul>
                <p>You can engage at any level.</p>
                <p>
                  Some clients need refinement.
                  <br />
                  Others need something built from the ground up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section
          id="engagement-options"
          className="relative overflow-visible px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-4xl space-y-4">
              <h2 className="text-3xl text-white sm:text-4xl">
                Choose Your Entry Point
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
                Work begins with clarity. Choose the level of engagement that
                fits your current need.
              </p>
            </div>

            <div className="grid gap-6">
              <article className="glass-panel rounded-3xl border border-white/15 bg-white/[0.03] p-8 sm:p-10">
                <div className="space-y-4">
                  <h3 className="text-2xl text-white sm:text-3xl">Focused Work</h3>
                  <p className="text-lg text-white">
                    <strong>$600 – $3,000</strong>
                  </p>
                  <p className="text-base text-white/80">
                    Precision upgrades. Defined scope. Rapid turnaround.
                  </p>
                  <p className="text-base text-white/80">
                    For when something exists — but needs to be clarified,
                    repaired, or strengthened.
                  </p>
                  <div className="space-y-1 text-sm text-white/75 sm:text-base">
                    <p>Typical timeframe: 1–2 weeks</p>
                    <p>Best for: Solving one specific problem</p>
                  </div>
                  <div className="space-y-2 text-sm text-white/80 sm:text-base">
                    <p>Examples (bullet list):</p>
                    <ul className="list-disc space-y-1 pl-6">
                      <li>Messaging refinement (1 page)</li>
                      <li>Brand audit with action roadmap</li>
                      <li>Offer architecture review</li>
                      <li>Funnel diagnostic</li>
                      <li>Landing page copy only</li>
                      <li>Strategic brief</li>
                      <li>Workflow automation (single system)</li>
                      <li>Thought leadership article</li>
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    Request Focused Scope
                  </Link>
                </div>
              </article>

              <article className="glass-panel rounded-3xl border border-white/15 bg-white/[0.04] p-8 sm:p-10">
                <div className="space-y-4">
                  <h3 className="text-2xl text-white sm:text-3xl">Project Builds</h3>
                  <p className="text-lg text-white">
                    <strong>$2,000 – $10,000</strong>
                  </p>
                  <p className="text-base text-white/80">
                    Complete assets built from strategy through execution.
                  </p>
                  <p className="text-base text-white/80">
                    For when you need something substantial created or rebuilt
                    properly.
                  </p>
                  <div className="space-y-1 text-sm text-white/75 sm:text-base">
                    <p>Typical timeframe: 2–6 weeks</p>
                    <p>Best for: Building core business assets</p>
                  </div>
                  <div className="space-y-2 text-sm text-white/80 sm:text-base">
                    <p>Examples:</p>
                    <ul className="list-disc space-y-1 pl-6">
                      <li>Full landing page build</li>
                      <li>3–8 page website</li>
                      <li>Brand + messaging refresh</li>
                      <li>Funnel build</li>
                      <li>AI content infrastructure</li>
                      <li>Conversion-focused redesign</li>
                      <li>Automation system build</li>
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    Start a Project
                  </Link>
                </div>
              </article>

              <article className="glass-panel rounded-3xl border border-white/15 bg-white/[0.05] p-10 sm:p-12">
                <div className="space-y-4">
                  <h3 className="text-2xl text-white sm:text-3xl">
                    Integrated Build
                  </h3>
                  <p className="text-lg text-white">
                    <strong>Starting at $10,000</strong>
                  </p>
                  <p className="text-base text-white/80">
                    Strategy, brand, digital, and automation aligned into one
                    system.
                  </p>
                  <p className="text-base text-white/80">
                    For companies ready to eliminate fragmentation and build
                    durable infrastructure.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    Discuss Integrated Build
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <ExpandablePillars />

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl space-y-5">
              <h2 className="text-3xl text-white sm:text-4xl">Operator Sessions</h2>
              <p className="text-base text-white/80 sm:text-lg">
                Senior-level working sessions focused on decisive progress.
              </p>
              <div className="space-y-1 text-base text-white/80 sm:text-lg">
                <p>Minimum booking: 3-hour block</p>
                <p>
                  <strong>From $95/hour</strong>
                </p>
              </div>
              <p className="text-base text-white/80 sm:text-lg">
                For founders who need compression and clarity fast.
              </p>
              <p className="text-base text-white/80 sm:text-lg">
                These sessions are execution-focused, not abstract advisory.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
              >
                Book Operator Session
              </Link>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6">
              <div className="aspect-[16/9] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
              <p className="mt-4 text-sm text-white/70">
                Operator Session Visual Placeholder
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl text-white sm:text-4xl">Simple Process</h2>
              <p className="text-base text-white/80 sm:text-lg">
                Work is structured, defined, and direct.
              </p>
              <ol className="space-y-4 text-base text-white/80 sm:text-lg">
                <li>1. You describe the outcome you need.</li>
                <li>2. I clarify scope and constraints.</li>
                <li>3. You receive a defined proposal.</li>
                <li>4. Work begins.</li>
                <li>5. You receive finished, usable deliverables.</li>
              </ol>
              <p className="whitespace-pre-line text-base text-white/80 sm:text-lg">
                No vague retainers.
                {"\n"}
                No endless discovery loops.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-white/[0.06] px-8 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl text-white sm:text-4xl">
                If Something Feels Stuck, Let’s Fix It.
              </h2>
              <div className="space-y-3 text-base text-white/80 sm:text-lg">
                <p>You’ll leave a clarity call knowing:</p>
                <p>What the actual problem is</p>
                <p>What it would cost to fix</p>
                <p>Whether we’re a fit</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Book a 20-Minute Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Send Direct Inquiry
                </Link>
              </div>
              <p className="text-sm text-white/70">Response within 24 business hours.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
