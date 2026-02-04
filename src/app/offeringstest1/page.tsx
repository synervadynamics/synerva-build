import { buildPageMetadata } from "@/lib/metadata";
import OfferingsDesktop from "@/app/offerings/OfferingsDesktop";
import OfferingsMobile from "@/app/offerings/OfferingsMobile";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offeringstest1",
});

export default function OfferingsTest1Page() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <OfferingsDesktop />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <OfferingsMobile />
      </div>
    </>
  );
}
