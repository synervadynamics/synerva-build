"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateFrom(elem: HTMLElement, direction = 1) {
  let x = 0;
  let y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = `translate(${x}px, ${y}px)`;
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x, y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    }
  );
}

function hide(elem: HTMLElement) {
  gsap.set(elem, { autoAlpha: 0 });
}

export default function WhatsDeliveredScroll() {
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const panels = gsap.utils.toArray<HTMLElement>(".wd-panel");
    panels.forEach((panel) => {
      const elem = panel.querySelector<HTMLElement>(".gs-reveal");
      if (!elem) return;
      hide(elem);
      triggers.push(
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => animateFrom(elem),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem)
        })
      );
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
