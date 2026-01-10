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
import ScrollHero from "./components/ScrollHero";

const backgroundSources = [
  "/jan-4-new-background-transition/v8/1.png",
  "/jan-4-new-background-transition/v8/2.png",
  "/jan-4-new-background-transition/v8/3.png",
  "/jan-4-new-background-transition/v8/4.png",
];

type BackupHomepage3Props = {
  mobileVariant?: "default" | "beats";
};

export default function BackupHomepage3({
  mobileVariant = "beats",
}: BackupHomepage3Props) {
  return (
    <main
      id="backup-homepage"
      className="relative text-white backuphomepage backuphomepage-variant backuphomepage3"
    >
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <section id="scroll-hero-addon">
          <ScrollHero />
        </section>
        <section id="homepage-hero">
          <MainHero mobileVariant={mobileVariant} />
        </section>
        <section id="loop-coverage">
          <Narrative mobileVariant={mobileVariant} />
        </section>
        <section id="core-systems">
          <Offerings />
        </section>
        <section id="operating-posture">
          <section id="whats-delivered">
            <Deliver mobileVariant={mobileVariant} />
          </section>
        </section>
        <section id="infrastructure">
          <Systems />
        </section>
        <Publications />
        <Labs variant="signup-only" />
        <Merch />
        <Philosophy />
        <Roadmap />
        <SynervaDimensionsSection />
        <section id="founder">
          <About />
        </section>
        <Footer />
      </div>
    </main>
  );
}
