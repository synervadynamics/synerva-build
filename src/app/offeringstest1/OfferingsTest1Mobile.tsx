"use client";

import Image from "next/image";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "./offeringstest1.module.css";
import { useEffect } from "react";

export default function OfferingsTest1Mobile() {
  useEffect(() => {
    document.body.classList.add("offerings-safe-bg");
    return () => {
      document.body.classList.remove("offerings-safe-bg");
    };
  }, []);

  return (
    <main className={`${styles.offeringsTest1Page} ${styles.offeringsTest1Theme}`}>
      <div className="relative z-10">
        <Mobile1Shell
          showBackButton
          backgroundImageUrl="/subpage-backgrounds/offerings-v3.png"
          backgroundOverlayOpacity={0.8}
        >
          <div className={styles.mobilePageWrapper}>
            <div className={`${styles.sectionContainer} ${styles.sectionFull}`}>
              <section id="hero" className={styles.sectionPanel}>
                <p className={styles.eyebrow}>OFFERINGS</p>
                <h1 className={styles.sectionTitle}>
                  Choose the Entry Point. The Structure Follows.
                </h1>
                <p className={styles.sectionSubhead}>
                  Some situations need a sharp intervention. Others need a full
                  build carried from first signal to finished asset. Synerva
                  offers a clean way into the work at each level, with explicit
                  scope, clear direction, and no padded process around the
                  edges.
                </p>
                <div className={`${styles.imageFrame} ${styles.imageHero1536x1024}`}>
                  <Image
                    src="/offerings-2026-feb/ways-to-work-w-synerva.PNG"
                    alt="Synerva offerings hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className={styles.imageFill}
                  />
                </div>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section
                id="modes"
                className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
              >
                <p className={styles.eyebrow}>THE MODEL</p>
                <h2 className={styles.sectionTitle}>Clarity → Structure → Build</h2>
                <p className={styles.sectionSubhead}>
                  Every engagement follows the same progression.
                </p>
                <p className={styles.sectionSubhead}>
                  Reduce ambiguity until the signal is usable.
                </p>
                <p className={styles.sectionSubhead}>
                  Give the work a structure that can hold.
                </p>
                <p className={styles.sectionSubhead}>
                  Carry execution through without losing intent.
                </p>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section id="operator-hourly" className={styles.sectionPanel}>
                <p className={styles.eyebrow}>PRECISION INTERVENTION</p>
                <h2 className={styles.sectionTitle}>Operator Sessions</h2>
                <p className={styles.sectionSubhead}>
                  Best for audits, positioning work, decision support,
                  conversion fixes, message refinement, and fast progress when
                  the highest-value deliverable is applied judgment.
                </p>
                <div className={`${styles.imageFrame} ${styles.offeringsAnchorFrame}`}>
                  <div className={styles.imgOperatorHourly}>
                    <Image
                      src="/offerings-2026-feb/operator-hourly.PNG"
                      alt="Operator hourly offering"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className={styles.imageFill}
                    />
                  </div>
                </div>
                <ul className={styles.bulletList}>
                  <li>Identify what actually matters</li>
                  <li>Remove noise and false priorities</li>
                  <li>Define the next clean move</li>
                </ul>
                <p className={styles.microLine}>
                  The goal is not more input. The goal is clearer movement.
                </p>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section id="flat-rate" className={styles.sectionPanel}>
                <p className={styles.eyebrow}>DEFINED SCOPE</p>
                <h2 className={styles.sectionTitle}>Focused Projects</h2>
                <p className={styles.sectionSubhead}>
                  Built for situations that need clear deliverables, explicit
                  acceptance criteria, and a finish line established before work
                  begins, without drift, padding, or process theater.
                </p>
                <div className={`${styles.imageFrame} ${styles.offeringsAnchorFrame}`}>
                  <div className={styles.imgOperatorHourly}>
                    <Image
                      src="/offerings-2026-feb/flat-rate-projects.jpg"
                      alt="Flat-Rate Projects"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className={styles.imageFill}
                    />
                  </div>
                </div>
                <ul className={styles.bulletList}>
                  <li>Scope defined before execution</li>
                  <li>Deliverables tied to outcomes</li>
                  <li>Work carried cleanly to completion</li>
                </ul>
                <p className={styles.microLine}>
                  If it cannot be finished cleanly, it is not structured yet.
                </p>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section id="build-with-synerva" className={styles.sectionPanel}>
                <p className={styles.eyebrow}>CLARITY TO EXECUTION</p>
                <h2 className={styles.sectionTitle}>Build With Synerva</h2>
                <p className={styles.sectionSubhead}>
                  For work that needs to be clarified, structured, written,
                  designed, and built as one release instead of pieced together
                  after the fact.
                </p>
                <div className={`${styles.imageFrame} ${styles.buildAnchorFrame}`}>
                  <div className={styles.imgWidePlate}>
                    <Image
                      src="/offerings-2026-feb/build-with-synerva.jpg"
                      alt="Build with Synerva systems overview"
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className={styles.imageFill}
                    />
                  </div>
                </div>
                <ul className={styles.bulletList}>
                  <li>One continuous system from idea to asset</li>
                  <li>No fragmentation across roles or phases</li>
                  <li>Execution that preserves original intent</li>
                </ul>
                <p className={styles.microLine}>
                  The work moves once, and it holds.
                </p>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section id="capabilities" className={styles.sectionPanel}>
                <p className={styles.eyebrow}>WHAT THIS PRODUCES</p>
                <h2 className={styles.sectionTitle}>Outcomes That Hold</h2>
                <p className={styles.sectionSubhead}>
                  Every engagement is designed to reduce decision drag, carry
                  execution cleanly, and leave behind assets that keep creating
                  value after the initial work is done.
                </p>
                <div
                  className={`${styles.imageFrame} ${styles.capabilitiesAnchorFrame} ${styles.imgCapSquare}`}
                >
                  <Image
                    src="/offerings-2026-feb/capabilities-v2.jpg"
                    alt="Synerva capabilities overview"
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className={styles.imageFill}
                  />
                </div>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard}`}
            >
              <section id="individual-services" className={styles.sectionPanel}>
                <h2 className={styles.sectionTitle}>Output Breakdown</h2>
                <div className={styles.microPanelGrid}>
                  <article className={styles.microPanel}>
                    <h3 className={styles.microPanelTitle}>Clarity</h3>
                    <div className={styles.tableDivider} />
                    <p className={styles.sectionSubhead}>
                      Complexity is reduced until the real objective, the key
                      tradeoffs, and the next actions are clear enough to move
                      on without hesitation.
                    </p>
                  </article>
                  <article className={styles.microPanel}>
                    <h3 className={styles.microPanelTitle}>Structure</h3>
                    <div className={styles.tableDivider} />
                    <p className={styles.sectionSubhead}>
                      Direction is organized into language, systems, pages, and
                      decisions that can hold together instead of scattering
                      under pressure.
                    </p>
                  </article>
                  <article className={styles.microPanel}>
                    <h3 className={styles.microPanelTitle}>Build</h3>
                    <div className={styles.tableDivider} />
                    <p className={styles.sectionSubhead}>
                      The work becomes real through pages, language, assets,
                      tools, and systems designed to function beyond the moment
                      they launch.
                    </p>
                  </article>
                  <article className={styles.microPanel}>
                    <h3 className={styles.microPanelTitle}>Operating Judgment</h3>
                    <div className={styles.tableDivider} />
                    <p className={styles.sectionSubhead}>
                      Judgment is carried into the work directly, replacing
                      avoidable meetings, repeated explanations, and
                      slow-moving decision loops.
                    </p>
                  </article>
                </div>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionFull} ${styles.sectionGapStandard}`}
            >
              <section
                id="what-youre-buying"
                className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
              >
                <p className={styles.eyebrow}>WORKING PHILOSOPHY</p>
                <h2 className={styles.sectionTitle}>No Process Theater</h2>
                <p className={styles.sectionSubhead}>Scope is explicit.</p>
                <p className={styles.sectionSubhead}>Decisions are made once.</p>
                <p className={styles.sectionSubhead}>
                  Execution is carried without drift.
                </p>
                <div className={styles.portraitPair}>
                  <div className={`${styles.imageFrame} ${styles.imgStandardsBand}`}>
                    <Image
                      src="/offerings-2026-feb/standards-left.PNG"
                      alt="Synerva standards left"
                      fill
                      sizes="(max-width: 768px) 50vw, 210px"
                      className={styles.imageFill}
                    />
                  </div>
                  <div className={`${styles.imageFrame} ${styles.imgStandardsBand}`}>
                    <Image
                      src="/offerings-2026-feb/standards-right.PNG"
                      alt="Synerva standards right"
                      fill
                      sizes="(max-width: 768px) 50vw, 210px"
                      className={styles.imageFill}
                    />
                  </div>
                </div>
                <p className={styles.microLine}>
                  Nothing is padded. Nothing is implied. Everything is built to
                  hold.
                </p>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapStandard} ${styles.sectionGapStandardBottom}`}
            >
              <section
                id="how-it-works"
                className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
              >
                <p className={styles.eyebrow}>WHO THIS IS FOR</p>
                <p className={styles.sectionSubhead}>
                  People who want clarity before movement.
                </p>
                <p className={styles.sectionSubhead}>
                  Teams that need structure, not more ideas.
                </p>
                <p className={styles.sectionSubhead}>
                  Work that has to hold under real conditions.
                </p>
                <div className={styles.processDivider} aria-hidden="true" />
                <p className={styles.groupLabel}>Not Built For</p>
                <ul className={styles.bulletList}>
                  <li>Vague direction and shifting goals</li>
                  <li>Process-heavy environments</li>
                  <li>Work driven by presentation over substance</li>
                </ul>
              </section>
            </div>

            <div
              className={`${styles.sectionContainer} ${styles.sectionConstrained} ${styles.sectionGapEmphasis}`}
            >
              <section
                id="next-step"
                className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
              >
                <p className={styles.eyebrow}>NEXT STEP</p>
                <h2 className={styles.sectionTitle}>Start With a 30-Minute Plan</h2>
                <p className={styles.sectionSubhead}>
                  A focused session to clarify the real objective, define
                  constraints, and choose the cleanest path into the work.
                </p>
                <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
                  <Image
                    src="/offerings-2026-feb/next-step.PNG"
                    alt="Synerva next step"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className={styles.imageFill}
                  />
                </div>
              </section>
            </div>
          </div>
        </Mobile1Shell>
      </div>
    </main>
  );
}
