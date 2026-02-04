import { buildPageMetadata } from "@/lib/metadata";
import OfferingsTest1Desktop from "@/app/offeringstest1/OfferingsTest1Desktop";
import OfferingsTest1Mobile from "@/app/offeringstest1/OfferingsTest1Mobile";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Offerings Test 1 — Synerva Dynamics",
  description:
    "Offerings test page for desktop layout translation and structural validation.",
  path: "/offeringstest1",
});

export default function OfferingsTest1Page() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <OfferingsTest1Desktop />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <OfferingsTest1Mobile />
      </div>
    </>
  );
}
