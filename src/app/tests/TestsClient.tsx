"use client";

import { useMemo, useState } from "react";
import LiquidGradient from "@/components/LiquidGradient.client";

const colorSchemes = {
  1: ["#F15A22", "#0A0E27", "#F15A22", "#0A0E27", "#F15A22", "#0A0E27"],
  2: ["#FF6C50", "#40E0D0", "#FF6C50", "#40E0D0", "#FF6C50", "#40E0D0"],
  3: ["#F15A22", "#0A0E27", "#40E0D0", "#F15A22", "#0A0E27", "#40E0D0"],
  4: ["#F26633", "#2D6B6D", "#D1AF9C", "#F26633", "#2D6B6D", "#D1AF9C"],
  5: ["#F15A22", "#004238", "#F15A22", "#000000", "#F15A22", "#000000"],
} as const;

const schemeKeys = [1, 2, 3, 4, 5] as const;

export default function TestsClient() {
  const [scheme, setScheme] = useState<keyof typeof colorSchemes>(1);
  const [panelOpen, setPanelOpen] = useState(false);
  const [customColors, setCustomColors] = useState<string[] | null>(null);
  const [interaction, setInteraction] = useState(2.2);
  const activeColors = useMemo(
    () => (customColors ?? colorSchemes[scheme]).slice(0, 6) as [
      string,
      string,
      string,
      string,
      string,
      string,
    ],
    [scheme, customColors],
  );

  const updateColor = (index: number, value: string) => {
    setCustomColors((prev) => {
      const base = (prev ?? colorSchemes[scheme]).slice(0, 6);
      base[index] = value.toUpperCase();
      return [...base];
    });
  };

  const exportColors = async () => {
    const payload = `Color Scheme:\n${activeColors
      .map((color, index) => `Color ${index + 1}: ${color}`)
      .join("\n")}\n\nHex Array: [${activeColors
      .map((color) => `"${color}"`)
      .join(", ")}]`;
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      // ignore
    }
  };

  return (
    <main className="relative min-h-screen text-white">
      <LiquidGradient
        className="absolute inset-0 z-0"
        colors={activeColors}
        interactionStrength={interaction}
        speed={1.45}
        intensity={1.9}
        gradientCount={12}
        gradientSize={0.48}
        color1Weight={0.7}
        color2Weight={1.7}
      />
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 ring-1 ring-white/40">
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

      <div className="fixed bottom-6 left-6 z-20 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/20 bg-black/40 p-3 backdrop-blur-xl">
          {schemeKeys.map((key) => (
            <button
              key={key}
              onClick={() => {
                setScheme(key);
                setCustomColors(null);
              }}
              className={`min-w-[54px] rounded-full border px-3 py-2 text-[0.65rem] uppercase tracking-[0.3em] transition ${
                scheme === key
                  ? "border-white/70 bg-white/20 text-white"
                  : "border-white/30 bg-white/10 text-white/70 hover:border-white/60 hover:bg-white/20"
              }`}
            >
              {`Scheme ${key}`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPanelOpen((prev) => !prev)}
            className="rounded-xl border border-white/25 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:bg-white/10"
          >
            Adjust Colors
          </button>
          <button
            onClick={exportColors}
            className="rounded-xl border border-white/25 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl transition hover:border-white/60 hover:bg-white/10"
          >
            Export
          </button>
        </div>
      </div>

      {panelOpen ? (
        <div className="fixed bottom-28 left-6 z-20 w-[320px] rounded-2xl border border-white/20 bg-black/55 p-4 backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] text-white/70">
            <span>Color Adjuster</span>
            <button
              onClick={() => setPanelOpen(false)}
              className="rounded-full border border-white/30 px-2 py-1 text-white/70 hover:border-white/60 hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="space-y-3">
            {activeColors.map((color, index) => (
              <div
                key={`${index}-${color}`}
                className="flex items-center gap-3"
              >
                <input
                  type="color"
                  value={color}
                  onChange={(event) => updateColor(index, event.target.value)}
                  className="h-9 w-16 cursor-pointer rounded-lg border border-white/30 bg-transparent"
                />
                <input
                  type="text"
                  value={color.toUpperCase()}
                  readOnly
                  className="flex-1 rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-xs tracking-[0.2em] text-white/70"
                />
              </div>
            ))}
            <div className="pt-2">
              <div className="mb-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/60">
                Cursor Tightness
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0.8}
                  max={3.5}
                  step={0.1}
                  value={interaction}
                  onChange={(event) =>
                    setInteraction(parseFloat(event.target.value))
                  }
                  className="h-2 w-full cursor-pointer accent-white"
                />
                <span className="w-10 text-xs text-white/70">
                  {interaction.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
