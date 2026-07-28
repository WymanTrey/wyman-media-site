import { BsCashCoin, BsCalendarCheckFill } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "$97/mo",
        icon: <BsCashCoin size={34} className="text-secondary" />,
        description: "One flat monthly fee — website, booking calendar, and review system all included."
    },
    {
        title: "0",
        icon: <FiXCircle size={34} className="text-primary" />,
        description: "Setup fees and contracts. Cancel any time, no hoops."
    },
    {
        title: "24/7",
        icon: <BsCalendarCheckFill size={34} className="text-secondary" />,
        description: "Online booking availability for your clients — book any time, day or night."
    }
];
