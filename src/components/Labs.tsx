"use client";

import { useState } from "react";

export default function Labs() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

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
    <section className="labs-signup">
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting…" : "Get the Playbook"}
        </button>
      </form>

      {status === "success" && (
        <p className="labs-success">
          Check your inbox to confirm — the Playbook preview arrives right after.
        </p>
      )}

      {status === "error" && (
        <p className="labs-error">
          Something went wrong. Please try again shortly.
        </p>
      )}
    </section>
  );
}

export { Labs };
