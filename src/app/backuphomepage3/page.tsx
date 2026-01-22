import BackupHomepage3 from "@/app/backuphomepage3/BackupHomepage3";
import BackupHomepage3Mobile from "@/app/backuphomepage3/BackupHomepage3Mobile";

export default function BackupHomepage3Page() {
  return (
    <>
      <div className="view-desktop-only hidden xl:block">
        <BackupHomepage3 />
      </div>
      <div className="view-mobile-only block xl:hidden">
        <BackupHomepage3Mobile />
      </div>
    </>
  );
}
