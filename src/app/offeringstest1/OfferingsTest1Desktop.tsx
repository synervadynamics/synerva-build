"use client";

import Image from "next/image";
import Link from "next/link";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import styles from "./offeringstest1.module.css";

export default function OfferingsTest1Desktop() {
  return (
      <main className={`${styles.offeringsTest1Page} ${styles.offeringsTest1Theme}`}>
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/offerings-v3.png" />
      <div
        className="pointer-events-none fixed inset-0 z-[5] bg-black"
        style={{ opacity: 0.6 }}
        aria-hidden
      />
      <div className="relative z-10">
        <div className={styles.pageWrapper}>
          <section id="hero" className={`${styles.sectionPanel} ${styles.section}`}>
            <div className={styles.grid2Asym}>
              <div className={styles.textStack}>
                <p className={styles.eyebrow}>Offerings</p>
                <h1 className={styles.heroTitle}>Ways to work with Synerva</h1>
                <p className={styles.sectionSubhead}>
                  Pick the engagement that fits your scope, speed, and tolerance
                  for mediocrity.
                </p>
                <ul className={styles.bulletList}>
                  <li>Senior-level strategy and execution, delivered as one system</li>
                  <li>Clear constraints, clean decisions, fast shipping</li>
                  <li>Work that holds up under real-world pressure</li>
                </ul>
                <div className={styles.ctaRow}>
                  <Link href="#start" className={styles.btnPrimary}>
                    Start here
                  </Link>
                  <Link href="#modes" className={styles.btnSecondary}>
                    See engagement modes
                  </Link>
                </div>
                <p className={styles.microLine}>
                  Response within 24 hours on weekdays.
                </p>
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
              <p className={styles.eyebrow}>Engagement Modes</p>
              <h2 className={styles.sectionTitle}>Choose your lane</h2>
              <p className={styles.sectionSubhead}>
                Three ways to engage. Same standards. Different tempo.
              </p>
            </div>
            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Operator Hourly</h3>
                <p className={styles.cardSubhead}>
                  High-output sessions to cut through ambiguity and ship.
                </p>
                <ul className={styles.cardList}>
                  <li>Fast decisions, tight scope, real progress</li>
                  <li>Strategy and build in the same room</li>
                  <li>Ideal for pivots, audits, launches, fixes</li>
                </ul>
                <Link href="#operator-hourly" className={styles.cardCta}>
                  Go to Operator Hourly
                </Link>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Flat-Rate Projects</h3>
                <p className={styles.cardSubhead}>
                  Defined outcome. Fixed price. Clean delivery.
                </p>
                <ul className={styles.cardList}>
                  <li>Clear spec, clear timeline</li>
                  <li>Crafted assets and systems</li>
                  <li>Minimal meetings, maximum throughput</li>
                </ul>
                <Link href="#flat-rate" className={styles.cardCta}>
                  Go to Flat-Rate Projects
                </Link>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Build With Synerva</h3>
                <p className={styles.cardSubhead}>
                  Full-stack systems built end-to-end, the right way.
                </p>
                <ul className={styles.cardList}>
                  <li>Strategy, design, engineering, automation</li>
                  <li>Integrated pipeline, not disconnected deliverables</li>
                  <li>Best for serious builds with real stakes</li>
                </ul>
                <Link href="#build-with-synerva" className={styles.cardCta}>
                  Go to System Builds
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
                <p className={styles.eyebrow}>Operator Hourly</p>
                <h2 className={styles.sectionTitle}>High-output, senior execution</h2>
                <p className={styles.sectionSubhead}>
                  The fastest way to turn “we should” into “it’s shipped.”
                </p>
                <div className={styles.bulletGroup}>
                  <p className={styles.groupLabel}>Best for</p>
                <ul className={styles.bulletList}>
                  <li>Clarifying direction when the signal is buried</li>
                  <li>Fixing what’s almost-working and expensive</li>
                  <li>Designing the next 2–4 weeks of momentum</li>
                </ul>
              </div>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>What happens in sessions</p>
                <ul className={styles.bulletList}>
                  <li>Diagnose the bottleneck and set constraints</li>
                  <li>Rewrite the plan into a buildable sequence</li>
                  <li>Execute key work live (copy, design, structure, systems)</li>
                  <li>Define acceptance criteria and ship-ready outputs</li>
                  <li>Leave with next actions that actually connect</li>
                </ul>
              </div>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  Book Operator Hourly
                </Link>
                <Link href="#capabilities" className={styles.btnSecondary}>
                  See coverage
                </Link>
              </div>
              <p className={styles.microLine}>Minimum friction. Maximum leverage.</p>
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
              <p className={styles.eyebrow}>Flat-Rate Projects</p>
              <h2 className={styles.sectionTitle}>Defined outcomes. Clean delivery.</h2>
              <p className={styles.sectionSubhead}>
                Fixed scope, fixed price, built with taste and standards.
              </p>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>Common builds</p>
                <ul className={styles.bulletList}>
                  <li>A page or funnel that converts without begging</li>
                  <li>Brand system clean-up (rules, templates, tone, consistency)</li>
                  <li>Messaging and positioning that survives scrutiny</li>
                  <li>
                    Website or product UI refinements that make the system feel
                    “done”
                  </li>
                </ul>
              </div>
              <div className={styles.bulletGroup}>
                <p className={styles.groupLabel}>What success looks like</p>
                <ul className={styles.bulletList}>
                  <li>Coherent, consistent, shippable work</li>
                  <li>Maintainable without unraveling</li>
                  <li>Output that compounds instead of decaying</li>
                </ul>
              </div>
              <p className={styles.microLine}>
                You’ll know exactly what you’re getting before we build.
              </p>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  View flat-rate options
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  Request a quote
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
              <p className={styles.eyebrow}>Build With Synerva</p>
              <h2 className={styles.sectionTitle}>Full-stack systems, end-to-end</h2>
              <p className={styles.sectionSubhead}>
                Strategy, design, engineering, and automation as one chain.
              </p>
              <ul className={styles.bulletList}>
                <li>A unified system, not a pile of deliverables</li>
                <li>Decisions embedded into structure, UI, and workflow</li>
                <li>Automation where it matters, not where it’s cute</li>
                <li>A build that scales cleanly without rewrite season</li>
                <li>Output that reads premium because it is</li>
              </ul>
              <div className={styles.requirementsRow}>
                <span className={styles.groupLabel}>Best when</span>
                <span className={styles.requirementsText}>
                  You want the whole machine built, not just a nicer dashboard.
                </span>
              </div>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  Start a system build
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  Talk scope first
                </Link>
              </div>
              <p className={styles.microLine}>This is the flagship lane.</p>
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
            <p className={styles.eyebrow}>Capabilities</p>
            <h2 className={styles.sectionTitle}>What gets built</h2>
            <p className={styles.sectionSubhead}>
              A compact map of what Synerva can ship, end-to-end.
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
              <h3 className={styles.cardTitle}>Strategy + Positioning</h3>
              <ul className={styles.cardList}>
                <li>Defensible positioning, not poetry</li>
                <li>Offer architecture and pricing logic</li>
                <li>Decision frameworks that reduce noise</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Brand + Identity Systems</h3>
              <ul className={styles.cardList}>
                <li>Visual system rules (type, layout, hierarchy, usage)</li>
                <li>Voice and messaging system</li>
                <li>Templates that keep quality consistent</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Website + Product UI</h3>
              <ul className={styles.cardList}>
                <li>Mobile-first pages that convert cleanly</li>
                <li>Engineered UI systems, not decoration</li>
                <li>Information architecture that reduces friction</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Automation + AI Tooling</h3>
              <ul className={styles.cardList}>
                <li>Workflow automation that saves real time</li>
                <li>Internal tools that reduce operational drag</li>
                <li>AI where it increases leverage and clarity</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Content + Messaging Systems</h3>
              <ul className={styles.cardList}>
                <li>Landing pages, funnels, conversion narratives</li>
                <li>Editorial systems that stay on-voice</li>
                <li>Content that supports the machine</li>
              </ul>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              Tell me what you’re building
            </Link>
            <Link href="#modes" className={styles.btnSecondary}>
              Back to engagement modes
            </Link>
          </div>
          <p className={styles.microLine}>If it touches the system, it’s in scope.</p>
        </section>

        <section
          id="what-youre-buying"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Standards</p>
            <h2 className={styles.sectionTitle}>What you’re actually buying</h2>
            <p className={styles.sectionSubhead}>
              Clarity, compounding systems, and work that holds up.
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
              <p className={styles.groupLabel}>Outcomes</p>
              <ul className={styles.bulletList}>
                <li>Cleaner decisions and fewer dead ends</li>
                <li>Systems that reduce cognitive load</li>
                <li>Higher conversion without louder marketing</li>
                <li>Momentum you can maintain after delivery</li>
              </ul>
            </div>
            <div className={styles.bulletGroup}>
              <p className={styles.groupLabel}>Standards</p>
              <ul className={styles.bulletList}>
                <li>Coherence across copy, design, and structure</li>
                <li>Constraints stated and enforced</li>
                <li>Craft over “good enough”</li>
                <li>Delivery that doesn’t collapse two weeks later</li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              Start here
            </Link>
            <Link href="#how-it-works" className={styles.btnSecondary}>
              How it works
            </Link>
          </div>
          <p className={styles.microLine}>Taste, translated into structure.</p>
        </section>

        <section
          id="how-it-works"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Process</p>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionSubhead}>
              A simple path from signal to shipped system.
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
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 1</span>
              <h3 className={styles.stepTitle}>Intake</h3>
              <p className={styles.stepBody}>
                You outline the goal and what’s blocked
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 2</span>
              <h3 className={styles.stepTitle}>Scope + constraints</h3>
              <p className={styles.stepBody}>
                We define the real problem and win condition
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 3</span>
              <h3 className={styles.stepTitle}>Build sprint(s)</h3>
              <p className={styles.stepBody}>
                Decisions → build → proof, in tight loops
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 4</span>
              <h3 className={styles.stepTitle}>Review + harden</h3>
              <p className={styles.stepBody}>
                Refine, stress-test, lock standards
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 5</span>
              <h3 className={styles.stepTitle}>Launch + handoff</h3>
              <p className={styles.stepBody}>
                Clean deliverables, docs, next actions
              </p>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              Start intake
            </Link>
            <Link href="#faq" className={styles.btnSecondary}>
              Read FAQs
            </Link>
          </div>
          <p className={styles.microLine}>No theater. Just build.</p>
        </section>

        <section id="proof" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>Credibility</p>
              <h2 className={styles.sectionTitle}>
                Signals you’re in the right place
              </h2>
              <p className={styles.sectionSubhead}>
                What working together feels like in practice.
              </p>
              <ul className={styles.bulletList}>
                <li>Crisp options, not vague advice</li>
                <li>Constraints, not endless brainstorms</li>
                <li>Integration across the stack</li>
                <li>Momentum that doesn’t evaporate</li>
                <li>No bloat, filler, or performative process</li>
                <li>No “pretty” that breaks under load</li>
              </ul>
              <p className={styles.microLine}>
                If you want “fine,” hire literally anyone else.
              </p>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  Start here
                </Link>
                <Link href="#start" className={styles.btnSecondary}>
                  Email instead
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
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.sectionTitle}>Quick answers</h2>
            <p className={styles.sectionSubhead}>
              The things you’d ask before clicking.
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqColumn}>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Which engagement mode should I pick?
                </h3>
                <p className={styles.faqAnswer}>
                  Start with Operator Hourly for fast clarity. Choose Flat-Rate
                  for a defined outcome. Choose Build With Synerva when you want
                  the whole system.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you do retainers?</h3>
                <p className={styles.faqAnswer}>
                  Not by default. If it makes sense after real work ships, we can
                  discuss.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What if my scope is messy?</h3>
                <p className={styles.faqAnswer}>
                  Normal. We convert it into constraints, phases, and a buildable
                  sequence.
                </p>
              </article>
            </div>
            <div className={styles.faqColumn}>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you work with my existing brand or site?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes. We keep what holds up, replace what doesn’t, and unify the
                  system.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How fast can we start?</h3>
                <p className={styles.faqAnswer}>
                  Typically within days, depending on scope and bandwidth.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What do you need from me?</h3>
                <p className={styles.faqAnswer}>
                  A clear goal, access to current assets, and decision velocity.
                </p>
              </article>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#start" className={styles.btnPrimary}>
              Start intake
            </Link>
            <Link href="#hero" className={styles.btnSecondary}>
              Back to top
            </Link>
          </div>
        </section>

        <section
          id="start"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>Start Here</p>
              <h2 className={styles.sectionTitle}>Ready when you are</h2>
              <p className={styles.sectionSubhead}>
                One short intake, then we pick the fastest path to a real outcome.
              </p>
              <ul className={styles.bulletList}>
                <li>Tell me what you’re building and what’s blocked</li>
                <li>I reply with next steps and the best engagement fit</li>
                <li>We move into a build loop with clear constraints</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link href="#start" className={styles.btnPrimary}>
                  Start intake
                </Link>
                <Link href="#modes" className={styles.btnSecondary}>
                  Choose engagement mode
                </Link>
              </div>
              <p className={styles.microLine}>
                Clarity compounds. Confusion spreads. Let’s pick one.
              </p>
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
      </div>
    </main>
  );
}
