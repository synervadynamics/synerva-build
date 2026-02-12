import InnerClimateDesktop from "@/app/dimensions/inner-climate/InnerClimateDesktop";
import InnerClimateMobile from "@/app/dimensions/inner-climate/InnerClimateMobile";

export default function InnerClimatePage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <InnerClimateDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <InnerClimateMobile />
      </div>
    </>
  );
}
