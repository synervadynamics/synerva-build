import { ProductPage } from "@/components/ProductPage";
import { copy } from "@/data/copy";
import { buildPageMetadata } from "@/lib/metadata";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";

const product = copy.products.lucentra;
const disclaimer =
  "Lucentra is currently in active development. Functional components, UI, and live release information will appear here. Stay tuned for upcoming updates.";

export const metadata = buildPageMetadata({
  title: `${product.title} — ${product.tagline} | Synerva Dynamics`,
  description: product.description[0],
  path: `/${product.slug}`,
});

export default function LucentraPage() {
  return (
    <main className="relative text-white">
      <ScrollMorphBackground />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ProductPage product={product} disclaimer={disclaimer} />
      </div>
    </main>
  );
}
