import ParallaxLoomDesktop from "@/app/dimensions/parallax-loom/ParallaxLoomDesktop";
import ParallaxLoomMobile from "@/app/dimensions/parallax-loom/ParallaxLoomMobile";

export default function ParallaxLoomPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <ParallaxLoomDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <ParallaxLoomMobile />
      </div>
    </>
  );
}
