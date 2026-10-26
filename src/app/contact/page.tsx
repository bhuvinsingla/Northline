import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.contact.title,
  description: site.contact.description,
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow={site.contact.eyebrow}
        title={site.contact.heading}
        lede={site.contact.lede}
      />
      <section>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-5">
            <p className="border-l-2 border-copper pl-5 text-lg leading-relaxed text-ink">
              {site.proposition}
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-8 inline-block font-mono text-sm tracking-wide text-copper hover:text-ink"
            >
              {site.contactEmail}
            </a>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
