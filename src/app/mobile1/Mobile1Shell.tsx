"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
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
  showBackButton?: boolean;
  backgroundImageUrl?: string;
};

export default function Mobile1Shell({
  children,
  showBackButton = false,
  backgroundImageUrl,
}: Mobile1ShellProps) {
  const [mode, setMode] = useState<LayoutMode>("expanded");
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "compact" || stored === "expanded") {
      setMode(stored);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsArtworkOpen(true);
    const handleClose = () => setIsArtworkOpen(false);
    window.addEventListener("artwork-open", handleOpen as EventListener);
    window.addEventListener("artwork-close", handleClose as EventListener);
    return () => {
      window.removeEventListener("artwork-open", handleOpen as EventListener);
      window.removeEventListener("artwork-close", handleClose as EventListener);
    };
  }, []);

  const handleToggle = () => {
    setMode((current) => {
      const next = current === "compact" ? "expanded" : "compact";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const handleExitArtwork = () => {
    window.dispatchEvent(new CustomEvent("artwork-exit"));
  };

  return (
    <div id="mobile1-shell" data-mode={mode} className={styles.shell}>
      {backgroundImageUrl ? (
        <SubpageStaticBackground imageUrl={backgroundImageUrl} />
      ) : (
        <ScrollMorphBackground imageSources={backgroundSources} />
      )}
      <div className={styles.contentOverlay} aria-hidden />
      <div className={`flex w-full flex-col gap-12 py-12 ${styles.content}`}>
        {children}
      </div>
      {showBackButton ? (
        isArtworkOpen ? (
          <button type="button" onClick={handleExitArtwork} className={styles.backButton}>
            <span aria-hidden>×</span>
            <span>Exit</span>
          </button>
        ) : (
          <Link
            href="/"
            aria-label="Back to mobile home"
            className={styles.backButton}
          >
            <span aria-hidden>←</span>
            <span>Home</span>
          </Link>
        )
      ) : null}
      {!isArtworkOpen ? (
        <button
          type="button"
          aria-label="Toggle layout width"
          aria-pressed={mode === "expanded"}
          className={styles.toggleButton}
          onClick={handleToggle}
        >
          {mode === "expanded" ? collapseIcon : expandIcon}
        </button>
      ) : null}
    </div>
  );
}
