import { buildPageMetadata } from "@/lib/metadata";
import Mobile1Shell from "../../Mobile1Shell";
import styles from "../../mobile1.module.css";
import ParallaxLoomImageSystem from "./ParallaxLoomImageSystem";

export const metadata = buildPageMetadata({
  title: "Parallax Loom | Synerva Dimensions",
  description:
    "Parallax Loom is a Synerva Dimensions series documenting modern behavior through a fictional brewery.",
  path: "/mobile1/dimensions/parallax-loom",
});

export const viewport = {
  width: 420,
  initialScale: 1,
};

export default function Mobile1ParallaxLoomPage() {
  return (
    <main className="text-white">
      <Mobile1Shell>
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div
            aria-hidden
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 max-h-[40vh] sm:max-h-none"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Parallax Loom
            </h1>
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Series 002
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Parallax Loom is a fictional brewery and a field study of modern
              behavior.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It uses consumer packaging as a delivery system for jokes that
              behave more like confessions.
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
              Humor as Signal
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These designs are not about drinking. They are about the quiet
              rituals people perform to survive contemporary life while
              insisting they're "doing fine."
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              What the Work Documents
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Small, Repeating Failures
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Parallax Loom focuses on moments that are too mundane to dramatize
              and too revealing to ignore. Not breakdowns, but the smaller
              compromises that accumulate quietly and later introduce themselves
              as personality.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Behavioral Focus
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Systems in Disguise
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Authority appears here as domestic objects, interfaces, schedules,
              and wellness rituals. The joke is never the object itself. The
              joke is how willingly we surrender agency to it.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Visual Strategy
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Fragmented by Design
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The series refuses a single aesthetic. This fragmentation reflects
              how identity actually operates now: context-sensitive, adaptive,
              and endlessly rebranded depending on fatigue and audience.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Tone
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Recognition, Not Ridicule
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Despite the humor, the work is not cruel. It assumes the viewer is
              smart, overwhelmed, self-aware, and trying.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The laughter it produces isn't mockery. It's relief.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Parallax Loom — Series Images
            </h2>
            <ParallaxLoomImageSystem />
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
