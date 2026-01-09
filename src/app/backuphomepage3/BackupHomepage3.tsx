import { About } from "@/components/About";
import { DeliveredPanels } from "@/app/backuphomepage3/DeliveredPanels";
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
import WhatsDeliveredScroll from "./components/WhatsDeliveredScroll";

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
    <main className="relative text-white backuphomepage backuphomepage-variant backuphomepage3">
      <ScrollHero />
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero mobileVariant="beats" />
        <Narrative mobileVariant={mobileVariant} />
        <Offerings />
        <WhatsDeliveredScroll />
        <DeliveredPanels />
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
    </main>
  );
}
