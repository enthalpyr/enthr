import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataDeletion = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/cashbook" className="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to CashBook
      </Link>
      <h1 className="text-3xl font-extrabold text-foreground">Data Deletion</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 6, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">How to Delete Your Data</h2>
          <p>CashBook stores your transaction data in two places:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong className="text-foreground">On your device:</strong> Uninstalling the app will remove all locally stored data.</li>
            <li>
              <strong className="text-foreground">On Google Drive:</strong> If you used Google Drive sync, your data is stored in
              your personal Drive account. You can delete it by navigating to Google Drive → finding the CashBook
              app data folder → deleting it.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Request Data Deletion</h2>
          <p>
            If you need assistance deleting your data or want to confirm all data has been removed, please email
            us at{" "}
            <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">enthalpyr@gmail.com</a>{" "}
            with the subject line <strong className="text-foreground">"Data Deletion Request — CashBook"</strong>.
          </p>
          <p className="mt-2">We will respond within 7 business days.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">What We Delete</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Firebase Authentication record associated with your Google account.</li>
            <li>Any references to your account within our system (if applicable).</li>
          </ul>
          <p className="mt-2">
            Note: We cannot delete data stored in your personal Google Drive on your behalf — only you have
            access to your Drive files.
          </p>
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

export default DataDeletion;
