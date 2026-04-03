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
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import HomepageScrollGlow from "@/components/HomepageScrollGlow";
import styles from "@/app/homepage/homepage.module.css";
import { homepageContent } from "@/app/homepage/homepageContent";

export default function HomeDesktop() {
  const { desktop } = homepageContent;

  return (
    <main
      className={`sd-home ${styles.sdHome} relative bg-[#0E1514] text-white`}
    >
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <HomepageScrollGlow />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero content={desktop} />
        <Narrative content={desktop.narrative} />
        <Offerings content={desktop.offerings} />
        <Deliver content={desktop.deliver} />
        <SystemsThatHoldSection
          content={desktop.systemsThatHold}
          className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-18 sm:pt-10 lg:px-16 lg:pb-18 lg:pt-12"
          innerClassName="mx-auto w-full max-w-5xl"
        />
        <Systems content={desktop.systems} />
        <Publications content={desktop.publications} />
        <Labs variant="signup-only" content={desktop.previewAccess} />
        <SynervaDimensionsSection content={desktop.artwork} />
        <Philosophy content={desktop.philosophy} />
        <Merch content={desktop.merch} />
        <About content={desktop.founder} />
        <Footer content={desktop.footer} />
      </div>
    </main>
  );
}
