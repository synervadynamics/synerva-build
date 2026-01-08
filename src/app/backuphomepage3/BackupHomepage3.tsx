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

type BackupHomepage3Props = {
  mobileVariant?: "default" | "beats";
};

export default function BackupHomepage3({
  mobileVariant = "beats",
}: BackupHomepage3Props) {
  return (
    <main className="relative text-white backuphomepage backuphomepage-variant backuphomepage3">
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero mobileVariant="beats" />
        <Narrative mobileVariant={mobileVariant} />
        <Offerings />
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
