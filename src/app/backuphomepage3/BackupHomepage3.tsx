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

export default function BackupHomepage3() {
  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero mobileVariant="beats" />
        <Narrative mobileVariant="beats" />
        <Offerings />
        <Deliver mobileVariant="beats" />
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
