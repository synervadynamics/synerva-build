// Rollback: disable ENABLE_TYPE_COMPRESSION in src/components/TypographyCompressionController.tsx or remove <TypographyCompressionController /> from src/app/page.tsx, or reset to the checkpoint commit.

import Image from "next/image";
import homeStyles from "@/app/homepage/homepage.module.css";

export const About = ({
  content,
}: {
  content: { eyebrow: string; heading: string; paragraphs: readonly string[] };
}) => {
  const resolvedContent = content;
  return (
    <section
      id="about"
      className="relative px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-10"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="role-body text-xs uppercase tracking-[0.4em] text-white/60">
                {resolvedContent.eyebrow}
              </p>
              <h2
                data-type-compression="headline"
                data-type-compression-line-height="1.25"
                data-type-compression-letter-spacing="0"
                className="role-authority section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
              >
                {resolvedContent.heading}
              </h2>
              <div className="space-y-3 text-sm leading-snug text-white/80 sm:text-base">
                {resolvedContent.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="role-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col">
                <div
                  className={`relative aspect-[2/3] w-full ${homeStyles.portraitImageFrame}`}
                >
                  <Image
                    src="/home/desktop/founder-start-hero.png"
                    alt="Portrait of Kyle Gruarin"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
