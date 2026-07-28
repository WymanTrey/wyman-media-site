import { FiGlobe, FiSmartphone, FiTrendingUp, FiCalendar, FiClock, FiUserCheck, FiStar, FiThumbsUp, FiSearch } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "A Website Built to Get You Booked",
        description: "Professional, mobile-friendly, and built to convert — with your services, hours, and location front and center. Fully hosted and maintained by us.",
        bullets: [
            {
                title: "Built to Convert",
                description: "Every page is designed to turn a visitor into a booked appointment.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Mobile-First",
                description: "Most clients find you on their phone — the site is built for that first.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Grows With You",
                description: "Add services, staff, and promotions any time without starting over.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Booking on Autopilot",
        description: "Clients book directly on your site, day or night — no phone tag, no missed calls, no back-and-forth.",
        bullets: [
            {
                title: "Real-Time Availability",
                description: "Clients see exactly what's open and book it instantly.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Book After Hours",
                description: "No missed bookings just because the front desk isn't open.",
                icon: <FiClock size={26} />
            },
            {
                title: "No App Required",
                description: "Clients book straight from a text, an ad, or your website — nothing to download.",
                icon: <FiUserCheck size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Reviews That Build Themselves",
        description: "Every appointment automatically triggers a review request — so your Google rating grows without you lifting a finger.",
        bullets: [
            {
                title: "Automatic Requests",
                description: "Sent right after each appointment, while the experience is fresh.",
                icon: <FiStar size={26} />
            },
            {
                title: "More 5-Star Reviews",
                description: "The easier you make it to leave a review, the more clients actually will.",
                icon: <FiThumbsUp size={26} />
            },
            {
                title: "Stronger Local Search",
                description: "More reviews means showing up higher when people search near you.",
                icon: <FiSearch size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
