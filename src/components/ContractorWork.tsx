import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const ContractorWork: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden bg-white mb-6">
                <div className="h-2 w-full bg-gradient-to-r from-secondary to-primary" />
                <div className="px-6 py-2 text-xs font-semibold uppercase tracking-wide bg-secondary/10 text-secondary">
                    ● Live Example
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">Ironclad Roofing Co.</h3>
                    <p className="text-foreground-accent mb-6">
                        A full example build for a roofing/contractor niche — custom site with a before/after project gallery and Google reviews front and center, built to earn trust fast for high-ticket jobs.
                    </p>
                    <Link
                        href="https://ironclad-roofing-demo-eight.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
                    >
                        View Live Example <FiArrowUpRight />
                    </Link>
                </div>
            </div>

            <div className="text-center rounded-2xl border border-gray-100 shadow-sm p-8 bg-white">
                <h3 className="text-lg font-bold mb-2">We&apos;re taking on our first contractor clients now.</h3>
                <p className="text-foreground-accent mb-4">
                    No real contractor client sites live yet — the example above shows exactly what yours would look like.
                </p>
                <Link
                    href="#cta"
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
                >
                    Want to be the first? Let&apos;s talk →
                </Link>
            </div>
        </div>
    );
};

export default ContractorWork;
