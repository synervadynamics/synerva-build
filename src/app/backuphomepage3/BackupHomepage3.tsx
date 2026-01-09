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
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";
import Script from "next/script";

const backgroundSources = [
  "/jan-4-new-background-transition/v8/1.png",
  "/jan-4-new-background-transition/v8/2.png",
  "/jan-4-new-background-transition/v8/3.png",
  "/jan-4-new-background-transition/v8/4.png",
];

type BackupHomepage3Props = {
  mobileVariant?: "default" | "beats";
};

export default function BackupHomepage3({
  mobileVariant = "beats",
}: BackupHomepage3Props) {
  return (
    <main className="relative text-white backuphomepage backuphomepage-variant backuphomepage3">
      <Script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script id="synerva-scroll-hero" strategy="afterInteractive">{`
        const initScrollHero = () => {
          gsap.registerPlugin(ScrollTrigger);

          const images = Array.from(document.querySelectorAll(".hero-image"));
          const totalImages = images.length;
          if (!totalImages) return;

          gsap.set(images, { opacity: 0, scale: 1.05 });
          gsap.set(images[0], { opacity: 1, scale: 1 });

          ScrollTrigger.create({
            trigger: "#synerva-scroll-hero",
            start: "top top",
            end: () => "+=" + window.innerHeight * totalImages,
            pin: true,
            pinSpacing: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => {
              const progress = self.progress;
              const index = Math.min(
                totalImages - 1,
                Math.floor(progress * totalImages)
              );

              images.forEach((img, i) => {
                if (i === index) {
                  gsap.to(img, { opacity: 1, scale: 1, duration: 0.3, overwrite: true });
                } else {
                  gsap.to(img, { opacity: 0, scale: 1.05, duration: 0.3, overwrite: true });
                }
              });
            }
          });

          /* SAFETY RESET */
          ScrollTrigger.refresh();
        };

        const waitForGSAP = () => {
          let attempts = 0;
          const timer = window.setInterval(() => {
            if (window.gsap && window.ScrollTrigger) {
              window.clearInterval(timer);
              initScrollHero();
            }

            attempts += 1;
            if (attempts > 200) {
              window.clearInterval(timer);
            }
          }, 50);
        };

        if (document.readyState === "complete") {
          waitForGSAP();
        } else {
          window.addEventListener("load", waitForGSAP, { once: true });
        }
      `}</Script>
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <ScrollProgress />
        <section id="synerva-scroll-hero">
          <div className="scroll-hero-inner">
            <div className="image-stack">
              <img
                src="https://files.catbox.moe/417il8.WEBP"
                className="hero-image active"
              />
              <img src="https://files.catbox.moe/1m6fi4.WEBP" className="hero-image" />
              <img src="https://files.catbox.moe/d0v9e1.PNG" className="hero-image" />
              <img src="https://files.catbox.moe/80kuy1.WEBP" className="hero-image" />
            </div>

            <div className="hero-overlay">
              <h1>Synerva Dynamics</h1>
            </div>
          </div>
        </section>
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
