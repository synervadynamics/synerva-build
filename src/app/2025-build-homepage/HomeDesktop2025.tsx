import { About } from "./components/About2025";
import { Deliver } from "./components/Deliver2025";
import { Footer } from "./components/Footer2025";
import { Labs } from "./components/Labs2025";
import { Merch } from "./components/Merch2025";
import { Narrative } from "./components/Narrative2025";
import { Offerings } from "./components/Offerings2025";
import { Philosophy } from "./components/Philosophy2025";
import { Publications } from "./components/Publications2025";
import { ScrollProgress } from "./components/ScrollProgress2025";
import { SynervaDimensionsSection } from "./components/SynervaDimensionsSection2025";
import { Systems } from "./components/Systems2025";
import { SystemsThatHoldSection } from "./components/SystemsThatHoldSection2025";
import { MainHero } from "./MainHero2025";
import SubpageStaticBackground from "./components/SubpageStaticBackground2025";
import HomepageScrollGlow from "./components/HomepageScrollGlow2025";
import styles from "./homepage2025.module.css";

export default function HomeDesktop() {
  return (
    <main
      className={`sd-home ${styles.sdHome} relative bg-[#0E1514] text-white backuphomepage backuphomepage-variant`}
    >
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <HomepageScrollGlow />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <MainHero />
        <Narrative />
        <Offerings />
        <Deliver />
        <SystemsThatHoldSection
          className="relative px-4 pb-4 pt-4 sm:px-10 sm:pb-18 sm:pt-10 lg:px-16 lg:pb-18 lg:pt-12"
          innerClassName="mx-auto w-full max-w-5xl"
        />
        <Systems />
        <Publications />
        <Labs variant="signup-only" />
        <SynervaDimensionsSection />
        <Philosophy />
        <Merch />
        <About />
        <Footer />
      </div>
    </main>
  );
}
