import { FaCut, FaSpa, FaUserMd, FaHardHat } from "react-icons/fa";
import { FiScissors, FiCalendar } from "react-icons/fi";

import { INiche } from "@/types";

export const niches: INiche[] = [
    { label: "Contractors", icon: <FaHardHat size={20} /> },
    { label: "Salons", icon: <FiScissors size={20} /> },
    { label: "Barbershops", icon: <FaCut size={20} /> },
    { label: "Aestheticians & Med Spas", icon: <FaSpa size={20} /> },
    { label: "Chiropractors", icon: <FaUserMd size={20} /> },
    { label: "Any Local Service Business", icon: <FiCalendar size={20} /> },
];
