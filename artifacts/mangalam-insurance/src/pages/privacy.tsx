import { SiteLayout } from '@/components/layout';

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="bg-[#112c46] pt-32 pb-16 text-white text-center">
        <div className="section-shell">
          <h1 className="font-display text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-white/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell max-w-3xl prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary">
          <p>
            At Mangalam Insurance & Investment, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out contact forms or request a quote.</li>
            <li><strong>Financial Data:</strong> Information related to your financial goals, existing policies, and investment preferences necessary for us to provide accurate advisory services.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul>
            <li>Provide financial and insurance advisory services tailored to your needs.</li>
            <li>Respond to your requests, comments, and questions.</li>
            <li>Send you administrative information, such as policy renewal reminders.</li>
            <li>Assist you with claim processing and documentation.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, or to protect the rights, property, and safety of others.</li>
            <li><strong>To Third-Party Insurance Partners:</strong> We share your information with insurance companies and mutual fund houses (e.g., LIC, HDFC Life) <em>only</em> for the purpose of generating quotes or processing applications that you have explicitly authorized.</li>
          </ul>
          <p><strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong></p>

          <h2>4. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2>5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            Mangalam Insurance & Investment<br />
            Plot No. 945/2, Sector 7/C,<br />
            Gandhinagar, Opposite Pathikashram,<br />
            Gujarat 382007<br />
            Email: akgoswami59@gmail.com<br />
            Phone: +91 98242 77195
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
