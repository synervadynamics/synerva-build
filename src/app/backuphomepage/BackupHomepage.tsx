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

type BackupHomepageProps = {
  className?: string;
  backgroundSources?: string[];
};

export default function BackupHomepage(props: BackupHomepageProps) {
  const { className, backgroundSources } = props;
  return (
    <main
      className={`relative text-white backuphomepage${className ? ` ${className}` : ""}`}
    >
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[5] bg-gradient-to-b from-[rgba(8,12,18,0.18)] via-[rgba(8,12,18,0.12)] to-[rgba(8,12,18,0.16)]"
      />
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
