import Link from "next/link";
import { quietDivineContent } from "@/lib/dimensions/quietDivineContent";
import { parallaxLoomContent } from "@/lib/dimensions/parallaxLoomContent";

export default function CollectionList() {
  const collections = [
    {
      slug: "/dimensions/parallax-loom",
      name: parallaxLoomContent.title ?? "Parallax Loom Brewing Co.",
      summary:
        parallaxLoomContent.seriesDescription ??
        "Series 002 of Synerva Dimensions—portfolio-grade beer can satire presented with ceremonial polish.",
    },
    {
      slug: "/dimensions/quiet-divine",
      name: quietDivineContent.title ?? "The Quiet Divine",
      summary:
        quietDivineContent.seriesDescription ??
        "Human divinity as interior capacity—depth and coherence earned by integrating the inner world.",
    },
  ];

  return (
    <section className="collection-list">
      <h2>Collections</h2>
      <div className="collection-items">
        {collections.map((collection) => (
          <article key={collection.slug} className="collection-card">
            <h3>{collection.name}</h3>
            {collection.summary && <p>{collection.summary}</p>}
            <Link href={collection.slug}>Enter collection</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
