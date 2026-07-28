import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="max-w-md mx-auto">
            {tiers.map((tier) => (
                <PricingColumn key={tier.name} tier={tier} highlight={true} />
            ))}
        </div>
    )
}

export default Pricing