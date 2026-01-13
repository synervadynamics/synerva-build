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
    "grid w-full gap-6 md:grid-cols-2 md:gap-8 lg:gap-10";
  const content = (
    <div className="flex flex-col gap-6">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-white/65">
        SYSTEMS THAT HOLD
      </p>
      <div className={pairClassName} aria-hidden>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/homepage-post-12-25-2025/what-synerva-builds.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
          <Image
            src="/homepage-post-12-25-2025/how-synerva-operates.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-light leading-snug text-white">
            What Synerva Builds
          </h2>
          <p className="whitespace-pre-line text-base leading-6 text-white/75">
            {"Synerva builds the underlying structure work depends on:\nshared interfaces, reusable components, and non-negotiable boundaries.\n\nConsistency is enforced by the system itself,\nnot by meetings, memory, or management.\n\nWhat emerges is durable capacity\nthat holds as scope, pace, and complexity increase."}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-light leading-snug text-white">
            How Synerva Operates
          </h2>
          <p className="whitespace-pre-line text-base leading-6 text-white/75">
            {"Synerva defines how the system responds\nwhen plans fail, signals conflict, or pressure arrives.\n\nDecisions resolve through explicit priorities and constraints,\nnot escalation or consensus.\n\nWork stays controlled under real conditions,\nadvancing without noise, drift, or heroics."}
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
