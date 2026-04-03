import { Suspense } from "react";
import DesktopHomepage from "@/app/homepage/DesktopHomepage";
import MobileHomepage from "@/app/homepage/MobileHomepage";

export default function HomepageEntry() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <DesktopHomepage />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <MobileHomepage />
      </div>
    </>
  );
}
