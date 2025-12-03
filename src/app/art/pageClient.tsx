"use client";

import Link from "next/link";
import { useState } from "react";
import { AmbientVideo } from "@/components/AmbientVideo";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import QuietDivineEssay from "./_components/QuietDivineEssay";
import QuietDivineGrid from "./_components/QuietDivineGrid";
import QuietDivineHero from "./_components/QuietDivineHero";
import QuietDivineModal from "./_components/QuietDivineModal";
import { QUIET_DIVINE_ARTWORKS, type QuietDivineArtwork } from "./captions";

export default function ArtPageClient() {
  const [selectedArtwork, setSelectedArtwork] = useState<QuietDivineArtwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectArtwork = (artwork: QuietDivineArtwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-20 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/hero/hero_main_render.webp" opacity={0.32} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-black/80 to-cyan-500/12" aria-hidden />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative mx-auto max-w-6xl space-y-6 pb-12">
          <Link
            href="/"
            className="inline-flex w-fit text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
          >
            ← Home
          </Link>
          <QuietDivineHero />
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-18 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-black opacity-75 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl space-y-12">
          <QuietDivineEssay />
          <QuietDivineGrid artworks={QUIET_DIVINE_ARTWORKS} onSelect={handleSelectArtwork} />
        </div>
      </section>

      <QuietDivineModal artwork={selectedArtwork} isOpen={isModalOpen} onClose={handleCloseModal} />

      <CTA />
      <Footer />
    </div>
  );
}
