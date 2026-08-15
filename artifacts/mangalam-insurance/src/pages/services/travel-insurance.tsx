import { ServicePageLayout } from '@/components/service-layout';

export default function TravelInsurancePage() {
  return (
    <ServicePageLayout
      eyebrow="Protection"
      title="Travel Insurance"
     description="Travel insurance solutions in Gandhinagar to help protect you against covered medical emergencies, trip disruptions and other unexpected travel risks."
      serviceParam="travel-insurance"
      whatIsText={
        <>
          <p>
            Whether you're traveling for business, studying abroad, or taking a family holiday, being in an unfamiliar environment brings unique risks. Medical emergencies in foreign countries can be ruinously expensive, often costing tens of lakhs of rupees.
          </p>
          <p>
            Travel insurance is designed to handle exactly these scenarios. Beyond medical emergencies, it covers the logistical nightmares of travel: lost passports, canceled flights, misplaced baggage, and personal liability.
          </p>
          <p>
            We help you select robust travel policies that provide 24/7 global assistance, ensuring you are never stranded without support.
          </p>
        </>
      }
      coveredItems={[
        'Overseas Medical Emergencies & Evacuation',
        'Trip Cancellation or Interruption',
        'Loss of Passport and Travel Documents',
        'Baggage Delay or Loss',
        'Personal Liability Abroad',
        'Student-Specific Cover (Tuition interruption, sponsor protection)'
      ]}
      benefits={[
        { title: 'Global Network Access', desc: 'We recommend plans backed by global assistance companies, ensuring you get direct cashless access to hospitals worldwide.' },
        { title: 'Purpose-Built Cover', desc: 'We tailor the policy to your trip: specific plans for students, frequent business travelers, or senior citizens visiting family abroad.' },
        { title: 'Pre-existing Condition Riders', desc: 'We help secure specific add-ons for travelers with pre-existing medical conditions, which standard policies usually exclude.' }
      ]}
      faqs={[
        { q: 'Is travel insurance mandatory for all countries?', a: 'It is mandatory for Schengen countries and a few others. However, even if it is not legally required (like for the US or UK), the extreme cost of healthcare makes it a functional necessity.' },
        { q: 'Does it cover adventure sports?', a: 'Standard policies usually exclude high-risk activities like scuba diving, skiing, or bungee jumping. If you plan on doing these, we can add a specific adventure sports rider.' },
        { q: 'What happens if my flight is delayed?', a: 'If the delay exceeds a specific duration (usually 6-12 hours) due to covered reasons like severe weather or strikes, the policy reimburses essential expenses like meals and hotel stays.' }
      ]}
    />
  );
}
