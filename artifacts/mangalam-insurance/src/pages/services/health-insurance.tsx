import { ServicePageLayout } from '@/components/service-layout';

export default function HealthInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Health Insurance"
     description="Health insurance solutions in Gandhinagar for individuals, families and senior citizens, with guidance to choose suitable coverage and support through the insurance process."
      serviceParam="health-insurance"
      whatIsText={
        <>
          <p>
            Medical inflation in India is rising at double digits annually. A single hospitalization can wipe out years of savings and disrupt your financial plans entirely. Health insurance acts as a shield, ensuring you can access the best private healthcare without worrying about the bill.
          </p>
          <p>
            But not all health policies are equal. Room rent capping, co-payment clauses, and waiting periods for pre-existing diseases can lead to nasty surprises at the time of discharge.
          </p>
          <p>
            We help you navigate these complexities to secure comprehensive cover—whether it's an individual plan, a family floater, or specialized senior citizen cover—so you can focus purely on recovery.
          </p>
        </>
      }
      coveredItems={[
        'In-patient Hospitalization',
        'Pre and Post-Hospitalization Expenses',
        'Day Care Treatments',
        'Ambulance Cover',
        'Annual Health Check-ups',
        'Tax Benefits under Section 80D'
      ]}
      benefits={[
        { title: 'Decoding the Fine Print', desc: 'We explain the exclusions, waiting periods, and sub-limits before you buy, so there are zero surprises during an emergency.' },
        { title: 'Super Top-Up Strategy', desc: 'We structure cost-effective combinations of base policies and super top-ups to give you massive coverage at a fraction of the standard premium.' },
        { title: 'Hospitalization Assistance', desc: 'Our team assists with cashless approvals and reimbursement claims, liaising directly with the TPA so you can focus on the patient.' }
      ]}
      faqs={[
        { q: 'Should I rely on my corporate health insurance?', a: 'Corporate cover is great, but it stops the day you leave the job or retire. Having a personal health policy ensures continuous cover, preserving your no-claim bonus and waiting period benefits.' },
        { q: 'What are room rent limits?', a: 'Many policies cap the hospital room rent (e.g., 1% of sum insured). If you choose a costlier room, the insurer deducts proportionally from all other medical charges too. We specifically recommend policies without these caps.' },
        { q: 'Are pre-existing conditions covered?', a: 'Yes, but usually after a waiting period of 2 to 4 years. It is crucial to declare all existing conditions upfront to avoid claim rejection later.' }
      ]}
    />
  );
}
