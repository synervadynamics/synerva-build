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
import { desktopHomepageCopy } from "@/app/homepage/desktopHomepageCopy";

export default function HomeDesktop() {
  return (
    <main
      className={`sd-home ${styles.sdHome} relative bg-[#0E1514] text-white`}
    >
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <HomepageScrollGlow />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero content={desktopHomepageCopy} />
        <Narrative content={desktopHomepageCopy.narrative} />
        <Offerings content={desktopHomepageCopy.offerings} />
        <Deliver content={desktopHomepageCopy.deliver} />
        <SystemsThatHoldSection
          content={desktopHomepageCopy.systemsThatHold}
          className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-18 sm:pt-10 lg:px-16 lg:pb-18 lg:pt-12"
          innerClassName="mx-auto w-full max-w-5xl"
        />
        <Systems content={desktopHomepageCopy.systems} />
        <Publications content={desktopHomepageCopy.publications} />
        <Labs variant="signup-only" content={desktopHomepageCopy.previewAccess} />
        <SynervaDimensionsSection content={desktopHomepageCopy.artwork} />
        <Philosophy content={desktopHomepageCopy.philosophy} />
        <Merch content={desktopHomepageCopy.merch} />
        <About content={desktopHomepageCopy.founder} />
        <Footer content={desktopHomepageCopy.footer} />
      </div>
    </main>
  );
}
