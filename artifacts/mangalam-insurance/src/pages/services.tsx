import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/data';

export default function ServicesOverview() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive protection and wealth planning."
        description="We bring your insurance, investments, and long-term goals together under one roof, creating a unified strategy for your family or business."
      />
      
      <section className="py-24 md:py-32 bg-muted/20">
        <div className="section-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, description, icon: Icon, number }) => (
              <Link
                key={title}
                href={`/services/${slug}`}
                className="group flex min-h-[280px] flex-col justify-between rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_14px_30px_rgba(22,77,65,.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground opacity-50">{number}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-2xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-secondary">
                    Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white text-center">
        <div className="section-shell max-w-3xl reveal">
          <p className="eyebrow text-accent mb-4">Take the Next Step</p>
          <h2 className="font-display text-4xl md:text-5xl">Not sure what you need?</h2>
          <p className="mt-6 text-white/70">
            You don't need to have it all figured out. Book a free consultation and let our advisors help you identify gaps and opportunities in your current setup.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:bg-[#e8ce87]">
            Speak to an advisor <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
