"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRAVEL_DISTANCE = 180;

export default function WhatsDeliveredScroll() {
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>(".wd-panel");

    const triggers: ScrollTrigger[] = [];

    panels.forEach((panel) => {
      const text = panel.querySelector<HTMLElement>(".wd-text");
      if (!text) return;

      // Reset to neutral baseline
      gsap.set(text, {
        y: 0,
        opacity: 1
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
          pin: false,
          invalidateOnRefresh: true
        }
      });

      tl.fromTo(
        text,
        { y: TRAVEL_DISTANCE, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" }
      );

      triggers.push(tl.scrollTrigger!);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
