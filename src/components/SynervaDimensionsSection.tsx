// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.

import Image from "next/image";
import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";
import { quietDivineImages } from "@/lib/dimensions/quietDivineImages";
import CtaPill from "@/components/CtaPill";

export function SynervaDimensionsSection() {
  const quietDivineTitle = (quietDivineContent.title ?? "The Quiet Divine").replace(
    "The Quiet Divine",
    "Quiet Divine",
  );
  const quietHero =
    quietDivineImages.find(
      (image) => image.id === "28FEE977-CD07-4640-A878-C3167812F3B6",
    ) ?? quietDivineImages[0];

  const surfaceTensionHero = {
    src: "/surface-tension/10.png",
    alt: "Surface Tension artwork",
  };
  const innerClimateHero = {
    src: "/inner-climate/7.png",
    alt: "Inner Climate artwork",
  };

  return (
    <section
      id="synerva-dimensions"
      className="relative overflow-visible py-10 sm:py-12 lg:py-10"
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
        <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-7">
          <div className="space-y-1">
            <div className="space-y-1">
              <p className="role-body text-sm uppercase tracking-[0.28em] text-white/60">
                ARTWORK
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.5"
                data-type-compression-letter-spacing="-0.025"
                className="role-authority section-header-lock text-3xl font-semibold tracking-tight sm:text-4xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem]"
              >
                Synerva Dimensions
              </h2>
            </div>
            <div className="max-w-3xl space-y-2 text-sm text-white/80 sm:text-base">
              <p className="role-body">
                Synerva Dimensions is a visual research lab—where concepts are
                built into repeatable, automated systems that compound progress
                and translate across creative domains globally.
              </p>
              <p className="role-body">
                These works are not marketing artifacts. They are templates.
                What survives becomes architecture now..
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white/[0.03] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:mx-auto lg:max-w-[360px] lg:p-4">
              {quietHero ? (
                <div className="mb-5 flex justify-center lg:mb-4">
                  <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[230px]">
                    <Image
                      src={quietHero.src}
                      alt={quietHero.alt}
                      width={720}
                      height={960}
                      className="h-auto w-full rounded-2xl border border-white/10"
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 360px, 100vw"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ) : null}
              <p className="role-body max-w-[24ch] text-[11px] uppercase tracking-[0.24em] text-white/60 leading-tight">
                Attention Under Internal Authority
              </p>
              <p className="role-body mt-1 max-w-[31ch] text-xs text-white/70 sm:text-sm leading-tight">
                Examines how focus stabilizes when self-governance replaces
                external cues.
              </p>
              <h3 className="role-body mt-3 text-2xl font-semibold tracking-tight">
                {quietDivineTitle}
              </h3>
              <CtaPill href="/dimensions/quiet-divine" variant="secondary" className="mt-4">
                View Quiet Divine →
              </CtaPill>
            </div>

            <div className="rounded-3xl bg-white/[0.035] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:mx-auto lg:max-w-[360px] lg:p-4">
              {surfaceTensionHero ? (
                <div className="mb-5 flex justify-center lg:mb-4">
                  <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[230px]">
                    <Image
                      src={surfaceTensionHero.src}
                      alt={surfaceTensionHero.alt}
                      width={720}
                      height={960}
                      className="h-auto w-full rounded-2xl border border-white/10"
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 360px, 100vw"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ) : null}
              <p className="role-body max-w-[24ch] text-[11px] uppercase tracking-[0.24em] text-white/60 leading-tight">
                Coherence Under Contact
              </p>
              <p className="role-body mt-1 max-w-[31ch] text-xs text-white/70 sm:text-sm leading-tight">
                Examines how internal stability behaves once returned to the
                world and subjected to pressure.
              </p>
              <h3 className="role-body mt-3 text-2xl font-semibold tracking-tight">
                Surface Tension
              </h3>
              <CtaPill href="/dimensions/surface-tension" variant="secondary" className="mt-4">
                View Surface Tension →
              </CtaPill>
            </div>

            <div className="rounded-3xl bg-white/[0.035] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:mx-auto lg:max-w-[360px] lg:p-4">
              <div className="mb-5 flex justify-center lg:mb-4">
                <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[230px]">
                  <Image
                    src={innerClimateHero.src}
                    alt={innerClimateHero.alt}
                    width={720}
                    height={960}
                    className="h-auto w-full rounded-2xl border border-white/10"
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 340px, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="role-body max-w-[24ch] text-[11px] uppercase tracking-[0.24em] text-white/60 leading-tight">
                THE CLIMATE THAT SHAPES WHAT COMES NEXT
              </p>
              <p className="role-body mt-1 max-w-[31ch] text-xs text-white/70 sm:text-sm leading-tight">
                Explores the environment that quietly determines how the world is felt and understood.
              </p>
              <h3 className="role-body mt-3 text-2xl font-semibold tracking-tight">
                Inner Climate
              </h3>
              <CtaPill href="/dimensions/inner-climate" variant="secondary" className="mt-4">
                View Inner Climate →
              </CtaPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
