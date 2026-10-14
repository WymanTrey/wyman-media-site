import { ILegalSection } from "@/types";

export const businessDetails = {
    legalName: 'Wyman Media LLC',
    location: 'Grand Forks, North Dakota',
    address: '116 Fenton Ave, Grand Forks, ND 58203',
    email: 'Wymantrey4@gmail.com',
    phone: '+1 (701) 317-6951',
    effectiveDate: 'October 13, 2026',
}

const { legalName, email, phone } = businessDetails;

export const smsConsent = {
    care: `I agree to receive customer care text messages from ${legalName} about my inquiry, quotes, and project updates at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase.`,
    marketing: `I agree to receive marketing text messages from ${legalName}, such as offers and tips for contractors, at the phone number provided. Up to 4 messages per month. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase.`,
}

export const privacySections: ILegalSection[] = [
    {
        heading: 'Who we are',
        paragraphs: [
            `${legalName} ("Wyman Media," "we," "us") builds websites and lead, review, and referral systems for local businesses. This policy explains what information we collect through this website and our text messaging program, and how we use it.`,
        ],
    },
    {
        heading: 'Information we collect',
        paragraphs: ['When you fill out a form on this site, call us, or text us, we may collect:'],
        list: [
            'Your name, business name, and type of work',
            'Your phone number and email address',
            'Anything you choose to tell us in a message',
            'Whether you agreed to receive text messages, and when',
        ],
    },
    {
        heading: 'How we use your information',
        list: [
            'To respond to your inquiry and send quotes or previews you asked for',
            'To send text messages you agreed to receive',
            'To provide and support the services you buy from us',
            'To keep records required by law',
        ],
    },
    {
        heading: 'Text messaging and your mobile information',
        paragraphs: [
            'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All of the categories above exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.',
            'You can stop receiving text messages at any time by replying STOP. Reply HELP for help. Message and data rates may apply.',
        ],
    },
    {
        heading: 'How we share information',
        paragraphs: [
            'We do not sell your personal information. We share it only with service providers that help us run our business, such as our CRM and messaging platform, and only so they can provide that service to us. We may also disclose information if required by law.',
        ],
    },
    {
        heading: 'How long we keep it',
        paragraphs: [
            'We keep your information for as long as we need it to serve you or as required by law. You can ask us to delete it at any time.',
        ],
    },
    {
        heading: 'Your choices',
        paragraphs: [
            `To see, correct, or delete the information we have about you, email ${email} or call ${phone}.`,
        ],
    },
    {
        heading: 'Children',
        paragraphs: ['This site and our services are not directed to anyone under 18, and we do not knowingly collect information from children.'],
    },
    {
        heading: 'Changes to this policy',
        paragraphs: ['If we change this policy, we will post the new version here with a new effective date.'],
    },
];

export const termsSections: ILegalSection[] = [
    {
        heading: 'About these terms',
        paragraphs: [
            `These terms apply to your use of this website and the text messaging program run by ${legalName}. By using the site or opting in to our texts, you agree to them.`,
        ],
    },
    {
        heading: 'Text messaging program',
        paragraphs: [
            'Program name: Wyman Media Text Messages.',
            'Customer care messages: if you opt in, we will text you about your inquiry, quotes, previews, appointments, and project updates. Message frequency varies.',
            'Marketing messages: if you separately opt in, we will text you offers and tips for growing your business. Up to 4 messages per month.',
            'Opting in to either type of message is optional and is not a condition of any purchase.',
        ],
        list: [
            'Message and data rates may apply.',
            'Reply STOP at any time to stop receiving messages. You will get one final message confirming you have been unsubscribed.',
            `Reply HELP for help, or contact us at ${email} or ${phone}.`,
            'Carriers are not liable for delayed or undelivered messages.',
            'Your mobile information is handled as described in our Privacy Policy and is never shared with third parties for marketing.',
        ],
    },
    {
        heading: 'Our services',
        paragraphs: [
            'Previews, mockups, and estimates shown on this site or sent to you are examples. The final scope, price, and terms of any service are set when you sign up.',
        ],
    },
    {
        heading: 'Using this website',
        paragraphs: [
            'You agree not to misuse this site, including by submitting false information or information about someone else without their permission.',
        ],
    },
    {
        heading: 'Limitation of liability',
        paragraphs: [
            `This site is provided as is. To the extent allowed by law, ${legalName} is not liable for indirect or consequential damages arising from your use of the site or the messaging program.`,
        ],
    },
    {
        heading: 'Governing law',
        paragraphs: ['These terms are governed by the laws of the State of North Dakota.'],
    },
    {
        heading: 'Contact',
        paragraphs: [`${legalName}, ${businessDetails.address}. Email ${email} or call ${phone}.`],
    },
];
