"use client";

import { FormEvent, useState } from "react";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export default function ContactPageClient() {
  return (
    <div className="relative bg-[var(--bg)] text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[2] bg-black/80" />
      <div className="relative z-10">
        <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[3rem] border border-[#E0DCD4] bg-white/[0.04] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="max-w-3xl space-y-4 text-base text-white/80 sm:text-lg">
                <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Start with context.
                </h1>
                <p>
                  Synerva works with a small number of people at a time. Not as
                  a posture, but as a requirement. Clarity, speed, and depth
                  don’t survive crowds.
                </p>
                <p>This isn’t a generic contact form. It’s a threshold.</p>
                <p>
                  A place to start a conversation when the work calls for
                  judgment, not volume.
                </p>
                <p>
                  If that sounds like what you’re building, you’re in the right
                  place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[3rem] border border-[#E0DCD4] bg-white/[0.04] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="space-y-4">
                <h2 className="text-2xl text-white sm:text-3xl">
                  How engagement usually works
                </h2>
                <div className="grid gap-6 text-base text-white/80 sm:text-lg lg:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Operator Hourly
                    </h3>
                    <p className="text-white/75">
                      Senior-level strategy and execution applied exactly where
                      leverage is highest. Built for moments when thinking and
                      doing can’t be separated.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Project-Based Work
                    </h3>
                    <p className="text-white/75">
                      Defined outcomes. Tight timelines. Clear ownership. Best
                      suited for launches, restructures, and work that needs to
                      ship cleanly.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Advisory / Ongoing Support
                    </h3>
                    <p className="text-white/75">
                      For leaders who need a steady signal rather than a one-off
                      intervention. Quiet, continuous, and oriented around
                      outcomes, not optics.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">Other</h3>
                    <p className="text-white/75">
                      If the work doesn’t fit neatly into a category, describe
                      the problem, not the format.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[3rem] border border-[#E0DCD4] bg-white/[0.04] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-md rounded-2xl border border-[#E0DCD4] bg-white/[0.04] p-3">
                    <VideoPlaceholder
                      label="Contact threshold image"
                      ratio="aspect-[5/4]"
                      className="rounded-2xl"
                      variant="neutral"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-base text-white/80 sm:text-lg">
                  <p>
                    The work Synerva does tends to sit upstream of aesthetics
                    and downstream of chaos.
                  </p>
                  <p>
                    It’s where ideas are forced to become operational. Where
                    decisions are tested against reality. Where momentum either
                    compounds or collapses.
                  </p>
                  <p>
                    If you’re here to explore possibilities, this may not be
                    the right door. If you’re here because something needs to
                    work, it might be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-[3rem] border border-[#E0DCD4] bg-white/[0.06] p-8 text-white shadow-[0_32px_90px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
              <div className="max-w-3xl space-y-4">
                <h2 className="text-3xl text-white sm:text-4xl">
                  Initiate the conversation.
                </h2>
                <div className="space-y-3 text-base text-white/80 sm:text-lg">
                  <p>Clarity matters more than polish.</p>
                  <p>
                    You don’t need perfect language. You do need context. What
                    you’re trying to do. Where it’s breaking down. Why it
                    matters now.
                  </p>
                  <p>If there’s a fit, you’ll hear back.</p>
                  <p>If there isn’t, you’ll still get a straight answer.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </div>
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
          Message (context, constraints, timeline)
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
