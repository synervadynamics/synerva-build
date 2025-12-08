import Image from "next/image";
import type { QuietDivineImage } from "@/lib/dimensions/quietDivineImages";

type ImageCardProps = {
  image: QuietDivineImage;
  onClick?: () => void;
};

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <figure className="image-card overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
      <button
        type="button"
        onClick={onClick}
        className="group relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={(image.order ?? Number.POSITIVE_INFINITY) < 3}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </button>
      {image.caption && (
        <figcaption className="p-4 text-sm leading-relaxed text-white/75">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
