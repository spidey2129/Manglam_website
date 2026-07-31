import { Link } from 'wouter';
import { ArrowRight, Check, ChevronDown, CircleHelp, Clock3, Mail, Phone, Quote, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { SiteLayout } from '@/components/layout';
import { services, benefits, partners, faqs, articles } from '@/lib/data';

function Hero() {
  return (
    <section id="top" className="hero-image relative flex min-h-[720px] items-end overflow-hidden bg-[#112c46] pb-20 pt-32 text-white md:min-h-[790px] md:items-center md:pb-0">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="section-shell relative z-10">
        <div className="max-w-[660px] reveal">
          <div className="mb-7 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Advice for what matters most</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,6.75rem)] leading-[.98] tracking-[-.055em] text-[#faf6ec]">
            We assure.<br /><span className="text-accent">That you are insured.</span>
          </h1>
          <p className="mt-7 max-w-[490px] text-base leading-7 text-white/72 md:text-lg">
            Insurance and investment advice built around your life — so the people and plans you care about stay protected through every chapter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-[#e8ce87]">
              Start a conversation <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>
            <a href="https://wa.me/919824277195" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              WhatsApp our team
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-5 text-xs text-white/65">
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-accent" /> IRDAI-aligned guidance</span>
            <span className="flex items-center gap-2"><Clock3 size={15} className="text-accent" /> Human support, always</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/50 lg:flex">
        <span className="h-px w-12 bg-white/30" /> Scroll to explore
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-border bg-card">
      <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {[
          ['25+', 'years of trusted advice'],
          ['10k+', 'families and businesses'],
          ['₹120 Cr+', 'assets guided'],
          ['4.9/5', 'client experience rating']
        ].map(([stat, label], index) => (
          <div className="px-4 py-7 first:pl-0 md:px-8 md:py-8" key={stat}>
            <p className="font-display text-3xl text-primary md:text-4xl">{stat}</p>
            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="section-shell grid items-center gap-14 md:grid-cols-[.95fr_1.05fr] md:gap-24">
        <div className="relative">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-accent/35" />
          <div className="relative rounded-[2rem] bg-[#d9e5dc] p-4 pb-16 dark:bg-[#1c3a35]">
            <div className="flex aspect-[4/4.5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#204c4a] p-8 text-[#f7f2e8]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[.18em]">
                <span>Mangalam / 2000—2025</span><span className="text-accent">01</span>
              </div>
              <div>
                <p className="font-display text-5xl leading-[.95]">Better Decisons<br />Begin With<br /><i>Better Thinking.</i></p>
                <div className="mt-6 h-px w-20 bg-accent" />
              </div>
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[200px] rounded-2xl bg-card p-5 text-foreground surface-shadow">
              <p className="font-display text-3xl text-secondary">25</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">years of helping people plan with confidence</p>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow text-secondary">A different kind of advisory</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.08] tracking-[-.035em] text-primary md:text-6xl">
            The best plans are built around people, not products.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground">
            Mangalam was founded on a simple belief: financial advice should make life feel lighter. We ask better questions, explain the fine print and stay close enough to help when it matters.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <div className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-primary">Independent thinking</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Recommendations shaped by your goals, not a sales script.</p>
            </div>
            <div className="border-l-2 border-secondary pl-4">
              <p className="font-semibold text-primary">Long-term presence</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">The same calm, responsive team through every milestone.</p>
            </div>
          </div>
          <Link href="/about" className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-secondary">
            Why families choose Mangalam <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[#e8eee9] py-24 dark:bg-[#142d2b] md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-secondary">Your complete financial picture</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-.035em] text-primary md:text-6xl">
              Protection for today.<br /><span className="text-secondary">Possibility for later.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            One trusted partner for the decisions that shape your family, your work and your future.
          </p>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, description, icon: Icon, number }) => (
            <Link key={title} href={`/services/${slug}`} className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#c9d8cd] bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_14px_30px_rgba(22,77,65,.11)] dark:border-border dark:hover:border-secondary">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-secondary opacity-0 transition group-hover:opacity-100">
                  Explore <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-secondary">The Mangalam difference</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-.035em] text-primary md:text-6xl">
            You deserve an advisor who thinks beyond the policy.
          </h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, body, Icon], i) => {
            const IconComponent = Icon as React.ElementType;
            return (
              <div key={title as string} className="border-t border-border pt-5">
                <div className="flex items-center justify-between">
                  <IconComponent size={21} className="text-secondary" strokeWidth={1.6} />
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold text-primary">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body as string}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-12">
          <Link href="/why-us" className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
            Read more about our approach <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border bg-muted/45 py-16">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-secondary">Backed by a wide market view</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              We compare across a considered panel of India’s most trusted insurers and investment partners.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 md:ml-10">
            {partners.map((partner) => (
              <div key={partner} className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-center font-semibold tracking-tight text-primary/70">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="overflow-hidden bg-primary py-24 text-[#f7f2e8] md:py-32">
      <div className="section-shell grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-center">
        <div>
          <p className="eyebrow text-accent">In their words</p>
          <p className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            “For the first time, our finances feel like one thoughtful plan — not ten disconnected decisions.”
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent text-sm font-bold text-primary">RS</div>
            <div>
              <p className="text-sm font-semibold">Rohan Shah</p>
              <p className="text-xs text-white/55">Business owner, Ahmedabad</p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-[310px] items-end justify-end overflow-hidden rounded-[2rem] bg-[#173b43] p-8">
          <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border-[34px] border-accent/30" />
          <div className="absolute right-24 top-20 h-44 w-44 rounded-full border-[20px] border-secondary/40" />
          <Quote className="absolute left-8 top-8 text-accent/80" size={48} />
          <div className="relative max-w-xs">
            <p className="text-sm leading-6 text-white/75">
              “They never made us feel rushed. We understood what we were choosing, and why.”
            </p>
            <div className="mt-7 h-px w-16 bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

 const submit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSubmitting(true);

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    city: formData.get("city"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzwW3mTihks0HyAeU3DY270tvj6e9K2UQIUDNxpNkzUdIaj8XYe71tZbSrgkd1bky4L/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(data),
      }
    );

    form.reset();
    setSubmitted(true);
  } catch (error) {
    alert("Failed to send enquiry. Please try again.");
    console.error(error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section className="bg-[#e8eee9] py-24 dark:bg-[#142d2b] md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-secondary">Start with a conversation</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-.035em] text-primary md:text-6xl">
            A clearer next step is one message away.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            Tell us a little about what you are planning. We will bring the right questions — and a useful first view — to the conversation.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href="tel:+919824277195" className="flex items-center gap-3 font-semibold text-primary">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Phone size={16} /></span> +91 98242 77195
            </a>
            <a href="tel:+917043177791" className="flex items-center gap-3 font-semibold text-primary">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Phone size={16} /></span> +91 70431 77791
            </a>
            <a href="mailto:akgoswami59@gmail.com" className="flex items-center gap-3 font-semibold text-primary">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Mail size={16} /></span> akgoswami59@gmail.com
            </a>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-[#c9d8cd] bg-card p-6 surface-shadow dark:border-border md:p-9">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary/12 text-secondary">
                <Check size={30} />
              </div>
              <h3 className="mt-7 font-display text-4xl text-primary">We’ll be in touch.</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Thank you for trusting us with the first step. A Mangalam advisor will reach out within one working day.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-bold text-secondary underline underline-offset-4">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="font-display text-2xl text-primary">Let’s make a plan for what’s next.</p>
                <p className="mt-1 text-sm text-muted-foreground">No obligation. Just useful advice.</p>
              </div>
              <label className="grid gap-2 text-xs font-bold text-primary">
                Full name
                <input required name="name" placeholder="Your name" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-primary">
                Phone number
                <input required name="phone" type="tel" placeholder="+91" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-primary">
                Email address
                <input required name="email" type="email" placeholder="you@example.com" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-primary">
                City
                <input required name="city" placeholder="Ahmedabad" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">
                I’m interested in
                <select required name="service" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">
                Tell us a little more
                <textarea name="message" placeholder="What would you like to plan for?" className="min-h-24 resize-y rounded-lg border-input bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
              </label>
              <button disabled={submitting} type="submit" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-bold text-white transition hover:bg-[#0e5a48] disabled:opacity-60 sm:col-span-2">
                {submitting ? 'Sending your enquiry…' : <>Request my free consultation <ArrowRight size={16} className="transition group-hover:translate-x-1" /></>}
              </button>
              <p className="text-center text-[11px] leading-5 text-muted-foreground sm:col-span-2">
                By submitting, you agree to be contacted by the Mangalam team. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-secondary">Questions, answered simply</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">You’re allowed to ask.</h2>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
            Good advice begins with a conversation that leaves nothing unclear.
          </p>
          <Link href="/contact" className="mt-8 flex items-center gap-3 text-sm font-semibold text-secondary">
            <CircleHelp size={18} /> Speak to an advisor
          </Link>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([question, answer], i) => (
            <div key={question}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold text-primary" aria-expanded={open === i}>
                <span>{question}</span>
                <ChevronDown size={18} className={`shrink-0 text-secondary transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="max-w-2xl pb-6 pr-8 text-sm leading-6 text-muted-foreground">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="bg-muted/45 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow text-secondary">From the Mangalam desk</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-.03em] text-primary md:text-5xl">Useful thoughts for the road ahead.</h2>
          </div>
          <Link href="/insights" className="hidden items-center gap-2 text-sm font-bold text-secondary md:flex">
            View all insights <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <article key={article.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className={`relative h-44 bg-gradient-to-br ${article.tone} p-5`}>
                <span className="rounded-full bg-card/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-primary">{article.category}</span>
                <div className="absolute bottom-5 left-5 font-display text-5xl text-primary/20">M</div>
                <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border-8 border-secondary/25" />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{article.date} <span className="mx-2">·</span> {article.read}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-primary transition group-hover:text-secondary">{article.title}</h3>
                <Link href="/insights" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-secondary">
                  Read perspective <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SiteLayout transparentHeader>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyUs />
      <Partners />
      <Testimonial />
      <QuoteForm />
      <FAQ />
      <Insights />
    </SiteLayout>
  );
}
