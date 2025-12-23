"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";

export const Systems = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionCopy = copy.systemsSection;

  return (
    <section id="systems" className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14">
      <div className="relative mx-auto max-w-6xl space-y-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">
            {sectionCopy.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl">{sectionCopy.heading}</h2>
          <p className="text-lg text-white/75">{sectionCopy.body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:p-8"
        >
          <ul className="space-y-3 text-sm text-white/80">
            {sectionCopy.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-6 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">
            {sectionCopy.microline}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
