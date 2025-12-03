import ImageCard from "@/components/dimensions/common/ImageCard";
import { quietDivineImages } from "@/lib/dimensions/quietDivineImages";

export default function QuietDivineGallery() {
  const images = [...quietDivineImages].sort((a, b) => {
    const ao = a.order ?? Number.POSITIVE_INFINITY;
    const bo = b.order ?? Number.POSITIVE_INFINITY;
    if (ao === bo) {
      return a.id.localeCompare(b.id);
    }
    return ao - bo;
  });

  return (
    <section className="quiet-divine-gallery">
      <h2>Gallery</h2>
      <div className="qd-grid">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}
