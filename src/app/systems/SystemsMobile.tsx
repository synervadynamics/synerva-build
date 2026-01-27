import Image from "next/image";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import SystemsOverviewSection from "@/components/systems/SystemsOverviewSection";

export default function SystemsMobile() {
  return (
    <main className="bg-[#05070c] text-white">
      <Mobile1Shell
        showBackButton
        backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png"
      >
        <div className="-mx-5 -mt-2 mb-2">
          <SystemsOverviewSection />
        </div>

        <section
          className={`mt-2 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.9rem] font-light leading-tight text-white">
              Lucentra
            </h2>
            <p className="text-[0.95rem] uppercase tracking-[0.28em] text-white/60">
              Strategic Continuity Engine
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[1.05rem] leading-7 text-white/80">
            <p className="whitespace-pre-line">
              Lucentra is the system that ensures strategy survives contact with reality.
            </p>
            <p className="whitespace-pre-line">
              It preserves the logic behind decisions, not just the decisions themselves. Assumptions, dependencies, constraints, and tradeoffs are captured as structure, so forward movement doesn’t require constant re-explanation or reinvention.
            </p>
            <p className="whitespace-pre-line">
              When priorities shift or people rotate, the system doesn’t lose its footing.
              {"\n"}Strategy compounds instead of restarting.
            </p>
            <p className="whitespace-pre-line">
              Lucentra turns judgment into infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[1.05rem] leading-7 text-white/75">
            <p>Lucentra is designed to:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Maintain continuity across long timelines",
                "Prevent silent scope drift and rationale erosion",
                "Keep execution aligned with original intent",
                "Reduce re-litigation of settled decisions",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">- </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[0.85rem] uppercase tracking-[0.32em] text-white/60">
              Development Model
            </h3>
            <div className="flex flex-col gap-4 text-[1.02rem] leading-7 text-white/78">
              <p className="whitespace-pre-line">
                Lucentra is built iteratively through use.
              </p>
              <p className="whitespace-pre-line">
                Its structure evolves as new strategic problems are solved, new constraints are encountered, and new patterns repeat across engagements. The system grows by absorbing decisions that hold up under pressure and discarding those that don’t.
              </p>
              <p className="whitespace-pre-line">
                This keeps Lucentra grounded in reality rather than abstraction.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/20 bg-white/[0.02] p-3">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]" />
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
