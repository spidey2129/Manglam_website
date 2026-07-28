import { ServicePageLayout } from '@/components/service-layout';

export default function SIPsPage() {
  return (
    <ServicePageLayout
      eyebrow="Investing"
      title="SIPs (Systematic Investment Plans)"
      description="Invest consistently over time with a simple, disciplined path to compounding growth."
      serviceParam="sips"
      whatIsText={
        <>
          <p>
            You don't need a massive lump sum to start building wealth. A Systematic Investment Plan (SIP) allows you to invest a fixed amount every month into mutual funds. It is, without a doubt, the most effective wealth-creation tool for the salaried professional and business owner alike.
          </p>
          <p>
            SIPs remove the emotion from investing. By investing automatically every month, you don't have to worry about timing the market. When markets are high, you buy fewer units; when markets crash, you buy more units at lower prices (Rupee Cost Averaging).
          </p>
          <p>
            The true magic of SIPs is compounding. Over 15 or 20 years, a disciplined SIP of just a few thousand rupees can grow into a corpus of crores.
          </p>
        </>
      }
      coveredItems={[
        'Automated Monthly Investments',
        'Rupee Cost Averaging Strategy',
        'Step-Up SIPs (Increasing amounts yearly)',
        'Goal-linked SIPs (Education, Retirement)',
        'Tax-Saving SIPs (via ELSS)',
        'Flexible pausing and stopping'
      ]}
      benefits={[
        { title: 'Behavioral Edge', desc: 'We set up automated mandates so the investment happens before you have a chance to spend it, enforcing financial discipline without effort.' },
        { title: 'The Step-Up Strategy', desc: 'We help you implement Step-Up SIPs, automatically increasing your investment by 10% every year as your income grows, drastically shortening the time to reach your goals.' },
        { title: 'Market Volatility Coaching', desc: 'When markets correct and panic sets in, we provide the calm, rational advice needed to keep your SIPs running—which is when the real wealth is made.' }
      ]}
      faqs={[
        { q: 'What is the minimum amount to start a SIP?', a: 'You can start a SIP with as little as ₹500 or ₹1,000 per month, making it accessible to absolutely everyone.' },
        { q: 'What happens if I miss a SIP installment?', a: 'Unlike insurance premiums, there is no penalty or policy lapse if a SIP bounces due to low bank balance. The fund house simply skips that month\'s investment. However, your bank might charge a mandate bounce fee.' },
        { q: 'Can I increase or decrease my SIP amount later?', a: 'Yes. SIPs are entirely flexible. You can increase the amount, pause it for a few months if you face a cash crunch, or stop it entirely without any exit loads or penalties.' }
      ]}
    />
  );
}
