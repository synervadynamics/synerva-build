"use client";

import Image from "next/image";
import { useState } from "react";
import { copy } from "@/data/copy";

type LabsProps = {
  variant?: "signup-only";
};

export default function Labs(_props: LabsProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const playbook = copy.labs.rockstarPlaybook;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://buttondown.com/api/emails/embed-subscribe/synervadynamics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email,
          }).toString(),
        }
      );

      // Buttondown may return non-200 statuses even when successful.
      // Any network-level success is treated as success.
      if (!res.ok && res.status !== 302) {
        throw new Error("Subscription failed");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="preview-access"
      className="relative px-4 py-4 sm:px-10 sm:py-4 lg:px-16 lg:py-4"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="contrast-field space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">
                Preview Access
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.2"
                data-type-compression-letter-spacing="0"
                className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                {playbook.title}
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                {playbook.description}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              {playbook.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="synerva-playbook-form"
            >
              <input
                type="email"
                name="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="submit"
                value={status === "loading" ? "Submitting…" : "Get the Playbook"}
                disabled={status === "loading"}
              />
              {status === "success" && (
                <p className="form-microcopy">
                  Check your inbox to confirm — the Playbook preview arrives
                  right after.
                </p>
              )}
              {status === "error" && (
                <p className="form-microcopy">
                  Something went wrong. Please try again shortly.
                </p>
              )}
            </form>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
                <Image
                  src={playbook.image.src}
                  alt={playbook.image.alt}
                  width={1024}
                  height={1536}
                  className="block w-full object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/60">
                {playbook.eyebrow}
              </p>
              <p className="mt-2 text-sm text-white/70">
                {playbook.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Labs };
