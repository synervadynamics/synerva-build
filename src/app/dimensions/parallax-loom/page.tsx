import ParallaxLoomDesktop from "@/app/dimensions/parallax-loom/ParallaxLoomDesktop";
import ParallaxLoomMobile from "@/app/dimensions/parallax-loom/ParallaxLoomMobile";

export default function ParallaxLoomPage() {
  return (
    <>
      <div className="hidden xl:block">
        <ParallaxLoomDesktop />
      </div>
      <div className="block xl:hidden">
        <ParallaxLoomMobile />
      </div>
    </>
  );
}
