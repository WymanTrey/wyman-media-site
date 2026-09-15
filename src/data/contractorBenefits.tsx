import { FiImage, FiSmartphone, FiMapPin, FiStar, FiThumbsUp, FiSearch, FiGift, FiLink, FiRepeat } from "react-icons/fi";

import { IBenefit } from "@/types"

export const contractorBenefits: IBenefit[] = [
    {
        title: "A Site Built to Show Your Work",
        description: "Professional, mobile-friendly, with a real before-and-after gallery so homeowners can see the quality of your work before they ever call.",
        bullets: [
            {
                title: "Before & After Gallery",
                description: "Your best work, front and center — the strongest sales tool a contractor has.",
                icon: <FiImage size={26} />
            },
            {
                title: "Mobile-First",
                description: "Most homeowners find you on their phone while comparing contractors — the site is built for that.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Service-Area Ready",
                description: "Clear on where you work and what you do, so the right leads reach out.",
                icon: <FiMapPin size={26} />
            }
        ],
    },
    {
        title: "Reviews That Build Themselves",
        description: "Every completed job automatically triggers a review request — so your Google rating grows without you lifting a finger.",
        bullets: [
            {
                title: "Automatic Requests",
                description: "Sent right after the job wraps, while the customer's still happy.",
                icon: <FiStar size={26} />
            },
            {
                title: "More 5-Star Reviews",
                description: "The easier you make it to leave a review, the more customers actually will.",
                icon: <FiThumbsUp size={26} />
            },
            {
                title: "Stronger Local Search",
                description: "More reviews means showing up higher when homeowners search near you.",
                icon: <FiSearch size={26} />
            }
        ],
    },
    {
        title: "A Referral System That Actually Works",
        description: "Happy customers get a simple, real reason to send people your way — instead of a referral that was always just left to chance.",
        bullets: [
            {
                title: "Built-In Referral Offer",
                description: "A clear incentive for past customers to send you new business.",
                icon: <FiGift size={26} />
            },
            {
                title: "Easy to Share",
                description: "A simple link customers can pass along — no awkward asking required.",
                icon: <FiLink size={26} />
            },
            {
                title: "Keeps Working",
                description: "Runs automatically after every job, job after job.",
                icon: <FiRepeat size={26} />
            }
        ],
    },
]
