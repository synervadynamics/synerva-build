import QuietDivineGallery from "@/components/dimensions/quiet-divine/QuietDivineGallery";
import QuietDivineHero from "@/components/dimensions/quiet-divine/QuietDivineHero";
import QuietDivineNarrative from "@/components/dimensions/quiet-divine/QuietDivineNarrative";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";

export default function QuietDivineDesktop() {
  return (
    <main className="relative text-white">
      <SubpageStaticBackground
        imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2023,%202026,%2010_00_46%20PM.png"
        showOverlay={false}
      />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/20" />
      <div className="relative z-10 quiet-divine-page mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20">
        <QuietDivineHero />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] gap-12 lg:gap-14">
          <QuietDivineNarrative />
          <QuietDivineGallery />
        </div>
      </div>
    </main>
  );
}
