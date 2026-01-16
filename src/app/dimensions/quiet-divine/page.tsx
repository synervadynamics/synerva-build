import QuietDivineDesktop from "@/app/dimensions/quiet-divine/QuietDivineDesktop";
import QuietDivineMobile from "@/app/dimensions/quiet-divine/QuietDivineMobile";

export default function QuietDivinePage() {
  return (
    <>
      <div className="hidden lg:block">
        <QuietDivineDesktop />
      </div>
      <div className="block lg:hidden">
        <QuietDivineMobile />
      </div>
    </>
  );
}
