import Image from "next/image";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import SurfaceTensionImageSystem from "@/app/mobile1/dimensions/surface-tension/SurfaceTensionImageSystem";

export default function SurfaceTensionMobile() {
  return (
    <main className="text-white">
      <Mobile1Shell showBackButton>
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className={styles.portraitPair} aria-hidden>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/the-fractured-self.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/mobile-images/homepage/constructed-innocence.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Quiet Divine
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Series 001
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Quiet Divine explores human divinity as an internal capacity.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Not transcendence, but depth earned through reflection,
              integration, and composure under pressure.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Orientation
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Inner Architecture
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These portraits treat the inner life as a structure: shaped by
              experience, clarified by attention, and held together by honesty
              that can't be performed. The face becomes evidence of thought,
              memory, resilience, and self-recognition.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              What the Work Examines
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Stillness as Authority
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Quiet Divine looks at what remains when someone stops negotiating
              with the world and listens clearly to themselves. The stillness in
              these figures is not retreat. It is orientation.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Visual Language
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Motifs as Structure
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Fracture, crystal, floral permeability, geometric order, and gold
              appear not as ornament, but as diagrams of inner organization.
              Each motif represents a different way a person learns to carry
              what has shaped them without collapsing under its weight.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Underlying Claim
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Divinity Without Spectacle
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Here, divinity is not display. It is the coherence that forms when
              someone arranges their inner world into something they can live
              inside with integrity.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Position
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Series Context
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Quiet Divine is the first series in Synerva Dimensions. It
              establishes the collection's central idea: identity as a system
              under constant revision.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Quiet Divine — Series Images
            </h2>
            <SurfaceTensionImageSystem />
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
