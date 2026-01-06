import ParallaxLoomGallery from "@/components/dimensions/parallax-loom/ParallaxLoomGallery";
import ParallaxLoomHero from "@/components/dimensions/parallax-loom/ParallaxLoomHero";
import ParallaxLoomNarrative from "@/components/dimensions/parallax-loom/ParallaxLoomNarrative";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";

export default function ParallaxLoomPage() {
  return (
    <main className="relative text-white">
      <ScrollMorphBackground />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10 parallax-loom-page mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16 lg:space-y-20">
        <ParallaxLoomHero />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] gap-12 lg:gap-14">
          <ParallaxLoomNarrative />
          <ParallaxLoomGallery />
        </div>
      </div>
    </main>
  );
}
