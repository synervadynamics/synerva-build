import ArtShowcasePageClient from "./pageClient";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";

const artPageCopy = copy.pages.art;

export const metadata = buildPageMetadata({
  title: `${artPageCopy.heading} — Synerva Dynamics`,
  description: artPageCopy.description,
  path: "/art"
});

export default function ArtShowcasePage() {
  return <ArtShowcasePageClient />;
}
