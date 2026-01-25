import { About } from "@/components/About";
import { Deliver } from "@/components/Deliver";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Labs } from "@/components/Labs";
import { Merch } from "@/components/Merch";
import { Narrative } from "@/components/Narrative";
import { Offerings } from "@/components/Offerings";
import { Philosophy } from "@/components/Philosophy";
import { Publications } from "@/components/Publications";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SynervaDimensionsSection } from "@/components/SynervaDimensionsSection";
import { Systems } from "@/components/Systems";

type HomepageProps = {
  className?: string;
};

// Moved from src/app/page.tsx to share the homepage UI across routes.
export default function Homepage(_props: HomepageProps) {
  return (
    <main className="relative text-white">
      <ScrollProgress />
      <Hero />
      <Narrative />
      <Offerings />
      <Deliver />
      <Systems />
      <Publications />
      <Labs variant="signup-only" />
      <Merch />
      <Philosophy />
      <SynervaDimensionsSection />
      <About />
      <Footer />
    </main>
  );
}
