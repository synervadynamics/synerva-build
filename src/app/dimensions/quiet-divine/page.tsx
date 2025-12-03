import QuietDivineGallery from "@/components/dimensions/quiet-divine/QuietDivineGallery";
import QuietDivineHero from "@/components/dimensions/quiet-divine/QuietDivineHero";
import QuietDivineNarrative from "@/components/dimensions/quiet-divine/QuietDivineNarrative";

export default function QuietDivinePage() {
  return (
    <div className="quiet-divine-page">
      <QuietDivineHero />
      <QuietDivineNarrative />
      <QuietDivineGallery />
    </div>
  );
}
