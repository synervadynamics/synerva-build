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
    const targets = new Map<HTMLElement, number>();

    const computeReferenceOffsets = () => {
      const panelArray = Array.from(panels);
      const referencePanel = panelArray[0];
      if (!referencePanel) return;
      const referenceText =
        referencePanel.querySelector<HTMLElement>(".wd-text");
      if (!referenceText) return;

      panelArray.forEach((panel) => {
        const text = panel.querySelector<HTMLElement>(".wd-text");
        if (!text) return;
        gsap.set(text, { y: 0, opacity: 0 });
      });

      const referencePanelRect = referencePanel.getBoundingClientRect();
      const referenceTextRect = referenceText.getBoundingClientRect();
      const referenceOffset =
        referenceTextRect.top - referencePanelRect.top;

      panelArray.forEach((panel) => {
        const text = panel.querySelector<HTMLElement>(".wd-text");
        if (!text) return;
        const panelRect = panel.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();
        const currentOffset = textRect.top - panelRect.top;
        targets.set(text, referenceOffset - currentOffset);
      });
    };

    panels.forEach((panel) => {
      const text = panel.querySelector<HTMLElement>(".wd-text");
      if (!text) return;

      const setY = gsap.quickSetter(text, "y", "px");
      const setOpacity = gsap.quickSetter(text, "opacity");
      let targetY = 0;
      let startY = TRAVEL_DISTANCE;

      const applyProgress = (progress: number) => {
        const y = gsap.utils.interpolate(startY, targetY, progress);
        setY(y);
        setOpacity(progress);
      };

      const updateTargetY = () => {
        targetY = targets.get(text) ?? 0;
      };

      gsap.set(text, { opacity: 0 });

      const triggerDown = ScrollTrigger.create({
        trigger: panel,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: () => {
          computeReferenceOffsets();
          updateTargetY();
          if (!ScrollTrigger.isInViewport(panel)) {
            startY = targetY + TRAVEL_DISTANCE;
            setY(startY);
            setOpacity(0);
          }
        },
        onEnter: (self) => {
          computeReferenceOffsets();
          updateTargetY();
          startY = targetY + TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onUpdate: (self) => {
          if (self.direction !== 1) return;
          applyProgress(self.progress);
        },
        onLeave: () => {
          setY(targetY);
          setOpacity(1);
        },
        onLeaveBack: () => {
          startY = targetY + TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
        }
      });

      const triggerUp = ScrollTrigger.create({
        trigger: panel,
        start: "bottom 30%",
        end: "bottom 60%",
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: () => {
          computeReferenceOffsets();
          updateTargetY();
          if (!ScrollTrigger.isInViewport(panel)) {
            startY = targetY - TRAVEL_DISTANCE;
            setY(startY);
            setOpacity(0);
          }
        },
        onEnterBack: (self) => {
          computeReferenceOffsets();
          updateTargetY();
          startY = targetY - TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
          applyProgress(self.progress);
        },
        onUpdate: (self) => {
          if (self.direction !== -1) return;
          applyProgress(self.progress);
        },
        onLeaveBack: () => {
          setY(targetY);
          setOpacity(1);
        },
        onLeave: () => {
          startY = targetY - TRAVEL_DISTANCE;
          setY(startY);
          setOpacity(0);
        }
      });

      triggers.push(triggerDown, triggerUp);
    });

    computeReferenceOffsets();

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return null;
}
