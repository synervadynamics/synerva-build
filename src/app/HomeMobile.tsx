import Image from "next/image";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import homeStyles from "@/app/homepage/homepage.module.css";
import CtaPill from "@/components/CtaPill";

export default function HomeMobile() {
  return (
    <main className={`sd-home ${homeStyles.sdHome} text-white ${styles.homeMobileTheme}`}>
      <Mobile1Shell backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png">
        <section
          data-accent="blue"
          className="mt-6 flex flex-col gap-4 px-5 py-5"
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center text-white/70"
            >
              <span className="flex flex-col gap-1">
                <span className="h-px w-5 bg-white/70" />
                <span className="h-px w-4 bg-white/70" />
                <span className="h-px w-5 bg-white/70" />
              </span>
            </button>
            <span className="role-body text-center text-[0.7rem] uppercase tracking-[0.45em] text-white/70">
              Synerva Dynamics
            </span>
            <span aria-hidden className="h-9 w-9" />
          </div>
          <div
            className={`relative aspect-[1640/981] w-full overflow-hidden rounded-[14px] bg-white/5 max-h-[34vh] sm:max-h-none ${styles.imageFrame}`}
          >
            <Image
              src="/mobile-images/homepage/hero.png"
              alt="Synerva Dynamics hero image"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="role-body text-[0.7rem] uppercase tracking-[0.32em]">
              SYNERVA DYNAMICS
            </p>
            <h1 className="role-authority text-[2rem] font-light leading-[1.12] text-white">
              <span className="block">Make It Clear.</span>
              <span className="block">Then Make It Real.</span>
            </h1>
            <p className="role-orientation text-[0.96rem] leading-[1.5] text-white/70">
              Clarity, structure, writing, design, web, and digital build are
              carried through one continuous process, so ideas can move from
              first signal to finished asset without losing shape, tone, or
              intent along the way.
            </p>
          </div>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-3 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            THE PROBLEM
          </p>
          <h2 className="role-authority text-[1.45rem] font-light leading-snug text-white">
            Drift Kills Momentum
          </h2>
          <div className="flex flex-col gap-2 text-[0.93rem] leading-[1.5] text-white/70">
            <p className="role-body">The signal stays vague for too long.</p>
            <p className="role-body">
              Structure never fully locks before execution begins.
            </p>
            <p className="role-body">
              Progress gets recreated instead of carried forward.
            </p>
          </div>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-3 px-[18px] py-[18px] ${homeStyles.analytical} ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            HOW WORK MOVES
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            Working Principles
          </h2>
          <ul
            className={`list-disc pl-4 text-[0.88rem] leading-[1.45] text-white/70 ${styles.guardrailList}`}
          >
            <li className="role-body">
              Clarify the real objective before effort starts multiplying in the
              wrong direction.
            </li>
            <li className="role-body">
              Give the work a structure strong enough to hold judgment, tone,
              and intent under pressure.
            </li>
            <li className="role-body">
              Build in a way that preserves momentum instead of recreating it
              every time conditions change.
            </li>
          </ul>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 px-5 py-5 ${homeStyles.analytical} ${styles.systemsPanel} ${styles.panelTransparent} ${styles.sectionOutline}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            SYSTEMS THAT HOLD
          </p>
          <h2 className="role-authority text-[1.45rem] font-semibold leading-snug text-white">
            Designed to Survive Reality
          </h2>
          <p className="role-orientation text-[0.92rem] leading-[1.45] text-white/70">
            Synerva builds structures that reduce drag, hold under pressure, and
            keep decisions coherent as the work moves from clarity into
            execution.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className={styles.systemsImage}>
                <Image
                  src="/mobile-images/homepage/systems-that-hold-upper.PNG"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <p className="role-body text-[0.9rem] leading-[1.35] text-white/80">
                Clear interfaces.
                <br />
                Explicit boundaries.
                <br />
                Standards carried by the system itself.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className={styles.systemsImage} aria-hidden>
                <Image
                  src="/mobile-images/homepage/systems-that-hold-2.PNG"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <p className="role-body text-[0.9rem] leading-[1.35] text-white/80">
                Progress under pressure.
                <br />
                Structure that keeps holding.
                <br />
                Judgment that survives real conditions.
              </p>
            </div>
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-4 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.offeringsPanel} ${styles.sectionOutline} ${styles.sectionOutlineInteractive}`}
          style={{ background: "var(--fill-strong)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            HOW TO ENGAGE
          </p>
          <div className={styles.offeringsImage} aria-hidden>
            <Image
              src="/mobile-images/homepage/offerings-2.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            Offerings
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="role-body text-[0.96rem] font-medium text-white">
                Operator Sessions
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Audits, positioning, decision support, and fast progress when
                the highest-value deliverable is applied judgment.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="role-body text-[0.96rem] font-medium text-white">
                Focused Projects
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Defined deliverables, explicit scope, and a finish line
                established before work begins.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="role-body text-[0.96rem] font-medium text-white">
                Build With Synerva
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                For work that needs to be clarified, structured, written,
                designed, and built as one release.
              </p>
            </div>
          </div>
          <CtaPill href="/offerings" variant="primary">
            Explore Offerings →
          </CtaPill>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 px-[18px] py-[18px] ${styles.panelTransparent} ${styles.deliveredPanel} ${styles.sectionOutline}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            WHAT YOU GET
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            What’s Delivered
          </h2>
          <ul className="list-disc pl-4 text-[0.9rem] leading-[1.45] text-white/70">
            <li className="role-body">
              Clarity that makes the real objective usable
            </li>
            <li className="role-body">
              Structure that keeps language, systems, pages, and decisions
              aligned
            </li>
            <li className="role-body">
              Build that leaves behind assets designed to keep holding
            </li>
            <li className="role-body">Operating judgment without avoidable drag</li>
          </ul>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-4 px-5 py-5 ${styles.panelTransparent} ${styles.panelFilled} ${styles.publicationsPanel} ${styles.sectionOutline}`}
          style={{ background: "var(--fill-weak)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            INTERNAL ENGINES
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            Systems
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            A small set of internal systems preserves judgment, reduces
            friction, and helps the work stay coherent as complexity, scope, and
            time increase.
          </p>
          <div className={styles.publicationCovers}>
            <div className="flex flex-col gap-3">
              <div
                className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                aria-hidden
              >
                <Image
                  src="/mobile-images/homepage/verisense_edit_masterr4%20copy.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 180px"
                  className="object-cover"
                />
              </div>
              <p className="role-body text-[1rem] font-medium text-white">
                Verisense
              </p>
              <p className="role-body text-[0.85rem] leading-[1.45] text-white/70">
                Signal clarity at the point of decision.
              </p>
              <CtaPill
                href="https://synervadynamics.com/verisense"
                variant="secondary"
              >
                View Verisense →
              </CtaPill>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                aria-hidden
              >
                <Image
                  src="/mobile-images/homepage/lucentra-v3%20copy.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 180px"
                  className="object-cover"
                />
              </div>
              <p className="role-body text-[1rem] font-medium text-white">
                Lucentra
              </p>
              <p className="role-body text-[0.85rem] leading-[1.45] text-white/70">
                Structural memory that preserves intent.
              </p>
              <CtaPill
                href="#"
                variant="secondary"
                className="pointer-events-none opacity-60"
                aria-disabled
                tabIndex={-1}
              >
                Page Coming Soon
              </CtaPill>
            </div>
          </div>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 px-5 py-5 ${styles.panelTransparent} ${styles.publicationsPanel} ${styles.sectionOutline}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            PUBLICATIONS & VISUAL SYSTEMS
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            Written Under Real Conditions
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            Writing and visual systems shaped to hold when conditions do not.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                Writing
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Books and essays built from pressure, observation, and
                real-world constraint.
              </p>
              <div className={styles.publicationCovers} aria-hidden>
                <div className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}>
                  <Image
                    src="/mobile-images/homepage/the-rockstar-server-playbook-2.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 180px"
                    className="object-cover"
                  />
                </div>
                <div className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}>
                  <Image
                    src="/mobile-images/homepage/TRD%20Cover%20Page%20(1).png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 180px"
                    className="object-cover"
                  />
                </div>
              </div>
              <CtaPill
                href="#"
                variant="secondary"
                className="pointer-events-none opacity-60"
                aria-disabled
                tabIndex={-1}
              >
                Page Coming Soon
              </CtaPill>
            </div>
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                Synerva Dimensions Artwork
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Visual research where structure, tension, and coherence are
                tested in public.
              </p>
              <div className={styles.publicationCovers}>
                <div className="flex flex-col gap-2">
                  <div
                    className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                    aria-hidden
                  >
                    <Image
                      src="/mobile-images/homepage/the-fractured-self.webp"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <CtaPill href="/dimensions/quiet-divine" variant="secondary">
                    Quiet Divine →
                  </CtaPill>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                    aria-hidden
                  >
                    <Image
                      src="/mobile-images/homepage/surface-tension.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <CtaPill href="/dimensions/surface-tension" variant="secondary">
                    Surface Tension →
                  </CtaPill>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className={`${styles.publicationCover} ${homeStyles.portraitImageFrame}`}
                    aria-hidden
                  >
                    <Image
                      src="/inner-climate/7.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <CtaPill href="/dimensions/inner-climate" variant="secondary">
                    Inner Climate →
                  </CtaPill>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-3 px-[22px] py-[22px] text-center ${styles.panelTransparent} ${styles.authorityPanel} ${styles.sectionOutline}`}
        >
          <p className="role-authority text-[1.4rem] font-semibold leading-snug text-white">
            Clarity compounds. Every decision either sharpens the signal or feeds
            the noise.
          </p>
          <p className="role-body text-[0.9rem] leading-[1.5] text-white/70">
            Most work confuses motion with momentum. Synerva measures movement
            by lift alone, then uses structure to make the right shift easier to
            repeat.
          </p>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 px-[22px] py-[22px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.finalCtaPanel} ${styles.sectionOutline}`}
          style={{ backgroundColor: "rgba(58, 122, 254, 0.06)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            NEXT STEP
          </p>
          <div className={styles.finalCtaImage} aria-hidden>
            <Image
              src="/mobile-images/homepage/next-step.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <h2 className="role-authority text-[1.35rem] font-medium">
            Start With a 30-Minute Plan
          </h2>
          <p className="role-body text-white/70 text-[0.95rem] leading-relaxed">
            A 30-minute session to clarify the real objective, name the
            constraints, and choose the cleanest path into the work.
          </p>
        </section>
      </Mobile1Shell>
    </main>
  );
}
