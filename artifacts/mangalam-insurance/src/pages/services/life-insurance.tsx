import { ServicePageLayout } from '@/components/service-layout';

export default function LifeInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Life Insurance"
      description="A promise your family can count on, whatever tomorrow brings. Secure their standard of living and future aspirations."
      serviceParam="life-insurance"
      whatIsText={
        <>
          <p>
            Life insurance is the bedrock of any sound financial plan. In India, where social security nets are limited, ensuring your family has a guaranteed financial cushion in your absence is not just an option—it is a responsibility.
          </p>
          <p>
            Whether it's pure term insurance designed to replace income and clear debts, or a linked plan that also helps build wealth for milestones like a child's education or marriage, the right life cover brings absolute peace of mind.
          </p>
          <p>
            At Mangalam, we look beyond the premium amount. We calculate your actual human life value, factor in inflation, and help you structure a policy that ensures your family's lifestyle remains uninterrupted.
          </p>
        </>
      }
      coveredItems={[
        'Death Benefit (Lump sum or staggered payout)',
        'Critical Illness Riders (Optional)',
        'Accidental Death Benefit (Optional)',
        'Waiver of Premium on Disability',
        'Tax Benefits under Section 80C & 10(10D)'
      ]}
      benefits={[
        { title: 'Needs-Based Sizing', desc: 'We calculate your exact cover requirement based on liabilities, current expenses, and future goals, ensuring you are neither underinsured nor overpaying.' },
        { title: 'Unbiased Comparison', desc: 'We compare claim settlement ratios and premiums across India\'s top insurers to find the most reliable provider for your specific age and profile.' },
        { title: 'Claim Support', desc: 'In the difficult event of a claim, our team handles the paperwork and insurer coordination entirely, so your family doesn\'t have to.' }
      ]}
      faqs={[
        { q: 'How much life cover do I actually need?', a: 'A general rule of thumb is 10-15 times your annual income, plus the total value of any outstanding loans. However, we calculate an exact figure based on your specific family structure and future liabilities.' },
        { q: 'Is term insurance better than endowment plans?', a: 'Term insurance provides pure protection with very high cover for a low premium. Endowment plans mix insurance with savings. For most people, a pure term plan paired with separate investments (like SIPs) yields better long-term results.' },
        { q: 'What happens to the policy if I miss a premium payment?', a: 'Most policies have a 30-day grace period. If you miss that, the policy lapses. We provide active reminders and can help you revive a lapsed policy if necessary.' }
      ]}
    />
  );
}
