type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  subtitle?: string;
};

export function PageIntro({ eyebrow, title, lede, subtitle }: PageIntroProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl font-serif text-2xl font-medium uppercase leading-snug tracking-wide text-ink md:text-3xl">
            {subtitle}
          </p>
        ) : null}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </header>
  );
}
