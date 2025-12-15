import type { Metadata } from "next";
import { parallaxLoomContent } from "@/lib/dimensions/parallaxLoomContent";

const description =
  parallaxLoomContent.heroCopy?.split("\n").filter(Boolean)[0] ??
  "Parallax Loom Brewing Co. — Synerva Dimensions Series 002.";

export const metadata: Metadata = {
  title: "Parallax Loom Brewing Co. — Synerva Dimensions Series 002",
  description,
  openGraph: {
    title: "Parallax Loom Brewing Co. — Synerva Dimensions Series 002",
    description,
  },
  twitter: {
    title: "Parallax Loom Brewing Co. — Synerva Dimensions Series 002",
    description,
  },
};
