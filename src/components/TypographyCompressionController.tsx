// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type CompressionTarget = HTMLElement & {
  dataset: {
    typeCompression?: string;
    typeCompressionLineHeight?: string;
    typeCompressionLetterSpacing?: string;
  };
};

export const ENABLE_TYPE_COMPRESSION = true;

const MAX_LETTER_SPACING_EM = -0.01;
const MAX_LINE_HEIGHT_REDUCTION = 0.02;
const MOBILE_MAX_WIDTH = 640;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getCompression = (rect: DOMRect, viewportHeight: number) => {
  const viewportCenter = viewportHeight * 0.5;
  const elementCenter = rect.top + rect.height * 0.5;
  const maxDistance = Math.max(1, viewportHeight * 0.6);
  const distance = Math.abs(elementCenter - viewportCenter);
  return clamp(1 - distance / maxDistance, 0, 1);
};

export const TypographyCompressionController = () => {
  const shouldReduceMotion = useReducedMotion();
  const targetsRef = useRef<CompressionTarget[]>([]);

  useEffect(() => {
    if (!ENABLE_TYPE_COMPRESSION || shouldReduceMotion) return;

    const updateTargets = () => {
      targetsRef.current = Array.from(
        document.querySelectorAll<CompressionTarget>("[data-type-compression]"),
      );
    };

    updateTargets();

    let raf = 0;
    const update = () => {
      raf = 0;
      const viewportHeight = window.innerHeight || 1;
      const isMobile = window.matchMedia(
        `(max-width: ${MOBILE_MAX_WIDTH}px)`,
      ).matches;

      targetsRef.current.forEach((element) => {
        const baseLineHeight = Number(
          element.dataset.typeCompressionLineHeight ?? "1.5",
        );
        const baseLetterSpacing = Number(
          element.dataset.typeCompressionLetterSpacing ?? "0",
        );
        const compression = isMobile
          ? 0
          : getCompression(element.getBoundingClientRect(), viewportHeight);
        const nextLetterSpacing =
          baseLetterSpacing + MAX_LETTER_SPACING_EM * compression;
        const nextLineHeight =
          baseLineHeight * (1 - MAX_LINE_HEIGHT_REDUCTION * compression);

        element.style.letterSpacing = `${nextLetterSpacing}em`;
        element.style.lineHeight = `${nextLineHeight}`;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [shouldReduceMotion]);

  return null;
};
