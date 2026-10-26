"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b-2 border-copper bg-ink-deep text-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          <svg
            viewBox="0 0 36 16"
            aria-hidden="true"
            className="h-4 w-9 text-copper"
          >
            <path
              d="M1 12 H10 V4 H18 V12 H26 V7 H35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <rect x="0" y="10" width="3.2" height="3.2" fill="#eef1f4" />
            <rect x="32.6" y="5.4" width="3.2" height="3.2" fill="currentColor" />
          </svg>
          <span className="font-serif text-2xl font-semibold uppercase leading-none tracking-[0.14em]">
            {site.companyName}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-6 gap-y-2">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-xs uppercase tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper ${
                  active ? "text-copper" : "text-paper/80 hover:text-copper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
