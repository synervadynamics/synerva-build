"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubpageHomeButton() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      className="fixed left-4 top-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md transition hover:border-white/50 sm:left-6 sm:top-6 sm:px-5 sm:py-2.5 sm:text-sm"
      aria-label="Return to home page"
    >
      <span aria-hidden="true">←</span>
      <span>Home</span>
    </Link>
  );
}
