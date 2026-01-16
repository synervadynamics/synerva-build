import ParallaxLoomDesktop from "@/app/dimensions/parallax-loom/ParallaxLoomDesktop";
import ParallaxLoomMobile from "@/app/dimensions/parallax-loom/ParallaxLoomMobile";

export default function ParallaxLoomPage() {
  return (
    <>
      <div className="hidden lg:block">
        <ParallaxLoomDesktop />
      </div>
      <div className="block lg:hidden">
        <ParallaxLoomMobile />
      </div>
    </>
  );
}
