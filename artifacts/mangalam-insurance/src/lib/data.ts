import {
  Award, BarChart3, BriefcaseBusiness, Compass, Headphones, HeartPulse, Home as HomeIcon,
  Landmark, LockKeyhole, PiggyBank, Plane, ShieldCheck, Sparkles, TrendingUp, Users, Zap
} from 'lucide-react';

export const services = [
  { slug: 'life-insurance', title: 'Life Insurance', description: 'A promise your family can count on, whatever tomorrow brings.', icon: ShieldCheck, number: '01' },
  { slug: 'health-insurance', title: 'Health Insurance', description: 'Thoughtful cover for treatment, recovery and peace of mind.', icon: HeartPulse, number: '02' },
  { slug: 'motor-insurance', title: 'Motor Insurance', description: 'Keep moving with protection designed around your journeys.', icon: Compass, number: '03' },
  { slug: 'home-insurance', title: 'Home Insurance', description: 'Protect the place where your most important memories live.', icon: HomeIcon, number: '04' },
  { slug: 'travel-insurance', title: 'Travel Insurance', description: 'Go further knowing the unexpected is already considered.', icon: Plane, number: '05' },
  { slug: 'business-insurance', title: 'Business Insurance', description: 'Resilient businesses begin with a considered risk strategy.', icon: BriefcaseBusiness, number: '06' },
  { slug: 'mutual-funds', title: 'Mutual Funds', description: 'Build diversified wealth with investment choices aligned to your goals.', icon: TrendingUp, number: '07' },
  { slug: 'sips', title: 'SIPs', description: 'Invest consistently over time with a simple, disciplined path to growth.', icon: PiggyBank, number: '08' },
];

export const benefits = [
  ['Advice that starts with listening', 'No off-the-shelf answers. We understand your people, priorities and pace first.', Headphones],
  ['One relationship, for life', 'From your first policy to your next milestone, your advisor stays in the picture.', Users],
  ['Clarity over complexity', 'Plain-language recommendations, clean comparisons and no pressure to decide today.', Sparkles],
  ['Partners you can trust', 'Access to a carefully selected universe of India’s leading insurers and fund houses.', Award],
  ['A plan for every chapter', 'Protection, growth and legacy advice that evolves as your life does.', BarChart3],
  ['Fast when it matters', 'Responsive support for claims, renewals and the moments that cannot wait.', Zap],
  ['Details, handled properly', 'We keep your cover organised, reviewed and ready when you need it.', LockKeyhole],
  ['A local team with a wide view', 'Rooted in Gujarat. Connected to the best thinking across the market.', Landmark],
];

export const partners = ['LIC', 'HDFC Life', 'TATA AIA', 'SBI Life', 'ICICI Prudential', 'Bajaj Allianz', 'Max Life', 'Aditya Birla'];

export const faqs = [
  ['Why should I work with an advisor instead of buying online?', 'Online tools can show you a price. An advisor helps you decide what is appropriate, compare the details that matter and stay with you when a claim or life change needs attention.'],
  ['Do you help with both insurance and investments?', 'Yes. Mangalam brings protection and wealth planning into one clear conversation, so your policies, savings and long-term goals work together.'],
  ['How much does a consultation cost?', 'Your first conversation is complimentary. We use it to understand where you are today and suggest the most useful next step without any obligation.'],
  ['Can you review the policies I already have?', 'Absolutely. A policy review is often the simplest way to find gaps, overlaps or opportunities to make your existing plan work harder.'],
  ['How soon will someone get back to me?', 'A member of our advisory team will reach out during business hours, usually within one working day.'],
];

export const articles = [
  { slug: 'cost-of-underinsured', category: 'Protection', title: 'The quiet cost of being underinsured', date: '06 Jun 2024', read: '4 min read', tone: 'from-[#d8e7df] to-[#f4ebd7]' },
  { slug: 'calmer-market-volatility', category: 'Investing', title: 'A calmer way to think about market volatility', date: '22 May 2024', read: '5 min read', tone: 'from-[#d6e2ee] to-[#e7dfce]' },
  { slug: 'conversations-before-retirement', category: 'Planning', title: 'Five conversations to have before retirement', date: '09 May 2024', read: '6 min read', tone: 'from-[#e8dfd2] to-[#dce8de]' },
  { slug: 'health-insurance-tips', category: 'Protection', title: 'How to review your health insurance limits', date: '15 Apr 2024', read: '3 min read', tone: 'from-[#dce8de] to-[#e8dfd2]' },
  { slug: 'motor-insurance-renewal', category: 'Protection', title: 'Don\'t let your motor insurance auto-renew without checking this', date: '02 Mar 2024', read: '4 min read', tone: 'from-[#e7dfce] to-[#d6e2ee]' },
  { slug: 'sip-basics', category: 'Investing', title: 'Why SIPs are the bedrock of modern wealth creation', date: '18 Feb 2024', read: '5 min read', tone: 'from-[#f4ebd7] to-[#d8e7df]' },
  { slug: 'tax-saving-life-insurance', category: 'Planning', title: 'Balancing tax savings with genuine life cover', date: '10 Jan 2024', read: '6 min read', tone: 'from-[#d8e7df] to-[#e7dfce]' },
  { slug: 'home-insurance-checklist', category: 'Protection', title: 'The ultimate home insurance checklist for Indian homeowners', date: '05 Dec 2023', read: '4 min read', tone: 'from-[#e8dfd2] to-[#f4ebd7]' },
  { slug: 'travel-insurance-myths', category: 'Protection', title: 'Busting common travel insurance myths', date: '20 Nov 2023', read: '3 min read', tone: 'from-[#dce8de] to-[#d6e2ee]' },
];