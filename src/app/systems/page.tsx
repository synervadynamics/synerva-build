import SystemsDesktop from "@/app/systems/SystemsDesktop";
import SystemsMobile from "@/app/systems/SystemsMobile";

export default function SystemsPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <SystemsDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <SystemsMobile />
      </div>
    </>
  );
}
