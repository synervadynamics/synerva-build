import { buildPageMetadata } from "@/lib/metadata";
import OfferingsTest1Desktop from "@/app/offeringstest1/OfferingsTest1Desktop";
import OfferingsTest1Mobile from "@/app/offeringstest1/OfferingsTest1Mobile";
import { headers } from "next/headers";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offerings",
});

export default function OfferingsPage() {
  const ua = headers().get("user-agent") ?? "";
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini/i.test(ua);

  if (isMobile) {
    return <OfferingsTest1Mobile />;
  }

  return (
    <Suspense fallback={null}>
      <OfferingsTest1Desktop />
    </Suspense>
  );
}
