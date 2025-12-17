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
      (image) => image.id === "divorced-millenial-v1",
    ) ?? parallaxLoomImages[0];

  return (
    <section id="synerva-dimensions" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              Synerva Dimensions Artwork
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Portraits across parallel timelines
            </h2>
            <p className="max-w-2xl text-sm text-white/70 sm:text-base">
              Quiet interior work. Loud modern rituals. A grid of series that
              keep expanding—each link opens the full narrative, imagery, and
              gallery.
            </p>
          </div>
          <Link
            href="/dimensions"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/[0.07] transition"
          >
            View Synerva Dimensions index
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
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
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={parallaxHero.src}
                      alt={parallaxHero.alt}
                      fill
                      className="object-contain bg-[#080C14]"
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

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                    Cross-series navigation
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    Synerva Dimensions Index
                  </h3>
                </div>
                <Link
                  href="/dimensions"
                  className="rounded-lg bg-white text-[#0A0C10] px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  Browse all series
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-white">Narratives</p>
                  <p className="mt-1 text-xs text-white/70">
                    Full story for each series, unchanged from the dedicated
                    pages.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-white">Artwork</p>
                  <p className="mt-1 text-xs text-white/70">
                    Portrait, product, and gallery views across every
                    dimension.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-white">
                    Future drops
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Space reserved for the next Synerva Dimensions series.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                Series 00X — Placeholder
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Next Synerva Dimensions series
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Link will activate here when the next dimension goes live.
                Until then, the grid keeps room for expansion.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/60">
                Reserved slot
                <span aria-hidden="true">⧉</span>
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:row-span-2">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#0E121A] via-[#0A1524] to-[#080C14] ring-1 ring-white/10 relative">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-10 top-6 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_65%)] blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.22),transparent_65%)] blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.05))]" />
              </div>
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                    Portrait placeholder
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Synerva Dimensions artwork
                  </h3>
                  <p className="text-sm text-white/70">
                    Tall canvas reserved for the current feature image. Portrait
                    format to match the new gallery direction.
                  </p>
                </div>
                <div className="space-y-1 text-xs text-white/60">
                  <p>3:4 aspect ratio · high-resolution</p>
                  <p>Swap in production artwork for deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
