import InnerClimateGallery from "@/components/dimensions/inner-climate/InnerClimateGallery";
import InnerClimateHero from "@/components/dimensions/inner-climate/InnerClimateHero";
import InnerClimateNarrative from "@/components/dimensions/inner-climate/InnerClimateNarrative";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";

export default function InnerClimateDesktop() {
  return (
    <main className="relative text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2003_34_55%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10 quiet-divine-page mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20">
        <InnerClimateHero />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] gap-12 lg:gap-14">
          <InnerClimateNarrative />
          <InnerClimateGallery />
        </div>
      </div>
    </main>
  );
}
