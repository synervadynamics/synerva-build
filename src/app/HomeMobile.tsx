import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import styles from "@/app/mobile1/mobile1.module.css";
import homeStyles from "@/app/homepage/homepage.module.css";

export default function HomeMobile() {
  return (
    <main className={`sd-home ${homeStyles.sdHome} text-white`}>
      <Mobile1Shell backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png">
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            HERO
          </p>
          <div
            aria-hidden
            className="relative aspect-[1640/981] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/hero.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[0.72rem] uppercase tracking-[0.5em] text-white/60">
              Synerva Dynamics
            </p>
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              The Power of Many, Engineered for One
            </h1>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Senior-level strategy, systems, and execution—delivered as a single
              coherent loop.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              We remove coordination drag so decisions persist and momentum
              compounds.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            THE PROBLEM
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            Fragmentation Kills Velocity
          </h2>
          <p className="text-[1.05rem] leading-6 text-white/80">
            Most teams don’t slow down because they lack drive.
            <br />
            They slow down because work must pass through too many systems
            before it can move.
            <br />
            <br />
            Each function optimizes locally. Each tool reframes the problem.
            <br />
            Decisions are deferred, reinterpreted, and reset as work crosses
            boundaries.
            <br />
            <br />
            Judgment gets replaced by interfaces.
            <br />
            Momentum gets traded for alignment rituals.
            <br />
            <br />
            What looks like progress becomes controlled motion — constrained,
            buffered, and diluted at every layer.
          </p>
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/fragmentation-v3.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div
            className={`rounded-[1.5rem] bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
          >
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva collapses that fragmentation into one operating system for
              shipping work that holds.
            </p>
          </div>
        </section>

        <section className={`flex flex-col gap-5 ${homeStyles.analytical}`}>
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            How Work Moves
          </p>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
            <Image
              src="/mobile-images/homepage/how-work-moves.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-5 pb-5">
              <h2 className="text-[1.65rem] font-light leading-snug text-white">
                System Guardrails
              </h2>
              <p className="text-[1.05rem] leading-6 text-white/85">
                Replace coordination overhead with clear decisions.
              </p>
              <p className="text-[1.05rem] leading-6 text-white/85">
                Convert repetition into automation without losing intent.
              </p>
              <p className="text-[1.05rem] leading-6 text-white/85">
                Build delivery so progress compounds instead of resetting.
              </p>
            </div>
          </div>
        </section>

        <section className={`flex flex-col gap-5 ${homeStyles.analytical}`}>
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            Systems That Hold
          </p>
          <div className={styles.portraitPair} aria-hidden>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/what-synerva-builds.PNG"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/how-synerva-operates.PNG"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 px-5 py-5">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              What Synerva Builds
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva builds the underlying structure work depends on: shared
              interfaces, reusable components, and non-negotiable boundaries.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Consistency is enforced by the system itself, not by meetings,
              memory, or management.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What emerges is durable capacity that holds as scope, pace, and
              complexity increase.
            </p>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              How Synerva Operates
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva defines how the system responds when plans fail, signals
              conflict, or pressure arrives.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Decisions resolve through explicit priorities and constraints, not
              escalation or consensus.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Work stays controlled under real conditions, advancing without
              noise, drift, or heroics.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            How to Engage
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            Offerings
          </h2>
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/how-to-engage.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[1.05rem] leading-6 text-white/80">
              Operator Hourly for audits, positioning, unblocking, and fast
              decisions where judgment is the product.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Flat-rate projects for defined outcomes with a clean finish line and
              no drift.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Build with Synerva when strategy, writing, design, systems, and
              automation must ship as one release.
            </p>
          </div>
          <Link
            href="/offerings"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            View Offerings
          </Link>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            What You Get
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            What’s Delivered
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[1.05rem] leading-6 text-white/80">
              Strategic direction that clarifies priorities before execution
              begins.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Integrated execution across brand, content, web, and automation.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Durable assets you keep using, not decks you outgrow.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Senior operating judgment without the overhead that usually comes
              with it.
            </p>
          </div>
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/what-you-get.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
        </section>

        <section className={`flex flex-col gap-5 ${homeStyles.analytical}`}>
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            Internal Engines
          </p>
          <div className={styles.landscapeTriple} aria-hidden>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/lucentra.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/verisense.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/synerva-os.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 px-5 py-5">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Systems
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva is built so standards hold, context persists, and decisions
              don’t evaporate between meetings.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Internal systems support the work, but what you hire is the output:
              clarity, execution, and momentum that survives contact with reality.
            </p>
          </div>
          <Link
            href="/systems"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            View Systems
          </Link>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            Merch
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            Studio Artifacts You Can Wear
          </h2>
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/merch-showcase.WEBP"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[1.05rem] leading-6 text-white/80">
              Physical editions derived from the same standards as the work:
              restraint, structure, and durability.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Previewing now, with the first release coming soon.
            </p>
          </div>
          <Link
            href="/merch"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            View Merch
          </Link>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            Writing
          </p>
          <div className={styles.portraitPair} aria-hidden>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/the-rockstar-server-playbook.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/the-reflective-dose.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Written Under Real Conditions
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Long-form thinking shaped by pressure, not theory.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Books and essays that hold up when complexity, time, and people are
              involved.
            </p>
          </div>
          <Link
            href="/#publications"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            View Writing
          </Link>
        </section>

        <SynervaDimensionsSection />

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            Next Step
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            Start With a Plan
          </h2>
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/next-step-v2.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[1.05rem] leading-6 text-white/80">
              A 30-minute session to clarify direction, pressure-test
              assumptions, and choose the cleanest path forward.
            </p>
          </div>
          <Link
            href="/#preview-access"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            Start with a 30-Minute Plan
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
