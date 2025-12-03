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
    <section className="quiet-divine-narrative">
      {overview && (
        <div className="narrative-block">
          <h2>Overview</h2>
          {renderParagraphs(overview)}
        </div>
      )}

      {narrative && (
        <div className="narrative-block">
          <h2>Narrative</h2>
          {renderParagraphs(narrative)}
        </div>
      )}

      {Array.isArray(themes) && themes.length > 0 && (
        <div className="narrative-block">
          <h2>Themes</h2>
          <ul>
            {themes.map((theme, idx) => (
              <li key={idx}>{theme}</li>
            ))}
          </ul>
        </div>
      )}

      {philosophy && (
        <div className="narrative-block">
          <h2>Philosophy</h2>
          {renderParagraphs(philosophy)}
        </div>
      )}
    </section>
  );
}
