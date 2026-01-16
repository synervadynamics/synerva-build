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
      <div className="hidden lg:block">
        <MerchDesktop />
      </div>
      <div className="block lg:hidden">
        <MerchMobile />
      </div>
    </>
  );
}
