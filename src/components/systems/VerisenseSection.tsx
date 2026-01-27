export default function VerisenseSection() {
  const body = `Verisense surfaces what communication is doing, not just what it says.

It interprets the signals beneath language: confidence, hesitation, avoidance, friction, alignment. The forces that determine whether decisions land cleanly or fracture quietly over time.

By reading behavioral signal instead of relying on transcripts, summaries, or artifacts, Verisense allows strategy to respond to reality as it unfolds, not after damage has already compounded.

This prevents false clarity and delayed correction.`;

  const bullets = [
    "Detect misalignment before it hardens",
    "Separate actionable signal from conversational noise",
    "Reveal friction masked by polished communication",
    "Inform decisions with real behavioral context",
  ] as const;

  const developmentModel = `Verisense develops through exposure to real communication dynamics.

Each engagement contributes signal: how alignment forms, where intent degrades, how confidence is performed, and when clarity is cosmetic rather than structural. These patterns directly inform how the system interprets and prioritizes behavioral data.

The system is shaped by reality, not hypotheticals.`;

  return (
    <section className="relative bg-[#05070c] px-4 pb-28 pt-10 text-white sm:px-10 sm:pb-32 sm:pt-14 lg:px-16 lg:pb-36 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl space-y-10">
          <header className="space-y-3">
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Verisense
            </h2>
            <p className="text-base uppercase tracking-[0.28em] text-white/60 sm:text-[0.95rem]">
              Behavioral Signal Engine
            </p>
          </header>

          <div className="space-y-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4 text-white/75">
            <p className="text-base text-white/75">Verisense helps:</p>
            <ul className="list-none space-y-2 text-base leading-7 sm:text-lg sm:leading-8">
              {bullets.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">- </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.32em] text-white/60">
              Development Model
            </h3>
            <div className="space-y-5 text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {developmentModel.split("\n\n").map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[420px] rounded-[2rem] border border-white/20 bg-white/[0.02] p-4 sm:p-6">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}

