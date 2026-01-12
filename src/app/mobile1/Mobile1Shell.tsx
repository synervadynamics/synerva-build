"use client";

import { useEffect, useState } from "react";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";
import styles from "./mobile1.module.css";

const STORAGE_KEY = "mobile1LayoutMode";
const backgroundSources = [
  "/jan-4-new-background-transition/v8/1.png",
  "/jan-4-new-background-transition/v8/2.png",
  "/jan-4-new-background-transition/v8/3.png",
  "/jan-4-new-background-transition/v8/4.png",
];

type LayoutMode = "compact" | "expanded";

const expandIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path
      d="M9 5H5v4M5 5l6 6M15 19h4v-4M19 19l-6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const collapseIcon = (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path
      d="M5 9V5h4M5 5l6 6M19 15v4h-4M19 19l-6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

type Mobile1ShellProps = {
  children: React.ReactNode;
};

export default function Mobile1Shell({ children }: Mobile1ShellProps) {
  const [mode, setMode] = useState<LayoutMode>("compact");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "compact" || stored === "expanded") {
      setMode(stored);
    }
  }, []);

  const handleToggle = () => {
    setMode((current) => {
      const next = current === "compact" ? "expanded" : "compact";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <div id="mobile1-shell" data-mode={mode} className={styles.shell}>
      <ScrollMorphBackground imageSources={backgroundSources} />
      <div className={styles.contentOverlay} aria-hidden />
      <div className={`flex w-full flex-col gap-12 py-12 ${styles.content}`}>
        {children}
      </div>
      <button
        type="button"
        aria-label="Toggle layout width"
        aria-pressed={mode === "expanded"}
        className={styles.toggleButton}
        onClick={handleToggle}
      >
        {mode === "expanded" ? collapseIcon : expandIcon}
      </button>
    </div>
  );
}
