import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Instagram, Facebook, Mail, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import mangalamLogo from '/mangalam-logo-gold-white.png';

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Logo({ light = false, darkVariant = false }: { light?: boolean; darkVariant?: boolean }) {
  const filterStyle = darkVariant
    ? { filter: 'brightness(0) saturate(100%) invert(13%) sepia(21%) saturate(3100%) hue-rotate(185deg) brightness(93%) contrast(92%)' }
    : {};

  return (
    <Link href="/" className={`group block ${light ? 'drop-shadow-[0_2px_12px_rgba(0,0,0,.25)]' : ''}`} aria-label="Mangalam Insurance & Investment">
      <span className="brand-logo-crop" aria-hidden="true">
        <img src={mangalamLogo} alt="" className="brand-logo-image transition-transform duration-300 group-hover:scale-[1.03]" style={filterStyle} />
      </span>
    </Link>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('mangalam-theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('mangalam-theme', newDark ? 'dark' : 'light');
  };

  const links = [
    ['About us', '/about'],
    ['Services', '/services'],
    ['Why Mangalam', '/why-us'],
    ['Insights', '/insights'],
  ];

  const headerClass = transparent
    ? 'absolute left-0 right-0 top-0 z-50 text-white'
    : 'sticky top-0 z-50 bg-card border-b border-border shadow-sm text-foreground';

  const logoLight = transparent || dark;
  const darkVariantLogo = !transparent && !dark;
  const linkClass = transparent
    ? 'text-white/75 hover:text-white'
    : 'text-muted-foreground hover:text-primary';
  const buttonClass = transparent
    ? 'border-white/20 text-white/80 hover:bg-white/10'
    : 'border-border text-muted-foreground hover:bg-muted';

  return (
    <header className={headerClass}>
      <div className="section-shell flex h-[82px] items-center justify-between">
        <Logo light={logoLight} darkVariant={darkVariantLogo} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`text-sm transition ${linkClass}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className={`grid h-9 w-9 place-items-center rounded-full border transition ${buttonClass}`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-primary transition hover:bg-[#e8ce87]"
          >
            Get a free quote <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${buttonClass}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mx-3 rounded-2xl border border-border bg-card p-5 shadow-2xl md:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link
                onClick={() => setMobileOpen(false)}
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-sm text-foreground hover:bg-muted"
              >
                {label}
              </Link>
            ))}
            <Link
              onClick={() => setMobileOpen(false)}
              href="/contact"
              className="mt-3 flex items-center justify-between rounded-lg bg-accent px-3 py-3 text-sm font-bold text-primary"
            >
              Get a free quote <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setMobileOpen(false);
              }}
              className="mt-2 flex items-center justify-between rounded-lg px-3 py-3 text-sm text-foreground hover:bg-muted"
            >
              {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function ContactFooter() {
  return (
    <footer className="bg-[#10283f] pt-20 text-white">
      <div className="section-shell grid gap-12 pb-16 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Logo light />
          <p className="mt-7 max-w-sm text-sm leading-6 text-white/60">
            Thoughtful insurance and investment advice for the lives, families and businesses you’re building.
          </p>

          <div className="mt-7 flex gap-3">
  <a
    href="https://www.instagram.com/mangalam_insurance/"
    target="_blank"
    rel="noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
    aria-label="Instagram"
  >
    <Instagram size={16} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61577985164909"
    target="_blank"
    rel="noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
    aria-label="Facebook"
  >
    <Facebook size={16} />
  </a>

  <a
    href="https://wa.me/919824277195"
    target="_blank"
    rel="noreferrer"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent font-bold"
    aria-label="WhatsApp"
  >
    W
  </a>
</div>
          
        </div>
        <div>
          <p className="eyebrow text-accent">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-white/75">
            <a href="tel:+919824277195" className="block hover:text-white">
              +91 98242 77195
            </a>
            <a href="tel:+917043177791" className="block hover:text-white">
              +91 70431 77791
            </a>
            <a href="mailto:akgoswami59@gmail.com" className="block hover:text-white">
              akgoswami59@gmail.com
            </a>
            <p className="leading-6">
              Plot No. 945/2, Sector 7/C,<br />
              Gandhinagar, Opposite Pathikashram,<br />
              Gujarat 382007
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow text-accent">Visit / hours</p>
          <p className="mt-5 text-sm leading-6 text-white/75">
            Monday — Saturday<br />
            09:30 am — 6:30 pm
          </p>
          <a
            href="https://maps.app.goo.gl/K1ne147tcBYv69y16?g_st=ac"
            target="_blank"
            rel="noreferrer"
            className="mt-5 block overflow-hidden rounded-xl border border-white/15"
            aria-label="Open in Google Maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d229.17293748369968!2d72.641832!3d23.215160482072132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDEyJzU0LjUiTiA3MsKwMzgnMzAuNiJF!5e0!3m2!1sen!2sin!4v1786005581895!5m2!1sen!2sin"
              width="100%"
              height="160"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Mangalam Insurance office location"
            />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col justify-between gap-3 py-6 text-xs text-white/40 md:flex-row">
          <p>© 2026 Mangalam Insurance & Investment. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <button onClick={() => window.scrollTo(0, 0)} className="hover:text-white">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="tel:+919824277195"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-xl transition hover:-translate-y-1"
        aria-label="Call Mangalam"
      >
        <Phone size={19} />
      </a>
      <a
        href="https://wa.me/919824277195"
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-white shadow-xl transition hover:-translate-y-1 font-bold text-lg"
        aria-label="WhatsApp Mangalam"
      >
        W
      </a>
    </div>
  );
}

export function SiteLayout({ children, transparentHeader = false }: { children: React.ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="grain min-h-[100dvh] overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <SiteHeader transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <ContactFooter />
      <FloatingActions />
    </div>
  );
}
