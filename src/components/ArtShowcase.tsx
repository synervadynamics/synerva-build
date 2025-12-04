import Link from "next/link";
import { ArtFrame } from "@/components/ArtFrame";
import { copy } from "@/data/copy";

export function ArtShowcase() {
  const gallery = copy.art.gallery;

  return (
    <section id="art" className="relative overflow-hidden px-6 pb-20 pt-14 sm:px-10 lg:px-16 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060912] via-[#0c1628] to-[#04060c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,214,255,0.12),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="relative mx-auto max-w-6xl space-y-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">{copy.art.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl">{copy.art.heading}</h2>
            <p className="max-w-3xl text-sm text-white/70">{copy.art.intro}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/50">{copy.art.note}</p>
          </div>
          <Link
            href={copy.art.cta.href}
            className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
          >
            {copy.art.cta.label}
          </Link>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-full snap-x snap-mandatory">
            {gallery.slice(0, 5).map(piece => (
              <div key={piece.title} className="min-w-[240px] snap-start">
                <ArtFrame piece={piece} className="hover:scale-[1.01] transition-transform duration-300" showDescription />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map(piece => (
            <ArtFrame key={piece.title} piece={piece} className="hover:scale-[1.01] transition-transform duration-300" />
          ))}
        </div>
      </div>
    </section>
  );
}
