import LiquidGradient from "@/components/LiquidGradient.client";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestsPage() {
  return (
    <main className="relative min-h-screen text-white">
      <LiquidGradient className="absolute inset-0 z-0" />
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 ring-1 ring-white/20">
            <div className="relative z-10 space-y-6 p-12">
              <div className="text-xs uppercase tracking-[0.4em] text-white/60">
                Test Section
              </div>
              <h2 className="text-4xl font-medium sm:text-5xl">
                Interactive Liquid Gradient
              </h2>
              <p className="max-w-xl text-lg text-white/75">
                This section exists to validate an architectural,
                production-safe liquid gradient system for Synerva.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
