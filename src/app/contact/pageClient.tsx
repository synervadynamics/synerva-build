"use client";

import { FormEvent, useState } from "react";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";

export default function ContactPageClient() {
  return (
    <div className="relative bg-[var(--bg)] text-white">
      <div
        className="fixed inset-0 -z-10 bg-[url('/contact/B5BFB4CF-9143-4D2C-8066-E02320714BDD.jpeg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo
          src="/visuals/footer/footer_motif.webp"
          opacity={0.45}
          blur
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black/70 to-cyan-500/20" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-5 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Contact
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Start a Conversation
          </h1>
          <p className="text-lg text-white/75">
            If you’re reaching out, you likely have something specific in mind.
          </p>
          <div className="space-y-2 text-base text-white/70">
            <p>A deliverable.</p>
            <p>A system that isn’t holding.</p>
            <p>A piece of work that needs to move — cleanly and without drift.</p>
          </div>
          <p className="text-base text-white/70">
            This page is simply the next step.
          </p>
        </div>
      </section>
      <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
        <AmbientVideo
          src="/visuals/about/about_tile_2.webp"
          opacity={0.35}
          blur
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-5xl">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What to Include
            </p>
            <div className="mt-4 space-y-3 text-base text-white/75">
              <p>You don’t need to sell yourself.</p>
              <p>You don’t need a perfect brief.</p>
              <p>A short note is enough.</p>
            </div>
            <div className="mt-5 space-y-3 text-base text-white/70">
              <p>Please include:</p>
              <ul className="list-disc space-y-2 pl-5 text-base text-white/70">
                <li>what you want delivered</li>
                <li>the timeline you’re targeting</li>
                <li>any constraints that matter</li>
              </ul>
              <p>That’s it.</p>
            </div>
            <p className="mt-5 text-base text-white/70">
              Brief is fine. Clarity matters more than polish.
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
        <AmbientVideo
          src="/visuals/hero/hero_main_render.webp"
          opacity={0.3}
          blur
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-5xl">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What Happens Next
            </p>
            <div className="mt-4 space-y-3 text-base text-white/75">
              <p>I’ll review your note personally.</p>
              <p>
                If it’s a fit, I’ll confirm scope, timeline, and the best way to
                engage.
              </p>
              <p>If it’s not, I’ll tell you directly.</p>
              <p>Either way, you’ll get a clear answer.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
        <AmbientVideo
          src="/visuals/hero/hero_main_render.webp"
          opacity={0.25}
          blur
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
            <div className="space-y-2">
              <h2 className="text-2xl text-white">Get in Touch</h2>
              <p className="text-sm text-white/70">
                Use the form below to send a message.
              </p>
            </div>
            <ContactForm />
          </div>
          <div
            className="hidden lg:block"
            aria-hidden="true"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      encType="multipart/form-data"
    >
      <div>
        <label className="text-sm text-white/70" htmlFor="name">
          Name
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label className="text-sm text-white/70" htmlFor="email">
          Email
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label className="text-sm text-white/70" htmlFor="message">
          Message (what you want delivered + timeline)
        </label>
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="message"
          name="message"
          required
        />
        <div className="mt-3">
          <label className="text-xs text-white/60" htmlFor="attachments">
            Attachments (optional)
          </label>
          <input
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 file:mr-4 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.3em] file:text-white/80 hover:file:bg-white/20"
            id="attachments"
            name="attachments"
            type="file"
            multiple
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black disabled:cursor-not-allowed disabled:bg-white/40"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-300">
          Got it. I’ll take a look and get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-300">
          Something went wrong. Please email {copy.global.contact.email}.
        </p>
      )}
    </form>
  );
}
