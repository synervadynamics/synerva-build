import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import pageStyles from "./merch.module.css";

export default function MerchMobile() {
  return (
    <main className={pageStyles.merchPage}>
      <Mobile1Shell
        showBackButton
        backgroundImageUrl="/subpage-backgrounds/merch.png"
      >
        <section
          className={`${pageStyles.merchHero} mt-6 flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-primary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/partial-exception.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Merch
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Wear the Standard. Not the Noise.
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              These are not promotional items.
              <br />
              They are physical artifacts derived from the same principles as
              the work: restraint, structure, and durability under real use.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              What you see here is a preview of the current design slate.
            </p>
          </div>
        </section>

        <section
          className={`${pageStyles.merchOps} flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/thermal-drift-v2.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Why This Exists
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              Physical Continuity
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              Synerva’s work is built to survive pressure, repetition, and
              contact with reality.
              <br />
              The merch follows the same logic, translated into physical form.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              Nothing decorative. Nothing performative.
              <br />
              Just clear signals, designed to hold.
            </p>
          </div>
        </section>

        <section
          className={`${pageStyles.merchCategories} flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/merch-hero.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Current Collections
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              Preview Slate
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              <span className="text-[color:var(--ink-structural)]">
                Quiet Divine Editions
              </span>
              <br />
              Portraiture-as-infrastructure. Visual studies of inner
              architecture, composure, and earned coherence.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              <span className="text-[color:var(--ink-structural)]">
                Synerva Essentials
              </span>
              <br />
              Minimal marks and engineered layouts. Pieces that feel more like
              schematics than slogans.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              <span className="text-[color:var(--ink-structural)]">
                Numbered Issues
              </span>
              <br />
              Small-batch releases with a clear identifier and a defined end.
              When it’s done, it’s done.
            </p>
          </div>
        </section>

        <section
          className={`${pageStyles.merchNotice} flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/weightless-resolve.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Status
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              Preview Only
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-quiet)]">
              These images are mockups shown to communicate direction, scale,
              and placement.
              <br />
              Final materials, color calibration, and print specs will be locked
              before release.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-quiet)]">
              The first run will be limited and announced in advance.
            </p>
          </div>
        </section>

        <section
          className={`${pageStyles.merchOps} flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/there-all-along.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              How Drops Will Work
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              Clear Windows
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              Each release will have:
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              a defined start
              <br />
              a defined end
              <br />
              a clean archive afterward
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              No rolling availability. No artificial urgency.
            </p>
          </div>
        </section>

        <section
          className={`${pageStyles.merchSignup} flex flex-col gap-5 rounded-[2rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-5 py-6`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] max-h-[40vh] sm:max-h-none"
          >
            <Image
              src="/merch-v1/while-you-wait.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-[color:var(--ink-structural)]">
              Get the Drop Window
            </h2>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-analytical)]">
              One Message When It Matters
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              If you want first access when the store opens, join the drop list.
              <br />
              You’ll receive one notification when the release is live.
            </p>
            <p className="text-[1.05rem] leading-6 text-[color:var(--ink-primary)]">
              No drip campaigns. No noise.
            </p>
          </div>
          <Link
            href="/#preview-access"
            className={`${pageStyles.merchCta} inline-flex w-fit rounded-full border border-[color:var(--merch-cta-outline)] px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide transition hover:opacity-90`}
          >
            Join the Drop List
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
