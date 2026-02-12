import { surfaceTensionContent } from "@/lib/dimensions/surfaceTensionContent";

const renderParagraphs = (paragraphs: string[]) =>
  paragraphs.map((paragraph, idx) => (
    <p key={idx} className="whitespace-pre-line">
      {paragraph}
    </p>
  ));

export default function SurfaceTensionNarrative() {
  const { intro, acts } = surfaceTensionContent;

  return (
    <section className="quiet-divine-narrative space-y-10">
      <div className="narrative-block space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="space-y-4 text-base leading-relaxed text-white/80">
          {renderParagraphs(intro)}
        </div>
      </div>

      {acts.map((act) => (
        <div key={act.title} className="narrative-block space-y-4">
          <h2 className="text-2xl font-semibold">{act.title}</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/80">
            {renderParagraphs(act.body)}
          </div>
        </div>
      ))}
    </section>
  );
}
