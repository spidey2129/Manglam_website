import { ServicePageLayout } from '@/components/service-layout';

export default function MotorInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Motor Insurance"
      description="Keep moving with protection designed around your journeys. Comprehensive cover for your vehicles."
      serviceParam="motor-insurance"
      whatIsText={
        <>
          <p>
            Whether it's your daily commute or a long road trip, your vehicle faces risks from accidents, theft, and natural disasters. While third-party liability cover is mandatory by law in India, it only protects you against damages caused to others.
          </p>
          <p>
            Comprehensive motor insurance ensures your own vehicle is covered. More importantly, the right add-ons—like zero depreciation, engine protection, and return to invoice—can mean the difference between paying thousands out of pocket or paying almost nothing.
          </p>
          <p>
            We help you select the exact level of coverage necessary for your specific car model, age, and usage pattern.
          </p>
        </>
      }
      coveredItems={[
        'Third-Party Liability (Legal requirement)',
        'Own Damage (Accidents, Fire, Natural Disasters)',
        'Theft and Vandalism',
        'Personal Accident Cover for Owner-Driver',
        'Zero Depreciation / Nil-Dep Cover (Add-on)',
        'Roadside Assistance (Add-on)'
      ]}
      benefits={[
        { title: 'Smart Add-ons', desc: 'We don\'t just sell standard policies. We recommend the exact add-ons (like engine protect for flood-prone areas) that actually make sense for your context.' },
        { title: 'Seamless Renewals', desc: 'We track your renewal dates and proactively find the best quotes across insurers to ensure your No Claim Bonus (NCB) transfers smoothly.' },
        { title: 'Cashless Garage Network', desc: 'We select insurers with the widest cashless garage networks in your city, ensuring repairs are hassle-free.' }
      ]}
      faqs={[
        { q: 'What is a Zero Depreciation cover?', a: 'Standard policies deduct value for depreciation on parts (like plastic, glass) during a claim. A Zero Dep cover pays the full cost of replacement without deducting depreciation.' },
        { q: 'How does No Claim Bonus (NCB) work?', a: 'NCB is a reward for safe driving. If you don\'t make a claim in a year, you get a discount (up to 50%) on your next renewal premium. It belongs to you, not the car, and can be transferred.' },
        { q: 'Is engine damage covered if I drive through a flooded street?', a: 'Under a standard comprehensive policy, no. Engine damage due to water ingression (hydrostatic lock) requires a specific "Engine Protection" add-on.' }
      ]}
    />
  );
}
