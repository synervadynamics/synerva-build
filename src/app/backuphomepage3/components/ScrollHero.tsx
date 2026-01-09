"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const images = heroRef.current.querySelectorAll<HTMLImageElement>(
      ".scroll-hero-image"
    );

    const totalImages = images.length;

    gsap.set(images, {
      opacity: 0,
      scale: 1.05
    });

    gsap.set(images[0], {
      opacity: 1,
      scale: 1
    });

    const tl = gsap.timeline();

    images.forEach((img, i) => {
      if (i === 0) return;

      tl.to(
        images[i - 1],
        { opacity: 0, scale: 1.05, duration: 1 },
        i
      ).to(
        img,
        { opacity: 1, scale: 1, duration: 1 },
        i
      );
    });

    triggerRef.current = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: `+=${window.innerHeight * totalImages}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      animation: tl,
      invalidateOnRefresh: true
    });

    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };
  }, []);

  return (
    <section id="synerva-scroll-hero" ref={heroRef}>
      <div className="scroll-hero-inner">

        <div className="scroll-hero-images">
          <img
            src="https://files.catbox.moe/417il8.WEBP"
            className="scroll-hero-image"
          />
          <img
            src="https://files.catbox.moe/1m6fi4.WEBP"
            className="scroll-hero-image"
          />
          <img
            src="https://files.catbox.moe/d0v9e1.PNG"
            className="scroll-hero-image"
          />
          <img
            src="https://files.catbox.moe/80kuy1.WEBP"
            className="scroll-hero-image"
          />
        </div>

        <div className="scroll-hero-overlay">
          <h1>Synerva Dynamics</h1>
        </div>

      </div>
    </section>
  );
}
