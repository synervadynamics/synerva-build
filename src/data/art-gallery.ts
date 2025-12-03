import type { ArtPiece } from "@/components/ArtFrame";
import { QUIET_DIVINE_ARTWORKS, QUIET_DIVINE_ASSET_PATH } from "@/app/art/captions";

type ArtGalleryItem = ArtPiece & { src: string };

const accentPalette = [
  "from-cyan-400/25 via-sky-900/70 to-slate-950",
  "from-amber-200/20 via-slate-900/70 to-black",
  "from-emerald-300/20 via-cyan-900/65 to-black",
  "from-fuchsia-300/22 via-indigo-900/65 to-slate-950",
  "from-slate-200/16 via-slate-900/70 to-black",
  "from-amber-300/24 via-rose-900/60 to-slate-950"
];

const previewArtworks = QUIET_DIVINE_ARTWORKS.slice(0, 6);

export const artGallery: ArtGalleryItem[] = previewArtworks.map((artwork, index) => ({
  title: `Quiet Divine ${artwork.order.toString().padStart(2, "0")}`,
  label: `Piece ${artwork.order.toString().padStart(2, "0")}`,
  medium: "Quiet Divine portrait",
  description: artwork.mediumCaption,
  accent: accentPalette[index % accentPalette.length],
  ratio: "aspect-[4/5]",
  src: `${QUIET_DIVINE_ASSET_PATH}${artwork.filename}`
}));
