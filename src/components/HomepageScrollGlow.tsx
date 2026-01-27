"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const transitionEase = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function HomepageScrollGlow() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const narrativeRef = useRef<HTMLElement | null>(null);
  const systemsRef = useRef<HTMLElement | null>(null);
  const publicationsRef = useRef<HTMLElement | null>(null);
  const merchRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById("hero");
    narrativeRef.current = document.getElementById("narrative");
    systemsRef.current = document.getElementById("systems");
    publicationsRef.current = document.getElementById("publications");
    merchRef.current = document.getElementById("merch");
    aboutRef.current = document.getElementById("about");
  }, []);

  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const narrativeScroll = useScroll({
    target: narrativeRef,
    offset: ["start end", "end start"],
  });
  const systemsScroll = useScroll({
    target: systemsRef,
    offset: ["start end", "end start"],
  });
  const publicationsScroll = useScroll({
    target: publicationsRef,
    offset: ["start end", "end start"],
  });
  const merchScroll = useScroll({
    target: merchRef,
    offset: ["start end", "end start"],
  });
  const aboutScroll = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const heroOpacity = useTransform(
    heroScroll.scrollYProgress,
    [0, 0.15, 0.75, 1],
    [0, 0.08, 0.08, 0],
  );
  const narrativeOpacity = useTransform(
    narrativeScroll.scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.1, 0.1, 0],
  );
  const narrativeShift = useTransform(
    narrativeScroll.scrollYProgress,
    [0, 1],
    ["-2vh", "2vh"],
  );
  const systemsOpacity = useTransform(
    systemsScroll.scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.09, 0.09, 0],
  );
  const systemsShiftX = useTransform(
    systemsScroll.scrollYProgress,
    [0, 1],
    ["-1.5vw", "1.5vw"],
  );
  const publicationsOpacity = useTransform(
    publicationsScroll.scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.05, 0.05, 0],
  );
  const merchOpacity = useTransform(
    merchScroll.scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.07, 0.07, 0],
  );
  const merchScale = useTransform(
    merchScroll.scrollYProgress,
    [0, 0.3],
    [1, 1.03],
  );
  const aboutOpacity = useTransform(
    aboutScroll.scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.06, 0.06, 0],
  );

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, #1F6F5B 0%, transparent 55%)",
          opacity: 0.08,
          mixBlendMode: "screen",
        }}
      />
    );
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: heroOpacity,
          background:
            "radial-gradient(circle at 65% 35%, #1F6F5B 0%, transparent 58%)",
          mixBlendMode: "screen",
          transition: `opacity 700ms ${transitionEase}`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: narrativeOpacity,
          y: narrativeShift,
          background:
            "radial-gradient(120% 60% at 12% 10%, #3A6E4E 0%, transparent 58%), radial-gradient(120% 60% at 88% 90%, #3A6E4E 0%, transparent 58%)",
          mixBlendMode: "soft-light",
          transition: `opacity 750ms ${transitionEase}`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: systemsOpacity,
          x: systemsShiftX,
          background:
            "radial-gradient(80% 45% at 50% 68%, #8B7A3A 0%, transparent 62%)",
          mixBlendMode: "soft-light",
          transition: `opacity 850ms ${transitionEase}`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: publicationsOpacity,
          background:
            "radial-gradient(circle at 50% 40%, #5E6F66 0%, transparent 65%), radial-gradient(circle at 50% 75%, #5E6F66 0%, transparent 70%)",
          mixBlendMode: "soft-light",
          transition: `opacity 700ms ${transitionEase}`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: merchOpacity,
          scale: merchScale,
          background:
            "radial-gradient(circle at 52% 46%, #7A5C3E 0%, transparent 45%)",
          mixBlendMode: "soft-light",
          transition: `opacity 700ms ${transitionEase}`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: aboutOpacity,
          background:
            "radial-gradient(circle at 50% 70%, #2F4F4A 0%, transparent 60%)",
          mixBlendMode: "soft-light",
          transition: `opacity 800ms ${transitionEase}`,
        }}
      />
    </>
  );
}
