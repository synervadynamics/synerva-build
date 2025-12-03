import DimensionsHero from "@/components/dimensions/DimensionsHero";
import CollectionList from "@/components/dimensions/CollectionList";

export default function DimensionsIndexPage() {
  return (
    <div className="dimensions-page">
      <DimensionsHero />
      <CollectionList />
    </div>
  );
}
