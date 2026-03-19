"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

const defaultSections: SectionItem[] = [
  { id: "deliver", label: "Deliver" },
  { id: "systems", label: "Systems" },
  { id: "philosophy", label: "Philosophy" },
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
  const isHomepage = variant === "homepage";
  const [active, setActive] = useState<string>(
    isHomepage ? "" : resolvedSections[0]?.id ?? "",
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hasActivatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          if (isHomepage && !hasActivatedRef.current) {
            if (window.scrollY <= 0) return;
            hasActivatedRef.current = true;
          }
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
  }, [resolvedSections, isHomepage]);

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
    <div
      className={`flex items-center text-xs uppercase ${
        isHomepage
          ? "role-body gap-[0.3rem] tracking-[0.28em]"
          : "gap-2 tracking-[0.3em] text-white/50"
      }`}
      onMouseLeave={() => setHoveredId(null)}
    >
      {items.map((item) => {
        const isHovering = hoveredId !== null;
        const isHovered = hoveredId === item.id;
        const isActive = !isHovering && item.isActive;
        const isDimmed = isHovering && !isHovered;
        const isSecondaryGroup = isHomepage
          ? ["publications", "synerva-dimensions", "merch", "about"].includes(
              item.id,
            )
          : false;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-cursor="accent"
            onMouseEnter={() => setHoveredId(item.id)}
            onClick={
              getScrollOffset
                ? (event) => {
                    event.preventDefault();
                    const el = document.getElementById(item.id);
                    if (!el) return;
                    const offset = getScrollOffset();
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - offset;
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
            className={`flex flex-col items-center gap-2 transition ${
              item.id === "systems" && isHomepage ? "mr-[1.8rem]" : ""
            } ${
              isHomepage
                ? `role-body transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered || isActive
                      ? "opacity-100"
                      : isDimmed
                        ? "opacity-60"
                        : isSecondaryGroup
                          ? "opacity-70"
                          : "opacity-75"
                  }`
                : item.isActive
                  ? "text-white"
                  : "hover:text-white/80"
            }`}
          >
            <span>{item.label}</span>
            <span
              className={`h-1 w-10 rounded-full transition ${
                isHomepage
                  ? `origin-center bg-white/40 opacity-0 scale-x-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered || isActive
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
        );
      })}
    </div>
  );
};
