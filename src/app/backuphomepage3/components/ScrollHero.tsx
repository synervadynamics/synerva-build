"use client";

import { useEffect, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function ScrollHero() {
  useEffect(() => {
    if (!document.querySelector(".scroll-hero")) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.create({
      trigger: ".scroll-hero",
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const totalImages = gsap.utils.toArray<HTMLImageElement>(
          ".scroll-hero .mask-img"
        ).length;
        const segmentSize = 1 / totalImages;

        gsap.utils
          .toArray<HTMLImageElement>(".scroll-hero .mask-img")
          .forEach((img, index) => {
          const imageStart = index * segmentSize;
          const imageEnd = (index + 1) * segmentSize;

          let imageProgress = 0;

          if (progress >= imageStart && progress <= imageEnd) {
            imageProgress = (progress - imageStart) / segmentSize;
          } else if (progress > imageEnd) {
            imageProgress = 1;
          }

          const leftgradie = 50 - imageProgress * 50;
          const rightgradie = 50 + imageProgress * 50;
          const deg = 90 + imageProgress * 40;

          gsap.set(img, {
            maskImage: `linear-gradient(${deg}deg, black ${leftgradie}%, transparent ${leftgradie}%, transparent ${rightgradie}%, black ${rightgradie}%)`
          });
        });
      }
    });
  }, []);

  return (
    <section className="scroll-hero">
      <div className="hero">
        <div className="images">
          <img src="https://files.catbox.moe/417il8.WEBP" alt="image" />
          <img
            src="https://files.catbox.moe/1m6fi4.WEBP"
            alt="image"
            className="mask-img"
            style={{ "--index": 4 } as CSSProperties}
          />
          <img
            src="https://files.catbox.moe/d0v9e1.PNG"
            alt="image"
            className="mask-img"
            style={{ "--index": 3 } as CSSProperties}
          />
          <img
            src="https://files.catbox.moe/80kuy1.WEBP"
            alt="image"
            className="mask-img"
            style={{ "--index": 2 } as CSSProperties}
          />
        </div>

        <div className="content">
          <div className="center">
            <div className="title-center">
              <h1>Synerva Dynamics</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
