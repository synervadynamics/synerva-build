"use client";

import Image from "next/image";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { copy } from "@/data/copy";

const isVideoSrc = (src?: string) => Boolean(src && /\.(mp4|webm|mov)$/i.test(src));
const mediaDimensions: Record<string, { width: number; height: number }> = {
  "/visuals/deliver/voice-built-to-scale.jpg": { width: 7152, height: 4023 },
  "/visuals/deliver/web-that-earns-attention.jpg": { width: 7111, height: 4000 },
  "/visuals/deliver/content-that-multiplies-reach.jpg": { width: 4000, height: 3000 },
  "/visuals/deliver/automation-that-restores-focus.jpg": { width: 7680, height: 4320 },
  "/visuals/deliver/analytics-that-tell-the-truth.jpg": { width: 3840, height: 2160 }
};

export default function Deliver() {
  return (
    <section id="deliver" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {copy.deliver.heading}
          </h2>
          <p className="text-mute max-w-prose">
            {copy.deliver.intro}
          </p>
        </div>

        <div className="space-y-8">
          {copy.deliver.items.map((it, idx) => {
            const mediaSize = it.video?.src ? mediaDimensions[it.video.src] : undefined;
            const aspectRatio = mediaSize ? mediaSize.width / mediaSize.height : 16 / 9;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 16, rotateX: -2 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
                className="deliver-clean group grid gap-6 rounded-3xl border border-white/10 bg-transparent p-6 shadow-glass will-change-transform md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center lg:gap-10 lg:p-8"
                style={{ perspective: "900px" } as any}
              >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {it.href ? (
                        <Link href={{ pathname: it.href }} className="no-underline">
                          {it.title}
                        </Link>
                      ) : (
                        it.title
                      )}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-mute leading-relaxed sm:text-base">
                  {it.text}
                </p>
                {it.href && it.cta ? (
                  <Link
                    href={{ pathname: it.href }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  >
                    {it.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </div>
              {it.video ? (
                <div
                  className="deliver-clean relative w-full overflow-hidden rounded-3xl border border-white/10 bg-transparent shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                  style={{ aspectRatio }}
                >
                  {isVideoSrc(it.video.src) ? (
                    <video
                      src={it.video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={it.video.label ?? `${it.title} visual`}
                      className="h-full w-full object-contain"
                      style={{ aspectRatio }}
                    />
                  ) : (
                    <Image
                      src={it.video.src}
                      alt={it.video.label ?? `${it.title} visual`}
                      width={mediaDimensions[it.video.src]?.width ?? 1280}
                      height={mediaDimensions[it.video.src]?.height ?? 720}
                      className="h-full w-full object-contain"
                      style={{ aspectRatio }}
                      sizes="(min-width: 1024px) 480px, (min-width: 768px) 640px, 100vw"
                    />
                  )}
                </div>
              ) : (
                <VideoPlaceholder label={`${it.title} visual`} />
              )}
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
