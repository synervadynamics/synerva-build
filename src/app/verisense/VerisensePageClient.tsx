"use client";

import Link from "next/link";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import { CascadingText } from "@/components/CascadingText";

type Output = {
  title: string;
  body: string;
  why: string;
};

const heroParagraphs = [
  "Communication already determines outcomes.\nVerisense exists to observe how.",
  "Verisense is a diagnostic system for human communication. It models delivery as structured signal across voice, expression, posture, pacing, and language, tracked over time and interpreted in context.",
  "The system can analyze communication from recorded interactions or from live communication streams, allowing signal to be examined retrospectively or as it unfolds.",
  "Its purpose is to surface patterns of strength, alignment, strain, and recovery,\nso judgment can operate on evidence rather than intuition\nwhen outcomes are at stake.",
] as const;

const epistemicRestraint =
  "Not to guess blindly.\nNot to confuse statistical inference with certainty.\nNot to flatten human behavior into scores without context.";

const promiseBullets = [
  "See where communication holds, not just where it breaks",
  "Understand why a moment mattered, not just that it felt significant",
  "Confirm strength and credibility under pressure, not only detect risk",
  "Improve delivery without turning judgment into surveillance",
] as const;

const outputs: Output[] = [
  {
    title: "Signal Timeline",
    body: "A second-by-second map of how communication holds together across the full interaction.",
    why: "Why it matters: It reveals continuity, stress, and recovery that memory erases.",
  },
  {
    title: "Flagged Moments",
    body: "Timestamps where volatility increases or where delivery stabilizes under challenge.",
    why: "Why it matters: Both risk and resilience shape outcomes.",
  },
  {
    title: "Mode-Shaped Report",
    body: "A structured analysis whose emphasis depends on context.",
    why: "Why it matters: Strength in one setting may be risk in another.",
  },
  {
    title: "Coaching Summary",
    body: "Clear articulation of what is working, what is fragile, and what can be reinforced.",
    why: "Why it matters: Improvement starts with recognizing what already holds.",
  },
  {
    title: "Supporting Artifacts",
    body: "Transcript and signal references grounding each finding.",
    why: "Why it matters: Credibility comes from inspectable evidence.",
  },
];

const pressureBullets = [
  "Where confidence remains stable",
  "Where alignment persists across channels",
  "Where recovery follows stress",
  "Where authenticity signals strengthen rather than erode",
] as const;

const contextModes = [
  "Finance / Investor communication",
  "Leadership / Executive communication",
  "Political speech & public messaging",
  "Media & interview performance",
  "Sales & persuasion",
  "Security & credibility risk",
  "Therapy & support (non-diagnostic)",
  "Education & teaching",
  "Customer support",
  "General (baseline mode)",
] as const;

const commitments = [
  "Inference without pretense",
  "Strength is signal",
  "No single-cue conclusions",
  "Context is mandatory",
  "Uncertainty is preserved",
] as const;

export default function VerisensePageClient() {
  return (
    <main className="relative bg-[#0E1514] text-[#DCD8D1]">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/verisense.png" />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <section className="px-6 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
          <div className="mx-auto max-w-6xl rounded-[3rem] border border-[#E6E3DC]/70 bg-[#121416]/85 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:items-start">
              <div className="max-w-3xl">
                <div className="space-y-5 sm:space-y-6">
                  <h1 className="text-4xl leading-tight text-[#DCD8D1] sm:text-5xl lg:text-6xl">
                    Verisense
                  </h1>
                  <p className="text-lg text-[#DCD8D1]/80 sm:text-xl">
                    Where communication moves outcomes.
                  </p>
                </div>
                <div className="mt-10 space-y-6 text-base leading-relaxed text-[#DCD8D1]/75 sm:mt-12 sm:space-y-7">
                  <p className="whitespace-pre-line">{heroParagraphs[0]}</p>
                  <p className="whitespace-pre-line">{heroParagraphs[2]}</p>
                  <p className="whitespace-pre-line">
                    Verisense replaces impression with structure.
                  </p>
                </div>
                <div className="mt-10 max-w-3xl text-base leading-relaxed text-[#DCD8D1]/75 sm:mt-12">
                  <p className="whitespace-pre-line">{heroParagraphs[3]}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#DCD8D1]/70 sm:mt-12">
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#E6E3DC]/70 px-5 py-3 text-[#DCD8D1]/85 transition hover:border-[#E6E3DC]/85 hover:text-[#DCD8D1]"
                  >
                    Work with Synerva
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#E6E3DC]/70 px-5 py-3 text-[#DCD8D1]/75 transition hover:border-[#E6E3DC]/85 hover:text-[#DCD8D1]/90"
                  >
                    Download the technical brief
                  </Link>
                </div>
              </div>
              <div className="flex justify-start lg:justify-end">
                <div
                  className="aspect-[9/16] w-full max-w-xs rounded-[2.5rem] border border-[#E6E3DC]/45 bg-[#121416]/85 p-5 text-center text-sm text-[#DCD8D1]/55 sm:max-w-sm"
                  role="img"
                  aria-label="Verisense hero image placeholder"
                >
                  <div className="flex h-full items-center justify-center rounded-[2rem] border border-[#E6E3DC]/45">
                    9:16 image placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="px-6 py-4 sm:px-8 sm:py-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <CascadingText
              className="text-[#DCD8D1]/70"
              items={[
                "Structure before interpretation.",
                "Context compounds.",
                "Signal survives pressure.",
              ]}
              speed={140}
            />
          </div>
        </div>

        <section className="px-6 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-6xl rounded-[3rem] border border-[#E6E3DC]/70 bg-[#121416]/88 p-10 sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="max-w-xl space-y-6 text-base leading-relaxed text-[#DCD8D1]/75">
                <div className="space-y-3">
                  <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                    The Instrument
                  </h2>
                </div>
                <p className="whitespace-pre-line">{heroParagraphs[1]}</p>
                <div className="space-y-2 text-sm text-[#DCD8D1]/60">
                  <p className="whitespace-pre-line">{epistemicRestraint}</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="w-full max-w-md">
                  <div
                    className="aspect-[4/5] w-full rounded-[2.5rem] bg-[#121416]/85 p-6"
                    role="img"
                    aria-label="Verisense instrument plate placeholder"
                  >
                    <div className="flex h-full items-center justify-center rounded-[2rem] bg-[#121416]/90 text-center text-sm text-[#DCD8D1]/55">
                      Instrument plate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-3">
              <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                What Verisense Reveals
              </h2>
              <p className="text-base leading-relaxed text-[#DCD8D1]/75">
                It makes it possible to:
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-[#DCD8D1]/75">
              {promiseBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[#9FA6A0]/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-base leading-relaxed text-[#DCD8D1]/75">
              <p>It does not replace human judgment.</p>
              <p>It disciplines it.</p>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl rounded-[3rem] border border-[#E6E3DC]/45 bg-[#121416]/85 p-8 sm:p-9 lg:p-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                  Context Modes
                </h2>
                <p className="text-base leading-relaxed text-[#DCD8D1]/70">
                  A structured analysis whose emphasis depends on context.
                </p>
              </div>
              <ul className="grid gap-4 pt-4 text-sm text-[#DCD8D1]/70 sm:grid-cols-2">
                {contextModes.map((mode) => (
                  <li key={mode} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[#9FA6A0]/60" />
                    <span>{mode}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                Outputs
              </h2>
              <p className="text-base leading-relaxed text-[#DCD8D1]/75">
                Each Verisense analysis results in a small, deliberate set of
                artifacts designed to be inspected, questioned, and used.
              </p>
            </div>
            <div className="rounded-[3rem] border border-[#E6E3DC]/45 bg-[#121416]/85 p-7 sm:p-8">
              <div className="space-y-7">
                {outputs.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="text-lg text-[#DCD8D1]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#DCD8D1]/75">
                      {item.body} {item.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                What Holds Under Pressure
              </h2>
              <p className="text-base leading-relaxed text-[#DCD8D1]/75">
                Verisense is as concerned with durability as it is with
                disruption.
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#DCD8D1]/75">
              Across an interaction, it surfaces:
            </p>
            <ul className="space-y-4 text-base leading-relaxed text-[#DCD8D1]/75">
              {pressureBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[#9FA6A0]/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-base leading-relaxed text-[#DCD8D1]/75">
              <p>These patterns matter.</p>
              <p>Markets respond to them.</p>
              <p>Organizations trust them.</p>
              <p>People feel them even when they can’t articulate why.</p>
              <p>Verisense makes them visible.</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 sm:pb-28 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[3rem] border border-[#E6E3DC]/70 bg-[#121416]/85 p-8 sm:p-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl leading-tight text-[#DCD8D1] sm:text-4xl">
                  System Commitments
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-[#DCD8D1]/70">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-4 flex-shrink-0 rounded-full bg-[#9FA6A0]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 text-base leading-relaxed text-[#DCD8D1]/75">
                <p>Verisense is in active development.</p>
                <p>A working, end-to-end system exists.</p>
                <p>It has been tested internally and in limited private contexts.</p>
                <p>It is not yet publicly available.</p>
                <p>Access will be staged.</p>
                <p>
                  For updates, early access opportunities, or the technical
                  brief:
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-[#DCD8D1]/70">
                <Link
                  href="/contact"
                  className="rounded-full border border-[#E6E3DC]/70 px-5 py-3 text-[#DCD8D1]/85 transition hover:border-[#E6E3DC]/85 hover:text-[#DCD8D1]"
                >
                  Work with Synerva
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#E6E3DC]/70 px-5 py-3 text-[#DCD8D1]/75 transition hover:border-[#E6E3DC]/85 hover:text-[#DCD8D1]/90"
                >
                  Download the technical brief
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
