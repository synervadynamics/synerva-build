import Image from "next/image";
import type { QuietDivineImage } from "@/lib/dimensions/quietDivineImages";

export default function ImageCard({ image }: { image: QuietDivineImage }) {
  return (
    <figure className="image-card">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={1600}
        sizes="(min-width: 1024px) 33vw, 100vw"
        priority={(image.order ?? Number.POSITIVE_INFINITY) < 3}
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
