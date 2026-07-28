import { FaCut, FaSpa, FaUserMd } from "react-icons/fa";
import { FiScissors, FiCalendar } from "react-icons/fi";

import { INiche } from "@/types";

export const niches: INiche[] = [
    { label: "Salons", icon: <FiScissors size={20} /> },
    { label: "Barbershops", icon: <FaCut size={20} /> },
    { label: "Aestheticians & Med Spas", icon: <FaSpa size={20} /> },
    { label: "Chiropractors", icon: <FaUserMd size={20} /> },
    { label: "Any Appointment-Based Business", icon: <FiCalendar size={20} /> },
];
