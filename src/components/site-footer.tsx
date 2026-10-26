import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-ink-deep text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl font-semibold uppercase tracking-[0.14em]">
            {site.companyName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
            Barakat is a completed client project. The other sectors are markets{" "}
            {site.companyName} is positioned to serve.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 md:col-span-3">
          <Link href="/" className="text-sm text-paper/80 hover:text-copper">
            Home
          </Link>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-paper/80 hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-4">
          <a
            href={`mailto:${site.contactEmail}`}
            className="font-mono text-xs uppercase tracking-[0.14em] text-copper hover:text-paper"
          >
            {site.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
