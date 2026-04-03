import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import HomepageEntry from "@/app/homepage/HomepageEntry";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function HomePage() {
  return <HomepageEntry />;
}
