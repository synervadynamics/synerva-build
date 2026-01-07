// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.
"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { copy } from "@/data/copy";
import { CascadingText } from "@/components/CascadingText";
import VideoPlaceholder from "@/components/VideoPlaceholder";

type DeliverItem = {
  title: string;
  text: string;
  detail: string;
  panelText?: string;
  panelDetail?: string;
  panelPoints: readonly string[];
  video?: { src: string; label: string };
};

const isVideoSrc = (src?: string) =>
  Boolean(src && /\.(mp4|webm|mov)$/i.test(src));

const mediaDimensions: Record<string, { width: number; height: number }> = {
  "/whats-delivered-v2/voice-built-to-scale.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v2/web-that-earns-attention.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v2/content-that-multiplies-reach.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v2/automation-that-restores-focus.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v2/analytics-that-tell-the-truth.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v3/strategic-direction.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v3/integrated-execution.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v3/operating-judgement.PNG": {
    width: 1536,
    height: 1024,
  },
  "/whats-delivered-v3/durable-assets.PNG": {
    width: 1536,
    height: 1024,
  },
};

type DeliverProps = {
  mobileVariant?: "default" | "beats";
};

export const Deliver = ({ mobileVariant = "default" }: DeliverProps) => {
  const isMobileBeats = mobileVariant === "beats";
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const focusY = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);
  const gradient = useMotionTemplate`radial-gradient(circle at 25% ${focusY}, rgba(64,148,178,0.24), transparent 55%)`;
  const [activeIndex, setActiveIndex] = useState(0);
  const deliverItems = copy.deliver.items as readonly DeliverItem[];
  const mobileBeats = copy.deliver.mobile?.beats ?? [];
  const activeItem: DeliverItem = deliverItems[activeIndex] ?? deliverItems[0];
  const activeMediaSize = activeItem.video?.src
    ? mediaDimensions[activeItem.video.src]
    : undefined;
  const activeAspectRatio = activeMediaSize
    ? activeMediaSize.width / activeMediaSize.height
    : 16 / 9;
  const cardsRef = useRef<HTMLDivElement>(null);
  const mobileReadingContainerClasses =
    "mx-auto w-full max-w-[28rem] px-4 sm:px-6";
  const mobileBeatsWrapperClasses = "flex flex-col gap-8";
  const mobileBeatClasses = "space-y-3";

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const activeProgress = useMemo(
    () => ((activeIndex + 1) / deliverItems.length) * 100,
    [activeIndex, deliverItems.length],
  );

  useEffect(() => {
    if (mobileVariant === "beats") return;
    if (shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".deliver-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      });
    }, cardsRef);
    return () => ctx.revert();
  }, [mobileVariant, shouldReduceMotion]);

  const setRefs = (node: HTMLElement | null) => {
    ref(node);
    sectionRef.current = node;
  };

  const Section = isMobileBeats ? "section" : motion.section;

  return (
    <Section
      id="deliver"
      ref={setRefs}
      className="relative px-6 pb-16 pt-10 sm:px-10 sm:pb-18 sm:pt-10 lg:px-16 lg:pb-18 lg:pt-12"
    >
      <div className="relative mx-auto max-w-6xl space-y-6">
        {mobileVariant === "beats" ? (
          <>
            <div className="md:hidden">
              <div className={mobileReadingContainerClasses}>
                <div className={mobileBeatsWrapperClasses}>
                  {mobileBeats.map((beat) => (
                    <div key={beat.heading} className={mobileBeatClasses}>
                      <h2 className="text-xl font-light leading-snug text-white">
                        {beat.heading}
                      </h2>
                      <p className="text-[0.95rem] leading-6 text-white/78">
                        {beat.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <header className="contrast-field max-w-4xl space-y-4 text-white">
                <h2
                  data-type-compression="headline"
                  data-type-compression-line-height="1.25"
                  data-type-compression-letter-spacing="0"
                  className="section-header-lock text-3xl leading-tight text-white sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
                >
                  {copy.deliver.heading}
                </h2>
                <p
                  data-type-compression="subhead"
                  data-type-compression-line-height="1.5"
                  data-type-compression-letter-spacing="0"
                  className="text-lg text-white/72"
                >
                  {copy.deliver.intro}
                </p>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
                  <span>Scroll to explore</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span>{Math.round(activeProgress)}%</span>
                </div>
              </header>
              <div className="bubble-drift deliver-clean grid gap-8 rounded-[2.5rem] border border-white/12 bg-transparent p-5 shadow-[0_50px_160px_-80px_rgba(0,0,0,0.86)] sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
                <div ref={cardsRef} className="grid gap-5 lg:grid-cols-2">
                  {copy.deliver.items.map((item, index) => (
                    <motion.article
                      key={item.title}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      tabIndex={0}
                      className={`deliver-card bubble-drift deliver-clean group flex min-h-[200px] flex-col gap-4 rounded-3xl border border-white/12 bg-transparent p-5 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.82)] transition ${
                        activeIndex === index
                          ? "border-white/30 shadow-[0_42px_130px_-70px_rgba(0,0,0,0.8)]"
                          : ""
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                        {item.title}
                      </p>
                      <p className="text-base text-white/80">{item.text}</p>
                      <p
                        className={`overflow-hidden text-sm text-white/60 transition-all duration-300 ${
                          activeIndex === index
                            ? "max-h-24 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </motion.article>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        }
                      : undefined
                  }
                  className="deliver-clean relative h-full rounded-[2.5rem] border border-white/12 bg-transparent p-5 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)]"
                >
                  <div
                    className="deliver-clean overflow-hidden rounded-3xl border border-white/5"
                    style={{ aspectRatio: activeAspectRatio }}
                  >
                    {activeItem.video?.src ? (
                      isVideoSrc(activeItem.video.src) ? (
                        <video
                          key={activeItem.video.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                          style={{ aspectRatio: activeAspectRatio }}
                          aria-label={activeItem.video.label}
                        >
                          <track kind="captions" label={activeItem.video.label} />
                          <source src={activeItem.video.src} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          key={activeItem.video.src}
                          src={activeItem.video.src}
                          alt={activeItem.video.label}
                          width={mediaDimensions[activeItem.video.src]?.width ?? 1920}
                          height={
                            mediaDimensions[activeItem.video.src]?.height ?? 1080
                          }
                          className="h-full w-full object-contain"
                          style={{ aspectRatio: activeAspectRatio }}
                          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 60vw, 100vw"
                        />
                      )
                    ) : (
                      <VideoPlaceholder label={`${activeItem.title} visual`} />
                    )}
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">
                    {activeItem.video?.label ?? `${activeItem.title} visual`}
                  </p>
                  <p className="mt-2 text-lg text-white">{activeItem.title}</p>
                  <p className="text-sm text-white/70">
                    {activeItem.panelText ?? activeItem.text}
                  </p>
                  <p className="text-sm text-white/60">
                    {activeItem.panelDetail ?? activeItem.detail}
                  </p>
                  {activeItem.panelPoints?.length ? (
                    <ul className="mt-3 space-y-2 text-sm text-white/65">
                      {activeItem.panelPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-4 flex-shrink-0 rounded-full bg-white/40" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.div>
              </div>
              <CascadingText
                className="pt-4"
                items={copy.deliver.items.map((item) => item.title)}
                speed={60}
              />
            </div>
          </>
        ) : (
          <>
            <header className="contrast-field max-w-4xl space-y-4 text-white">
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight text-white sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                {copy.deliver.heading}
              </h2>
              <p
                data-type-compression="subhead"
                data-type-compression-line-height="1.5"
                data-type-compression-letter-spacing="0"
                className="text-lg text-white/72"
              >
                {copy.deliver.intro}
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
                <span>Scroll to explore</span>
                <div className="h-px flex-1 bg-white/10" />
                <span>{Math.round(activeProgress)}%</span>
              </div>
            </header>
            <div className="bubble-drift deliver-clean grid gap-8 rounded-[2.5rem] border border-white/12 bg-transparent p-5 shadow-[0_50px_160px_-80px_rgba(0,0,0,0.86)] sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
              <div ref={cardsRef} className="grid gap-5 lg:grid-cols-2">
                {copy.deliver.items.map((item, index) => (
                  <motion.article
                    key={item.title}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                    className={`deliver-card bubble-drift deliver-clean group flex min-h-[200px] flex-col gap-4 rounded-3xl border border-white/12 bg-transparent p-5 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.82)] transition ${
                      activeIndex === index
                        ? "border-white/30 shadow-[0_42px_130px_-70px_rgba(0,0,0,0.8)]"
                        : ""
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      {item.title}
                    </p>
                    <p className="text-base text-white/80">{item.text}</p>
                    <p
                      className={`overflow-hidden text-sm text-white/60 transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-24 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </motion.article>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                      }
                    : undefined
                }
                className="deliver-clean relative h-full rounded-[2.5rem] border border-white/12 bg-transparent p-5 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)]"
              >
                <div
                  className="deliver-clean overflow-hidden rounded-3xl border border-white/5"
                  style={{ aspectRatio: activeAspectRatio }}
                >
                  {activeItem.video?.src ? (
                    isVideoSrc(activeItem.video.src) ? (
                      <video
                        key={activeItem.video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                        style={{ aspectRatio: activeAspectRatio }}
                        aria-label={activeItem.video.label}
                      >
                        <track kind="captions" label={activeItem.video.label} />
                        <source src={activeItem.video.src} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        key={activeItem.video.src}
                        src={activeItem.video.src}
                        alt={activeItem.video.label}
                        width={mediaDimensions[activeItem.video.src]?.width ?? 1920}
                        height={
                          mediaDimensions[activeItem.video.src]?.height ?? 1080
                        }
                        className="h-full w-full object-contain"
                        style={{ aspectRatio: activeAspectRatio }}
                        sizes="(min-width: 1024px) 42vw, (min-width: 768px) 60vw, 100vw"
                      />
                    )
                  ) : (
                    <VideoPlaceholder label={`${activeItem.title} visual`} />
                  )}
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">
                  {activeItem.video?.label ?? `${activeItem.title} visual`}
                </p>
                <p className="mt-2 text-lg text-white">{activeItem.title}</p>
                <p className="text-sm text-white/70">
                  {activeItem.panelText ?? activeItem.text}
                </p>
                <p className="text-sm text-white/60">
                  {activeItem.panelDetail ?? activeItem.detail}
                </p>
                {activeItem.panelPoints?.length ? (
                  <ul className="mt-3 space-y-2 text-sm text-white/65">
                    {activeItem.panelPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 flex-shrink-0 rounded-full bg-white/40" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </div>
            <CascadingText
              className="pt-4"
              items={copy.deliver.items.map((item) => item.title)}
              speed={60}
            />
          </>
        )}
      </div>
    </Section>
  );
};
