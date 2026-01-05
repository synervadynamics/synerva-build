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
    "/jan-4-new-background-transition/v4/1.PNG",
    "/jan-4-new-background-transition/v4/2.PNG",
    "/jan-4-new-background-transition/v4/3.PNG",
    "/jan-4-new-background-transition/v4/4.PNG",
  ];

  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <ScrollMorphBackground imageSources={backgroundSources} />
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
