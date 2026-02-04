import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import homeStyles from "@/app/homepage/homepage.module.css";

export default function HomeMobile() {
  return (
    <main className={`sd-home ${homeStyles.sdHome} text-white ${styles.homeMobileTheme}`}>
      <Mobile1Shell backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png">
        <section
          data-accent="blue"
          className={`mt-6 flex flex-col gap-4 rounded-[16px] border px-5 py-5 ${styles.panelTransparent} ${styles.panelFilled}`}
          style={{ borderColor: "var(--ol-primary)", background: "var(--fill-strong)" }}
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
            className="relative aspect-[1640/981] w-full overflow-hidden rounded-[14px] border border-white/10 bg-white/5 max-h-[34vh] sm:max-h-none"
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
              <span className="block">The Power of Many,</span>
              <span className="block">Engineered for One</span>
            </h1>
            <p className="role-orientation text-[0.96rem] leading-[1.5] text-white/70">
              Senior-level strategy, systems, and execution—delivered as one
              coherent operating loop.
            </p>
          </div>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-3 rounded-[16px] border px-[18px] py-[18px] -mt-8 ${styles.panelTransparent}`}
          style={{ borderColor: "var(--ol-primary)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            THE PROBLEM
          </p>
          <h2 className="role-authority text-[1.45rem] font-light leading-snug text-white">
            Fragmentation Kills Velocity
          </h2>
          <div className="flex flex-col gap-2 text-[0.93rem] leading-[1.5] text-white/70">
            <p className="role-body">Decisions stall as work crosses too many systems.</p>
            <p className="role-body">Judgment gets replaced by interfaces and rituals.</p>
            <p className="role-body">Momentum resets instead of compounding.</p>
          </div>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-3 rounded-[16px] border px-[18px] py-[18px] ${homeStyles.analytical} ${styles.panelTransparent}`}
          style={{
            borderColor: "var(--ol-primary)",
          }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            HOW WORK MOVES
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            System Guardrails
          </h2>
          <ul
            className={`list-disc pl-4 text-[0.88rem] leading-[1.45] text-white/70 ${styles.guardrailList}`}
          >
            <li className="role-body">
              Replace coordination overhead with clear decisions.
            </li>
            <li className="role-body">
              Convert repetition into automation without losing intent.
            </li>
            <li className="role-body">
              Build delivery so progress compounds instead of resetting.
            </li>
          </ul>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 rounded-[18px] border px-5 py-5 ${homeStyles.analytical} ${styles.systemsPanel} ${styles.panelTransparent} ${styles.panelFilled} mt-6`}
          style={{ background: "var(--fill-weak)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            SYSTEMS THAT HOLD
          </p>
          <h2 className="role-authority text-[1.45rem] font-semibold leading-snug text-white">
            Designed to Survive Reality
          </h2>
          <p className="role-orientation text-[0.92rem] leading-[1.45] text-white/70">
            Synerva builds operating structures that enforce clarity, persist
            under pressure, and compound decision quality over time.
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
                Shared interfaces.
                <br />
                Explicit constraints.
                <br />
                Standards enforced by the system itself.
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
                Clarity under load.
                <br />
                Momentum without drift.
                <br />
                Judgment that survives contact with reality.
              </p>
            </div>
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-4 rounded-[16px] border px-[18px] py-[18px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.offeringsPanel} mt-6`}
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
                Operator Hourly
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Audits, positioning, and fast decisions where judgment is the
                product.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="role-body text-[0.96rem] font-medium text-white">
                Flat-Rate Projects
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Defined outcomes with a clean finish line and no drift.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="role-body text-[0.96rem] font-medium text-white">
                Build With Synerva
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                When strategy, writing, design, systems, and automation must ship
                as one release.
              </p>
            </div>
          </div>
          <Link href="/offerings" className="role-action">
            Explore Offerings →
          </Link>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 rounded-[16px] border px-[18px] py-[18px] ${styles.panelTransparent} ${styles.deliveredPanel}`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            WHAT YOU GET
          </p>
          <h2 className="role-authority text-[1.3rem] font-light leading-snug text-white">
            What’s Delivered
          </h2>
          <ul className="list-disc pl-4 text-[0.9rem] leading-[1.45] text-white/70">
            <li className="role-body">Strategic direction before execution begins</li>
            <li className="role-body">
              Integrated execution across brand, content, web, and automation
            </li>
            <li className="role-body">
              Durable assets you keep using, not decks you outgrow
            </li>
            <li className="role-body">
              Senior operating judgment without the usual overhead
            </li>
          </ul>
        </section>

        <section
          data-accent="seagreen"
          className={`flex flex-col gap-4 rounded-[18px] border px-5 py-5 ${styles.panelTransparent} ${styles.panelFilled} ${styles.publicationsPanel} mt-6`}
          style={{ background: "var(--fill-weak)" }}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            INTERNAL ENGINES
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            Systems
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            A small set of internal systems that preserve judgment, reduce noise,
            and keep decisions coherent as complexity scales.
          </p>
          <div className={styles.publicationCovers}>
            <div className="flex flex-col gap-3">
              <div className={styles.publicationCover} aria-hidden>
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
              <Link
                href="https://synervadynamics.com/verisense"
                className="role-body inline-cta"
              >
                View Verisense →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className={styles.publicationCover} aria-hidden>
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
              <span
                className="role-body inline-cta pointer-events-none opacity-60"
                aria-disabled
              >
                Page Coming Soon
              </span>
            </div>
          </div>
        </section>

        <section
          data-accent="mint"
          className={`flex flex-col gap-4 rounded-[18px] border px-5 py-5 ${styles.panelTransparent} ${styles.publicationsPanel} mt-6`}
        >
          <p className="role-body text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            PUBLICATIONS & VISUAL SYSTEMS
          </p>
          <h2 className="role-authority text-[1.35rem] font-light leading-snug text-white">
            Work That Holds Under Pressure
          </h2>
          <p className="role-orientation text-[0.9rem] leading-[1.45] text-white/70">
            Long-form thinking and visual systems forged under real conditions and
            built to endure complexity.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                Writing
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Books and essays shaped by pressure, not theory.
              </p>
              <div className={styles.publicationCovers} aria-hidden>
                <div className={styles.publicationCover}>
                  <Image
                    src="/mobile-images/homepage/the-rockstar-server-playbook-2.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 180px"
                    className="object-cover"
                  />
                </div>
                <div className={styles.publicationCover}>
                  <Image
                    src="/mobile-images/homepage/TRD%20Cover%20Page%20(1).png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 180px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                className="role-body inline-cta pointer-events-none opacity-60"
                aria-disabled
              >
                Page Coming Soon
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="role-body text-[1rem] font-medium text-white">
                Synerva Dimensions Artwork
              </p>
              <p className="role-body text-[0.9rem] leading-[1.45] text-white/70">
                Visual research where structure, attention, and coherence are
                tested in public.
              </p>
              <div className={styles.publicationCovers}>
                <div className="flex flex-col gap-2">
                  <div className={styles.publicationCover} aria-hidden>
                    <Image
                      src="/mobile-images/homepage/the-fractured-self.webp"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <Link href="/dimensions/quiet-divine" className="role-body inline-cta">
                    Quiet Divine →
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <div className={styles.publicationCover} aria-hidden>
                    <Image
                      src="/mobile-images/homepage/surface-tension.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 50vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href="/dimensions/surface-tension"
                    className="role-body inline-cta"
                  >
                    Surface Tension →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-accent="blue"
          className={`flex flex-col gap-3 rounded-[20px] border px-[22px] py-[22px] text-center ${styles.panelTransparent} ${styles.authorityPanel} mt-6`}
        >
          <p className="role-authority text-[1.4rem] font-semibold leading-snug text-white">
            Clarity compounds. Every decision either sharpens the signal or feeds
            the noise.
          </p>
          <p className="role-body text-[0.9rem] leading-[1.5] text-white/70">
            Synerva measures movement by lift alone. Fewer pages. Faster load
            times. Sharper story. Outcomes verified, never assumed.
          </p>
        </section>

        <section
          data-accent="turquoise"
          className={`flex flex-col gap-4 rounded-[20px] border px-[22px] py-[22px] ${styles.panelTransparent} ${styles.panelFilled} ${styles.finalCtaPanel} mt-6`}
          style={{ background: "var(--fill-strong)" }}
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
            Start With a Plan
          </h2>
          <p className="role-body text-white/70 text-[0.95rem] leading-relaxed">
            A 30-minute session to clarify direction, pressure-test assumptions,
            and choose the cleanest path forward.
          </p>
        </section>
      </Mobile1Shell>
    </main>
  );
}
