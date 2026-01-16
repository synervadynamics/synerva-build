import { buildPageMetadata } from "@/lib/metadata";
import OfferingsDesktop from "@/app/offerings/OfferingsDesktop";
import OfferingsMobile from "@/app/offerings/OfferingsMobile";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offerings",
});

export default function OfferingsPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <OfferingsDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <OfferingsMobile />
      </div>
    </>
  );
}
