import { buildPageMetadata } from "@/lib/metadata";
import OfferingsTest1Desktop from "@/app/offeringstest1/OfferingsTest1Desktop";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offerings",
});

export default function OfferingsPage() {
  return (
    <Suspense fallback={null}>
      <OfferingsTest1Desktop />
    </Suspense>
  );
}
