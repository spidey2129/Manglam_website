import { Link } from 'wouter';
import { ArrowRight, Award, BarChart3, Landmark, Target, ShieldCheck, Users } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';
import { partners } from '@/lib/data';
import { SEO } from '@/components/seo';

export default function About() {
 return (
  <>
    <SEO
      title="About Mangalam Insurance & Investment | Gandhinagar"
      description="Learn about Mangalam Insurance & Investment, a Gandhinagar-based insurance and investment advisory firm helping families and businesses across Gujarat."
      path="/about"
    />

    <SiteLayout>
     <section className="relative overflow-hidden bg-[#062c5c]">
  <div className="grid min-h-[620px] md:grid-cols-2">
    
    <div className="flex items-center px-8 py-16 md:px-12 lg:px-16">
      <div className="max-w-xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-accent" />
          <span className="eyebrow text-accent">About Mangalam</span>
        </div>

        <h1 className="font-display text-5xl leading-[1.05] text-white md:text-6xl">
          More than protection —
          <br />
          a trusted partner for your future.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg">
          For over 25 years, Mangalam Insurance & Investment has helped
          families and businesses across Gujarat protect what matters,
          plan with clarity, and build for tomorrow.
        </p>
      </div>
    </div>

    <div className="relative min-h-[420px] md:min-h-full">
      <img
        src="/about-us.jpeg"
        alt="Ashok Goswami and Shivang Goswami of Mangalam Insurance"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-y-0 left-0 hidden w-16 bg-[#062c5c] md:block [clip-path:polygon(0_0,100%_0,35%_100%,0_100%)]" />
    </div>

  </div>
</section>
      
      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-secondary">Our Story</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              From Gandhinagar, with a vision for your future.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Founded in 2000, Mangalam Insurance & Investment began with a simple observation: people were buying financial products, but they weren't getting financial advice. The industry was full of jargon, pressure, and off-the-shelf solutions.
              </p>
              <p>
                We wanted to build something different. A practice where conversations start with listening, where the fine print is explained in plain language, and where relationships last longer than a single transaction.
              </p>
              <p>
                Today, we manage over ₹120 Cr+ in assets and guide more than 10,000 families and businesses. Our team remains focused on what has always mattered: thoughtful protection and disciplined investment strategies that adapt as your life changes.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-accent/35" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#173b43] p-10 text-white">
              <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#204c4a]" />
              <div className="relative z-10">
                <QuoteIcon className="text-accent/80" />
                <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
                  "We don't just protect your today. We help prepare your tomorrow."
                </p>
                <div className="mt-10">
                  <p className="font-bold">A.K. Goswami</p>
                  <p className="text-xs text-white/60">Founder, Mangalam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/45 py-24">
        <div className="section-shell">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow text-secondary">Our Values</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary">How we practice</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Lifelong Support', desc: 'We don\'t just set up a plan; we stay with you to ensure it performs when you need it most.', icon: Users },
              { title: 'Plain Language', desc: 'No financial jargon. We explain what you are buying, what it costs, and why we recommend it.', icon: Target },
              { title: 'IRDAI-Aligned', desc: 'We operate with the highest standards of integrity, fully compliant with regulatory guidelines.', icon: ShieldCheck },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-8">
                <value.icon className="text-secondary mb-6" size={28} />
                <h3 className="font-display text-2xl text-primary">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow text-secondary">Trusted Partners</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-primary">
             Partnering with institutions that define excellence.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full">
              {partners.map((partner) => (
                <div key={partner} className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-center font-semibold text-primary/70 shadow-sm transition hover:border-secondary">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#112c46] py-24 text-white text-center">
        <div className="section-shell max-w-3xl reveal">
          <h2 className="font-display text-4xl md:text-5xl">Ready to plan with confidence?</h2>
          <p className="mt-6 text-white/70">
            Book a complimentary first conversation. We'll listen to your goals and give you an honest assessment of your current setup.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:bg-[#e8ce87]">
            Get a free consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
    </>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 11H6C6 8.79086 7.79086 7 10 7V5C6.68629 5 4 7.68629 4 11V19H10V11Z" fill="currentColor" />
      <path d="M20 11H16C16 8.79086 17.79086 7 20 7V5C16.68629 5 14 7.68629 14 11V19H20V11Z" fill="currentColor" />
    </svg>
  );
}
