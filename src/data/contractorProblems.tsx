import { FiStar, FiUsers, FiClock } from "react-icons/fi";

import { IProblem } from "@/types";

export const contractorProblems: IProblem[] = [
    {
        title: "Thin reviews = fewer high-ticket jobs",
        description: "A $10K roof job is a big decision — homeowners check reviews first. The contractor with 40 reviews wins over the one with 4, every time.",
        icon: <FiStar size={28} />,
    },
    {
        title: "No referral system = word of mouth gets lost",
        description: "Happy customers usually know someone who needs the same work done — but without a reason to actually refer you, that job just never happens.",
        icon: <FiUsers size={28} />,
    },
    {
        title: "No time to chase it yourself",
        description: "You're on job sites all day. Following up for reviews and referrals isn't happening — unless someone does it for you automatically.",
        icon: <FiClock size={28} />,
    },
];
