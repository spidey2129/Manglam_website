import { Link } from 'wouter';
import { ArrowRight, Quote } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';
import { benefits } from '@/lib/data';

export default function WhyUsPage() {
  const testimonials = [
    {
      quote: "For the first time, our finances feel like one thoughtful plan — not ten disconnected decisions.",
      name: "Rohan Shah",
      role: "Business owner, Ahmedabad",
      initials: "RS"
    },
    {
      quote: "They actually took the time to explain the fine print of my health policy. When my father was hospitalized, their team handled the entire cashless claim.",
      name: "Priya Desai",
      role: "IT Professional, Gandhinagar",
      initials: "PD"
    },
    {
      quote: "A.K. Goswami didn't just sell me a policy. He reviewed my existing portfolio, told me where I was overpaying, and consolidated my SIPs.",
      name: "Dr. Amit Patel",
      role: "Surgeon, Surat",
      initials: "AP"
    }
  ];

  const process = [
    { step: "01", title: "Consult", desc: "We sit down to understand your family structure, existing assets, liabilities, and long-term goals. No sales pitch, just listening." },
    { step: "02", title: "Compare", desc: "We scan the market and present 2-3 tailored options, explaining the pros, cons, and hidden clauses of each in plain language." },
    { step: "03", title: "Choose", desc: "You make an informed decision without pressure. We handle all the paperwork, medicals, and documentation to get your plan active." },
    { step: "04", title: "Ongoing Support", desc: "Our relationship begins after the policy is issued. We manage your renewals, portfolio rebalancing, and most importantly, your claims." }
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Mangalam Difference"
        title="Advice that puts you first."
        description="We don't just distribute financial products. We provide clarity, ongoing support, and unbiased recommendations tailored exclusively to your life."
      />

      <section className="border-b border-border bg-card">
        <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {[
            ['25+', 'years of trusted advice'],
            ['10k+', 'families and businesses'],
            ['₹120 Cr+', 'assets guided'],
            ['4.9/5', 'client experience rating']
          ].map(([stat, label]) => (
            <div className="px-4 py-7 first:pl-0 md:px-8 md:py-8" key={stat}>
              <p className="font-display text-3xl text-primary md:text-4xl">{stat}</p>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-3xl text-center mx-auto mb-16">
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">
              You deserve an advisor who thinks beyond the policy.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, body, Icon], i) => {
              const IconComponent = Icon as React.ElementType;
              return (
                <div key={title as string} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                      <IconComponent size={20} strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground opacity-50">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-primary">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{body as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="mb-16">
            <p className="eyebrow text-secondary">Our Process</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              How we work together
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-4 relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-border hidden md:block" />
            {process.map((p) => (
              <div key={p.step} className="relative z-10">
                <span className="grid h-16 w-16 place-items-center rounded-full border-4 border-background bg-secondary text-lg font-bold text-white shadow-sm mb-6">
                  {p.step}
                </span>
                <h3 className="font-display text-2xl text-primary mb-3">{p.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white md:py-32">
        <div className="section-shell">
          <div className="mb-16 text-center">
            <p className="eyebrow text-accent">Client Stories</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[#faf6ec] md:text-5xl">
              Don't just take our word for it.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="relative rounded-2xl bg-[#173b43] p-8 md:p-10 border border-white/5">
                <Quote className="text-accent/60 mb-6" size={32} />
                <p className="text-sm md:text-base leading-7 text-white/80 mb-8 min-h-[120px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24 text-center">
        <div className="section-shell max-w-3xl reveal">
          <h2 className="font-display text-4xl md:text-5xl text-primary">Experience the difference.</h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
            Schedule a complimentary review of your current portfolio and let us show you how we can add value.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0e5a48]">
            Book a consultation <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
