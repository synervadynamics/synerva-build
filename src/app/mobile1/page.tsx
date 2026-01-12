import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import Mobile1Shell from "./Mobile1Shell";
import styles from "./mobile1.module.css";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/mobile1",
});

export const viewport = {
  width: 420,
  initialScale: 1,
};

export default function Mobile1Page() {
  return (
    <main className="bg-[#02050b] text-white">
      <Mobile1Shell>
        <section className="mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            HERO
          </p>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/60">
              Synerva Dynamics
            </p>
            <h1 className="text-3xl font-light leading-snug text-white">
              The Power of Many, Engineered for One
            </h1>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Senior-level strategy, systems, and execution—delivered as a single
              coherent loop.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              We remove coordination drag so decisions persist and momentum
              compounds.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            THE PROBLEM
          </p>
          <h2 className="text-2xl font-light leading-snug text-white">
            Fragmentation Kills Velocity
          </h2>
          <p className="text-[0.95rem] leading-6 text-white/80">
            Most teams don’t stall from lack of ambition. They stall from
            friction: handoffs, resets, and process that replaces judgment.
          </p>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="rounded-[1.5rem] bg-white/[0.04] px-5 py-5">
            <p className="text-[0.95rem] leading-6 text-white/80">
              Synerva collapses that fragmentation into one operating system for
              shipping work that holds.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            How Work Moves
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-5 pb-5">
              <h2 className="text-2xl font-light leading-snug text-white">
                System Guardrails
              </h2>
              <p className="text-[0.95rem] leading-6 text-white/85">
                Replace coordination overhead with clear decisions.
              </p>
              <p className="text-[0.95rem] leading-6 text-white/85">
                Convert repetition into automation without losing intent.
              </p>
              <p className="text-[0.95rem] leading-6 text-white/85">
                Build delivery so progress compounds instead of resetting.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Operating Posture
          </p>
          <div className={styles.portraitPair} aria-hidden>
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
          </div>
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 px-5 py-5">
            <h2 className="text-2xl font-light leading-snug text-white">
              Calm Execution Under Real Conditions
            </h2>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Automation handles the repeatable. Human judgment handles the
              consequential.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              The work stays fast, precise, and stable when conditions aren’t
              ideal.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            How to Engage
          </p>
          <h2 className="text-2xl font-light leading-snug text-white">
            Offerings
          </h2>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[0.95rem] leading-6 text-white/80">
              Operator Hourly for audits, positioning, unblocking, and fast
              decisions where judgment is the product.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Flat-rate projects for defined outcomes with a clean finish line and
              no drift.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Build with Synerva when strategy, writing, design, systems, and
              automation must ship as one release.
            </p>
          </div>
          <Link
            href="/offerings"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            View Offerings
          </Link>
        </section>

        <section className="flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            What You Get
          </p>
          <h2 className="text-2xl font-light leading-snug text-white">
            What’s Delivered
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[0.95rem] leading-6 text-white/80">
              Strategic direction that clarifies priorities before execution
              begins.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Integrated execution across brand, content, web, and automation.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Durable assets you keep using, not decks you outgrow.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Senior operating judgment without the overhead that usually comes
              with it.
            </p>
          </div>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Internal Engines
          </p>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 px-5 py-5">
            <h2 className="text-2xl font-light leading-snug text-white">
              Systems
            </h2>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Synerva is built so standards hold, context persists, and decisions
              don’t evaporate between meetings.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Internal systems support the work, but what you hire is the output:
              clarity, execution, and momentum that survives contact with reality.
            </p>
          </div>
          <Link
            href="/systems"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            View Systems
          </Link>
        </section>

        <section className="flex flex-col gap-5">
          <div className={styles.portraitPair} aria-hidden>
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
          </div>
          <div className="flex flex-col gap-3 px-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Synerva Dimensions
            </p>
            <h2 className="text-2xl font-light leading-snug text-white">
              Constructed Realities
            </h2>
            <p className="text-[0.95rem] leading-6 text-white/80">
              An ongoing artwork series exploring systems, identity, and inner
              architecture through editorial-grade visual worlds.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Each series is built like a real brand or artifact: cohesive,
              structured, and designed to feel operational, not conceptual.
            </p>
          </div>
          <Link
            href="/dimensions"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            View Dimensions
          </Link>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Writing
          </p>
          <div className={styles.portraitPair} aria-hidden>
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
            <div className="aspect-[9/16] w-full rounded-2xl border border-white/12 bg-white/5" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-light leading-snug text-white">
              Written Under Real Conditions
            </h2>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Long-form thinking shaped by pressure, not theory.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Books and essays that hold up when complexity, time, and people are
              involved.
            </p>
          </div>
          <Link
            href="/#publications"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            View Writing
          </Link>
        </section>

        <section className="flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Merch
          </p>
          <h2 className="text-2xl font-light leading-snug text-white">
            Studio Artifacts You Can Wear
          </h2>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[0.95rem] leading-6 text-white/80">
              Physical editions derived from the same standards as the work:
              restraint, structure, and durability.
            </p>
            <p className="text-[0.95rem] leading-6 text-white/80">
              Previewing now, with the first release coming soon.
            </p>
          </div>
          <Link
            href="/merch"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            View Merch
          </Link>
        </section>

        <section className="flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Next Step
          </p>
          <h2 className="text-2xl font-light leading-snug text-white">
            Start With a Plan
          </h2>
          <div
            aria-hidden
            className="aspect-video w-full rounded-2xl border border-white/12 bg-white/5"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[0.95rem] leading-6 text-white/80">
              A 30-minute session to clarify direction, pressure-test
              assumptions, and choose the cleanest path forward.
            </p>
          </div>
          <Link
            href="/#preview-access"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-black"
          >
            Start with a 30-Minute Plan
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
