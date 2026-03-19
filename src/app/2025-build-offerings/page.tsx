import { buildPageMetadata } from "@/lib/metadata";
import Offerings2025BuildDesktop from "./Offerings2025BuildDesktop";
import Offerings2025BuildMobile from "./Offerings2025BuildMobile";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  title: "Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/2025-build-offerings",
});

export default function Offerings2025BuildPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <Suspense fallback={null}>
          <Offerings2025BuildDesktop />
        </Suspense>
      </div>
      <div className="view-mobile-only block xl:hidden">
        <Offerings2025BuildMobile />
      </div>
    </>
  );
}
