import { buildPageMetadata } from "@/lib/metadata";
import VerisensePageClient from "@/app/verisense/VerisensePageClient";

export const metadata = buildPageMetadata({
  title: "Verisense — Where communication moves outcomes. | Synerva Dynamics",
  description:
    "Verisense is a diagnostic system for human communication. It models delivery as structured signal across voice, expression, posture, pacing, and language, tracked over time and interpreted in context.",
  path: "/verisense",
});

export default function VerisensePage() {
  return <VerisensePageClient />;
}
