import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import { businessDetails } from "@/data/legal";

export const metadata: Metadata = {
  title: "Contact | Wyman Media",
  description: "Request a free website and review-system preview for your contracting business.",
};

const ContactPage: React.FC = () => {
  return (
    <PageShell
      title="Get your free preview"
      subtitle={`Tell us about your business and we'll show you what your website and review system could look like. Prefer to talk? Call or text ${businessDetails.phone}.`}
    >
      <LeadForm />
    </PageShell>
  );
};

export default ContactPage;
