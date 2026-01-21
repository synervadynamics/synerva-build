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
                src="/surface-tension/01.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/surface-tension/30.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Surface Tension
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Series 002
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Synerva Dimensions
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              There comes a moment when understanding yourself is no longer
              enough.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              When reflection has done its work.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              When clarity has settled.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              When who you are can no longer stay internal.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Surface Tension begins there.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Not in discovery, but in exposure.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Not in becoming, but in continuing.
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
              What Happens After the Inside Work
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These works look at what happens when a life returns to the world.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">After insight.</p>
            <p className="text-[1.05rem] leading-6 text-white/80">After growth.</p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              After the self has been shaped.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Because no one stays inward forever. Eventually, other people,
              time, and pressure resume their influence.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What once worked privately must now hold up publicly.
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
              Stability Under Pressure
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Here, surface is not about appearance.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It’s about function.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Skin, light, and material act like membranes. They bend, absorb,
              and distribute force without breaking.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Distortion isn’t decoration. It’s evidence of pressure being
              managed.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These are not portraits of emotion.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              They are portraits of endurance.
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
              Quiet Strength
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              There is no spectacle here.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Pressure builds slowly.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It leaves traces, not damage.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Light touches instead of overwhelms. Structures strain without
              collapsing.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What looks abstract is not symbolic. It’s physical record.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              This is what it looks like to remain yourself while being seen,
              judged, misread, and acted upon.
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
              What Strength Actually Is
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Depth alone is not strength.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              If coherence only survives in isolation, it is fragile.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Real strength shows up at the surface, where force is distributed,
              boundaries hold,
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              and identity remains intact without becoming rigid.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Calm here is not softness.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It is control.
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
              Surface Tension follows Quiet Divine.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Where the first series explored the inner work of becoming
              coherent,
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              this one asks a harder question:
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Can that coherence survive contact with the world?
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Strength is not hardness.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It is precision.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Surface Tension — Series Images
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What follows is not an illustration of these ideas, but their
              residue.
            </p>
            <div className="mt-6">
              <SurfaceTensionImageSystem />
            </div>
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
