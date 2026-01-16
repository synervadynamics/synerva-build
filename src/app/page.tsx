import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import HomeDesktop from "@/app/HomeDesktop";
import HomeMobile from "@/app/HomeMobile";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <div className="hidden lg:block">
        <HomeDesktop />
      </div>
      <div className="block lg:hidden">
        <HomeMobile />
      </div>
    </>
  );
}
