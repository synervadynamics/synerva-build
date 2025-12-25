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
    previewImage: "/merch-v1/already-underway.PNG",
    items: [
      {
        name: "Already Underway",
        imageSrc: "/merch-v1/already-underway.PNG",
        alt: "Quiet Divine Editions shirt mockup: Already Underway",
      },
      {
        name: "While You Wait",
        imageSrc: "/merch-v1/while-you-wait.PNG",
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
    previewImage: "/merch-v1/crystal-clear.PNG",
    items: [
      {
        name: "Running Late, Again",
        imageSrc: "/merch-v1/running-late-again.PNG",
        alt: "Synerva Essentials shirt mockup: Running Late, Again",
      },
      {
        name: "Thermal Drift",
        imageSrc: "/merch-v1/thermal-drift.PNG",
        alt: "Synerva Essentials shirt mockup: Thermal Drift",
      },
      {
        name: "Crystal Clear",
        imageSrc: "/merch-v1/crystal-clear.PNG",
        alt: "Synerva Essentials shirt mockup: Crystal Clear",
      },
      {
        name: "There All Along",
        imageSrc: "/merch-v1/there-all-along.PNG",
        alt: "Synerva Essentials shirt mockup: There All Along",
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
    previewImage: "/merch-v1/in-working-order.PNG",
    items: [
      {
        name: "In Working Order",
        imageSrc: "/merch-v1/in-working-order.PNG",
        alt: "Numbered Issues shirt mockup: In Working Order",
      },
    ],
  },
];
