import QuietDivineDesktop from "@/app/dimensions/quiet-divine/QuietDivineDesktop";
import QuietDivineMobile from "@/app/dimensions/quiet-divine/QuietDivineMobile";

export default function QuietDivinePage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <QuietDivineDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <QuietDivineMobile />
      </div>
    </>
  );
}
