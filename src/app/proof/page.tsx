import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";

const proofCopy = copy.proof;

export const metadata = buildPageMetadata({
  title: proofCopy.title,
  description: proofCopy.description,
  path: "/proof",
});

const metrics = [
  {
    label: "Avg. engagement lift",
    value: "+38%",
    note: "After voice + UX revamps",
  },
  {
    label: "Automation hours saved",
    value: "250+",
    note: "Quarterly composite",
  },
  {
    label: "Approval cycle reduction",
    value: "-80%",
    note: "Voice QA + Lucentra",
  },
  {
    label: "Campaign velocity",
    value: "2.1×",
    note: "Launch cadence improvement",
  },
];

const snapshots = [
  {
    title: "Engagement spike after voice refactor",
    detail: "Week-over-week lift across hero, CTA, and dwell time.",
    tag: "Lucentra + Synerva OS",
  },
  {
    title: "Automation audit log",
    detail: "Consent, routing, and scoring triggers annotated for compliance.",
    tag: "Synerva OS",
  },
  {
    title: "Sentiment readout from Verisense",
    detail:
      "Tone, conviction, authenticity markers surfaced for executive review.",
    tag: "Verisense",
  },
];

export default function ProofPage() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-black/82 to-cyan-500/14" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/52 p-10 backdrop-blur-3xl shadow-[0_64px_180px_-88px_rgba(0,0,0,0.82)]">
          <div className="flex justify-start">
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
            >
              ← Home
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Proof of Lift
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl">
            {proofCopy.title}
          </h1>
          <p className="text-base text-white/72">{proofCopy.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={proofCopy.primaryCta.href}
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
            >
              {proofCopy.primaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/92 via-black/76 to-black/88" />
        <div className="relative mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Live proof board
              </p>
              <h2 className="text-3xl sm:text-4xl text-white">
                Signals in motion
              </h2>
            </div>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              Request full report
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/12 bg-gradient-to-br from-[#0d1626] via-[#0f1f32] to-[#0a1422] p-4 shadow-[0_28px_120px_-70px_rgba(0,0,0,0.8)]"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/60">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="text-xs text-white/60">{metric.note}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {snapshots.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/12 bg-gradient-to-br from-[#0f2032] via-[#0f1d2c] to-[#0b1422] p-6 shadow-[0_36px_126px_-78px_rgba(0,0,0,0.82)]"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/60">
                  {card.tag}
                </p>
                <h3 className="mt-2 text-xl text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.detail}</p>
                <div className="mt-4 h-32 rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_45%)]" />
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/5 p-6 text-sm text-white/75">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Measurement philosophy
            </p>
            <p className="mt-2">
              Every metric here ties to a real intervention. No vanity
              stats—only evidence of momentum gained. Detailed dashboards and
              audit trails are available on request.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
