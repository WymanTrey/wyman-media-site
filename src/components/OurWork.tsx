import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { niches } from '@/data/niches';

const OurWork: React.FC = () => {
    return (
        <div>
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-2xl mx-auto bg-white">
                <div className="px-6 py-2 bg-secondary/10 text-secondary text-sm font-semibold">
                    ● Live Example
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">Bloom Aesthetics &amp; Spa</h3>
                    <p className="text-foreground-accent mb-6">
                        A full example build for a med spa/aesthetics niche — custom site, live online booking calendar, and the review-request flow, all wired up exactly like a real client would get.
                    </p>
                    <Link
                        href="https://finwise-saas-landing-page-eight-orpin.vercel.app"
                        target="_blank"
                        className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
                    >
                        View Live Example <FiArrowUpRight />
                    </Link>
                </div>
            </div>

            <p className="text-center text-foreground-accent mt-12 mb-5">Example builds for every niche we serve:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {niches.slice(0, 4).map((niche) => (
                    <span key={niche.label} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-foreground-accent">
                        {niche.label}
                    </span>
                ))}
            </div>

            <p className="text-center mt-8">
                <Link href="#cta" className="font-semibold text-secondary hover:underline">
                    Want to see one with your business's name on it? We'll build you a free example →
                </Link>
            </p>
        </div>
    );
};

export default OurWork;
