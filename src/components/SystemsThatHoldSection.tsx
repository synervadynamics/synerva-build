import Image from "next/image";

type SystemsThatHoldSectionProps = {
  className?: string;
  innerClassName?: string;
  portraitPairClassName?: string;
};

export const SystemsThatHoldSection = ({
  className,
  innerClassName,
  portraitPairClassName,
}: SystemsThatHoldSectionProps) => {
  const sectionClassName = ["flex flex-col", className]
    .filter(Boolean)
    .join(" ");
  const alignClassName = "w-full";
  const pairClassName =
    portraitPairClassName ??
    `grid ${alignClassName} items-start gap-4 md:grid-cols-2 md:gap-5 lg:gap-6`;
  const content = (
    <div className="rounded-3xl border border-[rgba(224,220,212,0.1)] bg-transparent px-8 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <div className="flex flex-col gap-8">
        <div className={alignClassName}>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/65">
            SYSTEMS THAT HOLD
          </p>
          <h2
            data-type-compression="headline"
            data-type-compression-line-height="1.25"
            data-type-compression-letter-spacing="0"
            className="section-header-lock text-2xl leading-tight text-white sm:text-3xl lg:text-4xl [--section-title-size:1.5rem] [--section-title-line:2rem] [--section-title-tracking:-0.02em] sm:[--section-title-size:2rem] sm:[--section-title-line:2.25rem] lg:[--section-title-size:2.5rem] lg:[--section-title-line:2.75rem]"
          >
            Designed to Survive Reality
          </h2>
        </div>
        <div className={pairClassName}>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/homepage-post-12-25-2025/what-synerva-builds-5-4.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover"
              />
            </div>
            <h2 className="text-base font-light leading-snug text-white">
              What Synerva Builds
            </h2>
            <p className="whitespace-pre-line text-[0.85rem] leading-5 text-white/75">
              {"Synerva builds the underlying structure work depends on:\nshared interfaces, reusable components, and non-negotiable boundaries.\n\nConsistency is enforced by the system itself,\nnot by meetings, memory, or management.\n\nDurable capacity holds\nas scope, pace, and complexity increase."}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/homepage-post-12-25-2025/how-synerva-operates-5-4.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover"
              />
            </div>
            <h2 className="text-base font-light leading-snug text-white">
              How Synerva Operates
            </h2>
            <p className="whitespace-pre-line text-[0.85rem] leading-5 text-white/75">
              {"Synerva defines how the system responds\nwhen plans fail, signals conflict, or pressure arrives.\n\nDecisions resolve through explicit priorities and constraints,\nnot escalation or consensus.\n\nWork advances under real conditions\nwithout noise, drift, or heroics."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={sectionClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
};
