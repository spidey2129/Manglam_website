import React from 'react';

export function PageHero({
  title,
  eyebrow,
  description,
  children
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#112c46] py-20 text-white md:py-32">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="section-shell relative z-10 reveal">
        {eyebrow && (
          <div className="mb-6 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-4xl leading-tight tracking-[-.035em] text-[#faf6ec] md:text-6xl max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
