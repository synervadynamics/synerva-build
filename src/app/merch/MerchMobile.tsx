import Image from "next/image";
import Link from "next/link";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";

export default function MerchMobile() {
  return (
    <main className="text-white">
      <Mobile1Shell showBackButton>
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
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
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Merch
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Wear the Standard. Not the Noise.
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These are not promotional items.
              <br />
              They are physical artifacts derived from the same principles as
              the work: restraint, structure, and durability under real use.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What you see here is a preview of the current design slate.
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
              src="/merch-v1/thermal-drift-v2.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Why This Exists
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Physical Continuity
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva’s work is built to survive pressure, repetition, and
              contact with reality.
              <br />
              The merch follows the same logic, translated into physical form.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Nothing decorative. Nothing performative.
              <br />
              Just clear signals, designed to hold.
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
              src="/merch-v1/merch-hero.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Current Collections
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Preview Slate
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Quiet Divine Editions</span>
              <br />
              Portraiture-as-infrastructure. Visual studies of inner
              architecture, composure, and earned coherence.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Synerva Essentials</span>
              <br />
              Minimal marks and engineered layouts. Pieces that feel more like
              schematics than slogans.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              <span className="text-white">Numbered Issues</span>
              <br />
              Small-batch releases with a clear identifier and a defined end.
              When it’s done, it’s done.
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
              src="/merch-v1/weightless-resolve.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Status
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Preview Only
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These images are mockups shown to communicate direction, scale,
              and placement.
              <br />
              Final materials, color calibration, and print specs will be locked
              before release.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The first run will be limited and announced in advance.
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
              src="/merch-v1/there-all-along.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              How Drops Will Work
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Clear Windows
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Each release will have:
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              a defined start
              <br />
              a defined end
              <br />
              a clean archive afterward
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              No rolling availability. No artificial urgency.
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
              src="/merch-v1/while-you-wait.PNG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Get the Drop Window
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              One Message When It Matters
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              If you want first access when the store opens, join the drop list.
              <br />
              You’ll receive one notification when the release is live.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              No drip campaigns. No noise.
            </p>
          </div>
          <Link
            href="/#preview-access"
            className="inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-black"
          >
            Join the Drop List
          </Link>
        </section>
      </Mobile1Shell>
    </main>
  );
}
