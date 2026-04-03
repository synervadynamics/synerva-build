import { Suspense } from "react";
import HomeDesktop from "@/app/HomeDesktop";
import HomeMobile from "@/app/HomeMobile";

export default function HomepageEntry() {
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
