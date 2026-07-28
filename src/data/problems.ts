import { FiSearch, FiStar, FiClock } from "react-icons/fi";

import { IProblem } from "@/types";

export const problems: IProblem[] = [
    {
        title: "No online booking = lost clients",
        description: "If people can't book you instantly, they book whoever they can — even if your work is better.",
        icon: <FiSearch size={28} />,
    },
    {
        title: "Few reviews = fewer bookings",
        description: "Most people check Google reviews before booking anywhere. The business with 40 reviews beats the one with 4, every time.",
        icon: <FiStar size={28} />,
    },
    {
        title: "No time to fix it yourself",
        description: "You're busy with clients all day. Chasing reviews and managing a website isn't happening — unless someone does it for you.",
        icon: <FiClock size={28} />,
    },
];
