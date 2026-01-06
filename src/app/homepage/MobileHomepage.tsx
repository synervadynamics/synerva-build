import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { copy } from "@/data/copy";
import { CascadingText } from "@/components/CascadingText";
import { Footer } from "@/components/Footer";

type MobileBeatProps = {
  children: ReactNode;
  align?: "center" | "start";
  className?: string;
};

const withPeriod = (value: string) =>
  value.endsWith(".") ? value : `${value}.`;

const splitSentences = (value: string) => value.split(". ");

const MobileBeat = ({
  children,
  align = "center",
  className = "",
}: MobileBeatProps) => (
  <div
    className={`flex min-h-[100svh] ${
      align === "center" ? "items-center" : "items-start"
    } py-12 ${className}`}
  >
    <div className="mx-auto w-full max-w-4xl space-y-4">{children}</div>
  </div>
);

const MobileHero = () => (
  <section id="hero" className="px-6 pt-14 sm:px-10 sm:pt-16">
    <MobileBeat>
      <header className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.5em] text-white/70">
          Synerva Dynamics
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          {copy.global.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">
          {copy.hero.eyebrow}
        </p>
        <h1 className="text-4xl font-light leading-[1.05] text-white">
          {copy.hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </div>
    </MobileBeat>
    <MobileBeat>
      <div className="space-y-5">
        <h2 className="text-3xl leading-tight">{copy.hero.title}</h2>
        <p className="text-lg text-white/80">{copy.hero.subhead}</p>
        <Link
          href={copy.hero.primaryCta.href}
          className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-black"
        >
          {copy.hero.primaryCta.label}
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-black/40">
        <Image
          src="/homepage-post-12-25-2025/synerva-hero-5.png"
          alt="Synerva Dynamics hero graphic"
          width={1536}
          height={1024}
          className="aspect-[4/3] w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </MobileBeat>
    <MobileBeat>
      <div className="space-y-4">
        <h2 className="text-3xl font-light leading-tight">
          {copy.hero.headline[1]}
        </h2>
      </div>
      <CascadingText
        className="pt-6"
        items={[
          "Web Systems",
          "Automation Loops",
          "Analytics Clarity",
          "Brand Orchestration",
        ]}
        speed={70}
      />
    </MobileBeat>
  </section>
);

export const MobileHomepage = () => {
  const story = copy.story;
  const systems = copy.systemsSection;
  const deliverItems = copy.deliver.items;
  const offerings = copy.offerings;
  const statementParts = splitSentences(story.statement);
  const diagnosis = statementParts
    .slice(0, 2)
    .map(withPeriod)
    .join(" ");
  const stance = statementParts.slice(2).join(". ");
  const systemParagraphs = systems.body.split("\n\n");
  const systemIntro = systemParagraphs.slice(0, 2);
  const systemEngage = systemParagraphs[2] ?? "";
  const offeringParts = splitSentences(offerings.body);
  const offeringIntro = offeringParts[0] ? withPeriod(offeringParts[0]) : "";
  const offeringCompression = offeringParts[1]
    ? withPeriod(offeringParts[1])
    : "";
  const offeringEngage = offeringParts.slice(2).join(". ");

  return (
    <div className="text-white">
      <MobileHero />

      <section id="narrative" className="px-6 sm:px-10">
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {story.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight">{story.heading}</h2>
          <p className="text-lg text-white/82">{diagnosis}</p>
        </MobileBeat>
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {story.eyebrow}
          </p>
          <h3 className="text-2xl leading-tight">{story.bullets[0]}</h3>
          <p className="text-base text-white/78">{story.bullets[1]}</p>
        </MobileBeat>
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            Engagement Stance
          </p>
          <h3 className="text-2xl leading-tight">{story.bullets[2]}</h3>
          {stance ? <p className="text-base text-white/78">{stance}</p> : null}
        </MobileBeat>
      </section>

      <section id="systems" className="px-6 sm:px-10">
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {systems.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight">{systems.heading}</h2>
          <div className="space-y-4 text-lg text-white/78">
            {systemIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </MobileBeat>
        {systems.cards.map((card) => (
          <MobileBeat key={card.title} align="start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {card.descriptor}
              </p>
              <h3 className="text-2xl">{card.title}</h3>
              <p className="text-base text-white/80">{card.body}</p>
              <p className="text-sm text-white/60">{card.status}</p>
              <ul className="space-y-2 text-sm text-white/75">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-6 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MobileBeat>
        ))}
      </section>

      <section id="deliver" className="px-6 sm:px-10">
        {deliverItems.map((item) => (
          <MobileBeat key={item.title} align="start">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              {item.title}
            </p>
            <h3 className="text-2xl leading-tight">{item.text}</h3>
            <p className="text-base text-white/76">{item.detail}</p>
            {item.panelPoints?.length ? (
              <ul className="space-y-2 text-sm text-white/70">
                {item.panelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-6 rounded-full bg-white/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </MobileBeat>
        ))}
      </section>

      <section id="offerings" className="px-6 sm:px-10">
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {offerings.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight">{offerings.heading}</h2>
          <p className="text-lg text-white/78">{offeringIntro}</p>
        </MobileBeat>
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {offerings.microline}
          </p>
          <h3 className="text-2xl leading-tight">{offerings.heading}</h3>
          <div className="space-y-4 text-base text-white/76">
            {offeringCompression ? <p>{offeringCompression}</p> : null}
          </div>
        </MobileBeat>
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {offerings.eyebrow}
          </p>
          <h3 className="text-2xl leading-tight">{offerings.heading}</h3>
          {offeringEngage ? (
            <p className="text-base text-white/76">{offeringEngage}</p>
          ) : null}
          {systemEngage ? (
            <p className="text-base text-white/76">{systemEngage}</p>
          ) : null}
        </MobileBeat>
        <div className="space-y-6 pb-16">
          {offerings.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/12 bg-black/40 p-5 text-white shadow-[0_30px_120px_-70px_rgba(0,0,0,0.82)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {card.title}
              </p>
              <p className="mt-3 text-sm text-white/78">{card.meta}</p>
              <p className="mt-3 text-sm text-white/80">{card.text}</p>
              <div className="mt-5">
                <Link
                  href={card.href}
                  className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
          <div className="space-y-4">
            {systems.cards.map((card) => (
              <div
                key={card.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-black/40 px-4 py-3"
              >
                <span className="text-sm text-white/75">{card.title}</span>
                <Link
                  href={card.href}
                  className="inline-flex rounded-full border border-white/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <Link
                href={story.cta.href}
                className="inline-flex w-fit rounded-full border border-white/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
              >
                {story.cta.label}
              </Link>
              <Link
                href={copy.hero.secondaryCta.href}
                className="inline-flex w-fit rounded-full border border-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
              >
                {copy.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="px-6 sm:px-10">
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            Philosophy
          </p>
          <h2 className="text-3xl leading-tight">{copy.philosophy.quote}</h2>
          <div className="space-y-4 text-base text-white/78">
            <p>{copy.philosophy.p1}</p>
            <p>{copy.philosophy.p2}</p>
          </div>
        </MobileBeat>
        <MobileBeat>
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">
            {copy.hero.eyebrow}
          </p>
          <h3 className="text-2xl leading-tight">{copy.hero.title}</h3>
          <Link
            href={copy.hero.primaryCta.href}
            className="inline-flex w-fit rounded-full border border-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            {copy.hero.primaryCta.label}
          </Link>
        </MobileBeat>
      </section>

      <Footer />
    </div>
  );
};
