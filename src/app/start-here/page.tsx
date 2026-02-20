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
            <div className="space-y-8 rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10">
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Build what moves the business.
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl">
                Strategy, brand, digital infrastructure, and automation — delivered as precise upgrades or complete builds.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Book a 30-Minute Clarity Call
                </Link>
                <Link
                  href="#engagement-options"
                  className="inline-flex w-fit rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  View Engagement Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-4xl space-y-8">
                  <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                    You don’t need more activity.
                    <br />
                    You need the right asset built correctly.
                  </h2>
                  <div className="space-y-6 text-base text-white/80 sm:text-lg">
                    <p>Synerva operates across four integrated pillars:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Strategy &amp; Direction</li>
                      <li>Brand &amp; Messaging</li>
                      <li>Digital &amp; Product Builds</li>
                      <li>Automation &amp; Optimization</li>
                    </ul>
                    <p>
                      Engage at the level your situation requires.
                    </p>
                    <p>Sometimes that means sharpening one constraint.</p>
                    <p>Sometimes it means building the entire system.</p>
                  </div>
                </div>

                <div className="flex h-full items-center justify-center">
                  <div className="w-full max-w-sm rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4">
                    <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                  </div>
                </div>
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
            <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10">
              <div className="max-w-4xl space-y-4">
                <h2 className="text-3xl text-white sm:text-4xl">
                  Choose Your Entry Point
                </h2>
                <p className="text-sm text-white/70 sm:text-base">
                  Work begins with clarity. Choose the level of engagement that
                  fits your current need.
                </p>
              </div>

              <div className="mt-8 grid gap-6">
                <article className="glass-panel rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.03] p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white sm:text-3xl">Focused Work</h3>
                      <p className="text-lg text-white">
                        <strong>$600 – $3,000</strong>
                      </p>
                      <p className="text-base text-white/80">
                        Defined scope. Single objective. Fast execution.
                      </p>
                      <p className="text-base text-white/80">
                        For when something exists — but isn’t performing.
                      </p>
                      <div className="space-y-1 text-sm text-white/75 sm:text-base">
                        <p>Typical timeframe: 1–2 weeks</p>
                        <p>Best for: Isolated problems with measurable impact</p>
                      </div>
                      <div className="space-y-2 text-sm text-white/80 sm:text-base">
                        <p>Examples:</p>
                        <ul className="list-disc space-y-1 pl-6">
                          <li>Messaging overhaul for one core page</li>
                          <li>Brand audit + implementation roadmap</li>
                          <li>Offer positioning review</li>
                          <li>Funnel diagnostic with clear action plan</li>
                          <li>Landing page copy (copy only)</li>
                          <li>Strategic decision brief</li>
                          <li>Single workflow automation</li>
                          <li>Ghostwritten thought-leadership article</li>
                        </ul>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                      >
                        Request a Focused Scope
                      </Link>
                    </div>

                    <div className="flex h-full items-center justify-center">
                      <div className="w-full max-w-[260px] rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4">
                        <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                      </div>
                    </div>
                  </div>
                </article>

                <article className="glass-panel rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.04] p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white sm:text-3xl">Project Builds</h3>
                      <p className="text-lg text-white">
                        <strong>$2,000 – $10,000</strong>
                      </p>
                      <p className="text-base text-white/80">
                        Complete assets built from strategy through execution.
                      </p>
                      <p className="text-base text-white/80">
                        For when the core piece doesn’t exist — or needs to be rebuilt properly.
                      </p>
                      <div className="space-y-1 text-sm text-white/75 sm:text-base">
                        <p>Typical timeframe: 2–6 weeks</p>
                        <p>Best for: Foundational business assets</p>
                      </div>
                      <div className="space-y-2 text-sm text-white/80 sm:text-base">
                        <p>Examples:</p>
                        <ul className="list-disc space-y-1 pl-6">
                          <li>Conversion-focused landing page (strategy + design + build)</li>
                          <li>3–8 page website</li>
                          <li>Brand + messaging system refresh</li>
                          <li>Funnel architecture and build</li>
                          <li>AI-assisted content infrastructure</li>
                          <li>Conversion-driven redesign</li>
                          <li>Integrated automation system</li>
                        </ul>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                      >
                        Start a Project
                      </Link>
                    </div>

                    <div className="flex h-full items-center justify-center">
                      <div className="w-full max-w-[260px] rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4">
                        <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                      </div>
                    </div>
                  </div>
                </article>

                <article className="glass-panel rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-10 sm:p-12">
                  <div className="flex items-start justify-between">
                    <div className="w-[60%] max-w-[560px] space-y-4">
                      <h3 className="text-2xl text-white sm:text-3xl">
                        Integrated Builds
                      </h3>
                      <p className="text-lg text-white">
                        <strong>Starting at $10,000</strong>
                      </p>
                      <p className="text-base text-white/80">
                        Strategy, brand, digital infrastructure,
                      </p>
                      <p className="text-base text-white/80">
                        and automation aligned
                      </p>
                      <p className="text-base text-white/80">
                        into one operating system.
                      </p>
                      <div className="h-2" aria-hidden="true" />
                      <p className="text-base text-white/80">
                        For companies ready
                      </p>
                      <p className="text-base text-white/80">
                        to eliminate fragmentation
                      </p>
                      <p className="text-base text-white/80">
                        and build durable architecture.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                      >
                        Discuss an Integrated Build
                      </Link>
                    </div>

                    <div
                      className="integrated-image-placeholder w-[40%] min-h-[240px] rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4"
                    >
                      <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <ExpandablePillars />

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10 lg:col-span-2">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl space-y-5">
                  <h2 className="text-3xl text-white sm:text-4xl">Operator Sessions</h2>
                  <p className="text-base text-white/80 sm:text-lg">
                    High-leverage working sessions focused on decisive progress.
                  </p>
                  <div className="space-y-1 text-base text-white/80 sm:text-lg">
                    <p>Minimum booking: 3-hour block</p>
                    <p>
                      <strong>From $95/hour</strong>
                    </p>
                  </div>
                  <p className="text-base text-white/80 sm:text-lg">
                    Best for founders who need compression, clarity, and forward motion — fast.
                  </p>
                  <p className="text-base text-white/80 sm:text-lg">
                    These sessions are execution-focused, not abstract advisory.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    Book an Operator Session
                  </Link>
                </div>

                <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-6">
                  <div className="aspect-[16/9] w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-[min(92%,72rem)] bg-white/10" />

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-4xl space-y-6">
                  <h2 className="text-3xl text-white sm:text-4xl">
                    A Simple Path From Signal to Build
                  </h2>
                  <p className="text-base text-white/80 sm:text-lg">
                    You define the outcome.
                  </p>
                  <ol className="space-y-4 text-base text-white/80 sm:text-lg">
                    <li>1. Scope and constraints are clarified.</li>
                    <li>2. You receive a structured proposal.</li>
                    <li>3. Work begins.</li>
                    <li>4. You receive finished, usable deliverables.</li>
                  </ol>
                  <p className="whitespace-pre-line text-base text-white/80 sm:text-lg">
                    No vague retainers.
                    {"\n"}
                    No endless discovery loops.
                    {"\n"}
                    No performative process.
                  </p>
                </div>

                <div className="flex h-full items-center justify-center">
                  <div className="w-full max-w-sm rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4">
                    <div className="aspect-square w-full rounded-2xl border border-dashed border-white/25 bg-black/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.06] px-8 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl text-white sm:text-4xl">
                If Something Feels Stuck, Let’s Fix It.
              </h2>
              <div className="space-y-3 text-base text-white/80 sm:text-lg">
                <p>In 30 minutes, you’ll leave knowing:</p>
                <ul className="mx-auto w-fit list-inside list-disc space-y-2 text-left">
                  <li>What the real constraint is</li>
                  <li>What it would take to fix</li>
                  <li>Whether we’re the right fit</li>
                </ul>
                <p>No pitch theater. No vague advice.</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Book a 30-Minute Clarity Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Send a Direct Inquiry
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
