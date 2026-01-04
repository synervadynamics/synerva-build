"use client";

import LiquidGradient from "@/components/LiquidGradient.client";

const backupColors: [string, string, string, string, string, string] = [
  "#30D5C8",
  "#2E8B57",
  "#1E90FF",
  "#F15A22",
  "#30D5C8",
  "#2E8B57",
];

export default function BackupHomepageLiquidBackground() {
  return (
    <LiquidGradient
      className="fixed inset-0 z-0"
      colors={backupColors}
      speed={1.2}
      intensity={1.35}
      gradientSize={0.48}
      gradientCount={12}
      color1Weight={0.85}
      color2Weight={1.1}
      interactionStrength={1.4}
    />
  );
}
