import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import ArtPageClient from "./pageClient";

const artPageCopy = copy.pages.art;

export const metadata = buildPageMetadata({
  title: `Art — ${artPageCopy.heading}`,
  description: artPageCopy.description,
  path: "/art"
});

export default function ArtPage() {
  return <ArtPageClient />;
}
