import Image from "next/image";
import Link from "next/link";
import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";
import { quietDivineImages } from "@/lib/dimensions/quietDivineImages";

export function QuietDivineSection() {
  const heroImage =
    quietDivineImages.find(
      (image) => image.id === quietDivineContent.imageOrder?.[0],
    ) ?? quietDivineImages[0];

  return (
    <section id="quiet-divine" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
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
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-5 lg:pl-2">
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">
            Portraiture by Synerva Dimensions
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {quietDivineContent.title ?? "The Quiet Divine"}
          </h2>
          {quietDivineContent.seriesDescription ? (
            <p className="max-w-prose leading-relaxed text-mute">
              {quietDivineContent.seriesDescription}
            </p>
          ) : null}
          {quietDivineContent.subtitle ? (
            <p className="max-w-prose text-sm text-white/70">
              {quietDivineContent.subtitle}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dimensions/quiet-divine"
              className="rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99] bg-white text-[#0A0C10] shadow-[0_8px_32px_rgba(255,255,255,0.18)]"
            >
              View The Quiet Divine
            </Link>
            <Link
              href="/dimensions/parallax-loom"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
            >
              View Parallax Loom
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
