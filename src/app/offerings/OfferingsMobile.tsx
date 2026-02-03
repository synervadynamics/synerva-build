import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "./offerings.module.css";

export default function OfferingsMobile() {
  return (
    <main className={`${styles.offeringsPage} ${styles.offeringsTheme}`}>
      <Mobile1Shell
        showBackButton
        backgroundImageUrl="/subpage-backgrounds/offerings-v3.png"
      >
        <section id="hero" className={`${styles.sectionPanel} mt-6`}>
          <p className={styles.eyebrow}>Offerings</p>
          <h1 className={styles.sectionTitle}>Ways to work with Synerva</h1>
          <p className={styles.sectionSubhead}>
            Pick the engagement that fits your scope, speed, and tolerance for
            mediocrity.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/hero-3x2.png"
              alt="3:2 landscape placeholder: earthy engineered system, architecture-as-logic, calm authority"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <ul className={styles.bulletList}>
            <li>Senior-level strategy and execution, in one chain.</li>
            <li>Clear constraints, clean decisions, fast shipping.</li>
            <li>Work that holds up under real-world pressure.</li>
          </ul>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Start here
            </Link>
            <Link href="#modes" className={styles.btnSecondary}>
              See engagement modes
            </Link>
          </div>
          <p className={styles.microLine}>Response within 24 hours on weekdays.</p>
          <nav className={styles.jumpBar} aria-label="Jump to engagement modes">
            <Link href="#operator-hourly" className={styles.jumpLink}>
              Operator Hourly
            </Link>
            <Link href="#flat-rate" className={styles.jumpLink}>
              Flat-Rate
            </Link>
            <Link href="#build-with-synerva" className={styles.jumpLink}>
              Build With Synerva
            </Link>
          </nav>
        </section>

        <section
          id="modes"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
        >
          <p className={styles.eyebrow}>Engagement Modes</p>
          <h2 className={styles.sectionTitle}>Choose your lane</h2>
          <p className={styles.sectionSubhead}>
            Three ways to engage. Same standards. Different tempo.
          </p>
          <div className={styles.portraitPair}>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/modes-left-2x3.png"
                alt="2:3 portrait placeholder: precision craft, constraints, engineered composition"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/modes-right-2x3.png"
                alt="2:3 portrait placeholder: system architecture, flows, integrated modules"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
          </div>
          <div className={styles.miniCardStack}>
            <article className={styles.miniCard}>
              <h3 className={styles.miniCardTitle}>Operator Hourly</h3>
              <p className={styles.miniCardSubhead}>
                High-output sessions to cut through ambiguity and ship.
              </p>
              <ul className={styles.miniCardList}>
                <li>Fast decisions, tight scope, real progress</li>
                <li>Strategy + build in the same room</li>
                <li>Ideal for pivots, audits, launches, fixes</li>
              </ul>
              <Link href="#operator-hourly" className={styles.miniCardCta}>
                Go to Operator Hourly
              </Link>
            </article>
            <article className={styles.miniCard}>
              <h3 className={styles.miniCardTitle}>Flat-Rate Projects</h3>
              <p className={styles.miniCardSubhead}>
                Defined outcome. Fixed price. Clean delivery.
              </p>
              <ul className={styles.miniCardList}>
                <li>Clear spec, clear timeline</li>
                <li>Crafted assets and systems</li>
                <li>Minimal meetings, maximum throughput</li>
              </ul>
              <Link href="#flat-rate" className={styles.miniCardCta}>
                Go to Flat-Rate Projects
              </Link>
            </article>
            <article className={styles.miniCard}>
              <h3 className={styles.miniCardTitle}>Build With Synerva</h3>
              <p className={styles.miniCardSubhead}>
                Full-stack systems built end-to-end, the right way.
              </p>
              <ul className={styles.miniCardList}>
                <li>Strategy, design, engineering, automation</li>
                <li>Integrated pipeline, not disconnected deliverables</li>
                <li>Best for serious builds with real stakes</li>
              </ul>
              <Link href="#build-with-synerva" className={styles.miniCardCta}>
                Go to System Builds
              </Link>
            </article>
          </div>
        </section>

        <section id="operator-hourly" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>Operator Hourly</p>
          <h2 className={styles.sectionTitle}>High-output, senior execution</h2>
          <p className={styles.sectionSubhead}>
            The fastest way to turn “we should” into “it’s shipped.”
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/operator-hourly-3x2.png"
              alt="3:2 landscape placeholder: tactical clarity, precision tooling, map overlays, earthy and premium"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <div className={styles.bulletGroup}>
            <p className={styles.groupLabel}>Best for</p>
            <ul className={styles.bulletList}>
              <li>Clarifying direction when the signal is buried</li>
              <li>Fixing what’s almost-working (and expensive)</li>
              <li>Designing the next 2–4 weeks of momentum</li>
            </ul>
          </div>
          <div className={styles.bulletGroup}>
            <p className={styles.groupLabel}>What we do in sessions</p>
            <ul className={styles.bulletList}>
              <li>Diagnose the bottleneck and set constraints</li>
              <li>Rewrite the plan into a buildable sequence</li>
              <li>Execute key work live (copy, design, structure, systems)</li>
              <li>Define acceptance criteria and ship-ready outputs</li>
              <li>Leave you with next actions that actually connect</li>
            </ul>
          </div>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Book Operator Hourly
            </Link>
            <Link href="#capabilities" className={styles.btnSecondary}>
              See coverage
            </Link>
          </div>
          <p className={styles.microLine}>Minimum friction. Maximum leverage.</p>
        </section>

        <section id="flat-rate" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>Flat-Rate Projects</p>
          <h2 className={styles.sectionTitle}>Defined outcomes. Clean delivery.</h2>
          <p className={styles.sectionSubhead}>
            Fixed scope, fixed price, built with taste and standards.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/flat-rate-3x2.png"
              alt="3:2 landscape placeholder: architectural model, constructed system, crafted artifact"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <div className={styles.bulletGroup}>
            <p className={styles.groupLabel}>Common builds</p>
            <ul className={styles.bulletList}>
              <li>A page or funnel that converts without begging</li>
              <li>Brand system clean-up (rules, templates, tone, consistency)</li>
              <li>Messaging + positioning that survives scrutiny</li>
              <li>
                Website or product UI refinements that make the whole system feel
                “done”
              </li>
            </ul>
          </div>
          <div className={styles.bulletGroup}>
            <p className={styles.groupLabel}>What success looks like</p>
            <ul className={styles.bulletList}>
              <li>The work is coherent, consistent, and shippable</li>
              <li>You can maintain it without unraveling it</li>
              <li>The output compounds instead of decaying</li>
            </ul>
          </div>
          <p className={styles.microLine}>
            You’ll know exactly what you’re getting before we build.
          </p>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              View flat-rate options
            </Link>
            <Link href="#start" className={styles.btnSecondary}>
              Request a quote
            </Link>
          </div>
        </section>

        <section id="build-with-synerva" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>Build With Synerva</p>
          <h2 className={styles.sectionTitle}>Full-stack systems, end-to-end</h2>
          <p className={styles.sectionSubhead}>
            Strategy, design, engineering, and automation as one chain.
          </p>
          <div className={styles.portraitPair}>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/build-left-2x3.png"
                alt="2:3 portrait placeholder: modular infrastructure, stacked volumes, integrated pathways"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/build-right-2x3.png"
                alt="2:3 portrait placeholder: flow, loops, unification with grounded material palette"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
          </div>
          <ul className={styles.bulletList}>
            <li>A unified system, not a pile of deliverables</li>
            <li>Decisions embedded into structure, UI, and workflow</li>
            <li>Automation where it matters, not where it’s cute</li>
            <li>A build that scales cleanly, without “rewrite season”</li>
            <li>Output that reads premium because it is</li>
          </ul>
          <div className={styles.requirementsRow}>
            <span className={styles.groupLabel}>Best when</span>
            <span className={styles.requirementsText}>
              You want the whole machine built, not just a nicer dashboard.
            </span>
          </div>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Start a system build
            </Link>
            <Link href="#start" className={styles.btnSecondary}>
              Talk scope first
            </Link>
          </div>
          <p className={styles.microLine}>This is the flagship lane.</p>
        </section>

        <section id="capabilities" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>Capabilities</p>
          <h2 className={styles.sectionTitle}>What gets built</h2>
          <p className={styles.sectionSubhead}>
            A compact map of what Synerva can ship, end-to-end.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/capabilities-3x2.png"
              alt="3:2 landscape placeholder: overview map, blueprint grid, modular system diagram aesthetic"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <div className={styles.microPanelGrid}>
            <article className={styles.microPanel}>
              <h3 className={styles.microPanelTitle}>Strategy + Positioning</h3>
              <ul className={styles.microPanelList}>
                <li>Positioning that’s defensible, not poetic</li>
                <li>Offer architecture and pricing logic</li>
                <li>Decision frameworks that reduce noise</li>
              </ul>
            </article>
            <article className={styles.microPanel}>
              <h3 className={styles.microPanelTitle}>Brand + Identity Systems</h3>
              <ul className={styles.microPanelList}>
                <li>Visual system rules (type, layout, hierarchy, usage)</li>
                <li>Voice + messaging system (what to say, how to say it)</li>
                <li>Templates that keep quality consistent</li>
              </ul>
            </article>
            <article className={styles.microPanel}>
              <h3 className={styles.microPanelTitle}>Website + Product UI</h3>
              <ul className={styles.microPanelList}>
                <li>Mobile-first pages that convert cleanly</li>
                <li>UI systems that feel engineered, not decorated</li>
                <li>Information architecture that reduces friction</li>
              </ul>
            </article>
            <article className={styles.microPanel}>
              <h3 className={styles.microPanelTitle}>Automation + AI Tooling</h3>
              <ul className={styles.microPanelList}>
                <li>Workflow automation that saves real time</li>
                <li>Internal tools that reduce operational drag</li>
                <li>AI integration where it increases leverage and clarity</li>
              </ul>
            </article>
            <article className={styles.microPanel}>
              <h3 className={styles.microPanelTitle}>Content + Messaging Systems</h3>
              <ul className={styles.microPanelList}>
                <li>Landing pages, funnels, and conversion narratives</li>
                <li>Editorial systems that stay on-voice</li>
                <li>Content that supports the machine (not vanity posts)</li>
              </ul>
            </article>
          </div>
          <div className={styles.ctaStack}>
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
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
        >
          <p className={styles.eyebrow}>Standards</p>
          <h2 className={styles.sectionTitle}>What you’re actually buying</h2>
          <p className={styles.sectionSubhead}>
            Clarity, compounding systems, and work that holds up.
          </p>
          <div className={styles.portraitPair}>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/standards-left-2x3.png"
                alt="2:3 portrait placeholder: clean craft, material authority"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
            <div className={`${styles.imageFrame} ${styles.imagePortrait}`}>
              <Image
                src="/placeholders/offerings/standards-right-2x3.png"
                alt="2:3 portrait placeholder: calm output, resolved design"
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className={styles.imageFill}
              />
            </div>
          </div>
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
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Start here
            </Link>
            <Link href="#how-it-works" className={styles.btnSecondary}>
              How it works
            </Link>
          </div>
          <p className={styles.microLine}>This is taste, translated into structure.</p>
        </section>

        <section
          id="how-it-works"
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
        >
          <p className={styles.eyebrow}>Process</p>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionSubhead}>
            A simple path from signal to shipped system.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/process-3x2.png"
              alt="3:2 landscape placeholder: sequence, flow, steps, not cheesy icons"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <div className={styles.stepStack}>
            <article className={styles.stepCard}>
              <span className={styles.stepNumber}>Step 1</span>
              <div>
                <h3 className={styles.stepTitle}>Intake</h3>
                <p className={styles.stepBody}>
                  You tell me what you’re building and what’s not working.
                </p>
              </div>
            </article>
            <article className={styles.stepCard}>
              <span className={styles.stepNumber}>Step 2</span>
              <div>
                <h3 className={styles.stepTitle}>Scope + constraints</h3>
                <p className={styles.stepBody}>
                  We define the real problem, the boundaries, and the win
                  condition.
                </p>
              </div>
            </article>
            <article className={styles.stepCard}>
              <span className={styles.stepNumber}>Step 3</span>
              <div>
                <h3 className={styles.stepTitle}>Build sprint(s)</h3>
                <p className={styles.stepBody}>
                  We execute in tight loops: decisions → build → proof.
                </p>
              </div>
            </article>
            <article className={styles.stepCard}>
              <span className={styles.stepNumber}>Step 4</span>
              <div>
                <h3 className={styles.stepTitle}>Review + harden</h3>
                <p className={styles.stepBody}>
                  We refine, stress-test, and lock standards into the output.
                </p>
              </div>
            </article>
            <article className={styles.stepCard}>
              <span className={styles.stepNumber}>Step 5</span>
              <div>
                <h3 className={styles.stepTitle}>Launch + handoff</h3>
                <p className={styles.stepBody}>
                  You get clean deliverables, documentation, and next actions.
                </p>
              </div>
            </article>
          </div>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Start intake
            </Link>
            <Link href="#faq" className={styles.btnSecondary}>
              Read FAQs
            </Link>
          </div>
          <p className={styles.microLine}>No theater. Just build.</p>
        </section>

        <section id="proof" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>Credibility</p>
          <h2 className={styles.sectionTitle}>
            Signals you’re in the right place
          </h2>
          <p className={styles.sectionSubhead}>
            What working together feels like in practice.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/proof-3x2.png"
              alt="3:2 landscape placeholder: gallery-grade environment, high-end craft"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <ul className={styles.bulletList}>
            <li>You get crisp options, not vague advice</li>
            <li>You get constraints, not endless brainstorms</li>
            <li>You get work that integrates across the stack</li>
            <li>You get momentum that doesn’t evaporate</li>
            <li>You don’t get bloat, filler, or performative process</li>
            <li>You don’t get “pretty” that breaks under load</li>
          </ul>
          <p className={styles.microLine}>
            If you want “fine”, hire literally anyone else.
          </p>
          <div className={styles.ctaStack}>
            <Link href="#start" className={styles.btnPrimary}>
              Start here
            </Link>
            <Link href="#start" className={styles.btnSecondary}>
              Email instead
            </Link>
          </div>
        </section>

        <section id="faq" className={styles.sectionPanel}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 className={styles.sectionTitle}>Quick answers</h2>
          <p className={styles.sectionSubhead}>
            The stuff you’d ask before you click.
          </p>
          <div className={styles.faqStack}>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Which engagement mode should I pick?
              </h3>
              <p className={styles.faqAnswer}>
                If you need fast clarity or a high-leverage push, start with
                Operator Hourly. If you want a defined outcome, choose Flat-Rate.
                If you’re building the whole system, choose Build With Synerva.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you do retainers?</h3>
              <p className={styles.faqAnswer}>
                Not by default. If it makes sense after we’ve shipped real work,
                we can talk.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What if my scope is messy?</h3>
              <p className={styles.faqAnswer}>
                That’s normal. We’ll convert it into constraints, phases, and a
                buildable sequence.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Can you work with my existing brand/site?
              </h3>
              <p className={styles.faqAnswer}>
                Yes. We’ll keep what holds up, replace what doesn’t, and unify
                the system.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How fast can we start?</h3>
              <p className={styles.faqAnswer}>
                Typically within days, depending on bandwidth and scope.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What do you need from me?</h3>
              <p className={styles.faqAnswer}>
                A clear goal, access to the current assets, and decision velocity
                when questions show up.
              </p>
            </article>
          </div>
          <div className={styles.ctaStack}>
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
          className={`${styles.sectionPanel} ${styles.sectionPanelFilled}`}
        >
          <p className={styles.eyebrow}>Start Here</p>
          <h2 className={styles.sectionTitle}>Ready when you are</h2>
          <p className={styles.sectionSubhead}>
            One short intake, then we pick the fastest path to a real outcome.
          </p>
          <div className={`${styles.imageFrame} ${styles.imageLandscape}`}>
            <Image
              src="/placeholders/offerings/start-3x2.png"
              alt="3:2 landscape placeholder: calm destination, resolved system, clarity"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.imageFill}
            />
          </div>
          <ul className={styles.bulletList}>
            <li>Tell me what you’re building and what’s blocked</li>
            <li>I reply with next steps and the best engagement fit</li>
            <li>We move into a build loop with clear constraints</li>
          </ul>
          <div className={styles.ctaStack}>
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
        </section>
      </Mobile1Shell>
    </main>
  );
}
