"use client";

import { useState } from "react";

type Pillar = {
  id: string;
  title: string;
  intro: string;
  lines: string[];
  entryRange: string;
};

const pillars: Pillar[] = [
  {
    id: "strategy-direction",
    title: "Strategy & Direction",
    intro:
      "Strategic definition that sharpens positioning, clarifies leverage, and sets the execution path before anything is built.",
    lines: [
      "Business and product strategy",
      "Positioning and differentiation",
      "Offer architecture and pricing design",
      "Go-to-market planning",
      "Decision frameworks",
      "Strategic reports",
      "Implementation roadmaps",
    ],
    entryRange: "Entry range: $900+",
  },
  {
    id: "brand-messaging",
    title: "Brand & Messaging",
    intro:
      "Brand systems that translate positioning into language, identity, and assets that hold under real-world pressure.",
    lines: [
      "Brand strategy and narrative",
      "Visual identity systems",
      "Brand guidelines",
      "Voice and messaging frameworks",
      "Brand audits and refinements",
      "Website and landing page copy",
      "Long-form and short-form writing",
      "Ghostwriting (articles, essays, books)",
      "Graphic and visual assets",
    ],
    entryRange: "Entry range: $800+",
  },
  {
    id: "digital-product-builds",
    title: "Digital & Product Builds",
    intro:
      "High-performance digital assets designed, engineered, and optimized to move the business forward.",
    lines: [
      "Websites and landing pages",
      "Product and app UI/UX",
      "Design systems",
      "Frontend and full-stack builds",
      "Funnel and lifecycle systems",
      "Conversion optimization",
      "Performance and accessibility improvements",
    ],
    entryRange: "Entry range: $2,000+",
  },
  {
    id: "automation-optimization",
    title: "Automation & Optimization",
    intro:
      "Operational systems that reduce friction, increase output, and compound efficiency across the organization.",
    lines: [
      "Workflow automation",
      "Internal tools and dashboards",
      "AI-assisted content systems",
      "Process optimization",
      "Custom tooling",
      "Marketing automation",
    ],
    entryRange: "Entry range: $1,200+",
  },
];

export default function ExpandablePillars() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative overflow-visible px-6 py-[100px] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.02] p-8 sm:p-10">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-3xl text-white sm:text-4xl">Need Something Specific?</h2>
            <p className="text-base text-white/80 sm:text-lg">
              Synerva is systems-first by default.
              <br />
              But you can engage for individual deliverables when that’s what the moment requires.
            </p>
            <p className="text-base text-white/80 sm:text-lg">
              Expand a pillar to see what can be delivered directly.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {pillars.map((pillar) => {
              const isOpen = openId === pillar.id;
              const contentId = `${pillar.id}-content`;

              return (
                <article
                  key={pillar.id}
                  className="glass-panel rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.03]"
                >
                  <h3 className="text-2xl text-white sm:text-3xl">
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between gap-3 px-6 py-6 text-left sm:px-8"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenId(isOpen ? null : pillar.id)}
                    >
                      <span>{pillar.title}</span>
                      <span
                        aria-hidden="true"
                        className="text-xl leading-none text-white sm:text-2xl"
                      >
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isOpen ? "900px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
                      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                        <div className="space-y-3">
                          <p className="mb-4 text-base font-normal text-white/80 sm:text-base">
                            {pillar.intro}
                          </p>
                          <p className="text-base text-white">
                            <strong>{pillar.entryRange}</strong>
                          </p>
                          <div className="text-sm text-white/80 sm:text-base">
                            <ul className="list-disc space-y-1 pl-6">
                              {pillar.lines.map((line) => (
                                <li key={line}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex h-full items-start justify-center lg:justify-end">
                          <div className="w-full max-w-md rounded-3xl border !border-[rgba(245,241,230,0.62)] bg-white/[0.05] p-4">
                            <div className="aspect-[3/2] w-full rounded-2xl border border-dashed border-white/25 bg-black/20 bg-center bg-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
