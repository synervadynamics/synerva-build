import { parallaxLoomContent } from "@/lib/dimensions/parallaxLoomContent";

const renderParagraphs = (text: string | null | undefined) =>
  text
    ?.split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, idx) => (
      <p key={idx} className="text-lg leading-relaxed text-white/75 max-w-4xl">
        {para}
      </p>
    ));

export default function ParallaxLoomHero() {
  const { title, seriesLabel, heroCopy } = parallaxLoomContent;

  return (
    <section className="parallax-loom-hero space-y-6">
      {seriesLabel ? (
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          {seriesLabel}
        </p>
      ) : null}
      <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
        {title ?? "Parallax Loom Brewing Co."}
      </h1>
      {renderParagraphs(heroCopy)}
    </section>
  );
}
