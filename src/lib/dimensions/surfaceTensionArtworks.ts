export type SurfaceTensionArtwork = {
  id: number;
  imageSrc: string;
  artworkNumber: string;
  title: string | null;
  description: string | null;
};

export const surfaceTensionArtworks: SurfaceTensionArtwork[] = Array.from(
  { length: 30 },
  (_, index) => {
    const id = index + 1;
    const fileNumber = String(id).padStart(2, "0");
    const extension = id === 22 ? "jpg" : "png";

    return {
      id,
      imageSrc: `/surface-tension/${fileNumber}.${extension}`,
      artworkNumber: `Artwork ${id}`,
      title: null,
      description: null,
    };
  },
);
