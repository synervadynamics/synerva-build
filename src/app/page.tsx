import { Hero } from "@/components/Hero";
import { Deliver } from "@/components/Deliver";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Systems } from "@/components/Systems";
import { Publications } from "@/components/Publications";
import { Roadmap } from "@/components/Roadmap";
import { Narrative } from "@/components/Narrative";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import { Offerings } from "@/components/Offerings";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main className="relative text-white">
      <ScrollProgress />
      <Hero />
      <Narrative />
      <Offerings />
      <Deliver />
      <Systems />
      <Publications />
      <Philosophy />
      <Roadmap />
      <SynervaDimensionsSection />
      <About />
      <Footer />
    </main>
  );
}
