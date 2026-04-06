import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/cashbook" className="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to CashBook
      </Link>
      <h1 className="text-3xl font-extrabold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 6, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            CashBook ("we," "our," or "the App") is developed by EnthalpyR. This Privacy Policy explains how we
            collect, use, and protect your information when you use CashBook.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. Information We Collect</h2>
          <p><strong className="text-foreground">Google Account Information:</strong> When you sign in with Google, we access your
            basic profile (name, email) solely for authentication and Google Drive sync.</p>
          <p className="mt-2"><strong className="text-foreground">Transaction Data:</strong> All cash transaction data
            (customer names, amounts, denominations) is stored locally on your device and, if you opt in,
            synced to your personal Google Drive.</p>
          <p className="mt-2"><strong className="text-foreground">No Analytics or Tracking:</strong> We do not use any
            third-party analytics, advertising SDKs, or tracking tools.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To authenticate your identity via Firebase Authentication.</li>
            <li>To sync your transaction data to your personal Google Drive.</li>
            <li>To enable sharing of transaction summaries in text or PDF format.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. Data Storage & Security</h2>
          <p>
            Your data is stored locally on your device and optionally on your personal Google Drive.
            We do not store your data on any third-party servers. Firebase Authentication is used solely
            for sign-in; no transaction data passes through Firebase.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal data with any third parties.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Offline Usage</h2>
          <p>
            You can use CashBook as a Guest without signing in. In this mode, all data remains on your
            device only. No information is transmitted externally.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Children's Privacy</h2>
          <p>CashBook is not directed at children under 13. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
          <p>We may update this policy from time to time. Changes will be reflected on this page with an updated date.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
