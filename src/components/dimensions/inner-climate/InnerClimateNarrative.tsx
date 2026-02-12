import { innerClimateContent } from "@/lib/dimensions/innerClimateContent";

const renderBoldText = (text: string) => {
  const parts = text.split("**");
  if (parts.length === 1) {
    return text;
  }
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold tracking-[0.08em]">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};

const renderParagraphs = (paragraphs: string[]) =>
  paragraphs.map((paragraph, idx) => {
    if (paragraph.trim() === "") {
      return <div key={idx} className="h-4" />;
    }
    return (
      <p key={idx} className="whitespace-pre-line">
        {renderBoldText(paragraph)}
      </p>
    );
  });

export default function InnerClimateNarrative() {
  const { intro, acts } = innerClimateContent;

  return (
    <section className="quiet-divine-narrative space-y-10">
      <div className="narrative-block space-y-4">
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
