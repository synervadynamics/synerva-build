import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";

export default function QuietDivineHero() {
  const { title, seriesDescription } = quietDivineContent;

  return (
    <section className="quiet-divine-hero space-y-6">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
        Series 001
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
        {title ?? "The Quiet Divine"}
      </h1>
      {seriesDescription && (
        <p className="text-lg leading-relaxed text-white/75 max-w-4xl">
          {seriesDescription}
        </p>
      )}
    </section>
  );
}
