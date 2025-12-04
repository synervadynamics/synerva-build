import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";

const renderParagraphs = (text: string | null) =>
  text
    ?.split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, idx) => <p key={idx}>{para}</p>);

export default function QuietDivineNarrative() {
  const { overview, narrative, themes, philosophy } = quietDivineContent;

  return (
    <section className="quiet-divine-narrative space-y-10">
      {overview && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">{renderParagraphs(overview)}</div>
        </div>
      )}

      {narrative && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Narrative</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">{renderParagraphs(narrative)}</div>
        </div>
      )}

      {Array.isArray(themes) && themes.length > 0 && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Themes</h2>
          <ul className="space-y-3 text-base leading-relaxed text-white/80">
            {themes.map((theme, idx) => (
              <li key={idx} className="list-disc list-inside marker:text-white/60">
                {theme}
              </li>
            ))}
          </ul>
        </div>
      )}

      {philosophy && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Philosophy</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">{renderParagraphs(philosophy)}</div>
        </div>
      )}
    </section>
  );
}
