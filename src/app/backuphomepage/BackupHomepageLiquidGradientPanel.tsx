"use client";

import { useMemo, useState } from "react";
import LiquidGradient from "@/components/LiquidGradient.client";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const defaultColors = ["#30D5C8", "#2E8B57", "#1E90FF", "#F15A22"] as const;

export default function BackupHomepageLiquidGradientPanel() {
  const [colors, setColors] = useState<string[]>([...defaultColors]);
  const [tightness, setTightness] = useState(0.45);
  const [responsiveness, setResponsiveness] = useState(1.4);

  const gradientColors = useMemo(
    () =>
      [
        colors[0] ?? defaultColors[0],
        colors[1] ?? defaultColors[1],
        colors[2] ?? defaultColors[2],
        colors[3] ?? defaultColors[3],
        colors[0] ?? defaultColors[0],
        colors[1] ?? defaultColors[1],
      ] as [string, string, string, string, string, string],
    [colors],
  );

  return (
    <>
      <LiquidGradient
        className="fixed inset-0 z-0"
        colors={gradientColors}
        speed={1.2}
        intensity={1.35}
        gradientSize={clamp(tightness, 0.35, 0.75)}
        gradientCount={12}
        color1Weight={0.85}
        color2Weight={1.1}
        interactionStrength={clamp(responsiveness, 0.6, 2.2)}
      />
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="pointer-events-auto absolute left-6 top-28 w-64 rounded-2xl border border-white/15 bg-black/45 p-4 text-white shadow-[0_24px_80px_-50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Gradient Controls
          </div>
          <div className="mt-4 space-y-3">
            {colors.map((value, index) => (
              <label
                key={`color-${index}`}
                className="flex items-center justify-between gap-3 text-xs text-white/75"
              >
                <span>{`Color ${index + 1}`}</span>
                <input
                  type="color"
                  value={value}
                  onChange={(event) => {
                    const next = [...colors];
                    next[index] = event.target.value;
                    setColors(next);
                  }}
                  className="h-8 w-12 cursor-pointer rounded-lg border border-white/20 bg-transparent"
                  aria-label={`Color ${index + 1}`}
                />
              </label>
            ))}
          </div>
          <div className="mt-5 space-y-4 text-xs text-white/75">
            <label className="space-y-2">
              <span className="block">Tightness</span>
              <input
                type="range"
                min="0.35"
                max="0.75"
                step="0.01"
                value={tightness}
                onChange={(event) =>
                  setTightness(Number(event.target.value))
                }
                className="w-full"
                aria-label="Gradient tightness"
              />
            </label>
            <label className="space-y-2">
              <span className="block">Responsiveness</span>
              <input
                type="range"
                min="0.6"
                max="2.2"
                step="0.05"
                value={responsiveness}
                onChange={(event) =>
                  setResponsiveness(Number(event.target.value))
                }
                className="w-full"
                aria-label="Gradient responsiveness"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
