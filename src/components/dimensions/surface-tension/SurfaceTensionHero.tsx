import { surfaceTensionContent } from "@/lib/dimensions/surfaceTensionContent";

export default function SurfaceTensionHero() {
  const { eyebrow, title } = surfaceTensionContent;

  return (
    <section className="quiet-divine-hero space-y-6">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
        {eyebrow}
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
        {title}
      </h1>
    </section>
  );
}
