"use client";

import Link from "next/link";
import { useState } from "react";

type Pillar = {
  id: string;
  title: string;
  lines: string[];
  entryRange: string;
  buttonText: string;
};

const pillars: Pillar[] = [
  {
    id: "strategy-direction",
    title: "Strategy & Direction",
    lines: [
      "Business and product strategy",
      "Positioning and differentiation",
      "Offer architecture and pricing strategy",
      "Go-to-market planning",
      "Decision frameworks and operating principles",
      "Strategic reports and briefs",
      "Implementation roadmaps",
    ],
    entryRange: "Entry range: $900+",
    buttonText: "Request Strategy Scope",
  },
  {
    id: "brand-messaging",
    title: "Brand & Messaging",
    lines: [
      "Brand strategy and narrative",
      "Visual identity systems",
      "Brand guidelines",
      "Voice and messaging frameworks",
      "Brand audits and refinements",
      "Website and landing page copy",
      "Blog and editorial content",
      "Ghostwriting",
      "Graphic and visual content",
    ],
    entryRange: "Entry range: $800+",
    buttonText: "Discuss Brand Work",
  },
  {
    id: "digital-product-builds",
    title: "Digital & Product Builds",
    lines: [
      "Websites and landing pages",
      "Product and app UI/UX",
      "Design systems",
      "Frontend and full-stack development",
      "Performance and accessibility improvements",
      "Funnel and lifecycle design",
      "Conversion optimization",
    ],
    entryRange: "Entry range: $2,000+",
    buttonText: "Start a Digital Build",
  },
  {
    id: "automation-optimization",
    title: "Automation & Optimization",
    lines: [
      "Workflow automation",
      "Internal tools and dashboards",
      "AI-assisted content systems",
      "Process optimization",
      "Custom tooling",
      "Marketing automation",
    ],
    entryRange: "Entry range: $1,200+",
    buttonText: "Automate Something",
  },
];

export default function ExpandablePillars() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl text-white sm:text-4xl">Need Something Specific?</h2>
          <p className="text-base text-white/80 sm:text-lg">
            Synerva is systems-first by default.
            <br />
            But you can engage for individual services whenever that’s what the situation calls for.
          </p>
          <p className="text-base text-white/80 sm:text-lg">
            Expand a pillar to see what can be delivered directly.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => {
            const isOpen = openId === pillar.id;
            const contentId = `${pillar.id}-content`;

            return (
              <article
                key={pillar.id}
                className="glass-panel rounded-3xl border border-white/15 bg-white/[0.03]"
              >
                <h3 className="text-2xl text-white sm:text-3xl">
                  <button
                    type="button"
                    className="w-full px-6 py-6 text-left sm:px-8"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenId(isOpen ? null : pillar.id)}
                  >
                    {pillar.title}
                  </button>
                </h3>

                <div
                  id={contentId}
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="space-y-4 border-t border-white/10 px-6 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
                    <p className="whitespace-pre-line text-base text-white/80 sm:text-lg">
                      {pillar.lines.join("\n")}
                    </p>
                    <p className="text-base text-white">
                      <strong>{pillar.entryRange}</strong>
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                    >
                      {pillar.buttonText}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
