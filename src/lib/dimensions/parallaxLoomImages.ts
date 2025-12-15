import { parallaxLoomContent } from "./parallaxLoomContent";

export type ParallaxLoomImage = {
  id: string;
  fileName: string;
  src: string;
  alt: string;
  caption?: string | null;
  order?: number | null;
};

const orderedFileNames = [
  "unhinged-amazon-returns-v1.png",
  "vibing-against-medical-advice.png",
  "gaslighting-myself-into-greatness-v1.png",
  "the-air-fryer-is-drunk-with-power-v1.png",
  "family-vacation-photo-hostage-situation-v1.png",
  "who-touched-the-thermostat.png",
  "started-the-clap-alone-v1.png",
  "the-good-towels-are-for-guests.png",
  "the-houseplant-that-knows-too-much-v1.png",
  "made-my-calendar-a-war-crime-v1.png",
  "your-middle-school-haircut-called-v1.png",
  "my-inner-peace-joined-a-cult-v1.png",
  "unsubscribed-energy-v1.png",
  "ghosted-inbox-v1.png",
  "filed-for-chaos-as-my-dependent.png",
  "fought-a-goose-in-a-park-and-lost-v1.png",
  "crypto-text-at-2-am-v1.png",
  "quick-question-that-isnt-v1.png",
  "survived-a-couples-fight-in-a-moving-vehicle.png",
  "turned-my-red-flags-into-a-parade-v1.png",
  "lit-a-candle-and-called-it-self-care-v1.png",
  "the-jar-you-cant-open-but-wont-surrender.png",
  "the-last-minute-on-my-way-lie-v1.png",
  "took-my-personal-growth-out-back-and-barbequed-it-v1.png",
  "turned-my-last-nerve-into-a-startup.png",
  "played-myself-but-the-remix-goes-hard-v1.png",
  "midnight-reply-all-incident.png",
  "saved-my-sanity-to-drafts-v1.png",
  "made-it-through-a-costco-on-a-sunday-without-swearing-v1.png",
  "sold-my-junk-as-hauned-items-on-ebay-v1.png",
];

const formatAlt = (id: string) =>
  `Parallax Loom can design - ${id.replace(/[-_]/g, " ")}`;

export const parallaxLoomImages: ParallaxLoomImage[] = orderedFileNames.map(
  (fileName, index) => {
    const id = fileName.replace(/\.[^.]+$/, "");
    return {
      id,
      fileName,
      src: `/parallax-loom-designs/${fileName}`,
      alt: formatAlt(id),
      caption: null,
      order: index,
    };
  },
);

export const parallaxLoomImagesById: Record<string, ParallaxLoomImage> =
  parallaxLoomImages.reduce(
    (acc, image) => {
      acc[image.id] = image;
      return acc;
    },
    {} as Record<string, ParallaxLoomImage>,
  );

export const parallaxLoomOrder =
  parallaxLoomContent.imageOrder ?? orderedFileNames.map((file) => file);
