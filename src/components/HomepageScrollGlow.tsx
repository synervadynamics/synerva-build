"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function HomepageScrollGlow() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const glowOneOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const glowTwoOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.55, 0.75],
    [0, 1, 0],
  );
  const glowThreeOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.8, 0.95],
    [0, 1, 0],
  );
  const glowFourOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          background:
            "radial-gradient(circle at 18% 16%, rgba(30, 152, 170, 0.4), transparent 55%), radial-gradient(circle at 78% 22%, rgba(88, 214, 206, 0.34), transparent 52%), radial-gradient(circle at 52% 72%, rgba(66, 132, 196, 0.3), transparent 60%), radial-gradient(circle at 58% 36%, rgba(176, 188, 196, 0.22), transparent 58%)",
          backgroundSize: "175% 175%",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
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
          opacity: glowOneOpacity,
          background:
            "radial-gradient(circle at 18% 16%, rgba(28, 156, 170, 0.46), transparent 55%), radial-gradient(circle at 76% 24%, rgba(60, 206, 214, 0.34), transparent 52%), radial-gradient(circle at 52% 70%, rgba(32, 120, 150, 0.28), transparent 60%)",
          backgroundSize: "175% 175%",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: glowTwoOpacity,
          background:
            "radial-gradient(circle at 22% 18%, rgba(68, 210, 198, 0.4), transparent 56%), radial-gradient(circle at 72% 22%, rgba(44, 140, 176, 0.34), transparent 52%), radial-gradient(circle at 50% 74%, rgba(22, 110, 128, 0.26), transparent 62%)",
          backgroundSize: "175% 175%",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: glowThreeOpacity,
          background:
            "radial-gradient(circle at 24% 18%, rgba(52, 144, 200, 0.38), transparent 56%), radial-gradient(circle at 70% 26%, rgba(24, 96, 150, 0.32), transparent 54%), radial-gradient(circle at 50% 76%, rgba(16, 70, 108, 0.26), transparent 62%)",
          backgroundSize: "175% 175%",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[6]"
        style={{
          opacity: glowFourOpacity,
          background:
            "radial-gradient(circle at 24% 20%, rgba(164, 176, 188, 0.24), transparent 58%), radial-gradient(circle at 76% 26%, rgba(110, 126, 140, 0.22), transparent 56%), radial-gradient(circle at 52% 78%, rgba(70, 84, 96, 0.2), transparent 62%)",
          backgroundSize: "175% 175%",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
    </>
  );
}
