import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, ChevronDown, CircleHelp } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServicePageProps {
  title: string;
  eyebrow: string;
  description: string;
  whatIsText: React.ReactNode;
  coveredItems: string[];
  benefits: ServiceBenefit[];
  faqs: ServiceFAQ[];
  serviceParam: string;
}

export function ServicePageLayout({
  title,
  eyebrow,
  description,
  whatIsText,
  coveredItems,
  benefits,
  faqs,
  serviceParam
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      
      <section className="py-24">
        <div className="section-shell grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="font-display text-3xl text-primary md:text-4xl">What is {title}?</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
              {whatIsText}
            </div>
          </div>
          
          <div className="rounded-[1.5rem] bg-muted/30 p-8 border border-border">
            <h3 className="font-display text-2xl text-primary mb-6">What's covered</h3>
            <ul className="space-y-4">
              {coveredItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#173b43] py-24 text-white">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-accent">The Mangalam Advantage</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              Why choose us for {title}?
            </h2>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{b.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-secondary">Common Questions</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-primary md:text-4xl">What you should know.</h2>
            <Link href={`/contact?service=${serviceParam}`} className="mt-8 flex items-center gap-3 text-sm font-semibold text-secondary">
              <CircleHelp size={18} /> Ask a specific question
            </Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)} 
                  className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold text-primary" 
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-secondary transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="max-w-2xl pb-6 pr-8 text-sm leading-6 text-muted-foreground">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24 text-center">
        <div className="section-shell max-w-3xl reveal">
          <h2 className="font-display text-4xl md:text-5xl text-primary">Ready to get covered?</h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
            Speak with an advisor to compare quotes and find the right {title.toLowerCase()} policy for your needs.
          </p>
          <Link href={`/contact?service=${serviceParam}`} className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0e5a48]">
            Get a free quote <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
