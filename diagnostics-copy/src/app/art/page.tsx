import { buildPageMetadata } from "@/lib/metadata";
import { pages_art } from "@/copy/pages";
import ArtPageClient from "./pageClient";

const artPageCopy = pages_art;

export const metadata = buildPageMetadata({
  title: "Art — Synerva Dynamics",
  description: artPageCopy.hero.subtitle,
  path: "/art"
});

export default function ArtPage() {
  return <ArtPageClient />;
}
