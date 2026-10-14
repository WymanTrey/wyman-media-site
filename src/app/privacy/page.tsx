import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import LegalSections from "@/components/LegalSections";
import { businessDetails, privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Wyman Media",
  description: `How ${businessDetails.legalName} collects, uses, and protects your information, including text messaging.`,
};

const PrivacyPage: React.FC = () => {
  return (
    <PageShell title="Privacy Policy" subtitle={businessDetails.legalName}>
      <LegalSections sections={privacySections} effectiveDate={businessDetails.effectiveDate} />
    </PageShell>
  );
};

export default PrivacyPage;
