import { Hero } from "@/components/Hero";
import { Deliver } from "@/components/Deliver";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Systems } from "@/components/Systems";
import { Labs } from "@/components/Labs";
import { Roadmap } from "@/components/Roadmap";
import { Narrative } from "@/components/Narrative";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import { GradientOrchestrator } from "@/components/GradientOrchestrator";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main className="relative text-white">
      <GradientOrchestrator />
      <ScrollProgress />
      <Hero />
      <Narrative />
      <Deliver />
      <Systems />
      <Labs />
      <Philosophy />
      <Roadmap />
      <SynervaDimensionsSection />
      <About />
      <Footer />
    </main>
  );
}
