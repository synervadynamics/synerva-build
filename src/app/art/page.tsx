import { buildPageMetadata } from "@/lib/metadata";
import { pages_art } from "@/copy/pages";
import ArtPageClient from "./pageClient";

const artPageCopy = pages_art;

export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "Synerva Dimensions — The Quiet Divine",
  description: artPageCopy.hero.subtitle,
  path: "/art"
});

export default function ArtPage() {
  return <ArtPageClient />;
}
