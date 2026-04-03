"use client";

import { useState } from "react";

type LabsProps = {
  variant?: "signup-only";
  content: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: readonly string[];
    formEyebrow: string;
    emailPlaceholder: string;
    submitIdle: string;
    submitLoading: string;
    successMessage: string;
    errorMessage: string;
  };
};

export default function Labs({ content }: LabsProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const resolvedContent = content;
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
        <div className="rounded-[2.5rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_50px_140px_-72px_rgba(0,0,0,0.82)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="flex flex-col gap-4">
              <p className="role-body text-xs uppercase tracking-[0.4em] text-white/55">
                {resolvedContent.eyebrow}
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.2"
                data-type-compression-letter-spacing="0"
                className="role-authority section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                {resolvedContent.heading}
              </h2>
              <p className="role-body text-base leading-relaxed text-white/75">
                {resolvedContent.lead}
              </p>
              <p className="role-body text-sm leading-relaxed text-white/70">
                {resolvedContent.body[0]}
                <br />
                <br />
                {resolvedContent.body[1]}
                <br />
                {resolvedContent.body[2]}
                <br />
                {resolvedContent.body[3]}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="role-body text-xs uppercase tracking-[0.4em] text-white/55">
                {resolvedContent.formEyebrow}
              </p>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="synerva-playbook-form"
              >
                <input
                  type="email"
                  name="email"
                  placeholder={resolvedContent.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="submit"
                  value={
                    status === "loading"
                      ? resolvedContent.submitLoading
                      : resolvedContent.submitIdle
                  }
                  disabled={status === "loading"}
                />
                {status === "success" && (
                  <p className="role-body form-microcopy">
                    {resolvedContent.successMessage}
                  </p>
                )}
                {status === "error" && (
                  <p className="role-body form-microcopy">
                    {resolvedContent.errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Labs };
