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
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.9rem] font-light leading-tight text-white">
              Verisense
            </h2>
            <p className="text-[0.95rem] uppercase tracking-[0.28em] text-white/60">
              Behavioral Signal Engine
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[1.05rem] leading-7 text-white/80">
            <p className="whitespace-pre-line">
              Verisense surfaces what communication is doing, not just what it says.
            </p>
            <p className="whitespace-pre-line">
              It interprets the signals beneath language: confidence, hesitation, avoidance, friction, alignment. The forces that determine whether decisions land cleanly or fracture quietly over time.
            </p>
            <p className="whitespace-pre-line">
              By reading behavioral signal instead of relying on transcripts, summaries, or artifacts, Verisense allows strategy to respond to reality as it unfolds, not after damage has already compounded.
            </p>
            <p className="whitespace-pre-line">
              This prevents false clarity and delayed correction.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[1.05rem] leading-7 text-white/75">
            <p>Verisense helps:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Detect misalignment before it hardens",
                "Separate actionable signal from conversational noise",
                "Reveal friction masked by polished communication",
                "Inform decisions with real behavioral context",
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
                Verisense develops through exposure to real communication dynamics.
              </p>
              <p className="whitespace-pre-line">
                Each engagement contributes signal: how alignment forms, where intent degrades, how confidence is performed, and when clarity is cosmetic rather than structural. These patterns directly inform how the system interprets and prioritizes behavioral data.
              </p>
              <p className="whitespace-pre-line">
                The system is shaped by reality, not hypotheticals.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[320px] rounded-[1.75rem] border border-white/20 bg-white/[0.02] p-3">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]" />
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
