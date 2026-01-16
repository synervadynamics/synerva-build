import Link from "next/link";
import Image from "next/image";
import { copy } from "@/data/copy";
import MerchCatalog from "@/components/merch/MerchCatalog";
import { ScrollMorphBackground } from "@/app/homepage/ScrollMorphBackground";

export default function MerchDesktop() {
  const merch = copy.merchPage;

  return (
    <main className="relative text-white">
      <ScrollMorphBackground />
      <div className="pointer-events-none fixed inset-0 z-[5] bg-black/80" />
      <div className="relative z-10">
        <section className="relative overflow-visible px-6 pt-28 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-black/60 p-10 shadow-[0_64px_180px_-88px_rgba(0,0,0,0.82)] backdrop-blur-3xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex justify-start">
                  <Link
                    href="/"
                    className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
                  >
                    ← Home
                  </Link>
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  {merch.hero.eyebrow}
                </p>
                <h1 className="text-4xl leading-tight sm:text-5xl">
                  {merch.hero.heading}
                </h1>
                <div className="space-y-4 text-base text-white/72">
                  {merch.hero.lead.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={merch.hero.ctas.primary.href}
                    className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
                  >
                    {merch.hero.ctas.primary.label}
                  </Link>
                  <Link
                    href={merch.hero.ctas.secondary.href}
                    className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                  >
                    {merch.hero.ctas.secondary.label}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  {merch.hero.microproofs.map((proof) => (
                    <span
                      key={proof}
                      className="rounded-full border border-white/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/70"
                    >
                      {proof}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/60">
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

        <section className="relative px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl">{merch.whatThisIs.heading}</h2>
            <div className="space-y-4 text-lg text-white/75">
              {merch.whatThisIs.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl">
                {merch.currentSlate.heading}
              </h2>
              <p className="text-lg text-white/75">{merch.currentSlate.body}</p>
            </div>
            <MerchCatalog />
          </div>
        </section>

        <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/12 bg-white/[0.03] p-8 shadow-[0_40px_130px_-86px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
            <h2 className="text-2xl sm:text-3xl">{merch.disclaimer.heading}</h2>
            <p className="mt-4 text-base text-white/72">
              {merch.disclaimer.body}
            </p>
          </div>
        </section>

        <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl">{merch.dropLogic.heading}</h2>
              <p className="text-lg text-white/75">{merch.dropLogic.body}</p>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              {merch.dropLogic.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
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
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-white/12 bg-transparent p-8 shadow-[0_58px_178px_-86px_rgba(0,0,0,0.86)] backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl">
                {merch.finalCta.heading}
              </h2>
              <p className="text-lg text-white/75">{merch.finalCta.body}</p>
              <Link
                href={merch.finalCta.ctas.secondary.href}
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                {merch.finalCta.ctas.secondary.label}
              </Link>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="merch-email"
                className="text-xs uppercase tracking-[0.35em] text-white/60"
              >
                Email for drop alerts
              </label>
              <input
                id="merch-email"
                type="email"
                disabled
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/50"
                placeholder="you@company.com"
              />
              <button
                type="button"
                disabled
                className="w-full rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition disabled:cursor-not-allowed disabled:bg-white/50"
              >
                {merch.finalCta.ctas.primary.label}
              </button>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {merch.finalCta.note}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
