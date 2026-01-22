import { buildPageMetadata } from "@/lib/metadata";
import BackupOfferingsDesktop from "@/app/backupofferings/BackupOfferingsDesktop";
import BackupOfferingsMobile from "@/app/backupofferings/BackupOfferingsMobile";

export const metadata = buildPageMetadata({
  title: "Backup Offerings — Synerva Dynamics",
  description:
    "High-output execution, without the headcount tax. Synerva helps founders and teams ship brand, web, content, and systems faster and cleaner.",
  path: "/backupofferings",
});

export default function BackupOfferingsPage() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <BackupOfferingsDesktop />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <BackupOfferingsMobile />
      </div>
    </>
  );
}
