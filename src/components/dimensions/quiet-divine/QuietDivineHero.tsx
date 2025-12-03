import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";

export default function QuietDivineHero() {
  const { title, seriesDescription } = quietDivineContent;

  return (
    <section className="quiet-divine-hero">
      <p className="eyebrow">Series 001</p>
      <h1>{title ?? "The Quiet Divine"}</h1>
      {seriesDescription && <p>{seriesDescription}</p>}
    </section>
  );
}
