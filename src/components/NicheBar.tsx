import React from 'react';

import { niches } from '@/data/niches';

const NicheBar: React.FC = () => {
    return (
        <section className="py-10 px-5 bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {niches.map((niche) => (
                    <div key={niche.label} className="flex items-center gap-2 text-foreground-accent">
                        <span className="text-secondary">{niche.icon}</span>
                        <span className="font-medium text-sm md:text-base">{niche.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NicheBar;
