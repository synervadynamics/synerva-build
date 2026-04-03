import { desktopHomepageCopy } from "./desktopHomepageCopy";

export const homepageContent = {
  desktop: desktopHomepageCopy,
  mobile: {
    hero: {
      brandMark: "Synerva Dynamics",
      image: {
        src: "/mobile-images/homepage/hero.png",
        alt: "Synerva Dynamics hero image",
      },
      headline: ["Make It Clear.", "Then Make It Real."],
      body:
        "Clarity, structure, writing, design, web, and digital build are carried through one continuous process, so ideas can move from first signal to finished asset without losing shape, tone, or intent along the way.",
      primaryCta: {
        label: "Start With a 30-Minute Plan",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explore Offerings",
        href: "/offerings",
      },
    },
    problem: {
      eyebrow: "THE PROBLEM",
      heading: "Drift Kills Momentum",
      points: [
        "The signal stays vague for too long.",
        "Structure never fully locks before execution begins.",
        "Progress gets recreated instead of carried forward.",
      ],
    },
    principles: {
      eyebrow: "HOW WORK MOVES",
      heading: "Working Principles",
      bullets: [
        "Clarify the real objective before effort starts multiplying in the wrong direction.",
        "Give the work a structure strong enough to hold judgment, tone, and intent under pressure.",
        "Build in a way that preserves momentum instead of recreating it every time conditions change.",
      ],
    },
    systemsThatHold: {
      eyebrow: "SYSTEMS THAT HOLD",
      heading: "Designed to Survive Reality",
      body:
        "Synerva builds structures that reduce drag, hold under pressure, and keep decisions coherent as the work moves from clarity into execution.",
      cards: [
        {
          image: "/mobile-images/homepage/systems-that-hold-upper.PNG",
          lines: [
            "Clear interfaces.",
            "Explicit boundaries.",
            "Standards carried by the system itself.",
          ],
        },
        {
          image: "/mobile-images/homepage/systems-that-hold-2.PNG",
          lines: [
            "Progress under pressure.",
            "Structure that keeps holding.",
            "Judgment that survives real conditions.",
          ],
        },
      ],
    },
    offerings: {
      eyebrow: "HOW TO ENGAGE",
      heading: "Offerings",
      image: "/mobile-images/homepage/offerings-2.PNG",
      cards: [
        {
          title: "Operator Sessions",
          body:
            "Audits, positioning, decision support, and fast progress when the highest-value deliverable is applied judgment.",
        },
        {
          title: "Focused Projects",
          body:
            "Defined deliverables, explicit scope, and a finish line established before work begins.",
        },
        {
          title: "Build With Synerva",
          body:
            "For work that needs to be clarified, structured, written, designed, and built as one release.",
        },
      ],
      cta: {
        label: "Explore Offerings →",
        href: "/offerings",
      },
    },
    deliver: {
      eyebrow: "WHAT YOU GET",
      heading: "What’s Delivered",
      bullets: [
        "Clarity that makes the real objective usable",
        "Structure that keeps language, systems, pages, and decisions aligned",
        "Build that leaves behind assets designed to keep holding",
        "Operating judgment without avoidable drag",
      ],
    },
    systems: {
      eyebrow: "INTERNAL ENGINES",
      heading: "Systems",
      body:
        "A small set of internal systems preserves judgment, reduces friction, and helps the work stay coherent as complexity, scope, and time increase.",
      cards: [
        {
          title: "Verisense",
          body: "Signal clarity at the point of decision.",
          image: "/mobile-images/homepage/verisense_edit_masterr4%20copy.png",
          cta: {
            label: "View Verisense →",
            href: "https://synervadynamics.com/verisense",
            variant: "ghost" as const,
          },
        },
        {
          title: "Lucentra",
          body: "Structural memory that preserves intent.",
          image: "/mobile-images/homepage/lucentra-v3%20copy.png",
          cta: {
            label: "Page Coming Soon",
            variant: "disabled" as const,
          },
        },
      ],
    },
    publications: {
      eyebrow: "PUBLICATIONS & VISUAL SYSTEMS",
      heading: "Written Under Real Conditions",
      body: "Writing and visual systems shaped to hold when conditions do not.",
      writing: {
        title: "Writing",
        body:
          "Books and essays built from pressure, observation, and real-world constraint.",
        covers: [
          "/mobile-images/homepage/the-rockstar-server-playbook-2.png",
          "/mobile-images/homepage/TRD%20Cover%20Page%20(1).png",
        ],
        cta: {
          label: "Page Coming Soon",
          variant: "disabled" as const,
        },
      },
      artwork: {
        title: "Synerva Dimensions Artwork",
        body:
          "Visual research where structure, tension, and coherence are tested in public.",
        cards: [
          {
            image: "/mobile-images/homepage/the-fractured-self.webp",
            label: "Quiet Divine →",
            href: "/dimensions/quiet-divine",
          },
          {
            image: "/mobile-images/homepage/surface-tension.png",
            label: "Surface Tension →",
            href: "/dimensions/surface-tension",
          },
          {
            image: "/inner-climate/7.png",
            label: "Inner Climate →",
            href: "/dimensions/inner-climate",
          },
        ],
      },
    },
    philosophy: {
      quote:
        "Clarity compounds. Every decision either sharpens the signal or feeds the noise.",
      body:
        "Most work confuses motion with momentum. Synerva measures movement by lift alone, then uses structure to make the right shift easier to repeat.",
    },
    finalCta: {
      eyebrow: "NEXT STEP",
      heading: "Start With a 30-Minute Plan",
      body:
        "A 30-minute session to clarify the real objective, name the constraints, and choose the cleanest path into the work.",
      image: "/mobile-images/homepage/next-step.PNG",
      cta: {
        label: "Start With a 30-Minute Plan",
        href: "/contact",
      },
    },
  },
} as const;

export type HomepageContent = typeof homepageContent;
