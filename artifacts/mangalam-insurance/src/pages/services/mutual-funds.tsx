import { ServicePageLayout } from '@/components/service-layout';

export default function MutualFundsPage() {
  return (
    <ServicePageLayout
      eyebrow="Investing"
      title="Mutual Funds"
      description="Build diversified wealth with investment choices aligned to your life goals and risk appetite."
      serviceParam="mutual-funds"
      whatIsText={
        <>
          <p>
            Keeping money in a savings account or fixed deposit is no longer enough to beat inflation. To build real wealth, your money needs to participate in the growth of the economy. Mutual funds offer a regulated, transparent, and professionally managed way to do exactly that.
          </p>
          <p>
            With thousands of schemes available across equity, debt, and hybrid categories, the challenge is no longer access—it is selection. The wrong fund can expose you to unnecessary risk or result in sub-par returns over a decade.
          </p>
          <p>
            At Mangalam, we cut through the noise. We construct tailored mutual fund portfolios designed specifically for your time horizon, tax bracket, and tolerance for market volatility.
          </p>
        </>
      }
      coveredItems={[
        'Equity Funds (Large, Mid, Small Cap & Sectoral)',
        'Debt Funds (Liquid, Corporate Bond, Gilt)',
        'Hybrid & Balanced Advantage Funds',
        'ELSS (Tax Saving Mutual Funds)',
        'Index Funds & ETFs',
        'International Equity Funds'
      ]}
      benefits={[
        { title: 'Goal-Based Mapping', desc: 'We don\'t chase the latest "top-performing" fund. We map specific funds to specific goals—a conservative debt fund for your emergency corpus, and aggressive equity for retirement.' },
        { title: 'Continuous Monitoring', desc: 'We actively track fund manager changes, portfolio overlap, and category performance, advising you on when to hold, when to switch, and when to exit.' },
        { title: 'Tax-Efficient Strategies', desc: 'We optimize your portfolio for post-tax returns, utilizing ELSS for Section 80C benefits and strategically managing long-term capital gains (LTCG) limits.' }
      ]}
      faqs={[
        { q: 'Are mutual funds safe?', a: 'Mutual funds are subject to market risks, but they are highly regulated by SEBI. The "safety" depends on the category. Liquid funds carry very low risk, while small-cap equity funds are highly volatile but offer higher long-term growth.' },
        { q: 'What is the difference between active and passive (Index) funds?', a: 'Active funds have a manager who selects stocks to try and beat the market. Passive (Index) funds simply replicate a market index (like the Nifty 50) at a much lower cost.' },
        { q: 'Can I withdraw my money anytime?', a: 'Most open-ended mutual funds are highly liquid; you can withdraw money anytime and it hits your account in 1-3 working days. The exception is ELSS, which has a strict 3-year lock-in.' }
      ]}
    />
  );
}
