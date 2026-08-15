import { ServicePageLayout } from '@/components/service-layout';

export default function HomeInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Home Insurance"
      description="Home insurance solutions in Gandhinagar to help protect your house and belongings against covered risks, with guidance on suitable home protection."
      serviceParam="home-insurance"
      whatIsText={
        <>
          <p>
            Your home is likely your most valuable financial asset, yet home insurance remains one of the most overlooked covers in India. A single event—a fire, flood, or burglary—can cause devastating financial loss.
          </p>
          <p>
            Home insurance doesn't just cover the structure; it can cover the contents inside, from expensive electronics and jewelry to furniture and appliances. It also provides alternate accommodation support if your home becomes temporarily uninhabitable.
          </p>
          <p>
            We help homeowners and tenants alike secure comprehensive property policies at surprisingly affordable premiums.
          </p>
        </>
      }
      coveredItems={[
        'Structural Damage (Fire, Earthquake, Floods)',
        'Burglary and Theft',
        'Electronic Appliances & White Goods',
        'Jewelry and Valuables Cover',
        'Alternate Accommodation Expenses',
        'Public Liability (Damage to third parties)'
      ]}
      benefits={[
        { title: 'Tailored Valuations', desc: 'We help you accurately estimate the reinstatement value of your property and contents, ensuring you are adequately covered without overpaying.' },
        { title: 'Tenant & Landlord Options', desc: 'Whether you own the structure, or you just want to insure your belongings in a rented apartment, we have specific solutions.' },
        { title: 'Comprehensive Bundling', desc: 'We source package policies that wrap structure, contents, and public liability into one simple, low-cost annual premium.' }
      ]}
      faqs={[
        { q: 'I live in an apartment, doesn\'t the society cover this?', a: 'The housing society usually only insures the building structure and common areas. Anything inside your specific apartment, including your belongings and interior fit-outs, is your responsibility to insure.' },
        { q: 'How is the sum insured for the structure calculated?', a: 'It is based on the cost of reconstruction (built-up area × current construction cost per sq ft), not the market value or land value of the property.' },
        { q: 'Can I insure my home if I am renting it out?', a: 'Yes, as a landlord, you can insure the structure and any fixtures/appliances you own inside it. The tenant can buy a separate policy for their own belongings.' }
      ]}
    />
  );
}
