"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/VideoPlaceholder";

type SystemMedia = { src: string; label?: string };

export const Systems = () => {
  const shouldReduceMotion = useReducedMotion();
  const systems = copy.stack.items;
  const mediaClass = "h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]";
  const initialState = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
  // Match stack cards with their respective product pages so CTAs stay in sync with routing.
  const productLookup: Record<
    string,
    | {
        slug: string;
        title: string;
        image?: { src: string; label?: string };
      }
    | undefined
  > = {
    Lucentra: { slug: copy.products.lucentra.slug, title: copy.products.lucentra.title, image: copy.products.lucentra.image },
    Verisense: { slug: copy.products.verisense.slug, title: copy.products.verisense.title, image: copy.products.verisense.image },
    "Synerva OS": {
      slug: copy.products.synervaOs.slug,
      title: copy.products.synervaOs.title,
      image: copy.products.synervaOs.image
    }
  };

  return (
    <section id="systems" className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14">
      <div className="relative mx-auto max-w-6xl space-y-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">Core Systems</p>
          <h2 className="text-3xl sm:text-4xl">{copy.stack.heading}</h2>
          <p className="text-lg text-white/75">{copy.stack.intro}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{copy.stack.footnote}</p>
        </div>
        <div className="bubble-drift grid gap-6 rounded-[2.5rem] border border-white/12 bg-transparent p-6 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:grid-cols-3 lg:p-8">
          {systems.map((system, index) => {
            const detail = productLookup[system.title];
            const media =
              ((system as typeof system & { image?: SystemMedia }).image ?? undefined) ??
              ((system as typeof system & { video?: SystemMedia }).video ?? undefined) ??
              detail?.image;
            const isVideo = Boolean(media?.src && media.src.endsWith(".mp4"));
            const mediaLabel = media?.label ?? `${system.title} visual`;
            const href = detail ? `/${detail.slug}` : "/contact";
            return (
              <motion.article
                key={system.title}
                tabIndex={0}
                initial={initialState}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="system-card group flex flex-col gap-4 rounded-[2rem] border border-white/12 bg-transparent p-5 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl transition hover:border-white/30 hover:bg-white/5"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
                  {isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className={mediaClass}
                      aria-label={mediaLabel}
                    >
                      <track kind="captions" label={mediaLabel} />
                      {media?.src ? <source src={media.src} type="video/mp4" /> : null}
                    </video>
                  ) : media?.src ? (
                    <Image
                      src={media.src}
                      alt={mediaLabel}
                      fill
                      className={mediaClass}
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                      priority={index === 0}
                    />
                  ) : (
                    <VideoPlaceholder label={mediaLabel} ratio="aspect-video" className={mediaClass} />
                  )}
                </div>
                <div className="space-y-3 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {system.title} — {system.subtitle}
                  </p>
                  <p className="text-base text-white">{system.description}</p>
                  <p className="text-white/70">{system.proof}</p>
                  <ul className="space-y-2 text-white/75">
                    {system.highlights.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1 w-6 rounded-full bg-white/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {detail && (
                    <Link
                      href={href}
                      className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
