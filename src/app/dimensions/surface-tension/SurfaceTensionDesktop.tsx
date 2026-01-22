import SurfaceTensionGallery from "@/components/dimensions/surface-tension/SurfaceTensionGallery";
import SurfaceTensionHero from "@/components/dimensions/surface-tension/SurfaceTensionHero";
import SurfaceTensionNarrative from "@/components/dimensions/surface-tension/SurfaceTensionNarrative";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";

export default function SurfaceTensionDesktop() {
  return (
    <main className="relative text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10 quiet-divine-page mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20">
        <SurfaceTensionHero />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] gap-12 lg:gap-14">
          <SurfaceTensionNarrative />
          <SurfaceTensionGallery />
        </div>
      </div>
    </main>
  );
}
