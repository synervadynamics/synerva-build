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
      let targetY = 0;
      let enterFrom: "top" | "bottom" = "top";
      let startY = TRAVEL_DISTANCE;

      const applyProgress = (progress: number) => {
        const y = gsap.utils.interpolate(startY, targetY, progress);
        setY(y);
        setOpacity(progress);
      };

      const updateTargetY = () => {
        const panelRect = panel.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();
        const desiredTop =
          panelRect.top + panelRect.height / 2 - textRect.height / 2;
        targetY = desiredTop - textRect.top;
      };

      updateTargetY();
      gsap.set(text, { y: targetY + TRAVEL_DISTANCE, opacity: 0 });

      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: () => {
          updateTargetY();
        },
        onEnter: (self) => {
          updateTargetY();
          enterFrom = "top";
          startY = targetY + TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onEnterBack: (self) => {
          updateTargetY();
          enterFrom = "bottom";
          startY = targetY - TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onUpdate: (self) => {
          applyProgress(self.progress);
        },
        onLeave: () => {
          setY(targetY);
          setOpacity(1);
        },
        onLeaveBack: () => {
          enterFrom = "top";
          startY = targetY + TRAVEL_DISTANCE;
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
