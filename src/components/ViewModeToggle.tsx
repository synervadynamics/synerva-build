"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewMode = "desktop" | "mobile";

const DESKTOP_QUERY = "(min-width: 1280px)";
const MOBILE_REDIRECT_PATHS = new Set([
  "/lucentra",
  "/verisense",
  "/synerva-os",
]);

export default function ViewModeToggle() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [forcedMode, setForcedMode] = useState<ViewMode | null>(null);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktopViewport(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (forcedMode) {
      root.setAttribute("data-view", forcedMode);
    } else {
      root.removeAttribute("data-view");
    }
  }, [forcedMode]);

  const nextMode = useMemo<ViewMode>(() => {
    if (forcedMode) {
      return forcedMode === "desktop" ? "mobile" : "desktop";
    }
    return isDesktopViewport ? "mobile" : "desktop";
  }, [forcedMode, isDesktopViewport]);

  const label = nextMode === "desktop" ? "Desktp" : "Mobile";

  const handleToggle = () => {
    setForcedMode(nextMode);
    if (nextMode === "mobile" && MOBILE_REDIRECT_PATHS.has(pathname)) {
      router.push("/systems");
      return;
    }
    if (nextMode === "desktop" && pathname === "/systems") {
      router.push("/#systems");
    }
  };

  return (
    <button
      type="button"
      className="fixed bottom-4 left-4 z-[200] rounded-full border border-white/30 bg-black/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_16px_60px_rgba(0,0,0,0.55)] backdrop-blur-md transition hover:border-white/60"
      aria-label={`Switch to ${nextMode} view`}
      onClick={handleToggle}
    >
      {label}
    </button>
  );
}
