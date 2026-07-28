import React from 'react';

import { problems } from '@/data/problems';

const Problems: React.FC = () => {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem) => (
                <div key={problem.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                        {problem.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-foreground-accent">{problem.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Problems;
