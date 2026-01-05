import BackupHomepage from "@/app/backuphomepage/BackupHomepage";

const BACKUPHOMEPAGE2_SOURCES = [
  "/jan-4-new-background-transition/v3/1.png",
  "/jan-4-new-background-transition/v3/2.png",
  "/jan-4-new-background-transition/v3/3.png",
  "/jan-4-new-background-transition/v3/4.png",
];

export default function BackupHomepage2Page() {
  return (
    <BackupHomepage
      className="backuphomepage-variant"
      backgroundSources={BACKUPHOMEPAGE2_SOURCES}
    />
  );
}
