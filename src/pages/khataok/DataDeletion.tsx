import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const KhataOKDataDeletion = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/khataok" className="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Khata OK
      </Link>
      <h1 className="text-3xl font-extrabold text-foreground">Data Deletion</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 22, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">How to Delete Your Data</h2>
          <p>Khata OK stores your data in two places:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong className="text-foreground">On your device:</strong> Uninstalling the app will remove all locally stored khata data.</li>
            <li>
              <strong className="text-foreground">On cloud backup (if enabled):</strong> You can delete the backup
              from within the app under Settings → Backup → Delete Backup.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Request Data Deletion</h2>
          <p>
            If you need assistance deleting your data, please email us at{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>{" "}
            with the subject line <strong className="text-foreground">"Data Deletion Request — Khata OK"</strong>.
          </p>
          <p className="mt-2">We will respond within 7 business days.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">What We Delete</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Authentication record associated with your account.</li>
            <li>Any references to your account within our system (if applicable).</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For any questions, reach out to{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default KhataOKDataDeletion;
