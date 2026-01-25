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
  const sectionClassName = ["flex flex-col gap-5", className]
    .filter(Boolean)
    .join(" ");
  const pairClassName =
    portraitPairClassName ??
    "grid w-full max-w-[80%] mx-auto gap-4 md:grid-cols-2 md:gap-6 lg:gap-8";
  const content = (
    <div className="flex flex-col gap-4">
      <p className="text-[0.75rem] uppercase tracking-[0.4em] text-white/65">
        SYSTEMS THAT HOLD
      </p>
      <h2
        data-type-compression="headline"
        data-type-compression-line-height="1.25"
        data-type-compression-letter-spacing="0"
        className="section-header-lock text-3xl leading-tight text-white sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
      >
        Designed to Survive Reality
      </h2>
      <div className={pairClassName} aria-hidden>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/homepage-post-12-25-2025/what-synerva-builds.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/homepage-post-12-25-2025/how-synerva-operates.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-light leading-snug text-white">
            What Synerva Builds
          </h2>
          <p className="whitespace-pre-line text-[0.95rem] leading-6 text-white/75">
            {"Synerva builds the underlying structure work depends on:\nshared interfaces, reusable components, and non-negotiable boundaries.\n\nConsistency is enforced by the system itself,\nnot by meetings, memory, or management.\n\nDurable capacity holds\nas scope, pace, and complexity increase."}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-light leading-snug text-white">
            How Synerva Operates
          </h2>
          <p className="whitespace-pre-line text-[0.95rem] leading-6 text-white/75">
            {"Synerva defines how the system responds\nwhen plans fail, signals conflict, or pressure arrives.\n\nDecisions resolve through explicit priorities and constraints,\nnot escalation or consensus.\n\nWork advances under real conditions\nwithout noise, drift, or heroics."}
          </p>
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
