import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Websites, online booking, and Google review systems built exclusively for salons, barbers, aestheticians, and chiropractors.",
    quickLinks: [
        {
            text: "How It Works",
            url: "#fix"
        },
        {
            text: "Our Work",
            url: "#work"
        },
        {
            text: "Pricing",
            url: "#pricing"
        }
    ],
    email: 'Wymantrey4@gmail.com',
    telephone: '+1 (701) 317-6951',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://www.instagram.com',
    }
}
