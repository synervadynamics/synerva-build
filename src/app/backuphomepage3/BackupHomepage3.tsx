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
import { SystemsThatHoldSection } from "@/components/SystemsThatHoldSection";
import { MainHero } from "@/app/homepage/MainHero";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";

export default function BackupHomepage3() {
  return (
    <main className="relative text-white backuphomepage backuphomepage-variant">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero />
        <Narrative />
        <Offerings />
        <Deliver />
        <SystemsThatHoldSection
          className="relative px-4 pb-3 pt-3 sm:px-10 sm:pb-10 sm:pt-7 lg:px-16 lg:pb-10 lg:pt-8"
          innerClassName="mx-auto w-full max-w-6xl"
        />
        <Systems />
        <Publications />
        <Labs variant="signup-only" />
        <SynervaDimensionsSection />
        <Philosophy />
        <Roadmap />
        <Merch />
        <About />
        <Footer />
      </div>
    </main>
  );
}
