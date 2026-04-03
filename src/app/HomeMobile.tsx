import Image from "next/image";
import HomeMobileShell from "@/app/HomeMobileShell";
import styles from "@/app/homeMobile.module.css";
import homeStyles from "@/app/homepage/homepage.module.css";
import { homepageContent } from "@/app/homepage/homepageContent";
import CtaPill from "@/components/CtaPill";

export default function HomeMobile() {
  const { mobile } = homepageContent;

  return (
    <main className={`sd-home ${homeStyles.sdHome} text-white ${styles.homeMobileTheme}`}>
      <HomeMobileShell backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png">
        <section
          data-accent="blue"
          className="mt-4 flex flex-col gap-3 px-5 py-4"
        >
          <div className="flex items-center">
            <span
              className={`${homeStyles.mobileBrandMark} text-left text-[0.7rem] uppercase tracking-[0.45em] text-white/70`}
            >
              {mobile.hero.brandMark}
            </span>
          </div>
          <div
            className={`relative aspect-[1640/981] w-full overflow-hidden rounded-[14px] bg-white/5 max-h-[30vh] sm:max-h-none ${styles.imageFrame}`}
          >
            <Image
              src={mobile.hero.image.src}
              alt={mobile.hero.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="role-authority text-[2rem] font-light leading-[1.12] text-white">
              {mobile.hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="role-orientation text-[0.96rem] leading-[1.5] text-white/70">
              {mobile.hero.body}
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <CtaPill
                href={mobile.hero.primaryCta.href}
                variant="homepagePrimary"
                className="w-full justify-center"
              >
                {mobile.hero.primaryCta.label}
              </CtaPill>
              <CtaPill
                href={mobile.hero.secondaryCta.href}
                variant="ghost"
                className="w-full justify-center"
              >
                {mobile.hero.secondaryCta.label}
              </CtaPill>
            </div>
          </div>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-3 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.problem.eyebrow}
          </p>
          <h2 className="role-authority text-[1.45rem] font-light leading-snug text-white">
            {mobile.problem.heading}
          </h2>
          <div className="flex flex-col gap-2 text-[0.93rem] leading-[1.5] text-white/70">
            {mobile.problem.points.map((point) => (
              <p key={point} className="role-body">
                {point}
              </p>
            ))}
          </div>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-3 px-[18px] py-[18px] ${homeStyles.analytical} ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.principles.eyebrow}
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            {mobile.principles.heading}
          </h2>
          <ul
            className={`list-disc pl-4 text-[0.88rem] leading-[1.45] text-white/70 ${styles.guardrailList}`}
          >
            {mobile.principles.bullets.map((bullet) => (
              <li key={bullet} className="role-body">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 px-5 py-5 ${homeStyles.analytical} ${styles.systemsPanel} ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.systemsThatHold.eyebrow}
          </p>
          <h2 className="role-authority text-[1.45rem] font-semibold leading-snug text-white">
            {mobile.systemsThatHold.heading}
          </h2>
          <p className="role-orientation text-[0.92rem] leading-[1.45] text-white/70">
            {mobile.systemsThatHold.body}
          </p>
          <div className="flex flex-col gap-4">
            {mobile.systemsThatHold.cards.map((card) => (
              <div key={card.image} className="flex flex-col gap-3">
                <div className={styles.systemsImage}>
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
                <p className="role-body text-[0.9rem] leading-[1.35] text-white/80">
                  {card.lines.map((line, index) => (
                    <span key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-4 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.offeringsPanel} ${styles.sectionOutline} ${styles.sectionOutlineInteractive}`}
          style={{ background: "var(--fill-strong)" }}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.offerings.eyebrow}
          </p>
          <div className={styles.offeringsImage} aria-hidden>
            <Image
              src={mobile.offerings.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            {mobile.offerings.heading}
          </h2>
          <div className="flex flex-col gap-3">
            {mobile.offerings.cards.map((card) => (
              <div key={card.title} className="flex flex-col gap-1">
                <p className="role-body text-[0.96rem] font-medium text-white">
                  {card.title}
                </p>
                <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <CtaPill href={mobile.offerings.cta.href} variant="ghost">
            {mobile.offerings.cta.label}
          </CtaPill>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.deliveredPanel} ${styles.sectionOutline}`}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.deliver.eyebrow}
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            {mobile.deliver.heading}
          </h2>
          <ul className="list-disc pl-4 text-[0.9rem] leading-[1.45] text-white/70">
            {mobile.deliver.bullets.map((bullet) => (
              <li key={bullet} className="role-body">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-4 px-5 py-5 ${styles.panelTransparent} ${styles.panelFilled} ${styles.publicationsPanel} ${styles.sectionOutline}`}
          style={{ background: "var(--fill-weak)" }}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.systems.eyebrow}
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            {mobile.systems.heading}
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            {mobile.systems.body}
          </p>
          <div className={styles.publicationCovers}>
            {mobile.systems.cards.map((card) => (
              <div key={card.title} className="flex flex-col gap-3">
                <div
                  className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                  aria-hidden
                >
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 180px"
                    className="object-cover"
                  />
                </div>
                <p className="role-body text-[1rem] font-medium text-white">
                  {card.title}
                </p>
                <p className="role-body text-[0.85rem] leading-[1.45] text-white/70">
                  {card.body}
                </p>
                <CtaPill
                  href={"href" in card.cta ? card.cta.href : undefined}
                  variant={card.cta.variant}
                >
                  {card.cta.label}
                </CtaPill>
              </div>
            ))}
          </div>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 px-5 py-5 ${styles.panelTransparent} ${styles.publicationsPanel} ${styles.sectionOutline}`}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.publications.eyebrow}
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            {mobile.publications.heading}
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            {mobile.publications.body}
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                {mobile.publications.writing.title}
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                {mobile.publications.writing.body}
              </p>
              <div className={styles.publicationCovers} aria-hidden>
                {mobile.publications.writing.covers.map((cover) => (
                  <div
                    key={cover}
                    className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                  >
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <CtaPill variant={mobile.publications.writing.cta.variant}>
                {mobile.publications.writing.cta.label}
              </CtaPill>
            </div>
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                {mobile.publications.artwork.title}
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                {mobile.publications.artwork.body}
              </p>
              <div className={styles.publicationCovers}>
                {mobile.publications.artwork.cards.map((card) => (
                  <div key={card.href} className="flex flex-col gap-2">
                    <div
                      className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                      aria-hidden
                    >
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 180px"
                        className="object-cover"
                      />
                    </div>
                    <CtaPill href={card.href} variant="ghost">
                      {card.label}
                    </CtaPill>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-3 px-[22px] py-[22px] text-center ${styles.panelTransparent} ${styles.authorityPanel} ${styles.sectionOutline}`}
        >
          <p className="role-authority text-[1.4rem] font-semibold leading-snug text-white">
            {mobile.philosophy.quote}
          </p>
          <p className="role-body text-[0.9rem] leading-[1.5] text-white/70">
            {mobile.philosophy.body}
          </p>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 px-[22px] py-[22px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.finalCtaPanel} ${styles.sectionOutline}`}
          style={{ backgroundColor: "rgba(58, 122, 254, 0.06)" }}
        >
          <p
            className={`${homeStyles.mobileEyebrow} text-[0.7rem] uppercase tracking-[0.32em] text-white/55`}
          >
            {mobile.finalCta.eyebrow}
          </p>
          <div className={styles.finalCtaImage} aria-hidden>
            <Image
              src={mobile.finalCta.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <h2 className="role-authority text-[1.35rem] font-medium">
            {mobile.finalCta.heading}
          </h2>
          <p className="role-body text-white/70 text-[0.95rem] leading-relaxed">
            {mobile.finalCta.body}
          </p>
          <CtaPill href={mobile.finalCta.cta.href} variant="homepagePrimary">
            {mobile.finalCta.cta.label}
          </CtaPill>
        </section>
      </HomeMobileShell>
    </main>
  );
}
