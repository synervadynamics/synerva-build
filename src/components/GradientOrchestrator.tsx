"use client";

import { useEffect } from "react";

type Palette = {
  id: string;
  colors: [string, string, string, string];
};

const palettes: Palette[] = [
  {
    id: "hero",
    colors: [
      "rgba(88,229,255,0.24)",
      "rgba(255,170,120,0.20)",
      "rgba(170,255,210,0.18)",
      "rgba(255,214,120,0.14)",
    ],
  },
];

const setPalette = (colors?: [string, string, string, string]) => {
  if (!colors) return;
  const root = document.documentElement;
  colors.forEach((color, index) => {
    const baseIndex = index + 1;
    root.style.setProperty(`--g${baseIndex}`, color);
    root.style.setProperty(`--g${baseIndex + 4}`, color);
  });
};

export const GradientOrchestrator = () => {
  useEffect(() => {
    const heroPalette = palettes.find((p) => p.id === "hero");
    setPalette(heroPalette?.colors);
  }, []);

  return null;
};
