import SurfaceTensionDesktop from "@/app/dimensions/surface-tension/SurfaceTensionDesktop";
import SurfaceTensionMobile from "@/app/dimensions/surface-tension/SurfaceTensionMobile";

export default function SurfaceTensionPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <SurfaceTensionDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <SurfaceTensionMobile />
      </div>
    </>
  );
}
