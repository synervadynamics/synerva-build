import { About } from "@/components/About";
import { Deliver } from "@/components/Deliver";
import { Footer } from "@/components/Footer";
import { Labs } from "@/components/Labs";
import { Merch } from "@/components/Merch";
import { Narrative } from "@/components/Narrative";
import { Offerings } from "@/components/Offerings";
import { Philosophy } from "@/components/Philosophy";
import { Publications } from "@/components/Publications";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import { Systems } from "@/components/Systems";
import { SystemsThatHoldSection } from "@/components/SystemsThatHoldSection";
import { MainHero } from "@/app/homepage/MainHero";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";

export default function MainHomepage() {
  const backgroundSources = [
    "/jan-4-new-background-transition/v8/1.png",
    "/jan-4-new-background-transition/v8/2.png",
    "/jan-4-new-background-transition/v8/3.png",
    "/jan-4-new-background-transition/v8/4.png",
  ];

  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero />
        <Narrative />
        <Offerings />
        <Deliver />
        <SystemsThatHoldSection
          className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-18 sm:pt-10 lg:px-16 lg:pb-18 lg:pt-12"
          innerClassName="mx-auto w-full max-w-3xl"
        />
        <Systems />
        <Publications />
        <Labs variant="signup-only" />
        <Merch />
        <Philosophy />
        <SynervaDimensionsSection />
        <About />
        <Footer />
      </div>
    </main>
  );
}
