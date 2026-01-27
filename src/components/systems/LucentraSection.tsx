export default function LucentraSection() {
  const body = `Lucentra is the system that ensures strategy survives contact with reality.

It preserves the logic behind decisions, not just the decisions themselves. Assumptions, dependencies, constraints, and tradeoffs are captured as structure, so forward movement doesn’t require constant re-explanation or reinvention.

When priorities shift or people rotate, the system doesn’t lose its footing.
Strategy compounds instead of restarting.

Lucentra turns judgment into infrastructure.`;

  const bullets = [
    "Maintain continuity across long timelines",
    "Prevent silent scope drift and rationale erosion",
    "Keep execution aligned with original intent",
    "Reduce re-litigation of settled decisions",
  ] as const;

  const developmentModel = `Lucentra is built iteratively through use.

Its structure evolves as new strategic problems are solved, new constraints are encountered, and new patterns repeat across engagements. The system grows by absorbing decisions that hold up under pressure and discarding those that don’t.

This keeps Lucentra grounded in reality rather than abstraction.`;

  return (
    <section className="relative bg-[#05070c] px-4 pb-24 pt-10 text-white sm:px-10 sm:pb-28 sm:pt-14 lg:px-16 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl space-y-10">
          <header className="space-y-3">
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lucentra
            </h2>
            <p className="text-base uppercase tracking-[0.28em] text-white/60 sm:text-[0.95rem]">
              Strategic Continuity Engine
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
            <p className="text-base text-white/75">Lucentra is designed to:</p>
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

          <div className="rounded-[2rem] border border-white/20 bg-white/[0.02] p-4 sm:p-6">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}

