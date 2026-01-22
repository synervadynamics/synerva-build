import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import styles from "@/app/mobile1/mobile1.module.css";

export default function BackupHomepage3Mobile() {
  return (
    <main className="text-white">
      <Mobile1Shell backgroundImageUrl="/subpage-backgrounds/ChatGPT Image Jan 22, 2026, 12_00_43 AM.png">
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
              src="/mobile-images/homepage/the-problem-v2.png"
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

        <section className="flex flex-col gap-5">
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
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            SYSTEMS THAT HOLD
          </p>
          <h2 className="text-[1.65rem] font-light leading-snug text-white">
            Internal Infrastructure, Visible Outcomes
          </h2>
          <p className="text-[1.05rem] leading-6 text-white/80">
            These systems don’t operate in the background. They define how work
            gets scoped, shipped, and sustained without loss of context.
          </p>
          <div className="grid gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/what-synerva-builds.PNG"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/how-synerva-operates.PNG"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            HOW TO ENGAGE
          </p>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
            <Image
              src="/mobile-images/homepage/how-to-engage.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <p className="text-[1.05rem] leading-6 text-white/80">
            Engage Synerva when the cost of misalignment is high and the cost of
            delay is higher.
          </p>
          <div className="grid gap-4">
            <div
              className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
            >
              <p className="text-[1.05rem] leading-6 text-white/80">
                Strategic Compression
              </p>
              <p className="text-[0.95rem] leading-6 text-white/70">
                Clarity, positioning, and direction with zero drag.
              </p>
            </div>
            <div
              className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
            >
              <p className="text-[1.05rem] leading-6 text-white/80">
                Operating Systems
              </p>
              <p className="text-[0.95rem] leading-6 text-white/70">
                Infrastructure that keeps execution aligned as work scales.
              </p>
            </div>
            <div
              className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
            >
              <p className="text-[1.05rem] leading-6 text-white/80">
                Execution Layers
              </p>
              <p className="text-[0.95rem] leading-6 text-white/70">
                Full-loop delivery across content, design, systems, and release.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            WHAT YOU GET
          </p>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
            <Image
              src="/mobile-images/homepage/what-you-get.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <p className="text-[1.05rem] leading-6 text-white/80">
            Not a dashboard. Not a deck. A repeatable system that locks clarity
            in place, keeps execution aligned, and ships what matters.
          </p>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            THE SYSTEMS
          </p>
          <div className="grid gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/lucentra.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/verisense.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/synerva-os.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[1.05rem] leading-6 text-white/80">
            Three internal systems power Synerva’s output: Lucentra, Verisense,
            and Synerva OS. Each one is built to keep clarity intact as work
            scales.
          </p>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            FIELD NOTES
          </p>
          <div className="grid gap-4">
            <div
              className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
            >
              <h3 className="text-[1.05rem] font-light text-white">
                The Rockstar Server Playbook
              </h3>
              <p className="text-[0.95rem] leading-6 text-white/70">
                A launch-level system for branding, web, and offer clarity.
              </p>
              <Link href="/publications" className="text-[0.9rem] text-white">
                Read more
              </Link>
            </div>
            <div
              className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
            >
              <h3 className="text-[1.05rem] font-light text-white">
                The Reflective Dose
              </h3>
              <p className="text-[0.95rem] leading-6 text-white/70">
                Psychological systems for decision velocity.
              </p>
              <Link href="/publications" className="text-[0.9rem] text-white">
                Read more
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
            <Image
              src="/mobile-images/homepage/merch-showcase.WEBP"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            DIMENSIONS
          </p>
          <div className="grid gap-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/the-fractured-self.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/constructed-innocence.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
          </div>
          <SynervaDimensionsSection />
        </section>

        <section className="flex flex-col gap-5">
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
            NEXT STEP
          </p>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none">
            <Image
              src="/mobile-images/homepage/next-step-v2.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <p className="text-[1.05rem] leading-6 text-white/80">
            If your work is high stakes and the cost of drift is real, Synerva
            can help.
          </p>
          <Link
            href="/start-here"
            className="rounded-full border border-white/20 px-5 py-3 text-center text-[0.95rem] uppercase tracking-[0.2em] text-white"
          >
            Start Here
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
