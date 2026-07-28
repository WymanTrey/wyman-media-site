import React from 'react';

import { niches } from '@/data/niches';

const NicheBar: React.FC = () => {
    return (
        <section className="py-10 px-5 bg-white">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
                {niches.map((niche) => (
                    <div key={niche.label} className="flex items-center gap-2 text-foreground-accent px-4 py-2 rounded-full border border-gray-100 hover:border-secondary/40 hover:bg-secondary/5 transition-colors">
                        <span className="text-secondary">{niche.icon}</span>
                        <span className="font-medium text-sm md:text-base">{niche.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NicheBar;
