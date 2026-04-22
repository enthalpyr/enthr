import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const KhataOKPrivacyPolicy = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/khataok" className="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Khata OK
      </Link>
      <h1 className="text-3xl font-extrabold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 22, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            Khata OK ("we," "our," or "the App") is developed by EnthalpyR. This Privacy Policy explains how we
            handle your information when you use Khata OK to manage customer credit and debit khata details.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. Information We Collect</h2>
          <p><strong className="text-foreground">Customer & Khata Data:</strong> Customer names, phone numbers,
            transaction entries, and balances are stored locally on your device.</p>
          <p className="mt-2"><strong className="text-foreground">Optional Account Information:</strong> If you sign in
            for backup, we access basic profile info (name, email) only for authentication.</p>
          <p className="mt-2"><strong className="text-foreground">No Analytics or Tracking:</strong> We do not use any
            third-party analytics, advertising SDKs, or tracking tools.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To let you maintain digital khatas and track customer balances.</li>
            <li>To enable sharing of statements as text or PDF.</li>
            <li>To send reminders to customers via your device's SMS or WhatsApp (initiated by you).</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. Data Storage & Security</h2>
          <p>
            All khata data is stored locally on your device. If backup is enabled, data is stored encrypted
            in your personal cloud storage. We do not store your data on any third-party servers we control.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal or customer data with any third parties.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Offline Usage</h2>
          <p>
            Khata OK works fully offline. No information is transmitted externally unless you explicitly enable
            backup or share a statement.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Children's Privacy</h2>
          <p>Khata OK is not directed at children under 13. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
          <p>We may update this policy from time to time. Changes will be reflected on this page with an updated date.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">9. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default KhataOKPrivacyPolicy;
