import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import LegalSections from "@/components/LegalSections";
import ChatWidget from "@/components/ChatWidget";
import { businessDetails, privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Wyman Media",
  description: `How ${businessDetails.legalName} collects, uses, and protects your information, including text messaging.`,
};

const PrivacyPage: React.FC = () => {
  return (
    <PageShell title="Privacy Policy" subtitle={businessDetails.legalName}>
      <LegalSections sections={privacySections} effectiveDate={businessDetails.effectiveDate} />
      <ChatWidget />
    </PageShell>
  );
};

export default PrivacyPage;
