import Image from "next/image";
import Mobile1Shell from "@/app/mobile1/Mobile1Shell";
import styles from "@/app/mobile1/mobile1.module.css";
import InnerClimateImageSystem from "@/app/mobile1/dimensions/inner-climate/InnerClimateImageSystem";

export default function InnerClimateMobile() {
  return (
    <main className="text-white">
      <Mobile1Shell
        showBackButton
        backgroundImageUrl="/subpage-backgrounds/ChatGPT%20Image%20Jan%2022,%202026,%2003_34_55%20AM.png"
      >
        <section
          className={`mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className={styles.portraitPair} aria-hidden>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/inner-climate/1.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <Image
                src="/inner-climate/24.png"
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.05rem] font-light leading-snug text-white">
              Inner Climate
            </h1>
            <h2 className="text-[1.45rem] font-light leading-snug text-white">
              The Systems Beneath Weather
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              There are environments we move through, and environments that form
              quietly inside us.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Inner Climate explores the atmospheric layer beneath visible
              behavior. Not emotion as performance, but emotion as structure. The
              interior systems shaped by pressure, memory, repetition, and time.
              The conditions that exist long before reaction becomes visible,
              influencing how we experience spaces, decisions, and connection.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Across this body of work, internal states are treated as
              environmental realities. They accumulate, stabilize, fracture,
              soften, and reform. Nothing appears suddenly. Nothing disappears
              completely. Each shift is the result of forces acting over
              duration.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What feels like instinct is often architecture. What feels like
              chance is often pattern. What feels deeply personal is often
              structural.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              This is not an interpretation of feeling. It is an observation of
              what feeling does to form.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Material as Evidence of Duration
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Every surface in this sequence behaves like a record. Compression.
              Weathering. Sediment. Residue. Materials suggest time spent under
              influence, time spent adapting, time spent holding shape under
              pressure.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Some structures hold tension without visible distortion. Others
              appear fragile but distribute pressure perfectly. Some
              environments seem still but contain slow internal movement. Others
              appear dynamic but have already reached equilibrium.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These works are built to be read slowly. At first, as environment.
              Then, as structure. Eventually, as recognition.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Interior Weather as Living Physics
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Inner Climate explores the physics of internal systems. The
              emotional equivalents of pressure gradients, tectonic drift,
              atmospheric layering, and seasonal transition patterns.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Internal environments are rarely chaotic. They are governed by
              accumulation, threshold, and release. What feels sudden is usually
              stored. What feels permanent is often conditional.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              The work exists between control and surrender, between force and
              stillness, between adaptation and design.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              The Long Relationship Between Viewer and Work
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              These pieces are not designed for quick consumption. They are
              designed to live with you and shift as you shift.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              At distance, they read as environment. At proximity, they read as
              structure. With time, they begin to read as recognition.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Ownership here is not about collecting objects. It is about
              finding something that already feels like part of your internal
              landscape.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Continuity
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Inner Climate exists between external pressure and internal
              stillness. Between reaction and design.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              It studies what continues when nothing appears to be happening.
              And how every system eventually reveals its structure.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Availability
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              Select pieces from the Inner Climate collection will be available
              soon on RedBubble and related platforms as wall prints, phone and
              laptop cases, and a curated selection of home pieces.
            </p>
            <p className="text-[1.05rem] leading-6 text-white/80">
              If you want to be notified when works go live, receive early
              access, and unlock exclusive discounts, leave your email below.
            </p>
          </div>
        </section>

        <section
          className={`flex flex-col gap-5 rounded-[2rem] border border-white/20 bg-white/[0.04] px-5 py-6 ${styles.panelTransparent}`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.65rem] font-light leading-snug text-white">
              Inner Climate — Series Images
            </h2>
            <p className="text-[1.05rem] leading-6 text-white/80">
              What follows is not an illustration of these ideas, but their
              residue.
            </p>
            <div className="mt-6">
              <InnerClimateImageSystem />
            </div>
          </div>
        </section>
      </Mobile1Shell>
    </main>
  );
}
