"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { copy } from "@/data/copy";
import { CascadingText } from "@/components/CascadingText";
import { useState } from "react";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const labsMediaDimensions: Record<string, { width: number; height: number }> = {
  "/visuals/labs/lucentra-labs.png": { width: 1536, height: 1024 },
  "/visuals/labs/verisense-labs.jpg": { width: 7680, height: 4320 },
};

const isVideoSrc = (src?: string) => Boolean(src && /\.(mp4|webm|mov)$/i.test(src));

const renderWithBreaks = (text: string) =>
  text.split("\n").map((line, index, arr) => (
    <span key={`${index}-${line}`}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));

export const Labs = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const rockstar = copy.labs.rockstarPlaybook;
  const reflective = copy.labs.reflectiveDose;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus("pending");
    try {
      const res = await fetch("/api/labs-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="labs"
      className="relative overflow-visible px-6 pb-24 pt-14 sm:px-10 sm:pb-26 sm:pt-16 lg:px-16 lg:pb-30 lg:pt-20"
    >
      <div ref={ref} className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift grid gap-8 rounded-[3rem] border border-white/12 bg-transparent p-8 shadow-[0_58px_178px_-86px_rgba(0,0,0,0.86)] backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6 text-white">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">{rockstar.eyebrow}</p>
              <h3 className="text-3xl sm:text-4xl">{rockstar.title}</h3>
              <p className="text-base text-white/75">{rockstar.description}</p>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              {rockstar.highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="grid gap-4 md:grid-cols-3">
              {rockstar.stats.map(stat => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/12 bg-transparent p-4 text-center backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                  <p className="mt-2 text-sm text-white/80">{stat.value}</p>
                </div>
              ))}
            </div>
            <Link
              href={rockstar.ctaPrimary.href}
              className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-black"
            >
              {rockstar.ctaPrimary.label}
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">{rockstar.footnote}</p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-transparent p-4 shadow-[0_40px_140px_-80px_rgba(0,0,0,0.82)] backdrop-blur-2xl" suppressHydrationWarning>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] border border-white/12">
              <Image
                suppressHydrationWarning
                src={copy.labs.feature.image.src}
                alt={copy.labs.feature.image.alt}
                width={900}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative mt-4 rounded-2xl border border-white/12 bg-transparent p-4 text-sm text-white/72 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{rockstar.eyebrow}</p>
              <p className="mt-2 text-white">{rockstar.title}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift grid gap-4 rounded-[2.75rem] border border-white/12 bg-transparent p-6 shadow-[0_48px_160px_-84px_rgba(0,0,0,0.84)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Preview Access</p>
            <h3 className="text-2xl sm:text-3xl">Get Early Drops</h3>
            <p className="text-sm text-white/70">
              Enter your email to get an instant preview of The Rockstar Server Playbook and The Reflective Dose. You’ll receive
              both early editions delivered automatically to your inbox—no spam, no noise, no algorithmic drip torture. Just two
              world-class previews the moment you request them.
            </p>
            <p className="text-sm text-white/70">
              You’ll also get access to Synerva’s ongoing intelligence drops: psychology-informed newsletters, bi-weekly wellness
              and mental-health essays, tactical guides, behind-the-scenes research notes, and occasional opportunities to
              collaborate or contribute. Every message is intentional. Nothing wasted. Nothing intrusive.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="labs-email">
              Email for preview
            </label>
            <input
              id="labs-email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/50"
              placeholder="you@company.com"
            />
            <button
              type="submit"
              disabled={status === "pending"}
              className="w-full rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/50"
            >
              {status === "pending" ? "Sending…" : "Send preview"}
            </button>
            {status === "success" && <p className="text-sm text-emerald-300">Preview link is on the way.</p>}
            {status === "error" && <p className="text-sm text-rose-300">Something went wrong. Please try again.</p>}
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift grid gap-8 rounded-[3rem] border border-white/12 bg-transparent p-8 shadow-[0_60px_180px_-88px_rgba(0,0,0,0.86)] backdrop-blur-3xl lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="bubble-drift relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-transparent p-4 shadow-[0_40px_140px_-80px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] border border-white/12">
              <Image
                suppressHydrationWarning
                src={reflective.image.src}
                alt={reflective.image.alt}
                width={900}
                height={1350}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="relative mt-4 rounded-2xl border border-white/12 bg-transparent p-4 text-sm text-white/72 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{reflective.eyebrow}</p>
              <p className="mt-2 text-white">{reflective.title}</p>
            </div>
          </div>
          <div className="space-y-6 text-white">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">{reflective.eyebrow}</p>
              <h3 className="text-3xl sm:text-4xl">{reflective.title}</h3>
              <p className="text-base text-white/75">{reflective.description}</p>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              {reflective.highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="grid gap-4 md:grid-cols-3">
              {reflective.stats.map(stat => (
                <div
                  key={stat.label}
                  className="bubble-drift rounded-2xl border border-white/12 bg-transparent p-4 text-center backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                  <p className="mt-2 text-sm text-white/80">{stat.value}</p>
                </div>
              ))}
            </div>
            <Link
              href={reflective.ctaPrimary.href}
              className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-black"
            >
              {reflective.ctaPrimary.label}
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">{reflective.footnote}</p>
          </div>
        </motion.div>
        <CascadingText
          className="pt-6"
          items={["Labs ship weekly", "Public prototypes", "Rockstar Playbook", "Lucentra pilots", "Verisense drops"]}
          speed={65}
        />
        <p className="text-sm text-white/60">{copy.labs.closing}</p>
      </div>
    </section>
  );
};
