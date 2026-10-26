"use client";

import { FormEvent } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      `Note from ${name}${company ? `, ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      [`Name: ${name}`, `Company: ${company}`, `Email: ${email}`, "", message].join(
        "\n",
      ),
    );
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none focus:border-copper";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.contact.fields.name}
        </span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.contact.fields.company}
        </span>
        <input
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.contact.fields.email}
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.contact.fields.message}
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-fit bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
      >
        {site.contact.submitLabel}
      </button>
    </form>
  );
}
