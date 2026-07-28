import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/layout';
import { PageHero } from '@/components/page-hero';
import { articles } from '@/lib/data';

export default function InsightsPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Protection', 'Investing', 'Planning'];
  
  const filteredArticles = filter === 'All' 
    ? articles 
    : articles.filter(a => a.category === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights & Advice"
        title="Thinking that helps you plan better."
        description="Our perspectives on the changing landscape of insurance, wealth creation, and financial planning in India."
      />

      <section className="py-24 md:py-32">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between mb-12">
            <h2 className="font-display text-3xl text-primary">Latest Articles</h2>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat 
                      ? 'bg-secondary text-white shadow-sm' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl border border-border bg-card flex flex-col">
                <div className={`relative h-48 bg-gradient-to-br ${article.tone} p-6`}>
                  <span className="rounded-full bg-card/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-primary">
                    {article.category}
                  </span>
                  <div className="absolute bottom-6 left-6 font-display text-6xl text-primary/10">M</div>
                  <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full border-[10px] border-secondary/20" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground">
                    {article.date} <span className="mx-2">·</span> {article.read}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-primary transition group-hover:text-secondary flex-1">
                    {article.title}
                  </h3>
                  <div className="mt-8 pt-4 border-t border-border">
                    {/* Rather than linking to a new page, keeping it simple as requested or a modal. We'll just link to contact for now as a "discuss this" or just a placeholder link */}
                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-secondary">
                      Discuss this topic <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 bg-muted/30 rounded-2xl border border-border">
              <p className="text-muted-foreground">No articles found for this category.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-4 text-sm font-bold text-secondary underline underline-offset-4"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#173b43] py-24 text-white text-center">
        <div className="section-shell max-w-3xl reveal">
          <p className="eyebrow text-accent mb-4">Have specific questions?</p>
          <h2 className="font-display text-4xl md:text-5xl">Let's apply these insights to your specific situation.</h2>
          <Link href="/contact" className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:bg-[#e8ce87]">
            Speak to an advisor <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
