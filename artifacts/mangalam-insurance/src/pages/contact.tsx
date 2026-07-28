import { useState, useEffect } from 'react';
import { Check, Mail, Phone, Linkedin, ArrowRight, Link } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/data';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  useEffect(() => {
    // Extract service from query param if available
    const searchParams = new URLSearchParams(window.location.search);
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // match the slug to the title
      const found = services.find(s => s.slug === serviceParam);
      if (found) setPreselectedService(found.title);
    }
  }, []);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's start the conversation."
        description="Whether you have a quick question or need a comprehensive portfolio review, we're here to help. No pressure, just good advice."
      />

      <section className="py-24 md:py-32 bg-muted/20">
        <div className="section-shell grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="font-display text-3xl text-primary md:text-4xl mb-8">Reach out directly</h2>
            
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-secondary mb-3">Call or WhatsApp</p>
                <div className="space-y-4">
                  <a href="tel:+919824277195" className="flex items-center gap-4 text-base font-semibold text-primary hover:text-secondary transition">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-sm border border-border text-secondary"><Phone size={18} /></span>
                    +91 98242 77195
                  </a>
                  <a href="tel:+917043177791" className="flex items-center gap-4 text-base font-semibold text-primary hover:text-secondary transition">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-sm border border-border text-secondary"><Phone size={18} /></span>
                    +91 70431 77791
                  </a>
                  <a href="https://wa.me/919824277195" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-base font-semibold text-primary hover:text-secondary transition">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-sm border border-border text-secondary font-bold text-xl">W</span>
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div>
                <p className="eyebrow text-secondary mb-3">Email</p>
                <a href="mailto:akgoswami59@gmail.com" className="flex items-center gap-4 text-base font-semibold text-primary hover:text-secondary transition">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-sm border border-border text-secondary"><Mail size={18} /></span>
                  akgoswami59@gmail.com
                </a>
              </div>

              <div>
                <p className="eyebrow text-secondary mb-3">Visit Us</p>
                <div className="text-sm leading-6 text-muted-foreground bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <p className="font-semibold text-primary mb-2">Mangalam Insurance & Investment</p>
                  <p>Plot No. 945/2, Sector 7/C,</p>
                  <p>Opposite Pathikashram,</p>
                  <p>Gandhinagar, Gujarat 382007</p>
                  <p className="mt-4 font-semibold text-primary">Hours:</p>
                  <p>Monday — Saturday: 10:00 am — 6:00 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-sm h-[200px]">
                <iframe
                  src="https://maps.google.com/maps?q=Plot+945%2F2+Sector+7%2FC+Gandhinagar+Gujarat+382007+Opposite+Pathikashram&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mangalam Insurance office location"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12 shadow-[0_20px_60px_rgba(28,43,66,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-secondary/5 rounded-bl-full -z-10" />
            
            {submitted ? (
              <div className="flex h-full min-h-[500px] flex-col items-center justify-center text-center reveal">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-secondary/10 text-secondary">
                  <Check size={36} strokeWidth={2.5} />
                </div>
                <h3 className="mt-8 font-display text-4xl text-primary">We'll be in touch.</h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                  Thank you for reaching out. A Mangalam advisor will review your message and contact you within one working day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-secondary hover:text-primary transition"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2 relative z-10">
                <div className="sm:col-span-2 mb-2">
                  <h3 className="font-display text-3xl text-primary">Request a consultation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Tell us a little about yourself and what you are planning for.</p>
                </div>
                
                <label className="grid gap-2 text-xs font-bold text-primary">
                  Full name *
                  <input required name="name" placeholder="Your name" className="h-12 rounded-xl border border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
                </label>
                
                <label className="grid gap-2 text-xs font-bold text-primary">
                  Phone number *
                  <input required name="phone" type="tel" placeholder="+91" className="h-12 rounded-xl border border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
                </label>
                
                <label className="grid gap-2 text-xs font-bold text-primary">
                  Email address
                  <input name="email" type="email" placeholder="you@example.com" className="h-12 rounded-xl border border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
                </label>
                
                <label className="grid gap-2 text-xs font-bold text-primary">
                  City *
                  <input required name="city" placeholder="Ahmedabad" className="h-12 rounded-xl border border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
                </label>
                
                <label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">
                  What are you interested in?
                  <select 
                    required 
                    name="service" 
                    className="h-12 rounded-xl border border-input bg-background px-4 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" 
                    value={preselectedService}
                    onChange={(e) => setPreselectedService(e.target.value)}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="General Portfolio Review">General Portfolio Review</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                
                <label className="grid gap-2 text-xs font-bold text-primary sm:col-span-2">
                  Message
                  <textarea name="message" placeholder="Any specific details we should know before calling?" className="min-h-[120px] resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15" />
                </label>
                
                <button
                  disabled={submitting}
                  type="submit"
                  className="group mt-2 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-secondary px-6 text-sm font-bold text-white transition hover:bg-[#0e5a48] disabled:opacity-70 sm:col-span-2"
                >
                  {submitting ? 'Sending...' : <>Request consultation <ArrowRight size={18} className="transition group-hover:translate-x-1" /></>}
                </button>
                
                <p className="text-center text-xs leading-5 text-muted-foreground sm:col-span-2 mt-2">
                  By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>. We will never spam you.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
