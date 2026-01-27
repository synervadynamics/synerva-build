import SystemsOverviewSection from "@/components/systems/SystemsOverviewSection";
import LucentraSection from "@/components/systems/LucentraSection";
import VerisenseSection from "@/components/systems/VerisenseSection";

export default function SystemsDesktop() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <SystemsOverviewSection />
      <LucentraSection />
      <VerisenseSection />
    </main>
  );
}
