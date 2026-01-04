"use client";

import { useEffect } from "react";

export default function BackupHomepageBackground() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.backupHomepage = "1";
    return () => {
      delete root.dataset.backupHomepage;
    };
  }, []);

  return null;
}
