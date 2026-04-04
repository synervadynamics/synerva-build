import { Footer } from "@/components/Footer";
import HomepageScrollGlow from "@/app/homepage/components/HomepageScrollGlow";
import { ScrollProgress } from "@/app/homepage/components/ScrollProgress";
import { MainHero } from "@/app/homepage/MainHero";
import { SynervaDimensionsSection } from "@/app/homepage/sections/SynervaDimensionsSection";
import { About } from "@/app/homepage/sections/About";
import { Deliver } from "@/app/homepage/sections/Deliver";
import { Labs } from "@/app/homepage/sections/Labs";
import { Merch } from "@/app/homepage/sections/Merch";
import { Narrative } from "@/app/homepage/sections/Narrative";
import { Offerings } from "@/app/homepage/sections/Offerings";
import { Philosophy } from "@/app/homepage/sections/Philosophy";
import { Publications } from "@/app/homepage/sections/Publications";
import { Systems } from "@/app/homepage/sections/Systems";
import { SystemsThatHoldSection } from "@/app/homepage/sections/SystemsThatHoldSection";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import styles from "@/app/homepage/homepage.module.css";
import { homepageContent } from "@/app/homepage/homepageContent";

export default function DesktopHomepage() {
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
