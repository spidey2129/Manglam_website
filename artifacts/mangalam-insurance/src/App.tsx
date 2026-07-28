import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';
import {
  ArrowRight, Award, BarChart3, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp,
  Clock3, Compass, Headphones, HeartPulse, Home as HomeIcon, IndianRupee, Landmark, LifeBuoy,
  Linkedin, LockKeyhole, Mail, Menu, Moon, Phone, PiggyBank, Plane, Quote, ShieldCheck,
  Sparkles, Sun, Target, TrendingUp, Users, WalletCards, X, Zap
} from 'lucide-react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import mangalamLogo from '/mangalam-logo-gold-white.png';

const queryClient = new QueryClient();

type IconType = typeof ShieldCheck;

const services: { title: string; description: string; icon: IconType; number: string }[] = [
  { title: 'Life Insurance', description: 'A promise your family can count on, whatever tomorrow brings.', icon: ShieldCheck, number: '01' },
  { title: 'Health Insurance', description: 'Thoughtful cover for treatment, recovery and peace of mind.', icon: HeartPulse, number: '02' },
  { title: 'Motor Insurance', description: 'Keep moving with protection designed around your journeys.', icon: Compass, number: '03' },
  { title: 'Home Insurance', description: 'Protect the place where your most important memories live.', icon: HomeIcon, number: '04' },
  { title: 'Travel Insurance', description: 'Go further knowing the unexpected is already considered.', icon: Plane, number: '05' },
  { title: 'Business Insurance', description: 'Resilient businesses begin with a considered risk strategy.', icon: BriefcaseBusiness, number: '06' },
  { title: 'Mutual Funds', description: 'Build diversified wealth with investment choices aligned to your goals.', icon: TrendingUp, number: '07' },
  { title: 'SIPs', description: 'Invest consistently over time with a simple, disciplined path to growth.', icon: PiggyBank, number: '08' },
];

const benefits = [
  ['Advice that starts with listening', 'No off-the-shelf answers. We understand your people, priorities and pace first.', Headphones],
  ['One relationship, for life', 'From your first policy to your next milestone, your advisor stays in the picture.', Users],
  ['Clarity over complexity', 'Plain-language recommendations, clean comparisons and no pressure to decide today.', Sparkles],
  ['Partners you can trust', 'Access to a carefully selected universe of India’s leading insurers and fund houses.', Award],
  ['A plan for every chapter', 'Protection, growth and legacy advice that evolves as your life does.', BarChart3],
  ['Fast when it matters', 'Responsive support for claims, renewals and the moments that cannot wait.', Zap],
  ['Details, handled properly', 'We keep your cover organised, reviewed and ready when you need it.', LockKeyhole],
  ['A local team with a wide view', 'Rooted in Gujarat. Connected to the best thinking across the market.', Landmark],
];

const partners = ['LIC', 'HDFC Life', 'TATA AIA', 'SBI Life', 'ICICI Prudential', 'Bajaj Allianz', 'Max Life', 'Aditya Birla'];

const faqs = [
  ['Why should I work with an advisor instead of buying online?', 'Online tools can show you a price. An advisor helps you decide what is appropriate, compare the details that matter and stay with you when a claim or life change needs attention.'],
  ['Do you help with both insurance and investments?', 'Yes. Mangalam brings protection and wealth planning into one clear conversation, so your policies, savings and long-term goals work together.'],
  ['How much does a consultation cost?', 'Your first conversation is complimentary. We use it to understand where you are today and suggest the most useful next step without any obligation.'],
  ['Can you review the policies I already have?', 'Absolutely. A policy review is often the simplest way to find gaps, overlaps or opportunities to make your existing plan work harder.'],
  ['How soon will someone get back to me?', 'A member of our advisory team will reach out during business hours, usually within one working day.'],
];

const articles = [
  { category: 'Protection', title: 'The quiet cost of being underinsured', date: '06 Jun 2024', read: '4 min read', tone: 'from-[#d8e7df] to-[#f4ebd7]' },
  { category: 'Investing', title: 'A calmer way to think about market volatility', date: '22 May 2024', read: '5 min read', tone: 'from-[#d6e2ee] to-[#e7dfce]' },
  { category: 'Planning', title: 'Five conversations to have before retirement', date: '09 May 2024', read: '6 min read', tone: 'from-[#e8dfd2] to-[#dce8de]' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`group block ${light ? 'drop-shadow-[0_2px_12px_rgba(0,0,0,.25)]' : ''}`} data-testid="link-logo" aria-label="Mangalam Insurance & Investment">
      <span className="brand-logo-crop" aria-hidden="true">
        <img src={mangalamLogo} alt="" className="brand-logo-image transition-transform duration-300 group-hover:scale-[1.03]" />
      </span>
    </a>
  );
}

function Header({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [['About us', '#about'], ['Services', '#services'], ['Why Mangalam', '#why-us'], ['Insights', '#insights']];
  return (
    <header className="absolute left-0 right-0 top-0 z-40 text-white">
      <div className="section-shell flex h-[82px] items-center justify-between">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-white/75 transition hover:text-white" data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button onClick={() => setDark(!dark)} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10" aria-label="Toggle dark mode" data-testid="button-theme-toggle">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-primary transition hover:bg-[#e8ce87]" data-testid="link-header-quote">
            Get a free quote <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-white/25 md:hidden" aria-label="Toggle menu" data-testid="button-mobile-menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && <div className="mx-3 rounded-2xl border border-white/15 bg-primary/95 p-5 shadow-2xl md:hidden">
        <nav className="grid gap-1" aria-label="Mobile navigation">
          {links.map(([label, href]) => <a onClick={() => setMobileOpen(false)} key={href} href={href} className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/10" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
          <a onClick={() => setMobileOpen(false)} href="#quote" className="mt-3 flex items-center justify-between rounded-lg bg-accent px-3 py-3 text-sm font-bold text-primary" data-testid="link-mobile-quote">Get a free quote <ArrowRight size={16} /></a>
        </nav>
      </div>}
    </header>
  );
}

function Hero({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  return <section id="top" className="hero-image relative flex min-h-[720px] items-end overflow-hidden bg-[#112c46] pb-20 pt-32 text-white md:min-h-[790px] md:items-center md:pb-0">
    <div className="hero-grid absolute inset-0 opacity-30" />
    <Header dark={dark} setDark={setDark} />
    <div className="section-shell relative z-10">
      <div className="max-w-[660px] reveal">
        <div className="mb-7 flex items-center gap-3 text-accent"><span className="h-px w-10 bg-accent" /><span className="eyebrow">Advice for what matters most</span></div>
        <h1 className="font-display text-[clamp(3.5rem,8vw,6.75rem)] leading-[.98] tracking-[-.055em] text-[#faf6ec]">Protect Today.<br /><span className="text-accent">Secure Tomorrow.</span></h1>
        <p className="mt-7 max-w-[490px] text-base leading-7 text-white/72 md:text-lg">Insurance and investment advice built around your life — so the people and plans you care about stay protected through every chapter.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#quote" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-[#e8ce87]" data-testid="link-hero-quote">Start a conversation <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a>
          <a href="https://wa.me/919824277195" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" data-testid="link-hero-whatsapp">WhatsApp our team</a>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-5 text-xs text-white/65">
          <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-accent" /> IRDAI-aligned guidance</span>
          <span className="flex items-center gap-2"><Clock3 size={15} className="text-accent" /> Human support, always</span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/50 lg:flex"><span className="h-px w-12 bg-white/30" /> Scroll to explore</div>
  </section>;
}

function TrustStrip() {
  return <section className="border-b border-border bg-card">
    <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
      {[['25+', 'years of trusted advice'], ['10k+', 'families and businesses'], ['₹120 Cr+', 'assets guided'], ['4.9/5', 'client experience rating']].map(([stat, label], index) => <div className="px-4 py-7 first:pl-0 md:px-8 md:py-8" key={stat} data-testid={`text-trust-stat-${index}`}>
        <p className="font-display text-3xl text-primary md:text-4xl">{stat}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p>
      </div>)}
    </div>
  </section>;
}

function About() {
  return <section id="about" className="overflow-hidden py-24 md:py-32">
    <div className="section-shell grid items-center gap-14 md:grid-cols-[.95fr_1.05fr] md:gap-24">
      <div className="relative">
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-accent/35" />
        <div className="relative rounded-[2rem] bg-[#d9e5dc] p-4 pb-16 dark:bg-[#1c3a35]">
          <div className="flex aspect-[4/4.5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#204c4a] p-8 text-[#f7f2e8]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[.18em]"><span>Mangalam / 2000—2025</span><span className="text-accent">01</span></div>
            <div><p className="font-display text-5xl leading-[.95]">Good advice<br />feels like<br /><i>clarity.</i></p><div className="mt-6 h-px w-20 bg-accent" /></div>
          </div>
          <div className="absolute -bottom-5 right-4 max-w-[200px] rounded-2xl bg-card p-5 text-foreground surface-shadow"><p className="font-display text-3xl text-secondary">25</p><p className="mt-1 text-xs leading-5 text-muted-foreground">years of helping people plan with confidence</p></div>
        </div>
      </div>
      <div>
        <p className="eyebrow text-secondary">A different kind of advisory</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.08] tracking-[-.035em] text-primary md:text-6xl">The best plans are built around people, not products.</h2>
        <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground">Mangalam was founded on a simple belief: financial advice should make life feel lighter. We ask better questions, explain the fine print and stay close enough to help when it matters.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          <div className="border-l-2 border-accent pl-4"><p className="font-semibold text-primary">Independent thinking</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Recommendations shaped by your goals, not a sales script.</p></div>
          <div className="border-l-2 border-secondary pl-4"><p className="font-semibold text-primary">Long-term presence</p><p className="mt-1 text-sm leading-6 text-muted-foreground">The same calm, responsive team through every milestone.</p></div>
        </div>
        <a href="#why-us" className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-secondary" data-testid="link-about-learn-more">Why families choose Mangalam <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
      </div>
    </div>
  </section>;
}

function Services() {
  return <section id="services" className="bg-[#e8eee9] py-24 dark:bg-[#142d2b] md:py-32">
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="eyebrow text-secondary">Your complete financial picture</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-.035em] text-primary md:text-6xl">Protection for today.<br /><span className="text-secondary">Possibility for later.</span></h2></div>
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">One trusted partner for the decisions that shape your family, your work and your future.</p>
      </div>
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {services.map(({ title, description, icon: Icon, number }) => <a href="#quote" key={title} className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#c9d8cd] bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_14px_30px_rgba(22,77,65,.11)]" data-testid={`card-service-${number}`}>
          <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white"><Icon size={21} strokeWidth={1.7} /></span><span className="font-mono text-xs text-muted-foreground">{number}</span></div>
          <div><h3 className="font-display text-xl text-primary">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-secondary opacity-0 transition group-hover:opacity-100">Explore <ArrowRight size={13} /></span></div>
        </a>)}
      </div>
    </div>
  </section>;
}

function WhyUs() {
  return <section id="why-us" className="py-24 md:py-32">
    <div className="section-shell">
      <div className="max-w-2xl"><p className="eyebrow text-secondary">The Mangalam difference</p><h2 className="mt-4 font-display text-4xl leading-tight tracking-[-.035em] text-primary md:text-6xl">You deserve an advisor who thinks beyond the policy.</h2></div>
      <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, body, Icon], i) => <div key={title as string} className="border-t border-border pt-5" data-testid={`card-benefit-${i}`}><div className="flex items-center justify-between"><Icon size={21} className="text-secondary" strokeWidth={1.6} /><span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span></div><h3 className="mt-5 font-semibold text-primary">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body as string}</p></div>)}
      </div>
    </div>
  </section>;
}

function Partners() {
  return <section className="border-y border-border bg-muted/45 py-16"><div className="section-shell"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow text-secondary">Backed by a wide market view</p><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">We compare across a considered panel of India’s most trusted insurers and investment partners.</p></div><div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 md:ml-10">{partners.map((partner, i) => <div key={partner} className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-center font-semibold tracking-tight text-primary/70" data-testid={`text-partner-${i}`}>{partner}</div>)}</div></div></div></section>;
}

function Testimonial() {
  return <section className="overflow-hidden bg-primary py-24 text-[#f7f2e8] md:py-32"><div className="section-shell grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-center"><div><p className="eyebrow text-accent">In their words</p><p className="mt-5 font-display text-4xl leading-tight md:text-5xl">“For the first time, our finances feel like one thoughtful plan — not ten disconnected decisions.”</p><div className="mt-8 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-accent text-sm font-bold text-primary">RS</div><div><p className="text-sm font-semibold">Rohan Shah</p><p className="text-xs text-white/55">Business owner, Ahmedabad</p></div></div></div><div className="relative flex min-h-[310px] items-end justify-end overflow-hidden rounded-[2rem] bg-[#173b43] p-8"><div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border-[34px] border-accent/30" /><div className="absolute right-24 top-20 h-44 w-44 rounded-full border-[20px] border-secondary/40" /><Quote className="absolute left-8 top-8 text-accent/80" size={48} /><div className="relative max-w-xs"><p className="text-sm leading-6 text-white/75">“They never made us feel rushed. We understood what we were choosing, and why.”</p><div className="mt-7 h-px w-16 bg-accent" /></div></div></div></section>;
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitting(true); window.setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 650); };
  return <section id="quote" className="bg-[#e8eee9] py-24 dark:bg-[#142d2b] md:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-secondary">Start with a conversation</p><h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-.035em] text-primary md:text-6xl">A clearer next step is one message away.</h2><p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Tell us a little about what you are planning. We will bring the right questions — and a useful first view — to the conversation.</p><div className="mt-10 space-y-4 text-sm"><a href="tel:+919824277195" className="flex items-center gap-3 font-semibold text-primary" data-testid="link-quote-phone-1"><span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Phone size={16} /></span> +91 98242 77195</a><a href="tel:+917043177791" className="flex items-center gap-3 font-semibold text-primary" data-testid="link-quote-phone-2"><span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Phone size={16} /></span> +91 70431 77791</a><a href="mailto:akgoswami59@gmail.com" className="flex items-center gap-3 font-semibold text-primary" data-testid="link-quote-email"><span className="grid h-9 w-9 place-items-center rounded-full bg-card text-secondary"><Mail size={16} /></span> akgoswami59@gmail.com</a></div></div>
      <div className="rounded-[1.75rem] border border-[#c9d8cd] bg-card p-6 surface-shadow md:p-9">{submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><div className="grid h-16 w-16 place-items-center rounded-full bg-secondary/12 text-secondary"><Check size={30} /></div><h3 className="mt-7 font-display text-4xl text-primary">We’ll be in touch.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Thank you for trusting us with the first step. A Mangalam advisor will reach out within one working day.</p><button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-bold text-secondary underline underline-offset-4" data-testid="button-send-another">Send another enquiry</button></div> : <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2"><div className="sm:col-span-2"><p className="font-display text-2xl text-primary">Let’s make a plan for what’s next.</p><p className="mt-1 text-sm text-muted-foreground">No obligation. Just useful advice.</p></div><label className="grid gap-2 text-xs font-bold text-primary">Full name<input required name="name" placeholder="Your name" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" data-testid="input-full-name" /></label><label className="grid gap-2 text-xs font-bold text-primary">Phone number<input required name="phone" type="tel" placeholder="+91" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" data-testid="input-phone" /></label><label className="grid gap-2 text-xs font-bold text-primary">Email address<input required name="email" type="email" placeholder="you@example.com" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" data-testid="input-email" /></label><label className="grid gap-2 text-xs font-bold text-primary">City<input required name="city" placeholder="Ahmedabad" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" data-testid="input-city" /></label><label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">I’m interested in<select required name="service" className="h-12 rounded-lg border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" defaultValue="" data-testid="select-service"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">Tell us a little more <textarea name="message" placeholder="What would you like to plan for?" className="min-h-24 resize-y rounded-lg border-input bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" data-testid="textarea-message" /></label><button disabled={submitting} type="submit" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-bold text-white transition hover:bg-[#0e5a48] disabled:opacity-60 sm:col-span-2" data-testid="button-submit-quote">{submitting ? 'Sending your enquiry…' : <>Request my free consultation <ArrowRight size={16} className="transition group-hover:translate-x-1" /></>}</button><p className="text-center text-[11px] leading-5 text-muted-foreground sm:col-span-2">By submitting, you agree to be contacted by the Mangalam team. We respect your privacy.</p></form>}</div>
    </div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="py-24 md:py-32"><div className="section-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-secondary">Questions, answered simply</p><h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">You’re allowed to ask.</h2><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Good advice begins with a conversation that leaves nothing unclear.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-secondary"><CircleHelp size={18} /> Speak to an advisor</div></div><div className="divide-y divide-border border-y border-border">{faqs.map(([question, answer], i) => <div key={question}><button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold text-primary" aria-expanded={open === i} data-testid={`button-faq-${i}`}><span>{question}</span><ChevronDown size={18} className={`shrink-0 text-secondary transition ${open === i ? 'rotate-180' : ''}`} /></button>{open === i && <p className="max-w-2xl pb-6 pr-8 text-sm leading-6 text-muted-foreground" data-testid={`text-faq-answer-${i}`}>{answer}</p>}</div>)}</div></div></section>;
}

function Insights() {
  return <section id="insights" className="bg-muted/45 py-24 md:py-32"><div className="section-shell"><div className="flex items-end justify-between gap-5"><div><p className="eyebrow text-secondary">From the Mangalam desk</p><h2 className="mt-4 font-display text-4xl tracking-[-.03em] text-primary md:text-5xl">Useful thoughts for the road ahead.</h2></div><a href="#quote" className="hidden items-center gap-2 text-sm font-bold text-secondary md:flex" data-testid="link-all-insights">Talk to us instead <ArrowRight size={16} /></a></div><div className="mt-12 grid gap-5 md:grid-cols-3">{articles.map((article, i) => <article key={article.title} className="group overflow-hidden rounded-2xl border border-border bg-card" data-testid={`card-article-${i}`}><div className={`relative h-44 bg-gradient-to-br ${article.tone} p-5`}><span className="rounded-full bg-card/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-primary">{article.category}</span><div className="absolute bottom-5 left-5 font-display text-5xl text-primary/20">M</div><div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border-8 border-secondary/25" /></div><div className="p-6"><p className="text-xs text-muted-foreground">{article.date} <span className="mx-2">·</span> {article.read}</p><h3 className="mt-3 font-display text-2xl leading-tight text-primary transition group-hover:text-secondary">{article.title}</h3><a href="#quote" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-secondary" data-testid={`link-article-${i}`}>Read perspective <ArrowRight size={14} /></a></div></article>)}</div></div></section>;
}

function ContactFooter() {
  return <footer className="bg-[#10283f] pt-20 text-white"><div className="section-shell grid gap-12 pb-16 md:grid-cols-[1.2fr_.8fr_.8fr]"><div><Logo light /><p className="mt-7 max-w-sm text-sm leading-6 text-white/60">Thoughtful insurance and investment advice for the lives, families and businesses you’re building.</p><div className="mt-7 flex gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent" aria-label="LinkedIn" data-testid="link-social-linkedin"><Linkedin size={16} /></a><a href="https://wa.me/919824277195" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent" aria-label="WhatsApp" data-testid="link-social-whatsapp">W</a></div></div><div><p className="eyebrow text-accent">Contact</p><div className="mt-5 space-y-4 text-sm text-white/75"><a href="tel:+919824277195" className="block hover:text-white" data-testid="link-footer-phone-1">+91 98242 77195</a><a href="tel:+917043177791" className="block hover:text-white" data-testid="link-footer-phone-2">+91 70431 77791</a><a href="mailto:akgoswami59@gmail.com" className="block hover:text-white" data-testid="link-footer-email">akgoswami59@gmail.com</a><p className="leading-6">Plot No. 945/2, Sector 7/C,<br />Gandhinagar, Opposite Pathikashram,<br />Gujarat 382007</p></div></div><div><p className="eyebrow text-accent">Visit / hours</p><p className="mt-5 text-sm leading-6 text-white/75">Monday — Saturday<br />10:00 am — 6:00 pm</p><a href="https://maps.app.goo.gl/yyLpdQnwRH6ZQUyLA" target="_blank" rel="noreferrer" className="mt-5 block overflow-hidden rounded-xl border border-white/15" data-testid="link-map" aria-label="Open in Google Maps"><iframe src="https://maps.google.com/maps?q=Plot+945%2F2+Sector+7%2FC+Gandhinagar+Gujarat+382007+Opposite+Pathikashram&output=embed&z=16" width="100%" height="160" style={{border:0,display:'block'}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Mangalam Insurance office location" /></a></div></div><div className="border-t border-white/10"><div className="section-shell flex flex-col justify-between gap-3 py-6 text-xs text-white/40 md:flex-row"><p>© 2025 Mangalam Insurance & Investment. All rights reserved.</p><div className="flex gap-5"><a href="#top" className="hover:text-white" data-testid="link-footer-privacy">Privacy</a><a href="#top" className="hover:text-white" data-testid="link-footer-terms">Terms</a><a href="#top" className="hover:text-white" data-testid="link-footer-top">Back to top ↑</a></div></div></div></footer>;
}

function FloatingActions() {
  return <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3"><a href="tel:+919824277195" className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-xl transition hover:-translate-y-1" aria-label="Call Mangalam" data-testid="button-floating-call"><Phone size={19} /></a><a href="https://wa.me/919824277195" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-white shadow-xl transition hover:-translate-y-1" aria-label="WhatsApp Mangalam" data-testid="button-floating-whatsapp">W</a></div>;
}

function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem('mangalam-theme'); const isDark = saved === 'dark'; setDark(isDark); document.documentElement.classList.toggle('dark', isDark); }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('mangalam-theme', dark ? 'dark' : 'light'); }, [dark]);
  return <div className="grain min-h-[100dvh] overflow-x-hidden"><Hero dark={dark} setDark={setDark} /><TrustStrip /><About /><Services /><WhyUs /><Partners /><Testimonial /><QuoteForm /><FAQ /><Insights /><ContactFooter /><FloatingActions /></div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;