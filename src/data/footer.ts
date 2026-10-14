import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Websites plus missed-call, review, and referral systems for contractors, and booking and review systems for salons and spas.",
    quickLinks: [
        {
            text: "How It Works",
            url: "/#fix"
        },
        {
            text: "Our Work",
            url: "/#work"
        },
        {
            text: "Pricing",
            url: "/#pricing"
        },
        {
            text: "Contact",
            url: "/contact"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms of Service",
            url: "/terms"
        }
    ],
    email: 'Wymantrey4@gmail.com',
    telephone: '+1 (701) 317-6951',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://www.instagram.com',
    }
}
