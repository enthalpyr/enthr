import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/cashbook" className="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to CashBook
      </Link>
      <h1 className="text-3xl font-extrabold text-foreground">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 6, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By downloading or using CashBook, you agree to these Terms of Service. If you do not agree, please do not use the App.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. Description of Service</h2>
          <p>
            CashBook is a free, ad-free mobile application for Indian cash denomination counting and cashbook
            management. It supports offline usage and optional Google Drive sync for data backup.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are responsible for maintaining the security of your Google account.</li>
            <li>You must not use the App for any illegal or unauthorized purpose.</li>
            <li>You are solely responsible for the accuracy of data entered into the App.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. Intellectual Property</h2>
          <p>All content, branding, and code in CashBook are the intellectual property of EnthalpyR. You may not copy, modify, or distribute the App.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Disclaimer of Warranties</h2>
          <p>
            CashBook is provided "as is" without warranties of any kind. We do not guarantee that the App will
            be error-free, uninterrupted, or fit for any particular purpose.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>
            EnthalpyR shall not be liable for any indirect, incidental, or consequential damages arising from
            the use of CashBook, including but not limited to data loss or financial discrepancies.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Data & Privacy</h2>
          <p>
            Your use of CashBook is also governed by our{" "}
            <Link to="/cashbook/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">8. Modifications</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the App constitutes acceptance of updated Terms.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">9. Contact</h2>
          <p>
            For questions regarding these Terms, contact{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default TermsOfService;
