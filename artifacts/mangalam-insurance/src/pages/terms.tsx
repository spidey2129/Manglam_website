import { SiteLayout } from '@/components/layout';

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="bg-[#112c46] pt-32 pb-16 text-white text-center">
        <div className="section-shell">
          <h1 className="font-display text-4xl md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-white/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell max-w-3xl prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary">
          <p>
            These Terms of Use constitute a legally binding agreement made between you and Mangalam Insurance & Investment concerning your access to and use of our website and services.
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing the website, you agree that you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these terms, then you are expressly prohibited from using the site.
          </p>

          <h2>2. Advisory Services Disclaimer</h2>
          <p>
            The content on this website is provided for general informational purposes only and does not constitute formal financial, investment, or legal advice. While we strive to keep information accurate and up-to-date, insurance premiums, mutual fund returns, and tax laws are subject to change.
          </p>
          <p>
            <strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong> Past performance is not an indicator of future returns. 
          </p>
          <p>
            Any specific advice or product recommendation requires a direct consultation where your individual risk profile and financial situation can be properly assessed.
          </p>

          <h2>3. IRDAI and SEBI Alignment</h2>
          <p>
            Mangalam Insurance & Investment operates in alignment with the guidelines set forth by the Insurance Regulatory and Development Authority of India (IRDAI) and the Securities and Exchange Board of India (SEBI) through authorized partnerships and brokering arrangements.
          </p>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or reliance on any information provided on the site.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of India. Mangalam Insurance & Investment and yourself irrevocably consent that the courts of Gandhinagar, Gujarat shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2>7. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <p>
            Mangalam Insurance & Investment<br />
            Plot No. 945/2, Sector 7/C, Gandhinagar, Gujarat 382007<br />
            Email: akgoswami59@gmail.com<br />
            Phone: +91 98242 77195
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
