import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";

export const metadata = buildPageMetadata({
  title: "Start Here — Synerva Dynamics",
  description: "Work with Synerva Dynamics.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <div className="relative bg-[var(--bg)] text-white">
      <ScrollMorphBackground />
      <div className="pointer-events-none fixed inset-0 z-[2] bg-black/80" />

      <div className="relative z-10">
        <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="glass-panel rounded-[3rem] border border-white/10 p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    Start Here
                  </h1>
                  <div className="space-y-2 text-lg text-white/80 sm:text-xl">
                    <p>Work with Synerva Dynamics</p>
                    <p>
                      Senior systems strategy and execution — delivered with
                      clarity and speed.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-4 text-base text-white/75 sm:text-lg">
                <p>If you’re here, something is slowing you down.</p>
                <p>Not a lack of ideas.</p>
                <p>Not a lack of ambition.</p>
                <p>
                  Momentum is breaking somewhere between strategy and delivery.
                  Work stalls. Execution fragments. Important things take longer
                  than they should.
                </p>
                <p>Synerva Dynamics exists to fix that.</p>
                <p>
                  I design and build strategy, brand, web, content, and
                  automation as one coherent system — so decisions survive
                  contact with reality and work actually ships.
                </p>
                <p>
                  I work directly with founders and operators who need clarity,
                  speed, and durable execution now, not eventually.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl text-white sm:text-4xl">
                    How You Can Engage Right Now
                  </h2>
                  <div className="space-y-2 text-base text-white/70">
                    <p>There are three ways to work together.</p>
                    <p>
                      Each is intentionally scoped to make “yes” simple, clear,
                      and low-friction.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Engagement Option 1
                    </p>
                    <h3 className="mt-3 text-2xl text-white">
                      Operator Hourly
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      Fast clarity. Immediate leverage.
                    </p>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      <p>
                        A focused working session to unblock decisions,
                        pressure-test direction, or cut through complexity.
                      </p>
                      <p>
                        You leave with sharper judgment and a clear next move.
                      </p>
                      <p>Best when you need momentum restored quickly.</p>
                    </div>
                  </div>

                  <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Engagement Option 2
                    </p>
                    <h3 className="mt-3 text-2xl text-white">
                      Flat-Rate Project
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      A real deliverable. A real finish line.
                    </p>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      <p>
                        A tightly scoped project with a defined outcome,
                        timeline, and price.
                      </p>
                      <p>No open-ended discovery.</p>
                      <p>No drifting scope.</p>
                      <p>
                        Best when you need something built, written, designed,
                        or structured — cleanly and decisively.
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Engagement Option 3
                    </p>
                    <h3 className="mt-3 text-2xl text-white">
                      Build with Synerva
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      The flagship engagement.
                    </p>
                    <div className="mt-4 space-y-3 text-sm text-white/70">
                      <p>
                        Strategy, brand, web, content, and automation designed
                        and built together as one system.
                      </p>
                      <p>
                        This is for situations where fragmentation is the
                        actual problem — and fixing it requires cohesion, not
                        coordination.
                      </p>
                      <p>
                        Best when execution must scale, endure, and compound.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-4 text-base text-white/70">
                <div className="space-y-1">
                  <h2 className="text-2xl text-white sm:text-3xl">
                    What I Actually Build
                  </h2>
                  <p>Scope, not a menu.</p>
                </div>
                <p>Depending on the engagement, that includes:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Strategic direction built to survive real operating
                    conditions
                  </li>
                  <li>
                    Brand systems that align identity, messaging, and execution
                  </li>
                  <li>Websites designed as operating surfaces, not brochures</li>
                  <li>Long-form writing, positioning, and narrative assets</li>
                  <li>
                    Content and marketing systems that reduce coordination drag
                  </li>
                  <li>
                    Automation that supports execution instead of complicating
                    it
                  </li>
                </ul>
                <p>
                  Everything is treated as part of a single system — not a list
                  of services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <h2 className="text-2xl text-white sm:text-3xl">How This Works</h2>
              <div className="mt-4 space-y-3 text-base text-white/70">
                <p>
                  You reach out with what you want delivered and the timeline
                  you’re targeting.
                </p>
                <p>
                  I confirm whether I’m the right fit — and how fast it can
                  move.
                </p>
                <p>
                  If it makes sense, we proceed with clear scope, defined
                  outcomes, and immediate momentum.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-4">
                <h2 className="text-2xl text-white sm:text-3xl">Next Step</h2>
                <div className="space-y-2 text-base text-white/70">
                  <p>Send a short note outlining:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>what you want delivered</li>
                    <li>the timeline you’re targeting</li>
                  </ul>
                </div>
                <div className="space-y-2 text-base text-white/70">
                  <p>Use the contact page to send a message.</p>
                  <p>Brief is fine. Clarity matters more than polish.</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Go to contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
