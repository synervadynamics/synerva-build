import Image from "next/image";
import Link from "next/link";
import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";
import { quietDivineImages } from "@/lib/dimensions/quietDivineImages";

export function DimensionsSection() {
  const heroImage = [...quietDivineImages].sort((a, b) => {
    const ao = a.order ?? Number.POSITIVE_INFINITY;
    const bo = b.order ?? Number.POSITIVE_INFINITY;
    if (ao === bo) return a.id.localeCompare(b.id);
    return ao - bo;
  })[0];

  return (
    <section id="dimensions" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">
            Artwork by Synerva Dimensions
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {quietDivineContent.title ?? "Quiet Divine"}
          </h2>
          {quietDivineContent.seriesDescription ? (
            <p className="text-mute leading-relaxed max-w-prose">
              {quietDivineContent.seriesDescription}
            </p>
          ) : null}
          {quietDivineContent.overview ? (
            <p className="text-sm text-white/70 max-w-prose">
              {quietDivineContent.overview.split("\n").filter(Boolean)[0]}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dimensions/quiet-divine"
              className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99] bg-[color:var(--accent)] text-[#001018] shadow-[0_8px_32px_rgba(0,170,255,0.25)]"
            >
              View Quiet Divine
            </Link>
            <Link
              href="/dimensions"
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition"
            >
              Explore Synerva Dimensions
            </Link>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          {heroImage ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 640px, 100vw"
              priority
            />
          ) : (
            <div className="aspect-[3/4] w-full bg-white/5" />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
