"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRAVEL_DISTANCE = 450;

export default function WhatsDeliveredScrollController() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const panels = rootRef.current.querySelectorAll<HTMLElement>(".wd-panel");

    const triggers: ScrollTrigger[] = [];

    panels.forEach((panel) => {
      const textBlock = panel.querySelector<HTMLElement>(".wd-text");
      if (!textBlock) return;

      // Reset initial state
      gsap.set(textBlock, {
        y: TRAVEL_DISTANCE,
        opacity: 0
      });

      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const direction = self.direction;

          // Progress normalized 0 → 1
          const progress = self.progress;

          // Direction-aware interpolation
          const y =
            direction === 1
              ? gsap.utils.interpolate(TRAVEL_DISTANCE, 0, progress)
              : gsap.utils.interpolate(-TRAVEL_DISTANCE, 0, progress);

          gsap.set(textBlock, {
            y,
            opacity: progress
          });
        }
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return <div ref={rootRef} />;
}
