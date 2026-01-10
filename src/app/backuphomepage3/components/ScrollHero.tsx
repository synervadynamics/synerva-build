"use client";

import { useEffect, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function ScrollHero() {
  useEffect(() => {
    const scrollHero = document.querySelector<HTMLElement>(".scroll-hero");
    if (!scrollHero) return;

    gsap.registerPlugin(ScrollTrigger);

    let introCompleted = false;
    const root = document.documentElement;
    const body = document.body;
    const previousGutter = root.style.scrollbarGutter;
    const previousOverflow = body.style.overflowY;
    root.style.scrollbarGutter = "stable";
    body.style.overflowY = "scroll";
    const title = scrollHero.querySelector<HTMLElement>(".title-center h1");
    const titleBaseTransform = title?.style.transform ?? "";
    const centerTitle = () => {
      if (!title) return;
      const rect = title.getBoundingClientRect();
      const delta = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const translate = `translateX(${delta}px)`;
      title.style.transform = titleBaseTransform
        ? `${titleBaseTransform} ${translate}`
        : translate;
    };
    const titleResizeObserver = title
      ? new ResizeObserver(centerTitle)
      : null;
    if (title && titleResizeObserver) {
      titleResizeObserver.observe(title);
      window.addEventListener("resize", centerTitle, { passive: true });
      centerTitle();
    }

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      if (!introCompleted) {
        lenis.raf(time * 1000);
      }
    });

    gsap.ticker.lagSmoothing(0);

    const heroSection = document.querySelector("#homepage-hero");
    let heroTop = 0;
    let clampActive = false;
    let exitWatchActive = false;
    const checkExit = () => {
      if (!exitWatchActive) return;
      if (!heroSection) return;
      const rect = scrollHero.getBoundingClientRect();
      if (rect.bottom <= 0) {
        exitWatchActive = false;
        heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
        clampActive = true;
        scrollHero.style.visibility = "hidden";
        scrollHero.style.pointerEvents = "none";
        window.scrollTo(0, heroTop);
        window.addEventListener("scroll", clampToHeroTop, { passive: true });
        window.addEventListener("wheel", blockScrollUp, { passive: false });
        window.addEventListener("touchmove", blockScrollUp, { passive: false });
        window.addEventListener("keydown", blockScrollUp);
        window.removeEventListener("scroll", checkExit);
      }
    };
    const clampToHeroTop = () => {
      if (!clampActive) return;
      if (window.scrollY < heroTop) {
        window.scrollTo(0, heroTop);
      }
    };
    const blockScrollUp = (event: Event) => {
      if (!clampActive) return;

      if (event.type === "wheel") {
        const wheelEvent = event as WheelEvent;
        if (wheelEvent.deltaY < 0 && window.scrollY <= heroTop) {
          wheelEvent.preventDefault();
        }
      } else if (event.type === "touchmove") {
        if (window.scrollY <= heroTop) {
          event.preventDefault();
        }
      } else if (event.type === "keydown") {
        const keyEvent = event as KeyboardEvent;
        if (
          ["ArrowUp", "PageUp", "Home"].includes(keyEvent.key) &&
          window.scrollY <= heroTop
        ) {
          keyEvent.preventDefault();
        }
      }
    };
    const introTrigger = ScrollTrigger.create({
      trigger: scrollHero,
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,

      onUpdate: (self) => {
        if (introCompleted) return;

        const progress = self.progress;

        const images = gsap.utils.toArray<HTMLImageElement>(
          ".scroll-hero .mask-img"
        );
        const segmentSize = 1 / images.length;

        images.forEach((img, index) => {
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

        if (progress >= 1 && !introCompleted) {
          introCompleted = true;

          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
        }
      },
      onLeave: () => {
        if (!introCompleted) return;
        if (!heroSection) return;
        exitWatchActive = true;
        window.addEventListener("scroll", checkExit, { passive: true });
        checkExit();
      },
    });
    return () => {
      introTrigger.kill();
      root.style.scrollbarGutter = previousGutter;
      body.style.overflowY = previousOverflow;
      if (title && titleResizeObserver) {
        titleResizeObserver.disconnect();
        window.removeEventListener("resize", centerTitle);
        title.style.transform = titleBaseTransform;
      }
    };
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
