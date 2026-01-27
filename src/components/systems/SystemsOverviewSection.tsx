export default function SystemsOverviewSection() {
  const body = `Most work degrades over time.

Context leaks.
Decisions get revisited without remembering why.
Standards soften as urgency rises.
Signal is buried under updates, meetings, and artifacts.

Synerva’s internal systems exist to counteract that decay.

They are not productivity tools.
They are not dashboards.
They are not products for sale.

They are internal engines designed to make judgment durable, signal legible, and progress cumulative across strategy, execution, and iteration.

Lucentra and Verisense are actively developed internal systems.
They are shaped inside real engagements, where strategy meets execution under real constraints.
Every project contributes structure, data, and refinement to their ongoing development.`;

  return (
    <section className="relative bg-[#05070c] px-4 pb-20 pt-24 text-white sm:px-10 sm:pb-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
            Systems
          </h1>
          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Built to preserve judgment under real conditions.
          </h2>
          <div className="space-y-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

