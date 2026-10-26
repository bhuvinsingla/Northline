import Link from "next/link";
import { IconBadge } from "@/components/icons";
import { Photo } from "@/components/photo";
import { PlanGlimpse } from "@/components/plan-glimpse";
import { RouteDiagram } from "@/components/route-diagram";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-ink-deep text-paper">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="text-balance font-mono text-xs uppercase tracking-[0.2em] text-copper">
              {site.home.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-7xl">
              {site.home.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
              {site.home.subhead}
            </p>
            <p className="mt-8 max-w-xl border-l-2 border-copper pl-5 text-lg leading-relaxed text-paper/90">
              {site.proposition}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={site.home.caseStudy.href}
                className="bg-copper px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                {site.home.caseStudy.cta}
              </Link>
              <Link
                href="/contact"
                className="border border-paper/40 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:border-copper hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border border-white/10 bg-[#171d24] p-4 md:col-span-5 md:p-6">
            <RouteDiagram tone="dark" caption={site.barakat.diagramCaption} />
          </div>
        </div>
        <div className="border-t border-white/10">
          <dl className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-6 sm:grid-cols-3 md:px-8">
            {site.home.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-copper">
                  {spec.label}
                </dt>
                <dd className="mt-2 font-serif text-xl font-medium uppercase tracking-wide text-paper">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            {site.home.intro}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            {site.home.capabilitiesLine}
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-[#e7ebf0]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
            {site.barakat.glimpseHeading}
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold uppercase tracking-wide">
            Barakat planning screen
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {site.barakat.glimpseLede}
          </p>
          <div className="mt-8">
            <PlanGlimpse />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="max-w-3xl font-serif text-3xl font-semibold uppercase leading-snug tracking-wide md:text-4xl">
            {site.home.thread}
          </h2>
          <ol className="mt-12">
            {site.home.pillars.map((pillar) => (
              <li
                key={pillar.index}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-3">
                  <IconBadge name={pillar.icon} />
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-copper">
                    {pillar.index}
                    <span className="mt-2 block text-muted">{pillar.kicker}</span>
                  </p>
                </div>
                <h3 className="font-serif text-3xl font-semibold uppercase tracking-wide md:col-span-4">
                  {pillar.title}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-5">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-4xl font-semibold uppercase tracking-wide">
            {site.home.methodHeading}
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {site.home.method.map((step) => (
              <li key={step.index} className="border-t border-line pt-6">
                <IconBadge name={step.icon} />
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-copper">
                  {step.index}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-deep text-paper">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <Photo
              src={site.images.facility.src}
              alt={site.images.facility.alt}
              caption={site.images.facility.caption}
              captionTone="dark"
            />
          </div>
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
              {site.home.caseStudy.eyebrow}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-paper/70">
              {site.home.caseStudy.place}
            </p>
            <h2 className="mt-6 font-serif text-5xl font-semibold uppercase tracking-wide">
              {site.home.caseStudy.title}
            </h2>
            <p className="mt-3 text-lg text-paper/80">
              {site.home.caseStudy.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/90">
              {site.home.caseStudy.body}
            </p>
            <Link
              href={site.home.caseStudy.href}
              className="mt-8 inline-flex border border-copper px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-copper hover:text-ink-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {site.home.caseStudy.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl font-semibold uppercase tracking-wide">
              {site.home.marketsHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{site.home.marketsLede}</p>
          </div>
          <ol className="border-t border-line md:col-span-7">
            {site.home.markets.map((market, index) => (
              <li
                key={market.label}
                className="flex items-center gap-5 border-b border-line py-4"
              >
                <span className="font-mono text-xs text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IconBadge name={market.icon} />
                <span className="font-serif text-2xl font-medium uppercase tracking-wide">
                  {market.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
          <Photo
            src={site.images.city.src}
            alt={site.images.city.alt}
            caption={site.images.city.caption}
            aspect="aspect-[16/7]"
          />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <p className="max-w-2xl font-serif text-3xl font-semibold uppercase leading-snug tracking-wide md:text-4xl">
            {site.home.close}
          </p>
          <Link
            href="/contact"
            className="shrink-0 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
