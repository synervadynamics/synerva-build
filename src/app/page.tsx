import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import HomeDesktop from "@/app/HomeDesktop";
import HomeMobile from "@/app/HomeMobile";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <HomeDesktop />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <HomeMobile />
      </div>
    </>
  );
}
