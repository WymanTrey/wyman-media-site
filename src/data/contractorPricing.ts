import { IPackagePricing } from "@/types";

export const contractorTier: IPackagePricing = {
    name: 'Everything Included',
    upfront: 500,
    monthly: 50,
    addOnPrice: 150,
    features: [
        'Custom website with before/after gallery',
        'Automated Google review requests',
        'Built-in referral system',
        'Hosting & maintenance included',
        'Add-ons (extra landing pages, more platforms) — $150 each, only if you want them',
    ],
}
