import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { RouteDiagram } from "@/components/route-diagram";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.barakat.title,
  description: site.barakat.description,
};

export default function BarakatPage() {
  const study = site.barakat;

  return (
    <main className="flex-1">
      <PageIntro
        eyebrow={study.eyebrow}
        title={study.title}
        subtitle={study.titleLine}
        lede={study.lede}
      />

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-copper">
              {study.place}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide">
              {study.problemHeading}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {study.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="bg-panel p-4 md:col-span-6 md:p-6">
            <RouteDiagram caption={study.diagramCaption} />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-3xl font-semibold uppercase tracking-wide">
            {study.solutionHeading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted">
            {study.solution.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="mt-12 border-t border-line">
            {study.supports.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-6"
              >
                <p className="font-mono text-xs text-copper md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl font-semibold uppercase tracking-wide md:col-span-4">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-6">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="max-w-3xl font-serif text-3xl font-semibold uppercase tracking-wide md:text-4xl">
            {study.parallelHeading}
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            {study.parallelIntro}
          </p>
          <div className="mt-12">
            <div className="hidden border-b border-line pb-3 md:grid md:grid-cols-12 md:gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:col-span-3">
                {study.parallelColumns.topic}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:col-span-4">
                {study.parallelColumns.mobility}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:col-span-5">
                {study.parallelColumns.barakat}
              </p>
            </div>
            {study.parallels.map((row) => (
              <div
                key={row.topic}
                className="grid gap-3 border-b border-line py-5 md:grid-cols-12 md:gap-6"
              >
                <h3 className="font-serif text-xl font-semibold uppercase tracking-wide md:col-span-3">
                  {row.topic}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-4">
                  <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-copper md:hidden">
                    {study.parallelColumns.mobility}
                  </span>
                  {row.mobility}
                </p>
                <p className="leading-relaxed text-ink md:col-span-5">
                  <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-copper md:hidden">
                    {study.parallelColumns.barakat}
                  </span>
                  {row.barakat}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-12 inline-flex bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
