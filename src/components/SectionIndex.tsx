"use client";

import { useEffect, useMemo, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

const defaultSections: SectionItem[] = [
  { id: "deliver", label: "Deliver" },
  { id: "systems", label: "Systems" },
  { id: "philosophy", label: "Philosophy" },
  { id: "roadmap", label: "Roadmap" },
];

type Props = {
  sections?: SectionItem[];
  getScrollOffset?: () => number;
  variant?: "default" | "homepage";
};

export const SectionIndex = ({
  sections = defaultSections,
  getScrollOffset,
  variant = "default",
}: Props) => {
  const resolvedSections = sections.length ? sections : defaultSections;
  const [active, setActive] = useState<string>(resolvedSections[0]?.id ?? "");
  const isHomepage = variant === "homepage";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    resolvedSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [resolvedSections]);

  const items = useMemo(
    () =>
      resolvedSections.map((item) => ({
        ...item,
        isActive: active === item.id,
      })),
    [resolvedSections, active],
  );

  if (!items.length) return null;

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-cursor="accent"
          onClick={
            getScrollOffset
              ? (event) => {
                  event.preventDefault();
                  const el = document.getElementById(item.id);
                  if (!el) return;
                  const offset = getScrollOffset();
                  const top = el.getBoundingClientRect().top + window.scrollY - offset;
                  const reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches;
                  window.scrollTo({
                    top,
                    behavior: reduceMotion ? "auto" : "smooth",
                  });
                }
              : undefined
          }
          className={`group flex flex-col items-center gap-2 transition ${
            item.isActive
              ? "text-white"
              : isHomepage
                ? "text-white/70 hover:text-white"
                : "hover:text-white/80"
          }`}
        >
          <span>{item.label}</span>
          <span
            className={`h-1 w-10 rounded-full transition ${
              isHomepage
                ? `origin-center bg-white/40 opacity-0 scale-x-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-x-100 group-hover:bg-white group-hover:shadow-[0_0_18px_rgba(255,255,255,0.6)] ${
                    item.isActive
                      ? "opacity-100 scale-x-100 bg-white shadow-[0_0_18px_rgba(255,255,255,0.6)]"
                      : ""
                  }`
                : `bg-white/30 transition ${
                    item.isActive
                      ? "bg-white shadow-[0_0_18px_rgba(255,255,255,0.6)]"
                      : ""
                  }`
            }`}
          />
        </a>
      ))}
    </div>
  );
};
