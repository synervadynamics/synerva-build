"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewMode = "desktop" | "mobile";

const SESSION_KEY = "synervaViewMode";
const MOBILE_REDIRECT_PATHS = new Set([
  "/lucentra",
  "/verisense",
  "/synerva-os",
]);

const getDefaultViewMode = (): ViewMode => {
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini/i.test(ua)) {
    return "mobile";
  }
  const hasTouch =
    typeof navigator.maxTouchPoints === "number" && navigator.maxTouchPoints > 0;
  const isIpadOS = hasTouch && /Macintosh/i.test(ua);
  return isIpadOS ? "mobile" : "desktop";
};

export default function ViewModeToggle() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [forcedMode, setForcedMode] = useState<ViewMode | null>(null);
  const [defaultMode, setDefaultMode] = useState<ViewMode | null>(null);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    if (stored === "desktop" || stored === "mobile") {
      setForcedMode(stored);
    }
    setDefaultMode(getDefaultViewMode());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const viewMode = forcedMode ?? defaultMode;
    if (viewMode) {
      root.setAttribute("data-view", viewMode);
    } else {
      root.removeAttribute("data-view");
    }
  }, [forcedMode, defaultMode]);

  const nextMode = useMemo<ViewMode>(() => {
    if (forcedMode) {
      return forcedMode === "desktop" ? "mobile" : "desktop";
    }
    return defaultMode === "desktop" ? "mobile" : "desktop";
  }, [forcedMode, defaultMode]);

  const label = nextMode === "desktop" ? "DESKTOP" : "MOBILE";

  const handleToggle = () => {
    setForcedMode(nextMode);
    window.sessionStorage.setItem(SESSION_KEY, nextMode);
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
