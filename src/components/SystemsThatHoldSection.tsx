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
    portraitPairClassName ?? "grid w-full grid-cols-2 gap-3";
  const content = (
    <>
      <p className="text-[0.82rem] uppercase tracking-[0.4em] text-white/70">
        Systems That Hold
      </p>
      <div className={pairClassName} aria-hidden>
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/mobile-images/homepage/what-synerva-builds.PNG"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 210px"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/mobile-images/homepage/how-synerva-operates.PNG"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 210px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 px-5 py-5">
        <h2 className="text-[1.65rem] font-light leading-snug text-white">
          What Synerva Builds
        </h2>
        <p className="text-[1.05rem] leading-6 text-white/80">
          Synerva builds the underlying structure work depends on: shared
          interfaces, reusable components, and non-negotiable boundaries.
        </p>
        <p className="text-[1.05rem] leading-6 text-white/80">
          Consistency is enforced by the system itself, not by meetings, memory,
          or management.
        </p>
        <p className="text-[1.05rem] leading-6 text-white/80">
          What emerges is durable capacity that holds as scope, pace, and
          complexity increase.
        </p>
        <h2 className="text-[1.65rem] font-light leading-snug text-white">
          How Synerva Operates
        </h2>
        <p className="text-[1.05rem] leading-6 text-white/80">
          Synerva defines how the system responds when plans fail, signals
          conflict, or pressure arrives.
        </p>
        <p className="text-[1.05rem] leading-6 text-white/80">
          Decisions resolve through explicit priorities and constraints, not
          escalation or consensus.
        </p>
        <p className="text-[1.05rem] leading-6 text-white/80">
          Work stays controlled under real conditions, advancing without noise,
          drift, or heroics.
        </p>
      </div>
    </>
  );

  return (
    <section className={sectionClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
};
