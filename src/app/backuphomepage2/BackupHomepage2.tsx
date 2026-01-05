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
import { BackupHero } from "@/app/backuphomepage/BackupHero";
import { ScrollMorphBackground } from "@/app/backuphomepage/ScrollMorphBackground";

export default function BackupHomepage2() {
  const backgroundSources = [
    "/jan-4-new-background-transition/v6/ChatGPT Image Jan 5, 2026, 01_09_09 PM.png",
    "/jan-4-new-background-transition/v6/ChatGPT Image Jan 5, 2026, 01_09_13 PM.png",
    "/jan-4-new-background-transition/v6/ChatGPT Image Jan 5, 2026, 01_23_40 PM.png",
    "/jan-4-new-background-transition/v6/ChatGPT Image Jan 5, 2026, 01_12_36 PM.png",
  ];

  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <BackupHero />
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
    </main>
  );
}
