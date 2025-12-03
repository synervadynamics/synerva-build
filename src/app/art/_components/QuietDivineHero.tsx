"use client";

import Image from "next/image";
import Link from "next/link";
import { art as artCopy } from "@/copy";
import { pages_art } from "@/copy/pages";
import { QUIET_DIVINE_ARTWORKS, QUIET_DIVINE_ASSET_PATH } from "../captions";

export default function QuietDivineHero() {
  const featuredArtwork = QUIET_DIVINE_ARTWORKS[0];
  const heroCopy = pages_art.hero;

  return (
    <section className="relative isolate overflow-hidden rounded-[3rem] border border-white/10 bg-black/60 px-6 py-12 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)] sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-black/80 to-cyan-500/12" aria-hidden />
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{artCopy.title}</p>
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{heroCopy.title}</h1>
            <p className="text-lg text-white/72">{heroCopy.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#gallery"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_60px_-40px_rgba(0,0,0,0.6)] transition hover:bg-white/90"
            >
              {artCopy.cta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              Commission this energy
            </Link>
          </div>
        </div>
        <div className="relative space-y-4 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/4 via-slate-900/70 to-black p-6 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={`${QUIET_DIVINE_ASSET_PATH}${featuredArtwork.filename}`}
              alt={featuredArtwork.alt}
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" aria-hidden />
          </div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
            <span>Series preview</span>
            <span>Quiet Divine 001</span>
          </div>
          <p className="text-sm text-white/70">
            A first glimpse into Series 001 — built to be viewed in the full gallery below.
          </p>
        </div>
      </div>
    </section>
  );
}
