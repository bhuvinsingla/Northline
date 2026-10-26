import type { Metadata } from "next";
import Link from "next/link";
import { IconBadge } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.capabilities.title,
  description: site.capabilities.description,
};

export default function CapabilitiesPage() {
  const page = site.capabilities;

  return (
    <main className="flex-1">
      <PageIntro eyebrow={page.eyebrow} title={page.title} lede={page.lede} />

      <section className="border-b border-line">
        <ol className="mx-auto grid w-full max-w-6xl md:grid-cols-2">
          {page.items.map((item, index) => (
            <li
              key={item.title}
              className="border-b border-line px-5 py-10 md:px-8 md:py-14 md:odd:pr-12 md:even:border-l md:even:pl-12"
            >
              <IconBadge name={item.icon} />
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-copper">
                {String(index + 1).padStart(2, "0")} · {item.status}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide">
                {item.title}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-4xl font-semibold uppercase tracking-wide">{page.linesHeading}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{page.linesLede}</p>
          <ol className="mt-12 border-t border-line">
            {page.lines.map((line) => (
              <li
                key={line.index}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-3">
                  <IconBadge name={line.icon} />
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-copper">
                    {line.index}
                    <span className="mt-2 block normal-case tracking-normal text-muted">
                      {line.kicker}
                    </span>
                  </p>
                </div>
                <h3 className="font-serif text-3xl font-semibold uppercase tracking-wide md:col-span-4">
                  {line.title}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-5">{line.body}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/work/barakat"
            className="mt-12 inline-flex border border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-copper hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Read the Barakat case study
          </Link>
        </div>
      </section>
    </main>
  );
}
