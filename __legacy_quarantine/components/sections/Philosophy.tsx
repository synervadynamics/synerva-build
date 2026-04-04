"use client";

import Image from "next/image";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { motion } from "framer-motion";
import { copy } from "@/data/copy";

const isVideoSrc = (src?: string) =>
  Boolean(src && /\.(mp4|webm|mov)$/i.test(src));

export default function Philosophy() {
  const video = (copy?.philosophy?.video ?? null) as {
    src?: string;
    label?: string;
    poster?: string;
  } | null;

  return (
    <section id="philosophy" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <blockquote className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            {copy?.philosophy?.quote ??
              "Clarity compounds. Every decision either sharpens the signal or feeds the noise."}
          </blockquote>
          <div className="space-y-4 text-mute">
            <p>
              {copy?.philosophy?.p1 ??
                "Most teams ship more to feel progress. I ship less to create it."}
            </p>
            <p>
              {copy?.philosophy?.p2 ??
                "The result is momentum you can measure: fewer pages, faster paths, stronger story."}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          {video?.src ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
              {isVideoSrc(video.src) ? (
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={video.label ?? "Philosophy visual"}
                  className="h-full w-full object-cover"
                  poster={video.poster}
                />
              ) : (
                <Image
                  src={video.src}
                  alt={video.label ?? "Philosophy visual"}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 540px, (min-width: 768px) 640px, 100vw"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          ) : (
            <VideoPlaceholder label="Philosophy visual" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
