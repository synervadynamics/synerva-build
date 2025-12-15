import { parallaxLoomContent } from "@/lib/dimensions/parallaxLoomContent";

const renderParagraphs = (text: string | null | undefined) =>
  text
    ?.split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, idx) => <p key={idx}>{para}</p>);

export default function ParallaxLoomNarrative() {
  const { overview, narrative, themesParagraph, philosophy } =
    parallaxLoomContent;

  return (
    <section className="parallax-loom-narrative space-y-10">
      {overview ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(overview)}
          </div>
        </div>
      ) : null}

      {narrative ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Narrative</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(narrative)}
          </div>
        </div>
      ) : null}

      {themesParagraph ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Themes</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(themesParagraph)}
          </div>
        </div>
      ) : null}

      {philosophy ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Philosophy</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(philosophy)}
          </div>
        </div>
      ) : null}
    </section>
  );
}
