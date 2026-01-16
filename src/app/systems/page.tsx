import SystemsMobile from "@/app/systems/SystemsMobile";

export default function SystemsPage() {
  return (
    <>
      <div className="hidden xl:block" />
      <div className="block xl:hidden">
        <SystemsMobile />
      </div>
    </>
  );
}
