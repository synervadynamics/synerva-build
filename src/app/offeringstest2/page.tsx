import { buildPageMetadata } from "@/lib/metadata";
import OfferingsMobile from "@/app/offerings/OfferingsMobile";

export const metadata = {
  ...buildPageMetadata({
    title: "Offerings — Synerva Dynamics",
    description:
      "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
    path: "/offeringstest2",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfferingsTest2Page() {
  return <OfferingsMobile />;
}
