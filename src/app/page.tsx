import { buildPageMetadata } from "@/lib/metadata";
import HomepageEntry from "@/app/homepage/HomepageEntry";

export const metadata = buildPageMetadata({
  title: "Synerva Dynamics — The Power of Many, Engineered for One",
  description:
    "Synerva Dynamics builds unified systems across brand, web, content, and automation—designed around structure, not noise. Every layer works in one integrated loop, so ambitious teams gain lift they can see, measure, and compound.",
  path: "/",
});

export default function HomePage() {
  return <HomepageEntry />;
}
