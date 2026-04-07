export type MerchItem = {
  name: string;
  imageSrc: string;
  alt: string;
};

export type MerchCategory = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  previewImage: string;
  items: MerchItem[];
};

export const merchV1Categories: MerchCategory[] = [
  {
    id: "quiet-divine-editions",
    title: "Quiet Divine Editions",
    description:
      "Portraiture-as-infrastructure. Floral permeability, fracture, goldwork, and the calm kind of intensity that does not need volume to be felt.",
    ctaLabel: "See the Editions",
    ctaHref: "/merch#quiet-divine-editions",
    previewImage: "/merch/already-underway.PNG",
    items: [
      {
        name: "Already Underway",
        imageSrc: "/merch/already-underway.PNG",
        alt: "Quiet Divine Editions shirt mockup: Already Underway",
      },
      {
        name: "While You Wait",
        imageSrc: "/merch/while-you-wait.PNG",
        alt: "Quiet Divine Editions shirt mockup: While You Wait",
      },
    ],
  },
  {
    id: "synerva-essentials",
    title: "Synerva Essentials",
    description:
      "Minimal marks, engineered layouts, and typographic pressure. The pieces that feel like a studio schematic, not a slogan.",
    ctaLabel: "Explore Essentials",
    ctaHref: "/merch#synerva-essentials",
    previewImage: "/merch/crystal-clear.PNG",
    items: [
      {
        name: "Running Late, Again",
        imageSrc: "/merch/running-late-again.PNG",
        alt: "Synerva Essentials shirt mockup: Running Late, Again",
      },
      {
        name: "Thermal Drift",
        imageSrc: "/merch/thermal-drift-v2.png",
        alt: "Synerva Essentials shirt mockup: Thermal Drift",
      },
      {
        name: "Crystal Clear",
        imageSrc: "/merch/crystal-clear.PNG",
        alt: "Synerva Essentials shirt mockup: Crystal Clear",
      },
      {
        name: "There All Along",
        imageSrc: "/merch/there-all-along.PNG",
        alt: "Synerva Essentials shirt mockup: There All Along",
      },
      {
        name: "Exactly Enough",
        imageSrc: "/merch/exactly-enough-v2.png",
        alt: "Synerva Essentials shirt mockup: Exactly Enough",
      },
      {
        name: "Deadbolt",
        imageSrc: "/merch/deadbolt.png",
        alt: "Synerva Essentials shirt mockup: Deadbolt",
      },
      {
        name: "Weightless Resolve",
        imageSrc: "/merch/weightless-resolve.png",
        alt: "Synerva Essentials shirt mockup: Weightless Resolve",
      },
    ],
  },
  {
    id: "numbered-issues",
    title: "Numbered Issues",
    description:
      "Small-batch releases with a clean identifier and a clear end. When it is done, it is done.",
    ctaLabel: "View Numbered Issues",
    ctaHref: "/merch#numbered-issues",
    previewImage: "/merch/partial-exception.PNG",
    items: [
      {
        name: "Eternal Return",
        imageSrc: "/merch/eternal-return.PNG",
        alt: "Numbered Issues shirt mockup: Eternal Return",
      },
      {
        name: "Partial Exception",
        imageSrc: "/merch/partial-exception.PNG",
        alt: "Numbered Issues shirt mockup: Partial Exception",
      },
    ],
  },
];
