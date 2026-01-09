"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRAVEL_DISTANCE = 160;

export default function WhatsDeliveredScroll() {
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>(".wd-panel");
    const triggers: ScrollTrigger[] = [];

    panels.forEach((panel) => {
      const text = panel.querySelector<HTMLElement>(".wd-text");
      if (!text) return;

      const setY = gsap.quickSetter(text, "y", "px");
      const setOpacity = gsap.quickSetter(text, "opacity");
      let enterFrom: "top" | "bottom" = "top";
      let startY = TRAVEL_DISTANCE;

      const applyProgress = (progress: number) => {
        if (enterFrom === "top") {
          setY(startY * (1 - progress));
          setOpacity(progress);
        } else {
          setY(startY * progress);
          setOpacity(1 - progress);
        }
      };

      gsap.set(text, { y: startY, opacity: 0 });

      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: (self) => {
          enterFrom = "top";
          startY = TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onEnterBack: (self) => {
          enterFrom = "bottom";
          startY = -TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onUpdate: (self) => {
          applyProgress(self.progress);
        },
        onLeave: () => {
          setY(0);
          setOpacity(1);
        },
        onLeaveBack: () => {
          enterFrom = "top";
          startY = TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
        }
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return null;
}
