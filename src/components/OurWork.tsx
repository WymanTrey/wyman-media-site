import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { niches } from '@/data/niches';

interface IWorkItem {
    badge: 'Real Client' | 'Live Example';
    name: string;
    description: string;
    url: string;
}

const workItems: IWorkItem[] = [
    {
        badge: 'Real Client',
        name: 'K. ESTHETICS',
        description: 'A full-body waxing studio in Grand Forks, ND — custom site with services & pricing, package bundles, and Square booking embedded right on the page.',
        url: 'https://kesthetics701.com',
    },
    {
        badge: 'Real Client',
        name: 'Essence Salon & Skin Care Studio',
        description: 'A hair & skin care salon in Grand Forks, ND — custom site with real reviews, services, and online booking built in.',
        url: 'https://essence-salon-site.vercel.app',
    },
    {
        badge: 'Live Example',
        name: 'Bloom Aesthetics & Spa',
        description: 'A full example build for a med spa/aesthetics niche — custom site, live online booking calendar, and the review-request flow, all wired up exactly like a real client would get.',
        url: 'https://finwise-saas-landing-page-eight-orpin.vercel.app',
    },
];

const OurWork: React.FC = () => {
    return (
        <div>
            {workItems.map((item) => (
                <div
                    key={item.name}
                    className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden max-w-2xl mx-auto bg-white mb-8 last:mb-0"
                >
                    <div className="h-2 w-full bg-gradient-to-r from-secondary to-primary" />
                    <div
                        className={`px-6 py-2 text-xs font-semibold uppercase tracking-wide ${
                            item.badge === 'Real Client' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                        }`}
                    >
                        ● {item.badge}
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                        <p className="text-foreground-accent mb-6">{item.description}</p>
                        <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
                        >
                            {item.badge === 'Real Client' ? 'View Live Site' : 'View Live Example'} <FiArrowUpRight />
                        </Link>
                    </div>
                </div>
            ))}

            <p className="text-center text-foreground-accent mt-12 mb-5">Example builds for every niche we serve:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {niches.map((niche) => (
                    <span key={niche.label} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-foreground-accent hover:border-secondary/50 hover:text-secondary transition-colors">
                        {niche.label}
                    </span>
                ))}
            </div>

            <p className="text-center mt-8">
                <Link href="#cta" className="font-semibold text-secondary hover:underline">
                    Want to see one with your business&apos;s name on it? We&apos;ll build you a free example →
                </Link>
            </p>
        </div>
    );
};

export default OurWork;
