import { About } from "@/components/About";
import { Deliver } from "@/components/Deliver";
import { Footer } from "@/components/Footer";
import { Labs } from "@/components/Labs";
import { Merch } from "@/components/Merch";
import { Narrative } from "@/components/Narrative";
import { Offerings } from "@/components/Offerings";
import { Philosophy } from "@/components/Philosophy";
import { Publications } from "@/components/Publications";
import { Roadmap } from "@/components/Roadmap";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import { Systems } from "@/components/Systems";
import { MainHero } from "@/app/homepage/MainHero";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";
import { MobileHomepage } from "@/app/homepage/MobileHomepage";

export default function MainHomepage() {
  const backgroundSources = [
    "/jan-4-new-background-transition/v8/1.png",
    "/jan-4-new-background-transition/v8/2.png",
    "/jan-4-new-background-transition/v8/3.png",
    "/jan-4-new-background-transition/v8/4.png",
  ];

  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <div className="hidden lg:block">
        <ScrollMorphBackground imageSources={backgroundSources} />
        <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      </div>
      <div className="lg:hidden">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundSources[0]})` }}
        />
        <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      </div>
      <div className="relative z-10">
        <div className="lg:hidden">
          <ScrollProgress />
          <MobileHomepage />
        </div>
        <div className="hidden lg:block">
          <ScrollProgress />
          <MainHero />
          <Narrative />
          <Offerings />
          <Deliver />
          <Systems />
          <Publications />
          <Labs variant="signup-only" />
          <Merch />
          <Philosophy />
          <Roadmap />
          <SynervaDimensionsSection />
          <About />
          <Footer />
        </div>
      </div>
    </main>
  );
}
