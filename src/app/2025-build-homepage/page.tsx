import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "./data/copy2025";
import HomeDesktop2025 from "./HomeDesktop2025";
import HomeMobile2025 from "./HomeMobile2025";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/2025-build-homepage",
});

export default function BuildHomepage2025Page() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <HomeDesktop2025 />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <HomeMobile2025 />
      </div>
    </>
  );
}
