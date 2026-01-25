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
    "grid w-full gap-4 md:grid-cols-2 md:gap-5 lg:gap-6";
  const content = (
    <div className="flex flex-col gap-4 text-white">
      <div className="contrast-field space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-white/62">
          Systems That Hold
        </p>
        <h2
          data-type-compression="headline"
          data-type-compression-line-height="1.25"
          data-type-compression-letter-spacing="0"
          className="section-header-lock text-3xl leading-tight sm:text-4xl lg:text-5xl [--section-title-size:1.875rem] [--section-title-line:2.25rem] [--section-title-tracking:-0.025em] sm:[--section-title-size:2.25rem] sm:[--section-title-line:2.5rem] lg:[--section-title-size:3rem] lg:[--section-title-line:3rem]"
        >
          Designed to survive reality.
        </h2>
      </div>
      <div className={pairClassName}>
        <article className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] shadow-[0_40px_140px_-90px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div className="absolute inset-0">
            <Image
              src="/homepage-post-12-25-2025/what-synerva-builds.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              className="object-cover blur-2xl opacity-70 scale-110"
            />
          </div>
          <Image
            src="/homepage-post-12-25-2025/what-synerva-builds.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-black/45 to-black/80" />
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
            <h3 className="text-lg font-light leading-snug text-white">
              What Synerva Builds
            </h3>
            <p className="whitespace-pre-line text-[0.95rem] leading-6 text-white/78">
              {"Synerva builds the underlying structure work depends on:\nshared interfaces, reusable components, and non-negotiable boundaries.\n\nConsistency is enforced by the system itself,\nnot by meetings, memory, or management.\n\nDurable capacity holds\nas scope, pace, and complexity increase."}
            </p>
          </div>
        </article>
        <article className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] shadow-[0_40px_140px_-90px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div className="absolute inset-0">
            <Image
              src="/homepage-post-12-25-2025/how-synerva-operates.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              className="object-cover blur-2xl opacity-70 scale-110"
            />
          </div>
          <Image
            src="/homepage-post-12-25-2025/how-synerva-operates.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-black/45 to-black/80" />
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
            <h3 className="text-lg font-light leading-snug text-white">
              How Synerva Operates
            </h3>
            <p className="whitespace-pre-line text-[0.95rem] leading-6 text-white/78">
              {"Synerva defines how the system responds\nwhen plans fail, signals conflict, or pressure arrives.\n\nDecisions resolve through explicit priorities and constraints,\nnot escalation or consensus.\n\nWork advances under real conditions\nwithout noise, drift, or heroics."}
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  return (
    <section className={sectionClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
};
