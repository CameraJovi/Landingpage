import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { asset, appUrl } from "../lib/content";

export default function FeatureSection({ feature, reverse }) {
  return (
    <article
      id={feature.id}
      aria-labelledby={`${feature.id}-title`}
      className={
        reverse ? "bg-surface py-16 sm:py-24" : "bg-black py-16 sm:py-24"
      }
    >
      <div className="container grid items-center gap-12 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-12 lg:gap-28">
        <div className={reverse ? "md:order-2" : ""}>
          <h3
            id={`${feature.id}-title`}
            className="text-balance font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground"
          >
            {feature.short}
          </h3>
          <p className="mt-6 max-w-lg text-base text-muted sm:text-lg">
            {feature.description}
          </p>
          <div className="mt-8 space-y-6 border-t border-line pt-7">
            {feature.details.map((detail) => (
              <div key={detail.title}>
                <h4 className="text-base font-semibold text-foreground">
                  {detail.title}
                </h4>
                <p className="mt-2 max-w-lg text-sm text-muted">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-4"
          >
            Explorar na Jovi <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
        <figure className={`min-w-0 ${reverse ? "md:order-1" : ""}`}>
          <Image
            unoptimized
            src={asset(feature.image)}
            alt={feature.alt}
            width={556}
            height={929}
            loading="lazy"
            className="mx-auto h-auto max-h-[600px] w-auto max-w-full rounded-2xl object-contain"
          />
          <figcaption className="mt-5 text-center text-xs text-muted">
            <span className="mb-2 block text-sm font-semibold text-brand">
              {feature.title}
            </span>
            {feature.caption}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
