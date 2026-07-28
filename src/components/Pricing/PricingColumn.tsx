import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-2xl border border-gray-200 lg:max-w-full overflow-hidden hover:shadow-xl transition-shadow duration-200", { "shadow-lg": highlight })}>
            <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
            <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-all duration-200 font-semibold hover:scale-105", { "bg-primary hover:bg-primary-accent text-white shadow-lg shadow-primary/30": highlight, "bg-gray-100 hover:bg-gray-200 text-foreground": !highlight })}>
                    Get Started
                </button>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0 uppercase tracking-wide text-sm">What&apos;s Included</p>
                <p className="text-foreground-accent mb-5">No tiers, no upsells — every client gets the full system.</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn