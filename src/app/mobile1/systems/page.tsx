import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";
import Mobile1Shell from "../Mobile1Shell";
import styles from "../mobile1.module.css";

export const metadata = buildPageMetadata({
  title: "Systems | Synerva Dynamics",
  description:
    "Internal infrastructure that preserves judgment, reduces operational drag, and lets execution compound.",
  path: "/mobile1/systems",
});

export const viewport = {
  width: 420,
  initialScale: 1,
};

export default function Mobile1SystemsPage() {
  return (
    <main className="text-white">
      <Mobile1Shell>
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/systems/systems-hero.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Systems
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Internal Engines. Public Outcomes.
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva is built around a simple advantage: decisions persist.
              <br />
              Standards don’t evaporate. Context doesn’t reset between meetings,
              tools, or phases of work.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These systems are not products. They are internal infrastructure
              designed to preserve judgment, reduce operational drag, and allow
              execution to compound instead of restarting.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What you hire is not the system.
              <br />
              You hire the results the system makes possible.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Why Systems Exist
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The Cost of Resetting Context
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Most organizations lose momentum not because they choose poorly,
              but because their decisions fail to survive contact with reality.
              <br />
              Context fractures. Standards slip. Work is re-explained instead of
              extended.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva’s internal systems exist to prevent that erosion.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/systems-homepage-logos/lucentra-homepage-v3.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Lucentra
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Strategy Intelligence Layer
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Lucentra is designed to preserve how a team thinks, decides, and
              writes as work scales. It captures judgment, not templates, and
              enforces clarity across revisions and execution phases.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Its purpose is simple: direction should survive pressure, not
              dissolve under it.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              In private development. Not publicly released.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/systems-homepage-logos/verisense-homepage.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Verisense
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Behavioral Signal Engine
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Verisense is built to surface what communication is doing, not
              just what it says. It focuses on tone, intent, confidence, and
              friction—signals that shape outcomes long before content does.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The goal is fewer misreads, clearer conversations, and faster
              alignment under real conditions.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              In private development. Not publicly released.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/systems-homepage-logos/synerva-os-homepage.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Synerva OS
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Operational Structure Layer
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva OS provides the scaffolding for execution: workflows,
              ownership clarity, and automation guardrails that don’t turn work
              into process theater.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It exists so progress moves forward without requiring constant
              coordination to keep it alive.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              In private development. Not publicly released.
            </p>
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
