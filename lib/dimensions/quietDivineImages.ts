import { quietDivineContent } from "./quietDivineContent";

export type QuietDivineImage = {
  id: string;
  fileName: string;
  src: string;
  alt: string;
  caption?: string | null;
  order?: number | null;
};

const fileNames = [
  "05F9D9BE-617A-434B-BDB4-330585FFC2CB.PNG",
  "0BEEA26E-DB2C-4E6B-B671-93E6A0634B2B.PNG",
  "14265F82-1D20-4138-BF49-A7FCF85598A8.PNG",
  "28FEE977-CD07-4640-A878-C3167812F3B6.PNG",
  "298CCB41-80FB-4B9A-8674-01CA307CD971.PNG",
  "2FE660A3-6EF2-47A9-9C53-5083C272AFDD.PNG",
  "35BF8CDC-49B9-48B2-A727-817C87A7579E.PNG",
  "410D46F6-E22B-434E-BC1C-F5E1487F21D6.PNG",
  "4881DD3D-3AF7-485B-A4EB-7772CC70F934.PNG",
  "4DCA373D-1551-4883-8A51-8DB7E844DB24.PNG",
  "52ABBD90-DD7B-4AF7-AE1E-9B58381CC010.PNG",
  "59C3EF8A-B3A7-4BF4-A13C-BCB842B294CC.PNG",
  "5B717471-8384-4699-B0E7-284D8D813F63.PNG",
  "62BE5EA9-7888-4FC6-9660-13B4F200A0F3.PNG",
  "68D96B90-2E34-421C-8B8B-D4A49C5C151D.PNG",
  "7396373D-7EF4-496D-9DA4-349A9ECDBA75.PNG",
  "8C7C1CF6-8830-4EE2-9A9D-265BA1456055.PNG",
  "9594C27C-B48A-41A5-AE24-F70757318D0E.PNG",
  "AEAE154C-26BA-4834-80DB-6A65F1510AFE.PNG",
  "C5232390-B443-4B84-A256-AEC66315ED13.PNG",
  "CB45CD86-ECCD-4364-A6B6-B9E2FF4B599B.PNG",
  "D4E3AB74-F5DB-472F-9B93-92B7329BFC96.PNG",
  "DAE5ADD1-BC02-41B2-9863-362BEBCF8912.PNG",
  "F6E9BABA-BF19-4C48-9B8D-466363CAAF11.PNG",
  "F72B51A0-8552-45B6-A9C6-CC70972C5BC7.PNG",
];

const captions = (quietDivineContent.captions ?? {}) as Record<string, string>;
const explicitOrder = quietDivineContent.imageOrder ?? null;

const cleanAltFromCaption = (caption: string): string => {
  const sentence = caption.split(/(?<=[.!?])\s+/)[0] ?? caption;
  return sentence.slice(0, 160).trim();
};

const buildImages = (): QuietDivineImage[] => {
  const images = fileNames.map((fileName) => {
    const id = fileName.replace(/\.[^.]+$/, "");
    const caption = captions[id] ?? null;
    const alt = caption
      ? cleanAltFromCaption(caption)
      : `Quiet Divine artwork: ${id.replace(/[-_]/g, " ")}`;
    return {
      id,
      fileName,
      src: `/the-quiet-divine-art/${fileName}`,
      alt,
      caption,
    };
  });

  if (explicitOrder && explicitOrder.length > 0) {
    return images.map((image) => {
      const orderIndex = explicitOrder.indexOf(image.id);
      return { ...image, order: orderIndex >= 0 ? orderIndex : null };
    });
  }

  return images
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((image, index) => ({ ...image, order: index }));
};

export const quietDivineImages: QuietDivineImage[] = buildImages();

export const quietDivineImagesById: Record<string, QuietDivineImage> =
  quietDivineImages.reduce(
    (acc, image) => {
      acc[image.id] = image;
      return acc;
    },
    {} as Record<string, QuietDivineImage>,
  );
