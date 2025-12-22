import Image from "next/image";
import Link from "next/link";
import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";
import { quietDivineImages } from "@/lib/dimensions/quietDivineImages";
import { parallaxLoomContent } from "@/lib/dimensions/parallaxLoomContent";
import { parallaxLoomImages } from "@/lib/dimensions/parallaxLoomImages";

export function SynervaDimensionsSection() {
  const parallaxLead = parallaxLoomContent.heroCopy
    ?.split("\n")
    .find((paragraph) => paragraph.trim());

  const quietHero =
    quietDivineImages.find(
      (image) => image.id === "28FEE977-CD07-4640-A878-C3167812F3B6",
    ) ?? quietDivineImages[0];

  const parallaxHero =
    parallaxLoomImages.find(
      (image) => image.id === "gaslighting-myself-into-greatness-v1",
    ) ?? parallaxLoomImages[0];

  return (
    <section
      id="synerva-dimensions"
      className="relative overflow-visible py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-16 top-6 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute right-4 top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.08))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">
            Synerva Dimensions Artwork
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Portraits across parallel timelines
          </h2>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            Quiet interior work. Loud modern rituals. A grid of series that keep
            expanding—each link opens the full narrative, imagery, and gallery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            {quietHero ? (
              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={quietHero.src}
                    alt={quietHero.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            ) : null}
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
              Series 001 — Portraiture
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {quietDivineContent.title ?? "The Quiet Divine"}
            </h3>
            {quietDivineContent.seriesDescription ? (
              <p className="mt-3 text-mute leading-relaxed">
                {quietDivineContent.seriesDescription}
              </p>
            ) : null}
            {quietDivineContent.subtitle ? (
              <p className="mt-3 text-sm text-white/70">
                {quietDivineContent.subtitle}
              </p>
            ) : null}
            <Link
              href="/dimensions/quiet-divine"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              View The Quiet Divine
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            {parallaxHero ? (
              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 aspect-[3/4]">
                <Image
                  src={parallaxHero.src}
                  alt={parallaxHero.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            ) : null}
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
              Series 002 — Design Study
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {parallaxLoomContent.title ?? "Parallax Loom Brewing Co."}
            </h3>
            {parallaxLoomContent.seriesDescription ? (
              <p className="mt-3 text-mute leading-relaxed">
                {parallaxLoomContent.seriesDescription}
              </p>
            ) : null}
            {parallaxLead ? (
              <p className="mt-3 text-sm text-white/70">{parallaxLead}</p>
            ) : null}
            <Link
              href="/dimensions/parallax-loom"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              View Parallax Loom
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
