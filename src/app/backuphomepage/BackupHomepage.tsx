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

type BackupHomepageProps = {
  className?: string;
};

export default function BackupHomepage(_props: BackupHomepageProps) {
  return (
    <main className="relative text-white">
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
    </main>
  );
}
