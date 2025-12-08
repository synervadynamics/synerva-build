"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/VideoPlaceholder";

type SystemMedia = { src: string; label?: string };

export const Systems = () => {
  const shouldReduceMotion = useReducedMotion();
  const systems = copy.stack.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  sectionRefs.current.length = systems.length;
  const mediaClass = "h-full w-full object-cover transition duration-500";
  const initialState = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 30 };
  const productLookup = useMemo(
    () => ({
      Lucentra: {
        slug: copy.products.lucentra.slug,
        title: copy.products.lucentra.title,
        image: copy.products.lucentra.image,
      },
      Verisense: {
        slug: copy.products.verisense.slug,
        title: copy.products.verisense.title,
        image: copy.products.verisense.image,
      },
      "Synerva OS": {
        slug: copy.products.synervaOs.slug,
        title: copy.products.synervaOs.title,
        image: copy.products.synervaOs.image,
      },
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target) return;
        const idx = sectionRefs.current.findIndex(
          (node) => node === visible.target,
        );
        if (idx !== -1) setActiveIndex(idx);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [systems.length]);

  const mediaFor = (system?: (typeof systems)[number]) => {
    if (!system) return undefined;
    const detail = productLookup[system.title];
    return (
      (system as typeof system & { image?: SystemMedia }).image ??
      (system as typeof system & { video?: SystemMedia }).video ??
      detail?.image
    );
  };

  const activeSystem =
    systems[Math.min(activeIndex, systems.length - 1)] ?? systems[0];
  const activeMedia = mediaFor(activeSystem);
  const activeIsVideo = Boolean(
    activeMedia?.src && activeMedia.src.endsWith(".mp4"),
  );
  const mediaLabel =
    activeMedia?.label ?? `${activeSystem?.title ?? "System"} visual`;

  return (
    <section
      id="systems"
      className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14"
    >
      <div className="relative mx-auto max-w-6xl space-y-8 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">
            Core Systems
          </p>
          <h2 className="text-3xl sm:text-4xl">{copy.stack.heading}</h2>
          <p className="text-lg text-white/75">{copy.stack.intro}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {copy.stack.footnote}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {systems.map((system, index) => {
              const detail = productLookup[system.title];
              const href = detail ? `/${detail.slug}` : "/contact";
              const isActive = index === activeIndex;
              return (
                <motion.article
                  key={system.title}
                  ref={(node) => {
                    sectionRefs.current[index] = node;
                  }}
                  tabIndex={0}
                  initial={initialState}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`system-card flex flex-col gap-4 rounded-[2rem] border border-white/12 bg-transparent p-5 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl transition ${
                    isActive
                      ? "border-white/30 bg-white/5"
                      : "hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {system.title} — {system.subtitle}
                  </p>
                  <p className="text-base text-white">{system.description}</p>
                  <p className="text-white/70">{system.proof}</p>
                  <ul className="space-y-2 text-white/75">
                    {system.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1 w-6 rounded-full bg-white/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {detail && (
                    <Link
                      href={href}
                      className="inline-flex w-fit rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                    >
                      Learn more
                    </Link>
                  )}
                </motion.article>
              );
            })}
          </div>
          <div className="space-y-4 lg:sticky lg:top-28">
            <div className="relative overflow-visible rounded-[2rem] border border-white/12 bg-transparent p-4 shadow-[0_40px_140px_-80px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
                {activeIsVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={`${mediaClass} object-contain`}
                    aria-label={mediaLabel}
                  >
                    <track kind="captions" label={mediaLabel} />
                    {activeMedia?.src ? (
                      <source src={activeMedia.src} type="video/mp4" />
                    ) : null}
                  </video>
                ) : activeMedia?.src ? (
                  <Image
                    src={activeMedia.src}
                    alt={mediaLabel}
                    fill
                    className={`${mediaClass} object-contain`}
                    sizes="(min-width: 1536px) 28vw, (min-width: 1280px) 32vw, (min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                ) : (
                  <VideoPlaceholder
                    label={mediaLabel}
                    ratio="aspect-[4/3]"
                    className={mediaClass}
                  />
                )}
              </div>
            </div>
            {activeSystem ? (
              <div className="rounded-[1.5rem] border border-white/12 bg-transparent p-4 text-sm text-white/75 shadow-[0_32px_110px_-76px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {activeSystem.title}
                </p>
                <p className="mt-2">{activeSystem.proof}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
