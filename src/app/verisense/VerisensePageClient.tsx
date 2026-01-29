"use client";

import Link from "next/link";
import { useState } from "react";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";

type Mode = {
  id: string;
  title: string;
  thesis: string;
  body: string;
  flagship?: boolean;
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

const outputs = [
  {
    label: "OUTPUT",
    title: "Signal Timeline",
    body: "A second-by-second map of how communication holds together across the full interaction.",
    why: "Why it matters: It reveals continuity, stress, and recovery that memory erases.",
  },
  {
    label: "OUTPUT",
    title: "Flagged Moments",
    body: "Timestamps where volatility increases or where delivery stabilizes under challenge.",
    why: "Why it matters: Both risk and resilience shape outcomes.",
  },
  {
    label: "OUTPUT",
    title: "Mode-Shaped Report",
    body: "A structured analysis whose emphasis depends on context.",
    why: "Why it matters: Strength in one setting may be risk in another.",
  },
  {
    label: "OUTPUT",
    title: "Coaching Summary",
    body: "Clear articulation of what is working, what is fragile, and what can be reinforced.",
    why: "Why it matters: Improvement starts with recognizing what already holds.",
  },
  {
    label: "ARTIFACT",
    title: "Supporting Artifacts",
    body: "Transcript and signal references grounding each finding.",
    why: "Why it matters: Credibility comes from inspectable evidence.",
  },
] as const;

const pressureBullets = [
  "Where confidence remains stable",
  "Where alignment persists across channels",
  "Where recovery follows stress",
  "Where authenticity signals strengthen rather than erode",
] as const;

const contextModes: Mode[] = [
  {
    id: "finance",
    title: "FINANCE / INVESTOR COMMUNICATION",
    thesis: "Market-moving communication under pressure",
    body: "A central banker, finance minister, or executive delivers forward guidance.\n\nThe data is known.\nThe real signal is everything else.\n\nVerisense maps delivery as a time-based system, tracking cadence, regulation, hesitation, and recovery across the full address. It surfaces where coherence tightens, where confidence persists, and where uncertainty leaks under pressure.\n\nNot to declare deception.\nTo make both credibility and delivery risk legible before they are priced.",
    flagship: true,
  },
  {
    id: "leadership",
    title: "LEADERSHIP / EXECUTIVE COMMUNICATION",
    thesis: "Authority under sustained scrutiny",
    body: "A senior leader addresses an organization during uncertainty.\n\nThe language is controlled.\nThe room is not.\n\nVerisense examines whether confidence holds across the interaction, where authority is reinforced, and where strain accumulates under questioning or improvisation. It distinguishes transient stress from structural instability and highlights whether recovery actually occurs.\n\nThe question is not intent.\nIt is whether the message can carry trust under pressure.",
    flagship: true,
  },
  {
    id: "political",
    title: "POLITICAL SPEECH & PUBLIC MESSAGING",
    thesis: "Credibility under national attention",
    body: "A candidate or official addresses a public audience.\n\nCommentators debate meaning.\nOpponents argue semantics.\nStrategists speculate endlessly.\n\nVerisense ignores all three.\n\nIt evaluates whether delivery remains coherent across topic shifts, where regulation holds, and whether volatility resolves or compounds over time. The output surfaces both credibility signals and credibility risk, grounded in observed behavior.",
    flagship: true,
  },
  {
    id: "media",
    title: "MEDIA & INTERVIEW PERFORMANCE",
    thesis: "Unscripted pressure, public visibility",
    body: "A public figure, executive, or spokesperson responds to live questioning.\n\nControl is partial.\nTiming is unforgiving.\n\nVerisense examines how delivery adapts when questions disrupt prepared structure. It tracks whether regulation holds across interruptions, whether pacing accelerates or fragments, and whether coherence recovers after challenge.\n\nThe focus is not media training.\nIt is whether composure, clarity, and credibility persist when control is reduced.",
  },
  {
    id: "sales",
    title: "SALES & PERSUASION",
    thesis: "Commitment under conversational load",
    body: "A negotiation or sales conversation approaches a decision point.\n\nLanguage remains polished.\nAlignment quietly shifts.\n\nVerisense tracks whether enthusiasm remains grounded, becomes forced, or fractures under resistance. It highlights moments where hesitation appears despite confident phrasing, and where recovery restores coherence and conviction.\n\nThe system does not judge honesty.\nIt surfaces structural alignment at the moment commitment is tested.",
  },
  {
    id: "security",
    title: "SECURITY & CREDIBILITY RISK",
    thesis: "Stress, regulation, and inconsistency",
    body: "An individual is questioned in a high-stakes setting.\n\nVerisense does not infer guilt, innocence, or intent.\n\nInstead, it maps delivery across channels to surface where stress responses intensify, where regulation breaks down, and whether coherence returns over time. Sustained instability and durable recovery are treated differently.\n\nThe output highlights credibility risk, not conclusions, preserving human judgment where it belongs.",
  },
  {
    id: "therapy",
    title: "THERAPY & SUPPORT (NON-DIAGNOSTIC)",
    thesis: "Pacing, guardedness, and recovery",
    body: "A therapeutic or support conversation is reviewed.\n\nVerisense does not diagnose mental states or conditions.\n\nIt observes pacing, congruence, and guardedness across the interaction, highlighting where communication opens, constrains, or stabilizes. Recovery and sustained alignment are treated as signal, not anomaly.\n\nThe system functions as a reflective instrument, supporting practitioner insight without authority claims.",
  },
  {
    id: "education",
    title: "EDUCATION & TEACHING",
    thesis: "Clarity sustained over time",
    body: "An instructor delivers complex material to a group or individual.\n\nUnderstanding does not fail all at once.\nIt erodes quietly.\n\nVerisense tracks whether clarity holds across explanations, where confusion accumulates, and how delivery adapts in response to feedback. It surfaces moments where coherence strengthens as well as where it degrades.\n\nThe focus is not performance.\nIt is sustained communicative effectiveness.",
  },
  {
    id: "support",
    title: "CUSTOMER SUPPORT",
    thesis: "Escalation, regulation, and resolution",
    body: "A customer interaction escalates under frustration or pressure.\n\nVerisense highlights where regulation holds, where it slips, and which moments mark turning points toward resolution or breakdown. It distinguishes between transient frustration and structural misalignment.\n\nThe output supports training, review, and system improvement without attributing fault to individuals.",
  },
  {
    id: "general",
    title: "GENERAL (BASELINE MODE)",
    thesis: "Conservative interpretation without domain assumptions",
    body: "When no specialized context is selected, Verisense applies a conservative baseline lens.\n\nSignals are evaluated for general coherence, volatility, and recovery without domain-specific expectations. Thresholds are intentionally restrained to avoid over-interpretation.\n\nThis mode exists to prevent false precision, not to replace context-specific analysis.",
  },
];

const systemSteps = [
  {
    title: "Input",
    detail:
      "The system can analyze communication from recorded interactions or from live communication streams, allowing signal to be examined retrospectively or as it unfolds.",
  },
  {
    title: "Signal extraction",
    detail:
      "It models delivery as structured signal across voice, expression, posture, pacing, and language, tracked over time and interpreted in context.",
  },
  {
    title: "Channel analysis",
    detail:
      "A second-by-second map of how communication holds together across the full interaction.",
  },
  {
    title: "Fusion",
    detail: "Verisense replaces impression with structure.",
  },
  {
    title: "Mode lens",
    detail: "A structured analysis whose emphasis depends on context.",
  },
  {
    title: "Outputs",
    detail:
      "Each Verisense analysis results in a small, deliberate set of artifacts designed to be inspected, questioned, and used.",
  },
] as const;

const commitments = [
  "Inference without pretense",
  "Strength is signal",
  "No single-cue conclusions",
  "Context is mandatory",
  "Uncertainty is preserved",
] as const;

const renderParagraphs = (text: string) =>
  text
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, idx) => (
      <p key={`${paragraph}-${idx}`} className="whitespace-pre-line">
        {paragraph}
      </p>
    ));

export default function VerisensePageClient() {
  const [activeModeId, setActiveModeId] = useState<string | null>(null);

  return (
    <main className="relative text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20">
        <section className="rounded-[3rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-7 shadow-[0_50px_170px_-90px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-9 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  VERISENSE
                </p>
                <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  VERISENSE
                </h1>
                <p className="text-lg text-white/80 sm:text-xl">
                  Where communication moves outcomes.
                </p>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-white/75">
                {heroParagraphs.slice(0, 3).map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/[0.02] p-5 text-sm tracking-[0.02em] text-white/70">
                <p className="whitespace-pre-line leading-relaxed">
                  {epistemicRestraint}
                </p>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-white/75">
                {renderParagraphs(heroParagraphs[3])}
              </div>
              <div className="flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Work with Synerva
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                >
                  Download the Technical Brief
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:-mr-6">
              <div className="relative w-full max-w-lg rounded-[2.75rem] border border-white/18 bg-black/55 p-6 shadow-[0_36px_120px_-78px_rgba(0,0,0,0.8)]">
                <div className="relative flex min-h-[360px] items-center justify-center rounded-[2.2rem] bg-black/45 p-6 text-center text-sm text-white/60">
                  <div className="pointer-events-none absolute inset-4 rounded-[1.8rem] border border-white/10" />
                  <div className="pointer-events-none absolute left-6 top-6 h-3 w-0.5 bg-white/20" />
                  <div className="pointer-events-none absolute right-6 top-6 h-3 w-0.5 bg-white/20" />
                  <div className="pointer-events-none absolute left-6 bottom-6 h-3 w-0.5 bg-white/20" />
                  <div className="pointer-events-none absolute right-6 bottom-6 h-3 w-0.5 bg-white/20" />
                  [ VERISENSE INSTRUMENT PLATE — SVG / static image placeholder ]
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/55">
                  Illustrative
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl space-y-6 py-6 sm:py-8">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                The Promise
              </p>
              <span className="text-[0.55rem] font-mono uppercase tracking-[0.5em] text-white/35">
                THE PROMISE
              </span>
            </div>
            <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Verisense replaces impression with structure.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/75">
            <p>It makes it possible to:</p>
            <ul className="space-y-2 pl-4 text-base leading-relaxed text-white/75">
              {promiseBullets.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
            <p>It does not replace human judgment.</p>
            <p>It disciplines it.</p>
          </div>
        </section>

        <section className="rounded-[2.75rem] border border-white/10 bg-white/[0.018] p-8 shadow-[0_50px_170px_-90px_rgba(0,0,0,0.82)] backdrop-blur-2xl sm:p-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                What Verisense Produces
              </p>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                Each Verisense analysis results in a small, deliberate set of
                artifacts designed to be inspected, questioned, and used.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {outputs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] p-5"
                >
                  <p className="text-[0.65rem] font-mono uppercase tracking-[0.4em] text-white/55">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.body}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[3rem] bg-white/[0.02] p-10 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.82)] backdrop-blur-2xl sm:p-12">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                What Holds Under Pressure
              </p>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                Verisense is as concerned with durability as it is with
                disruption.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/75">
              Across an interaction, it surfaces:
            </p>
            <ul className="space-y-2 pl-4 text-base leading-relaxed text-white/75">
              {pressureBullets.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-base leading-relaxed text-white/75">
              <p>These patterns matter.</p>
              <p>Markets respond to them.</p>
              <p>Organizations trust them.</p>
              <p>People feel them even when they can’t articulate why.</p>
              <p>Verisense makes them visible.</p>
            </div>
          </div>
        </section>

        <section className="space-y-10 py-8 sm:py-10 my-6 sm:my-10 mb-8 sm:mb-12">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Context Modes
              </p>
              <span className="text-[0.55rem] font-mono uppercase tracking-[0.5em] text-white/35">
                CONTEXT MODES
              </span>
            </div>
            <h2 className="text-3xl leading-tight text-white sm:text-4xl">
              A structured analysis whose emphasis depends on context.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Why it matters: Strength in one setting may be risk in another.
            </p>
          </div>
          <div className="relative sm:-mx-2 lg:-mx-4">
            <div className="pointer-events-none absolute -inset-x-[6%] inset-y-6 rounded-[3.5rem] border border-white/10 bg-black/45" />
            <div className="relative rounded-[3rem] border border-white/16 bg-black/40 p-6 shadow-[0_50px_170px_-90px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {contextModes.map((mode) => {
                    const isExpanded = activeModeId === mode.id;
                    const emphasis = mode.flagship
                      ? "border-white/35 bg-white/[0.02]"
                      : "border-white/14 bg-white/[0.02]";
                    const titleTone = mode.flagship
                      ? "text-white"
                      : "text-white/80";

                    return (
                      <article
                        key={mode.id}
                        onMouseEnter={() => setActiveModeId(mode.id)}
                        onMouseLeave={() => setActiveModeId(null)}
                        className={`flex h-full min-h-[170px] flex-col rounded-2xl border p-5 ${emphasis}`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveModeId((prev) =>
                              prev === mode.id ? null : mode.id
                            )
                          }
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setActiveModeId((prev) =>
                                prev === mode.id ? null : mode.id
                              );
                            }
                          }}
                          onFocus={() => setActiveModeId(mode.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`mode-${mode.id}`}
                          className="text-left"
                        >
                          <div className="space-y-3">
                            <p
                              className={`text-[0.65rem] uppercase tracking-[0.32em] ${titleTone}`}
                            >
                              {mode.title}
                            </p>
                            <p className="text-sm text-white/80">
                              {mode.thesis}
                            </p>
                            <p className="text-[0.55rem] font-mono uppercase tracking-[0.4em] text-white/55">
                              MODE GOVERNS INTERPRETATION
                            </p>
                          </div>
                        </button>
                        <div
                          id={`mode-${mode.id}`}
                          className={`${
                            isExpanded
                              ? "mt-5 max-h-[360px] opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="max-h-[360px] max-w-[32rem] space-y-3 overflow-y-auto pr-3 text-sm leading-relaxed text-white/75">
                            {renderParagraphs(mode.body)}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-black/45 p-5">
                  <div className="flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/50 p-4 text-center text-sm text-white/50">
                    [ ABSTRACT SIGNAL DIAGRAM — illustrative ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2.6rem] border border-white/14 bg-white/[0.02] p-8 shadow-[0_50px_170px_-90px_rgba(0,0,0,0.82)] backdrop-blur-2xl sm:p-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  How the System Works
                </p>
                <span className="text-[0.55rem] font-mono uppercase tracking-[0.5em] text-white/35">
                  HOW THE SYSTEM WORKS
                </span>
              </div>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                How the System Works
              </h2>
            </div>
            <ol className="space-y-6">
              {systemSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-mono text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-white/70">
              The result is not a verdict. It is an inspectable system output.
            </p>
          </div>
        </section>

        <section className="rounded-[2.8rem] bg-white/[0.018] p-7 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-9">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Capability Status
            </p>
            <div className="space-y-3 text-base leading-relaxed text-white/75">
              <p>Verisense is in active development.</p>
              <p>A working, end-to-end system exists.</p>
              <p>It has been tested internally and in limited private contexts.</p>
              <p>It is not yet publicly available.</p>
              <p>Access will be staged.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2.7rem] border border-white/12 bg-white/[0.02] p-8 shadow-[0_36px_120px_-90px_rgba(0,0,0,0.78)] backdrop-blur-2xl sm:p-10 mt-6 sm:mt-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Design Commitments
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm tracking-[0.18em] text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 lg:gap-10 mt-6 sm:mt-8">
          <div className="space-y-5 text-base leading-loose text-white/75">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Where Verisense Fits
            </p>
            <p>
              Verisense is a diagnostic system for human communication. It
              models delivery as structured signal across voice, expression,
              posture, pacing, and language, tracked over time and interpreted
              in context.
            </p>
          </div>
          <div className="space-y-5 text-base leading-loose text-white/75">
            <p>
              The system can analyze communication from recorded interactions or
              from live communication streams, allowing signal to be examined
              retrospectively or as it unfolds.
            </p>
            <p>It does not replace human judgment.</p>
            <p>It disciplines it.</p>
          </div>
        </section>

        <section className="rounded-[3rem] border border-white/12 bg-white/[0.02] p-8 shadow-[0_36px_120px_-90px_rgba(0,0,0,0.72)] backdrop-blur-2xl sm:p-10 mt-8 sm:mt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Availability
              </p>
              <p className="text-base leading-relaxed text-white/75">
                Verisense is not yet publicly released.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                For updates, early access opportunities, or the technical brief:
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
              >
                Work with Synerva
              </Link>
              <Link
                href="/#preview-access"
                className="inline-flex rounded-full border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                Get Verisense updates
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                Download the Technical Brief
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-3xl space-y-4 pb-6 pt-10 sm:pt-14 mt-8 sm:mt-12">
          <p className="text-lg leading-relaxed text-white/80">
            Outcomes rarely move on words alone.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            They move on confidence sustained,\nalignment held,\nand credibility preserved under pressure.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            Verisense exists to observe that reality\nand make it legible where misreading the moment carries cost.
          </p>
        </section>
      </div>
    </main>
  );
}
