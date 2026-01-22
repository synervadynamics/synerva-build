import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const metadata = buildPageMetadata({
  title: "Start Here — Synerva Dynamics",
  description: "Work with Synerva Dynamics.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <div className="relative bg-[var(--bg)] text-white">
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png" />
      <div className="pointer-events-none fixed inset-0 z-[2] bg-black/80" />

      <div className="relative z-10">
        <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="glass-panel rounded-[3rem] border border-white/10 p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="flex flex-col gap-5">
                  <div className="space-y-4">
                    <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                      Work with Synerva Dynamics
                    </h1>
                    <p className="text-lg text-white/80 sm:text-xl">
                      Senior systems strategy and execution. Built as one
                      system. Shipped with clarity.
                    </p>
                    <p className="text-sm text-white/60">
                      This page is for founders and operators evaluating
                      whether to work together.
                    </p>
                  </div>
                  <Link
                    href="#engagement-options"
                    className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    Read how working together actually works
                  </Link>
                </div>
                <div className="w-full">
                  {/* HERO IMAGE PLACEHOLDER — portrait or abstract systems image */}
                  <VideoPlaceholder
                    label="Hero image placeholder"
                    ratio="aspect-[4/5]"
                    variant="neutral"
                    className="rounded-3xl"
                    ariaLabel="Hero image placeholder"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-6">
                <h2 className="text-3xl text-white sm:text-4xl">
                  <span className="block">The problem isn’t ambition.</span>
                  <span className="block">It’s coordination.</span>
                </h2>
                <div className="space-y-3 text-base text-white/70 sm:text-lg">
                  <p>Most teams don’t stall because of weak ideas.</p>
                  <p>They stall because execution fragments.</p>
                </div>
                <div className="space-y-2 text-base text-white/70">
                  <p>Strategy lives in one place.</p>
                  <p>Brand lives in another.</p>
                  <p>Web, content, and systems drift.</p>
                  <p>Momentum collapses under handoffs.</p>
                </div>
                <ul className="grid gap-3 text-sm text-white/70 sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                    <span>Strategy resets between functions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                    <span>Decisions blur across ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                    <span>Tools multiply instead of unify</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="engagement-options"
          className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl text-white sm:text-4xl">
                  How you can engage
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Engagement Option 1
                  </p>
                  <h3 className="mt-3 text-2xl text-white">Operator Hourly</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Fast clarity. Immediate leverage.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    A focused working session to unblock decisions, cut
                    complexity, or pressure-test direction.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    Best for moments where speed and judgment matter more than
                    scope.
                  </p>
                </div>

                <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Engagement Option 2
                  </p>
                  <h3 className="mt-3 text-2xl text-white">Flat-Rate Project</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Defined outcome. Clean finish line.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    A clearly scoped engagement with a fixed timeline and fixed
                    price.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    Best for shipping something real without drift or
                    re-negotiation.
                  </p>
                </div>

                <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Engagement Option 3
                  </p>
                  <h3 className="mt-3 text-2xl text-white">Build with Synerva</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Unified system build.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    Strategy, brand, web, content, and automation designed and
                    built together as one release.
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    Best when fragmentation itself is the core problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-5">
                <h2 className="text-2xl text-white sm:text-3xl">
                  What actually gets built
                </h2>
                <ul className="grid gap-3 text-base text-white/70 sm:grid-cols-2">
                  <li>Strategic direction that survives execution</li>
                  <li>Brand systems aligned to real operations</li>
                  <li>Websites built as operating surfaces</li>
                  <li>Long-form narrative and positioning assets</li>
                  <li>Content systems that reduce coordination drag</li>
                  <li>Automation that accelerates real work</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-14 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-6">
                <h2 className="text-2xl text-white sm:text-3xl">
                  How this works
                </h2>
                <div className="grid gap-6 divide-y divide-white/10 text-base text-white/70 sm:gap-8 md:grid-cols-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-white/10">
                  <div className="py-3 md:py-0 md:pr-6">
                    <p>You outline the problem, timeline, and constraints</p>
                  </div>
                  <div className="py-3 md:py-0 md:px-6">
                    <p>Fit and scope are confirmed quickly</p>
                  </div>
                  <div className="py-3 md:py-0 md:pl-6">
                    <p>Work proceeds with clear outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-lg text-white/80 sm:text-xl">
                  If this looks like the right level of engagement,
                  <br />
                  the next step is simple.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                >
                  Go to Contact
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
