"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // HARD RESET — prevent interference
    ScrollTrigger.getAll().forEach(t => t.kill());

    const images = heroRef.current.querySelectorAll<HTMLImageElement>(".hero-image");
    const totalImages = images.length;

    // Force layout stabilization
    requestAnimationFrame(() => {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * totalImages}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const index = Math.min(
              totalImages - 1,
              Math.floor(self.progress * totalImages)
            );

            images.forEach((img, i) => {
              gsap.to(img, {
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 1.05,
                duration: 0.3,
                overwrite: true
              });
            });
          }
        });

        ScrollTrigger.refresh();
      }, 50);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="synerva-scroll-hero" ref={heroRef}>
      <div className="scroll-hero-inner">
        <div className="image-stack">
          <img src="https://files.catbox.moe/417il8.WEBP" className="hero-image" />
          <img src="https://files.catbox.moe/1m6fi4.WEBP" className="hero-image" />
          <img src="https://files.catbox.moe/d0v9e1.PNG" className="hero-image" />
          <img src="https://files.catbox.moe/80kuy1.WEBP" className="hero-image" />
        </div>

        <div className="hero-overlay">
          <h1>Synerva Dynamics</h1>
        </div>
      </div>
    </section>
  );
}
