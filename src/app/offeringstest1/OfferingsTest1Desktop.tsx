"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./offeringstest1.module.css";

export default function OfferingsTest1Desktop() {
  return (
    <main className={`${styles.offeringsTest1Page} ${styles.offeringsTest1Theme}`}>
      <div className={styles.pageWrapper}>
        <section id="hero" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.grid2Asym}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h1 className={styles.heroTitle}>[Hero Headline Placeholder]</h1>
              <p className={styles.sectionSubhead}>
                [Hero subhead placeholder copy.]
              </p>
              <ul className={styles.bulletList}>
                <li>[Hero bullet placeholder 1]</li>
                <li>[Hero bullet placeholder 2]</li>
                <li>[Hero bullet placeholder 3]</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#modes" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img3x2}>
                <Image
                  src="/placeholders/offeringstest1/hero-3x2.png"
                  alt="Offerings hero placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="modes"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>[Eyebrow Label]</p>
            <h2 className={styles.sectionTitle}>[Engagement Modes Headline]</h2>
            <p className={styles.sectionSubhead}>
              [Engagement modes subhead placeholder copy.]
            </p>
          </div>
          <div className={styles.grid3}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Card Title]</h3>
              <p className={styles.cardSubhead}>[One-line descriptor]</p>
              <ul className={styles.cardList}>
                <li>[Micro bullet 1]</li>
                <li>[Micro bullet 2]</li>
                <li>[Micro bullet 3]</li>
              </ul>
              <Link href="#operator-hourly" className={styles.cardCta}>
                [Inline CTA]
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Card Title]</h3>
              <p className={styles.cardSubhead}>[One-line descriptor]</p>
              <ul className={styles.cardList}>
                <li>[Micro bullet 1]</li>
                <li>[Micro bullet 2]</li>
                <li>[Micro bullet 3]</li>
              </ul>
              <Link href="#flat-rate" className={styles.cardCta}>
                [Inline CTA]
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Card Title]</h3>
              <p className={styles.cardSubhead}>[One-line descriptor]</p>
              <ul className={styles.cardList}>
                <li>[Micro bullet 1]</li>
                <li>[Micro bullet 2]</li>
                <li>[Micro bullet 3]</li>
              </ul>
              <Link href="#build-with-synerva" className={styles.cardCta}>
                [Inline CTA]
              </Link>
            </article>
          </div>
        </section>

        <section
          id="operator-hourly"
          className={`${styles.sectionPanel} ${styles.section}`}
        >
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h2 className={styles.sectionTitle}>[Operator Hourly Headline]</h2>
              <p className={styles.sectionSubhead}>
                [Operator Hourly subhead placeholder copy.]
              </p>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>[Best for]</p>
                <ul className={styles.bulletList}>
                  <li>[Best for bullet 1]</li>
                  <li>[Best for bullet 2]</li>
                  <li>[Best for bullet 3]</li>
                </ul>
              </div>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>[Includes]</p>
                <ul className={styles.bulletList}>
                  <li>[Includes bullet 1]</li>
                  <li>[Includes bullet 2]</li>
                  <li>[Includes bullet 3]</li>
                  <li>[Includes bullet 4]</li>
                </ul>
              </div>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#capabilities" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img3x2}>
                <Image
                  src="/placeholders/offeringstest1/operator-hourly-3x2.png"
                  alt="Operator hourly placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="flat-rate" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h2 className={styles.sectionTitle}>[Flat-Rate Headline]</h2>
              <p className={styles.sectionSubhead}>
                [Flat-Rate subhead placeholder copy.]
              </p>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>[Common builds]</p>
                <ul className={styles.bulletList}>
                  <li>[Common builds bullet 1]</li>
                  <li>[Common builds bullet 2]</li>
                  <li>[Common builds bullet 3]</li>
                  <li>[Common builds bullet 4]</li>
                </ul>
              </div>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>[What success looks like]</p>
                <ul className={styles.bulletList}>
                  <li>[Success bullet 1]</li>
                  <li>[Success bullet 2]</li>
                  <li>[Success bullet 3]</li>
                </ul>
              </div>
              <p className={styles.microLine}>[Optional micro-line placeholder.]</p>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img3x2}>
                <Image
                  src="/placeholders/offeringstest1/flat-rate-3x2.png"
                  alt="Flat-rate projects placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="build-with-synerva"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.grid2Asym}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h2 className={styles.sectionTitle}>[Build With Synerva Headline]</h2>
              <p className={styles.sectionSubhead}>
                [Build With Synerva subhead placeholder copy.]
              </p>
              <ul className={styles.bulletList}>
                <li>[Outcome bullet 1]</li>
                <li>[Outcome bullet 2]</li>
                <li>[Outcome bullet 3]</li>
                <li>[Outcome bullet 4]</li>
                <li>[Outcome bullet 5]</li>
              </ul>
              <div className={styles.requirementsRow}>
                <span className={styles.groupLabel}>[Best when]</span>
                <span className={styles.requirementsText}>
                  [Best when micro-row placeholder.]
                </span>
              </div>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.portraitPairDesktop}>
              <div className={styles.imageFrame}>
                <div className={styles.img2x3}>
                  <Image
                    src="/placeholders/offeringstest1/build-left-2x3.png"
                    alt="Build with Synerva left placeholder"
                    fill
                    className={styles.imageFill}
                    sizes="(max-width: 1280px) 45vw, 360px"
                  />
                </div>
              </div>
              <div className={styles.imageFrame}>
                <div className={styles.img2x3}>
                  <Image
                    src="/placeholders/offeringstest1/build-right-2x3.png"
                    alt="Build with Synerva right placeholder"
                    fill
                    className={styles.imageFill}
                    sizes="(max-width: 1280px) 45vw, 360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>[Eyebrow Label]</p>
            <h2 className={styles.sectionTitle}>[Capabilities Headline]</h2>
            <p className={styles.sectionSubhead}>
              [Capabilities subhead placeholder copy.]
            </p>
          </div>
          <div className={styles.imageFrame}>
            <div className={styles.img3x2}>
              <Image
                src="/placeholders/offeringstest1/capabilities-3x2.png"
                alt="Capabilities placeholder"
                fill
                className={styles.imageFill}
                sizes="(max-width: 1280px) 100vw, 960px"
              />
            </div>
          </div>
          <div className={styles.capabilityGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Capability Title]</h3>
              <ul className={styles.cardList}>
                <li>[Capability bullet 1]</li>
                <li>[Capability bullet 2]</li>
                <li>[Capability bullet 3]</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Capability Title]</h3>
              <ul className={styles.cardList}>
                <li>[Capability bullet 1]</li>
                <li>[Capability bullet 2]</li>
                <li>[Capability bullet 3]</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Capability Title]</h3>
              <ul className={styles.cardList}>
                <li>[Capability bullet 1]</li>
                <li>[Capability bullet 2]</li>
                <li>[Capability bullet 3]</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Capability Title]</h3>
              <ul className={styles.cardList}>
                <li>[Capability bullet 1]</li>
                <li>[Capability bullet 2]</li>
                <li>[Capability bullet 3]</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>[Capability Title]</h3>
              <ul className={styles.cardList}>
                <li>[Capability bullet 1]</li>
                <li>[Capability bullet 2]</li>
                <li>[Capability bullet 3]</li>
              </ul>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              [Primary CTA]
            </Link>
            <Link href="#modes" className={styles.btnSecondary}>
              [Secondary CTA]
            </Link>
          </div>
        </section>

        <section
          id="what-youre-buying"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>[Eyebrow Label]</p>
            <h2 className={styles.sectionTitle}>[What You’re Buying Headline]</h2>
            <p className={styles.sectionSubhead}>
              [What you’re buying subhead placeholder copy.]
            </p>
          </div>
          <div className={styles.portraitPairDesktop}>
            <div className={styles.imageFrame}>
              <div className={styles.img2x3}>
                <Image
                  src="/placeholders/offeringstest1/buying-left-2x3.png"
                  alt="What you're buying left placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 45vw, 360px"
                />
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img2x3}>
                <Image
                  src="/placeholders/offeringstest1/buying-right-2x3.png"
                  alt="What you're buying right placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 45vw, 360px"
                />
              </div>
            </div>
          </div>
          <div className={styles.grid2}>
            <div className={styles.bulletGroup}>
              <p className={styles.groupLabel}>[Outcomes]</p>
              <ul className={styles.bulletList}>
                <li>[Outcome bullet 1]</li>
                <li>[Outcome bullet 2]</li>
                <li>[Outcome bullet 3]</li>
                <li>[Outcome bullet 4]</li>
              </ul>
            </div>
            <div className={styles.bulletGroup}>
              <p className={styles.groupLabel}>[Standards]</p>
              <ul className={styles.bulletList}>
                <li>[Standard bullet 1]</li>
                <li>[Standard bullet 2]</li>
                <li>[Standard bullet 3]</li>
                <li>[Standard bullet 4]</li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              [Primary CTA]
            </Link>
            <Link href="#how-it-works" className={styles.btnSecondary}>
              [Secondary CTA]
            </Link>
          </div>
        </section>

        <section
          id="how-it-works"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>[Eyebrow Label]</p>
            <h2 className={styles.sectionTitle}>[How It Works Headline]</h2>
            <p className={styles.sectionSubhead}>
              [How it works subhead placeholder copy.]
            </p>
          </div>
          <div className={styles.imageFrame}>
            <div className={styles.img3x2}>
              <Image
                src="/placeholders/offeringstest1/process-3x2.png"
                alt="Process placeholder"
                fill
                className={styles.imageFill}
                sizes="(max-width: 1280px) 100vw, 960px"
              />
            </div>
          </div>
          <div className={styles.stepsRow}>
            {Array.from({ length: 5 }).map((_, index) => (
              <article key={`step-${index + 1}`} className={styles.stepCardDesktop}>
                <span className={styles.stepNumber}>Step {index + 1}</span>
                <h3 className={styles.stepTitle}>[Step Title]</h3>
                <p className={styles.stepBody}>[Step description placeholder.]</p>
              </article>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              [Primary CTA]
            </Link>
            <Link href="#faq" className={styles.btnSecondary}>
              [Secondary CTA]
            </Link>
          </div>
        </section>

        <section id="proof" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h2 className={styles.sectionTitle}>[Credibility Headline]</h2>
              <p className={styles.sectionSubhead}>
                [Credibility subhead placeholder copy.]
              </p>
              <ul className={styles.bulletList}>
                <li>[Signal bullet 1]</li>
                <li>[Signal bullet 2]</li>
                <li>[Signal bullet 3]</li>
                <li>[Signal bullet 4]</li>
                <li>[Signal bullet 5]</li>
                <li>[Signal bullet 6]</li>
              </ul>
              <p className={styles.microLine}>[Optional micro-line placeholder.]</p>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img3x2}>
                <Image
                  src="/placeholders/offeringstest1/credibility-3x2.png"
                  alt="Credibility placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>[Eyebrow Label]</p>
            <h2 className={styles.sectionTitle}>[FAQ Headline]</h2>
            <p className={styles.sectionSubhead}>[FAQ subhead placeholder copy.]</p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqColumn}>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 1]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 2]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 3]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
            </div>
            <div className={styles.faqColumn}>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 4]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 5]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>[Question 6]</h3>
                <p className={styles.faqAnswer}>[Answer placeholder copy.]</p>
              </article>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              [Primary CTA]
            </Link>
            <Link href="#hero" className={styles.btnSecondary}>
              [Secondary CTA]
            </Link>
          </div>
        </section>

        <section
          id="start"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>[Eyebrow Label]</p>
              <h2 className={styles.sectionTitle}>[Final CTA Headline]</h2>
              <p className={styles.sectionSubhead}>
                [Final CTA subhead placeholder copy.]
              </p>
              <ul className={styles.bulletList}>
                <li>[Final CTA bullet 1]</li>
                <li>[Final CTA bullet 2]</li>
                <li>[Final CTA bullet 3]</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  [Primary CTA]
                </Link>
                <Link href="#modes" className={styles.btnSecondary}>
                  [Secondary CTA]
                </Link>
              </div>
            </div>
            <div className={styles.imageFrame}>
              <div className={styles.img3x2}>
                <Image
                  src="/placeholders/offeringstest1/final-cta-3x2.png"
                  alt="Final CTA placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
