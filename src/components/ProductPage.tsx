"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";

export type ProductEntry = (typeof copy.products)[keyof typeof copy.products];

const otherProducts = (slug: string) =>
  Object.values(copy.products)
    .filter((entry) => entry.slug !== slug)
    .map((entry) => ({
      title: entry.title,
      tagline: entry.tagline,
      href: `/${entry.slug}`,
    }));

export const ProductPage = ({
  product,
  disclaimer,
}: {
  product: ProductEntry;
  disclaimer?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const related = otherProducts(product.slug);
  const media =
    ("video" in product
      ? (product as ProductEntry & { video?: { src: string; label?: string } })
          .video
      : undefined) ??
    ("image" in product
      ? (product as ProductEntry & { image?: { src: string; label?: string } })
          .image
      : undefined);
  const isVideo = Boolean(media?.src && media.src.endsWith(".mp4"));
  const mediaLabel = media?.label || `${product.title} visual`;

  const useCases =
    (
      product as ProductEntry & {
        useCases?: { title: string; description: string }[];
      }
    ).useCases ?? [];
  const activationNote =
    (
      product as ProductEntry & {
        activationNote?: string;
      }
    ).activationNote ??
    "Each deployment is staged with telemetry, governance, and QA loops so teams can trust the system immediately. Modules plug into existing CRM, CMS, and analytics stacks without replatforming.";
  const proofPoints =
    (product as ProductEntry & { proofPoints?: string[] }).proofPoints ?? [];

  return (
    <div className="bg-[var(--bg)] text-white">
      <section className="relative overflow-visible px-6 pt-28 pb-16 sm:px-10 lg:px-16">
        <div className="relative z-10 mb-4 flex justify-start">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
          >
            ← Home
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#050912f2] via-[#0b1626e6] to-[#0a1320e6]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 20% 25%, rgba(70,156,192,0.22), transparent 38%), radial-gradient(circle at 78% 16%, rgba(134,108,70,0.18), transparent 40%), radial-gradient(circle at 52% 78%, rgba(60,132,118,0.18), transparent 45%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-10 backdrop-blur-2xl shadow-[0_50px_170px_-90px_rgba(0,0,0,0.86)] lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              {product.eyebrow}
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>
            {product.tagline ? (
              <p className="text-lg text-white/80">{product.tagline}</p>
            ) : null}
            {product.description.map((paragraph) => (
              <p key={paragraph} className="text-base text-white/70">
                {paragraph}
              </p>
            ))}
            {proofPoints.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Proof points
                </p>
                <ul className="space-y-2 text-base text-white/75">
                  {proofPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Proof
                </p>
                <p className="text-base text-white">{product.proof}</p>
              </div>
            )}
            <Link
              href={product.cta.href}
              className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
            >
              {product.cta.label}
            </Link>
          </div>
          <div className="flex items-center justify-center rounded-[2.25rem] border border-white/12 bg-gradient-to-br from-[#0f2032] via-[#0f1d2c] to-[#0a1422] p-4 shadow-[0_36px_120px_-78px_rgba(0,0,0,0.8)]">
            {media ? (
              isVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[3/4] h-full max-h-[480px] w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-black object-cover"
                  aria-label={mediaLabel}
                >
                  <track kind="captions" label={mediaLabel} />
                  <source src={media.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={media.src}
                  alt={mediaLabel}
                  width={960}
                  height={1280}
                  className="aspect-[3/4] h-full max-h-[480px] w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-black object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, 80vw"
                />
              )
            ) : (
              <div className="flex aspect-[3/4] h-full max-h-[480px] w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/30 text-sm text-white/50">
                Coming soon
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {disclaimer ? (
        <section className="relative overflow-visible px-6 pb-12 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050912f0] via-[#0a1828e6] to-[#0a1320e6]" />
          <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-6 text-white/80 shadow-[0_36px_120px_-80px_rgba(0,0,0,0.82)] backdrop-blur-2xl sm:p-8">
            <p className="text-sm">{disclaimer}</p>
          </div>
        </section>
      ) : null}

      {useCases.length > 0 && (
        <section className="relative overflow-visible px-6 py-16 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050912f2] via-[#0a1828e6] to-[#0a1320e6]" />
          <div className="relative mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-8 backdrop-blur-2xl shadow-[0_48px_160px_-88px_rgba(0,0,0,0.84)] lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Use cases
              </p>
              <h2 className="text-3xl text-white">Where it excels</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-2xl border border-white/12 bg-white/5 p-5 text-white/80"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {useCase.title}
                  </p>
                  <p className="mt-2 text-sm text-white/75">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-visible px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050912f2] via-[#0a1828e6] to-[#0a1320e6]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 rounded-[3rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-8 backdrop-blur-2xl shadow-[0_50px_170px_-90px_rgba(0,0,0,0.86)] lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Capabilities
            </p>
            <h2 className="text-3xl">What it unlocks</h2>
            <ul className="space-y-3 text-base text-white/75">
              {product.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Activation notes
            </p>
            <p className="text-base text-white/70">{activationNote}</p>
            <Link
              href={product.cta.href}
              className="inline-flex rounded-full border border-white/60 px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10"
            >
              {product.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-visible px-6 pb-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050912f0] via-[#0a1828e0] to-[#0a1320e6]" />
        <div className="relative mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2336] to-[#0a1422] p-8 backdrop-blur-2xl shadow-[0_50px_170px_-90px_rgba(0,0,0,0.86)]">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              More from the stack
            </p>
            <h3 className="text-2xl">Pair it with</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/12 bg-gradient-to-br from-[#0f2032] via-[#0f1d2c] to-[#0b1422] p-6 transition hover:border-white/40"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-white/75">{item.tagline}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-white/80 group-hover:text-white">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
