import { ServicePageLayout } from '@/components/service-layout';

export default function BusinessInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Business Insurance"
      description="Business insurance solutions in Gandhinagar to help protect businesses against covered risks, liabilities and unexpected losses, with guidance on suitable commercial coverage."
      serviceParam="business-insurance"
      whatIsText={
        <>
          <p>
            Building a business takes years of hard work, but a single catastrophic event—a fire in the warehouse, a cyber attack, or a liability lawsuit—can threaten its survival. Business insurance transfers these critical risks away from your balance sheet.
          </p>
          <p>
            Every industry has unique exposures. A manufacturing plant needs robust fire and machinery breakdown cover, while an IT firm might prioritize cyber liability and professional indemnity.
          </p>
          <p>
            We work closely with business owners across Gujarat to audit their specific risks and structure comprehensive SME and corporate insurance programs that protect their assets, their people, and their reputation.
          </p>
        </>
      }
      coveredItems={[
        'Standard Fire & Special Perils (Property & Inventory)',
        'Group Health & Personal Accident for Employees',
        'Directors & Officers (D&O) Liability',
        'Cyber Security & Data Breach',
        'Marine & Transit Insurance (Cargo)',
        'Workmen\'s Compensation'
      ]}
      benefits={[
        { title: 'Risk Auditing', desc: 'We don\'t just quote policies. We review your operations, supply chain, and contracts to identify unaddressed liabilities before recommending cover.' },
        { title: 'Employee Benefit Design', desc: 'We design group health policies that balance comprehensive employee care with sustainable corporate budgets, acting as an extension of your HR team.' },
        { title: 'Corporate Claims Advocacy', desc: 'Commercial claims are complex. Our dedicated commercial team manages surveyors, documentation, and negotiations to ensure fair and fast settlements.' }
      ]}
      faqs={[
        { q: 'What is Directors & Officers (D&O) Liability?', a: 'D&O protects the personal assets of corporate directors and officers in the event they are personally sued for alleged wrongful acts while managing the company.' },
        { q: 'Are we legally required to provide insurance to employees?', a: 'Certain covers like Workmen\'s Compensation are statutory for manufacturing and high-risk sectors. Even where not legally required, Group Health is essential for talent retention.' },
        { q: 'What does Marine/Transit insurance cover?', a: 'It covers goods, freight, and cargo against loss or damage during transit by rail, road, sea, or air, ensuring your supply chain risks are mitigated.' }
      ]}
    />
  );
}
