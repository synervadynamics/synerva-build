import { buildPageMetadata } from "@/lib/metadata";
import OfferingsClient from "@/app/offerings/OfferingsClient";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/offerings",
});

export default function OfferingsPage() {
  return <OfferingsClient />;
}
