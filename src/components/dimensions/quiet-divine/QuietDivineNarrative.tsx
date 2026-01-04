import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";

const normalizeQuietDivine = (text: string | null | undefined) =>
  text?.replace(/The Quiet Divine/g, "Quiet Divine");

const renderParagraphs = (text: string | null) =>
  normalizeQuietDivine(text)
    ?.split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, idx) => <p key={idx}>{para}</p>);

export default function QuietDivineNarrative() {
  const { overview, narrative, themes, themesParagraph, philosophy } =
    quietDivineContent;

  return (
    <section className="quiet-divine-narrative space-y-10">
      {overview && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(overview)}
          </div>
        </div>
      )}

      {narrative && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Narrative</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(narrative)}
          </div>
        </div>
      )}

      {themesParagraph ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Themes</h2>
          <p className="text-base leading-relaxed text-white/80">
            {normalizeQuietDivine(themesParagraph)}
          </p>
        </div>
      ) : Array.isArray(themes) && themes.length > 0 ? (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Themes</h2>
          <ul className="list-disc list-outside pl-6 space-y-3 text-base leading-relaxed text-white/80 [&>li]:marker:text-white/60 [&>li]:pl-1">
            {themes.map((theme, idx) => (
              <li key={idx}>{theme}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {philosophy && (
        <div className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">Philosophy</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(philosophy)}
          </div>
        </div>
      )}
    </section>
  );
}
