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
        style={{ opacity: 0.8 }}
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
                  Choose the engagement that matches your scope, urgency, and
                  standards.
                </p>
                <p className={styles.sectionSubhead}>
                  Synerva delivers senior-level strategy and execution as a
                  single system. No handoffs. No theater. No performative
                  busywork.
                  <br />
                  This is work designed to hold up under real pressure.
                </p>
                <ul className={styles.bulletList}>
                  <li>Clear constraints and explicit decisions</li>
                  <li>Fast, disciplined execution</li>
                  <li>Systems that compound instead of decaying</li>
                </ul>
                <p className={styles.microLine}>
                  Response within 24 hours. No sales calls. No waiting room.
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
                Three ways to engage. Same standards. Different tempos.
              </p>
              <p className={styles.sectionSubhead}>
                Each mode exists to solve a different kind of problem, cleanly.
              </p>
            </div>
            <div className={styles.grid3}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Operator Hourly</h3>
                <p className={styles.cardSubhead}>
                  Focused, high-leverage sessions to unblock decisions and move
                  fast.
                </p>
                <p className={styles.cardSubhead}>
                  Senior operator time, applied where it actually matters.
                </p>
                <ul className={styles.cardList}>
                  <li>Rapid diagnosis and direction</li>
                  <li>Strategy and execution in the same room</li>
                  <li>Best for pivots, audits, fixes, and pressure points</li>
                </ul>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Flat-Rate Projects</h3>
                <p className={styles.cardSubhead}>
                  Defined outcomes, fixed scope, clean delivery.
                </p>
                <p className={styles.cardSubhead}>
                  For teams who know what needs to be built and want it done
                  properly.
                </p>
                <ul className={styles.cardList}>
                  <li>Clear scope, price, and finish line</li>
                  <li>Crafted assets and systems</li>
                  <li>Minimal meetings, maximum throughput</li>
                </ul>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Build With Synerva</h3>
                <p className={styles.cardSubhead}>
                  End-to-end systems, built as one coherent whole.
                </p>
                <p className={styles.cardSubhead}>
                  For serious builds with real consequences.
                </p>
                <ul className={styles.cardList}>
                  <li>Strategy, design, engineering, and automation</li>
                  <li>One system, not a pile of deliverables</li>
                  <li>Designed to scale without rewrites or regret</li>
                </ul>
              </article>
            </div>
            <div className={styles.ctaRow}>
              <Link href="#next-step" className={styles.btnSecondary}>
                See the next step
              </Link>
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
              <p className={styles.microLine}>Minimum friction. Maximum leverage.</p>
            </div>
            <div className={`${styles.imageFrame} ${styles.offeringsAnchorFrame}`}>
              <div className={styles.imgSoftSquare}>
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
            </div>
            <div className={`${styles.imageFrame} ${styles.offeringsAnchorFrame}`}>
              <div className={styles.imgSoftSquare}>
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
          <div className={`${styles.grid2Asym} ${styles.buildSectionGrid}`}>
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
              <p className={styles.microLine}>This is the flagship lane.</p>
            </div>
            <div className={`${styles.imageFrame} ${styles.buildAnchorFrame}`}>
              <div className={styles.imgWidePlate}>
                <Image
                  src="/placeholders/offeringstest1/build-left-2x3.png"
                  alt="Build with Synerva placeholder"
                  fill
                  className={styles.imageFill}
                  sizes="(max-width: 1280px) 60vw, 640px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className={`${styles.sectionPanel} ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Capabilities</p>
            <h2 className={styles.sectionTitle}>What gets built</h2>
            <p className={styles.sectionSubhead}>
              Systems, not isolated artifacts.
            </p>
            <p className={styles.sectionSubhead}>
              Synerva builds integrated systems that remove friction across the
              business.
            </p>
            <p className={styles.sectionSubhead}>
              Depending on the engagement, this may include:
            </p>
            <ul className={styles.bulletList}>
              <li>Strategy and positioning</li>
              <li>Brand and identity systems</li>
              <li>Websites, apps, and product UI</li>
              <li>Content and messaging engines</li>
              <li>Automation, AI tooling, and internal workflows</li>
            </ul>
            <p className={styles.sectionSubhead}>
              Everything is designed to work together. Nothing is shipped in
              isolation.
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
          <p className={styles.microLine}>If it touches the system, it’s in scope.</p>
        </section>

        <section
          id="individual-services"
          className={`${styles.sectionPanel} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Individual services &amp; deliverables
            </h2>
            <p className={styles.sectionSubhead}>
              Yes, Synerva is systems-first by default.
            </p>
            <p className={styles.sectionSubhead}>
              But you can absolutely engage Synerva for individual services or
              specific deliverables when that’s what the situation calls for.
            </p>
            <p className={styles.sectionSubhead}>
              The difference is that nothing here is treated as a throwaway
              artifact. Every deliverable is designed with full awareness of the
              larger system it lives inside.
            </p>
            <p className={styles.sectionSubhead}>
              Below is a representative map of what Synerva can deliver
              directly.
            </p>
          </div>
          <div className={styles.stepStack}>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Strategy &amp; Advisory</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Business and product strategy</li>
                  <li>Positioning and differentiation</li>
                  <li>Offer architecture and pricing strategy</li>
                  <li>Go-to-market planning</li>
                  <li>Decision frameworks and operating principles</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Branding &amp; Identity</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Brand strategy and narrative</li>
                  <li>Visual identity systems</li>
                  <li>Brand guidelines and usage rules</li>
                  <li>Voice, tone, and messaging frameworks</li>
                  <li>Brand audits and refinements</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Marketing</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Marketing research and audience analysis</li>
                  <li>Campaign strategy and planning</li>
                  <li>Multi-platform campaigns (social, email, SEO)</li>
                  <li>Funnel and lifecycle design</li>
                  <li>Conversion optimization</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Content &amp; Messaging</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Short-form and long-form writing</li>
                  <li>Website and landing page copy</li>
                  <li>Blog and editorial content</li>
                  <li>Thought leadership and ghostwriting</li>
                  <li>Graphic and visual content</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Web &amp; App Development</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Websites and landing pages</li>
                  <li>Product and app UI/UX</li>
                  <li>Design systems and component libraries</li>
                  <li>Frontend and full-stack development</li>
                  <li>Performance and accessibility improvements</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>AI &amp; Automation</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Workflow automation</li>
                  <li>Internal tools and dashboards</li>
                  <li>AI-assisted content and operations systems</li>
                  <li>Process optimization</li>
                  <li>Lightweight custom tooling</li>
                </ul>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.grid2}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>Audits &amp; Reports</h3>
                  <div className={styles.tableDivider} />
                </div>
                <ul className={styles.cardList}>
                  <li>Brand, website, and UX audits</li>
                  <li>Marketing and funnel audits</li>
                  <li>Content and messaging audits</li>
                  <li>Strategic reports and briefs</li>
                  <li>Implementation roadmaps</li>
                </ul>
              </div>
            </article>
          </div>
          <p className={styles.microLine}>
            If it’s on the list, it’s fair game. If it isn’t, ask anyway.
          </p>
        </section>

        <section
          id="what-youre-buying"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Standards</p>
            <h2 className={styles.sectionTitle}>What you’re actually buying</h2>
            <p className={styles.sectionSubhead}>
              Not services. Outcomes that hold up.
            </p>
            <p className={styles.sectionSubhead}>Deliverables matter.</p>
            <p className={styles.sectionSubhead}>
              But what you’re really buying is clarity, structure, and momentum
              that survives contact with reality.
            </p>
            <p className={styles.sectionSubhead}>
              This work is designed to reduce friction, collapse decision time,
              and create systems that keep working after delivery.
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
                <li>Systems that reduce cognitive load instead of adding to it</li>
                <li>Higher conversion without louder marketing</li>
                <li>Momentum that continues after delivery</li>
              </ul>
            </div>
            <div className={styles.bulletGroup}>
              <p className={styles.groupLabel}>Standards</p>
              <ul className={styles.bulletList}>
                <li>Coherence across copy, design, and structure</li>
                <li>Constraints stated early and enforced</li>
                <li>Craft over “good enough”</li>
                <li>Delivery that doesn’t collapse two weeks later</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Process</p>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionSubhead}>
              A direct path from signal to shipped system.
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
                You outline the goal and what’s currently blocked.
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 2</span>
              <h3 className={styles.stepTitle}>Scope + constraints</h3>
              <p className={styles.stepBody}>
                We define the real problem and the conditions it must operate
                under.
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 3</span>
              <h3 className={styles.stepTitle}>Build</h3>
              <p className={styles.stepBody}>
                Tight loops. Fast feedback. Real progress.
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 4</span>
              <h3 className={styles.stepTitle}>Review + harden</h3>
              <p className={styles.stepBody}>
                Stress-test, refine, and lock standards.
              </p>
            </article>
            <article className={styles.stepCardDesktop}>
              <span className={styles.stepNumber}>Step 5</span>
              <h3 className={styles.stepTitle}>Launch + handoff</h3>
              <p className={styles.stepBody}>
                Final deliverables, documentation, and clear next actions.
              </p>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#next-step" className={styles.btnSecondary}>
              What happens next
            </Link>
          </div>
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
                <li>Constraints instead of endless brainstorms</li>
                <li>Integration across the entire stack</li>
                <li>Momentum that doesn’t evaporate</li>
                <li>No bloat, filler, or performative process</li>
                <li>No “pretty” that breaks under load</li>
              </ul>
              <p className={styles.microLine}>
                If you want comfort, reassurance, or consensus, this is not the
                right fit.
              </p>
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
        </section>

        <section
          id="next-step"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled} ${styles.section}`}
        >
          <div className={styles.grid2}>
            <div className={styles.textStack}>
              <p className={styles.eyebrow}>Next Step</p>
              <h2 className={styles.sectionTitle}>Ready when you are</h2>
              <p className={styles.sectionSubhead}>
                One short intake. Then we choose the fastest path to a real
                outcome.
              </p>
              <ul className={styles.bulletList}>
                <li>Tell me what you’re building and what’s blocked</li>
                <li>I reply with next steps and the right engagement fit</li>
                <li>We move into a build loop with clear constraints</li>
              </ul>
              <div className={styles.ctaRow}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Start a conversation
                </Link>
              </div>
              <p className={styles.microLine}>
                Clarity compounds. Confusion spreads.
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
