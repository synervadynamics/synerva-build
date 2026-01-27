import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";

export default function OfferingsMobile() {
  return (
    <main className="text-white">
      <Mobile1Shell
        showBackButton
        backgroundImageUrl="/subpage-backgrounds/offerings-v1a.jpg"
      >
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/offerings/hero.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Offerings
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Ways to Work With Synerva
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Different problems require different levels of intervention.
              <br />
              Each option exists to preserve judgment, reduce drag, and keep work
              moving without resets.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/offerings-subpage-jan-3/operator-hourly-v67.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Operator Hourly
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Judgment, When It Matters
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              For moments where momentum is blocked by uncertainty, not effort.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">Used for:</p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Audits, positioning, and fast diagnosis
              <br />
              Unblocking stalled decisions
              <br />
              Direction-setting under real constraints
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              This is not advisory theater.
              <br />
              You’re buying senior judgment, applied in real time.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/homepage-post-12-25-2025/hp-flat-rate-v2.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Flat-Rate Projects
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Defined Outcomes. Clean Finish.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              For work that needs to ship without drift.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">Best for:</p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Brand systems and positioning
              <br />
              Websites, writing, and core assets
              <br />
              Structural fixes where clarity must survive execution
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The scope is tight.
              <br />
              The outcome is explicit.
              <br />
              The work ends cleanly.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/homepage-post-12-25-2025/hp-build-with-synerva.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Build With Synerva
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              One System. One Release.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              For work that breaks when split across vendors.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Choose this when:
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Strategy, writing, design, and systems must move together
              <br />
              Context loss would be expensive
              <br />
              You need one operating loop from first decision to final ship
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              This is senior-level integration, end to end.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              What Gets Built
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Capabilities
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The work spans strategy, systems, and execution—but always ships as
              something real.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Brand &amp; Positioning</span>
              <br />
              Identity, naming, and messaging systems that hold under pressure.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Analytics &amp; Signals</span>
              <br />
              Behavioral and performance analysis used for decisions, not
              dashboards.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Content Production</span>
              <br />
              Short- and long-form writing, editorial systems, and full-book
              ghostwriting.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Design</span>
              <br />
              Graphic and visual systems built with structure, not decoration.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Web &amp; App Design</span>
              <br />
              Operating surfaces shaped around behavior, not features.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Automation &amp; Systems</span>
              <br />
              Internal workflows that reduce coordination drag without process
              theater.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/offerings/what-you're-buying.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              What You’re Buying
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Output, Not Access
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              You are not purchasing hours, tools, or frameworks.
              <br />
              You are engaging a system where decisions persist and execution
              compounds.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">What remains:</p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Clear direction you keep using
              <br />
              Assets that don’t decay after delivery
              <br />
              Momentum that survives contact with reality
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/mobile-images/homepage/next step.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Start Here
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Begin With a Plan
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              A short working session to clarify direction, pressure-test
              assumptions, and choose the cleanest path forward.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              No pitch. No commitment.
              <br />
              Just clarity.
            </p>
          </div>
          <Link
            href="/#preview-access"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            Start with a 30-Minute Plan
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
