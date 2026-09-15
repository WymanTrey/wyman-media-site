import ContractorPricingColumn from "./ContractorPricingColumn";

import { contractorTier } from "@/data/contractorPricing";

const ContractorPricing: React.FC = () => {
    return (
        <div className="max-w-md mx-auto">
            <ContractorPricingColumn tier={contractorTier} />
        </div>
    )
}

export default ContractorPricing
