import QuietDivineDesktop from "@/app/dimensions/quiet-divine/QuietDivineDesktop";
import QuietDivineMobile from "@/app/dimensions/quiet-divine/QuietDivineMobile";

export default function QuietDivinePage() {
  return (
    <>
      <div className="hidden xl:block">
        <QuietDivineDesktop />
      </div>
      <div className="block xl:hidden">
        <QuietDivineMobile />
      </div>
    </>
  );
}
