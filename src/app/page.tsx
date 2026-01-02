<<<<<<< HEAD
import Homepage from "@/components/Homepage/Homepage";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
=======
// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.

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
import { TypographyCompressionController } from "@/components/TypographyCompressionController";
>>>>>>> d19f63d661261143e62be4751549f03d8ddefd3b

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

<<<<<<< HEAD
export default function Page() {
  return <Homepage />;
=======
export default function HomePage() {
  return (
    <main className="relative text-white">
      <TypographyCompressionController />
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
      <Roadmap />
      <SynervaDimensionsSection />
      <About />
      <Footer />
    </main>
  );
>>>>>>> d19f63d661261143e62be4751549f03d8ddefd3b
}
