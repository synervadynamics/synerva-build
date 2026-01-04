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
import { Merch } from "@/components/Merch";
import { Labs } from "@/components/Labs";

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
      <div className="relative px-6 py-4 sm:px-10 sm:py-4 lg:px-16 lg:py-4">
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7 [&_section#publications]:px-0 [&_section#publications]:py-0">
            <Publications />
          </div>
        </div>
      </div>
      <Labs variant="signup-only" />
      <Merch />
      <Philosophy />
      <Roadmap />
      <SynervaDimensionsSection />
      <About />
      <Footer />
    </main>
  );
}
