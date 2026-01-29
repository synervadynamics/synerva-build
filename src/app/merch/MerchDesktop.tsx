import Link from "next/link";
import Image from "next/image";
import { copy } from "@/data/copy";
import MerchCatalog from "@/components/merch/MerchCatalog";
import SubpageStaticBackground from "@/components/SubpageStaticBackground";
import styles from "./merch.module.css";

export default function MerchDesktop() {
  const merch = copy.merchPage;

  return (
    <main className={`${styles.merchPage} relative`}>
      <SubpageStaticBackground imageUrl="/subpage-backgrounds/merch.png" />
      <div
        className="pointer-events-none fixed inset-0 z-[5] bg-[color:var(--merch-overlay)]"
        aria-hidden
      />
      <div className="relative z-10">
        <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
          <div
            className={`${styles.merchHero} relative mx-auto max-w-6xl rounded-[3rem] border border-[color:var(--merch-outline-primary)] bg-[color:var(--merch-panel-fill)] p-10 shadow-[0_64px_180px_-88px_rgba(0,0,0,0.82)] backdrop-blur-3xl`}
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex justify-start">
                  <Link
                    href="/"
                    className="text-sm uppercase tracking-[0.3em] text-[color:var(--merch-link)] transition hover:opacity-90"
                  >
                    ← Home
                  </Link>
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink-quiet)]">
                  {merch.hero.eyebrow}
                </p>
                <h1 className="text-4xl leading-tight sm:text-5xl">
                  {merch.hero.heading}
                </h1>
                <div className="space-y-4 text-base text-[color:var(--ink-primary)]">
                  {merch.hero.lead.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={merch.hero.ctas.primary.href}
                    className={`${styles.merchCta} rounded-full border border-[color:var(--merch-cta-outline)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:opacity-90`}
                  >
                    {merch.hero.ctas.primary.label}
                  </Link>
                  <Link
                    href={merch.hero.ctas.secondary.href}
                    className={`${styles.merchCta} rounded-full border border-[color:var(--merch-cta-outline)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:opacity-90`}
                  >
                    {merch.hero.ctas.secondary.label}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  {merch.hero.microproofs.map((proof) => (
                    <span
                      key={proof}
                      className="rounded-full border border-[color:var(--merch-outline-secondary)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--ink-quiet)]"
                    >
                      {proof}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] p-3 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)]">
                    <Image
                      src="/merch-v1/merch-hero.png"
                      alt="Synerva merch hero mockup"
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.merchOps} relative px-6 py-16 sm:px-10 lg:px-16`}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl text-[color:var(--ink-structural)]">
              {merch.whatThisIs.heading}
            </h2>
            <div className="space-y-4 text-lg text-[color:var(--ink-analytical)]">
              {merch.whatThisIs.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.merchCategories} relative px-6 pb-16 sm:px-10 lg:px-16`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl text-[color:var(--ink-structural)]">
                {merch.currentSlate.heading}
              </h2>
              <p className="text-lg text-[color:var(--ink-analytical)]">
                {merch.currentSlate.body}
              </p>
            </div>
            <MerchCatalog />
          </div>
        </section>

        <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
          <div
            className={`${styles.merchNotice} mx-auto max-w-5xl rounded-[2.5rem] border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] p-8 shadow-[0_40px_130px_-86px_rgba(0,0,0,0.82)] backdrop-blur-2xl`}
          >
            <h2 className="text-2xl sm:text-3xl">{merch.disclaimer.heading}</h2>
            <p className="mt-4 text-base text-[color:var(--ink-quiet)]">
              {merch.disclaimer.body}
            </p>
          </div>
        </section>

        <section
          className={`${styles.merchOps} relative px-6 pb-16 sm:px-10 lg:px-16`}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl text-[color:var(--ink-structural)]">
                {merch.dropLogic.heading}
              </h2>
              <p className="text-lg text-[color:var(--ink-analytical)]">
                {merch.dropLogic.body}
              </p>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--ink-analytical)]">
              {merch.dropLogic.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--merch-bullet)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="drop-alerts"
          className="relative px-6 pb-24 sm:px-10 lg:px-16"
        >
          <div
            className={`${styles.merchSignup} mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-[color:var(--merch-outline-primary)] bg-[color:var(--merch-panel-fill)] p-8 shadow-[0_58px_178px_-86px_rgba(0,0,0,0.86)] backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]`}
          >
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl text-[color:var(--ink-structural)]">
                {merch.finalCta.heading}
              </h2>
              <p className="text-lg text-[color:var(--ink-analytical)]">
                {merch.finalCta.body}
              </p>
              <Link
                href={merch.finalCta.ctas.secondary.href}
                className={`${styles.merchCta} inline-flex rounded-full border border-[color:var(--merch-cta-outline)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:opacity-90`}
              >
                {merch.finalCta.ctas.secondary.label}
              </Link>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="merch-email"
                className={`${styles.merchHelper} text-xs uppercase tracking-[0.35em]`}
              >
                Email for drop alerts
              </label>
              <input
                id="merch-email"
                type="email"
                disabled
                className="w-full rounded-2xl border border-[color:var(--merch-outline-secondary)] bg-[color:var(--merch-panel-fill)] px-4 py-3 text-[color:var(--ink-primary)] placeholder:text-[color:var(--ink-quiet)] focus:border-[color:var(--merch-outline-primary)]"
                placeholder="you@company.com"
              />
              <button
                type="button"
                disabled
                className={`${styles.merchCta} w-full rounded-full border border-[color:var(--merch-cta-outline)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition disabled:cursor-not-allowed opacity-70`}
              >
                {merch.finalCta.ctas.primary.label}
              </button>
              <p className={`${styles.merchHelper} text-xs uppercase tracking-[0.3em]`}>
                {merch.finalCta.note}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
