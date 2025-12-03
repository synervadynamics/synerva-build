"use client";

import Image from "next/image";
import { QUIET_DIVINE_ASSET_PATH, type QuietDivineArtwork } from "../captions";

type QuietDivineCardProps = {
  artwork: QuietDivineArtwork;
  onClick: () => void;
};

export default function QuietDivineCard({ artwork, onClick }: QuietDivineCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left transition hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black/60"
      aria-label={`Expand ${artwork.title}`}
    >
      <div className="relative h-[360px] w-full overflow-hidden">
        <Image
          src={`${QUIET_DIVINE_ASSET_PATH}${artwork.filename}`}
          alt={artwork.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
          <span>Piece {artwork.order.toString().padStart(2, "0")}</span>
          <span className="text-white/50">Series 001</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-white">{artwork.title}</h3>
          <p className="text-sm text-white/70 line-clamp-2">{artwork.microCaption}</p>
        </div>
      </div>
    </button>
  );
}
