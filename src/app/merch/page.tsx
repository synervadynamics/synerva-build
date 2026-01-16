import { buildPageMetadata } from "@/lib/metadata";
import MerchDesktop from "@/app/merch/MerchDesktop";
import MerchMobile from "@/app/merch/MerchMobile";

export const metadata = buildPageMetadata({
  title: "Merch — Synerva Dynamics",
  description:
    "Preview Synerva merch mockups, drop timing, and the first edition slate before the store opens.",
  path: "/merch",
});

export default function MerchPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <MerchDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <MerchMobile />
      </div>
    </>
  );
}
