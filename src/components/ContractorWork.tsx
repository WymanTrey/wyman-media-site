import React from 'react';
import Link from 'next/link';

const ContractorWork: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-gray-100 shadow-sm p-10 bg-white">
            <h3 className="text-xl font-bold mb-2">We&apos;re just getting started in this niche.</h3>
            <p className="text-foreground-accent mb-6">
                No contractor examples live yet — we&apos;re taking on our first few local contractors now. Real, honest proof, not a stock photo pretending to be one.
            </p>
            <Link
                href="#cta"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
            >
                Want to be the first? Let&apos;s talk →
            </Link>
        </div>
    );
};

export default ContractorWork;
