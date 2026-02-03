import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import homeStyles from "@/app/homepage/homepage.module.css";

export default function HomeMobile() {
  return (
    <main className={`sd-home ${homeStyles.sdHome} text-white`}>
      <Mobile1Shell backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2012_00_43%20AM.png">
        <section
          className={`mt-6 flex flex-col gap-4 rounded-[16px] border bg-white/[0.04] px-5 py-5 ${styles.panelTransparent}`}
          style={{ borderColor: "rgba(43, 184, 198, 0.55)" }}
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
            <span className="text-center text-[0.7rem] uppercase tracking-[0.45em] text-white/70">
              Synerva Dynamics
            </span>
            <span aria-hidden className="h-9 w-9" />
          </div>
          <div
            aria-hidden
            className="relative aspect-video w-full overflow-hidden rounded-[14px] border border-white/10 bg-white/5 max-h-[34vh] sm:max-h-none"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[rgba(160,190,214,0.7)]">
              SYNERVA DYNAMICS
            </p>
            <h1 className="text-[2rem] font-light leading-[1.12] text-white">
              <span className="block">The Power of Many,</span>
              <span className="block">Engineered for One</span>
            </h1>
            <p className="text-[0.96rem] leading-[1.5] text-white/70">
              Senior-level strategy, systems, and execution—delivered as one
              coherent operating loop.
            </p>
            <Link href="/contact" className={styles.synervaCta}>
              START WITH A 30-MINUTE PLAN →
            </Link>
          </div>
        </section>

        <section
          className="flex flex-col gap-3 rounded-[16px] border px-[18px] py-[18px] -mt-8"
          style={{ borderColor: "rgba(30, 140, 190, 0.65)" }}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            THE PROBLEM
          </p>
          <h2 className="text-[1.45rem] font-light leading-snug text-white">
            Fragmentation Kills Velocity
          </h2>
          <div className="flex flex-col gap-2 text-[0.93rem] leading-[1.5] text-white/70">
            <p>Decisions stall as work crosses too many systems.</p>
            <p>Judgment gets replaced by interfaces and rituals.</p>
            <p>Momentum resets instead of compounding.</p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-3 rounded-[16px] border px-[18px] py-[18px] ${homeStyles.analytical}`}
          style={{
            borderColor: "rgba(120, 210, 240, 0.4)",
            backgroundColor: "rgba(6, 12, 18, 0.35)",
          }}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            HOW WORK MOVES
          </p>
          <h2 className="text-[1.3rem] font-light leading-snug text-white">
            System Guardrails
          </h2>
          <ul
            className={`list-disc pl-4 text-[0.88rem] leading-[1.45] text-white/70 ${styles.guardrailList}`}
          >
            <li>Replace coordination overhead with clear decisions.</li>
            <li>Convert repetition into automation without losing intent.</li>
            <li>Build delivery so progress compounds instead of resetting.</li>
          </ul>
        </section>

        <section
          className={`flex flex-col gap-4 rounded-[18px] border px-5 py-5 ${homeStyles.analytical} ${styles.systemsPanel} mt-6`}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            SYSTEMS THAT HOLD
          </p>
          <h2 className="text-[1.45rem] font-semibold leading-snug text-white">
            Designed to Survive Reality
          </h2>
          <p className="text-[0.92rem] leading-[1.45] text-white/70">
            Synerva builds operating structures that enforce clarity, persist
            under pressure, and compound decision quality over time.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div aria-hidden className={styles.systemsImage} />
              <p className="text-[0.9rem] leading-[1.35] text-white/80">
                Shared interfaces.
                <br />
                Explicit constraints.
                <br />
                Standards enforced by the system itself.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div aria-hidden className={styles.systemsImage} />
              <p className="text-[0.9rem] leading-[1.35] text-white/80">
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
          className={`flex flex-col gap-4 rounded-[16px] border px-[18px] py-[18px] ${styles.panelTransparent} ${styles.offeringsPanel} mt-6`}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            HOW TO ENGAGE
          </p>
          <div aria-hidden className={styles.offeringsImage} />
          <h2 className="text-[1.35rem] font-light leading-snug text-white">
            Offerings
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-[0.96rem] font-medium text-white">
                Operator Hourly
              </p>
              <p className="text-[0.9rem] leading-[1.45] text-white/70">
                Audits, positioning, and fast decisions where judgment is the
                product.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[0.96rem] font-medium text-white">
                Flat-Rate Projects
              </p>
              <p className="text-[0.9rem] leading-[1.45] text-white/70">
                Defined outcomes with a clean finish line and no drift.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[0.96rem] font-medium text-white">
                Build With Synerva
              </p>
              <p className="text-[0.9rem] leading-[1.45] text-white/70">
                When strategy, writing, design, systems, and automation must ship
                as one release.
              </p>
            </div>
          </div>
          <Link href="/offerings" className={styles.offeringsCta}>
            View Offerings →
          </Link>
        </section>

        <section
          className={`flex flex-col gap-4 rounded-[16px] border px-[18px] py-[18px] ${styles.panelTransparent} ${styles.deliveredPanel}`}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            WHAT YOU GET
          </p>
          <h2 className="text-[1.3rem] font-light leading-snug text-white">
            What’s Delivered
          </h2>
          <ul className="list-disc pl-4 text-[0.9rem] leading-[1.45] text-white/70">
            <li>Strategic direction before execution begins</li>
            <li>
              Integrated execution across brand, content, web, and automation
            </li>
            <li>Durable assets you keep using, not decks you outgrow</li>
            <li>Senior operating judgment without the usual overhead</li>
          </ul>
        </section>

        <section className={`flex flex-col gap-4 ${homeStyles.analytical} mt-8`}>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            INTERNAL ENGINES
          </p>
          <div className={styles.landscapeTriple} aria-hidden>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/lucentra.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/verisense.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/mobile-images/homepage/synerva-os.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 140px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className={`flex flex-col gap-4 rounded-[18px] border px-5 py-5 ${styles.panelTransparent} ${styles.publicationsPanel} mt-6`}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            PUBLICATIONS & VISUAL SYSTEMS
          </p>
          <h2 className="text-[1.35rem] font-light leading-snug text-white">
            Work That Holds Under Pressure
          </h2>
          <p className="text-[0.9rem] leading-[1.45] text-white/70">
            Long-form thinking and visual systems forged under real conditions and
            built to endure complexity.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-[1rem] font-medium text-white">Writing</p>
              <p className="text-[0.9rem] leading-[1.45] text-white/70">
                Books and essays shaped by pressure, not theory.
              </p>
              <div className={styles.publicationCovers} aria-hidden>
                <div className={styles.publicationCover} />
                <div className={styles.publicationCover} />
              </div>
              <Link href="/#publications" className={styles.secondaryCta}>
                View Writing →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[1rem] font-medium text-white">
                Synerva Dimensions
              </p>
              <p className="text-[0.9rem] leading-[1.45] text-white/70">
                Visual research where structure, attention, and coherence are
                tested in public.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <div className={styles.publicationArtwork} aria-hidden />
                  <Link href="/dimensions/quiet-divine" className={styles.secondaryCta}>
                    Quiet Divine →
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <div className={styles.publicationArtwork} aria-hidden />
                  <Link
                    href="/dimensions/surface-tension"
                    className={styles.secondaryCta}
                  >
                    Surface Tension →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`flex flex-col gap-3 rounded-[20px] border px-[22px] py-[22px] text-center ${styles.panelTransparent} ${styles.authorityPanel} mt-6`}
        >
          <p className="text-[1.4rem] font-semibold leading-snug text-white">
            Clarity compounds. Every decision either sharpens the signal or feeds
            the noise.
          </p>
          <p className="text-[0.9rem] leading-[1.5] text-white/70">
            Synerva measures movement by lift alone. Fewer pages. Faster load
            times. Sharper story. Outcomes verified, never assumed.
          </p>
        </section>

        <section
          className={`flex flex-col gap-4 rounded-[20px] border px-[22px] py-[22px] ${styles.panelTransparent} ${styles.finalCtaPanel} mt-6`}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
            NEXT STEP
          </p>
          <div aria-hidden className={styles.finalCtaImage} />
          <h2 className="text-[1.45rem] font-light leading-snug text-white">
            Start With a Plan
          </h2>
          <p className="text-[0.92rem] leading-[1.5] text-white/70">
            A 30-minute session to clarify direction, pressure-test assumptions,
            and choose the cleanest path forward.
          </p>
          <Link href="/#preview-access" className={styles.synervaCta}>
            Start with a 30-minute plan →
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
