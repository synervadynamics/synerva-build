import SystemsOverviewSection from "@/components/systems/SystemsOverviewSection";
import LucentraSection from "@/components/systems/LucentraSection";

export default function SystemsDesktop() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <SystemsOverviewSection />
      <LucentraSection />
    </main>
  );
}
