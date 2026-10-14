import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import LegalSections from "@/components/LegalSections";
import ChatWidget from "@/components/ChatWidget";
import { businessDetails, termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Wyman Media",
  description: `Terms of service and text messaging terms for ${businessDetails.legalName}.`,
};

const TermsPage: React.FC = () => {
  return (
    <PageShell title="Terms of Service" subtitle={`${businessDetails.legalName}, including SMS terms`}>
      <LegalSections sections={termsSections} effectiveDate={businessDetails.effectiveDate} />
      <ChatWidget />
    </PageShell>
  );
};

export default TermsPage;
