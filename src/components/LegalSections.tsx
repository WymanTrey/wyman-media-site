import React from 'react'

import { ILegalSection } from '@/types';

interface Props {
    sections: ILegalSection[];
    effectiveDate: string;
}

const LegalSections: React.FC<Props> = ({ sections, effectiveDate }: Props) => {
    return (
        <div className="max-w-3xl">
            <p className="text-foreground-accent text-base">Effective {effectiveDate}</p>
            {sections.map(section => (
                <section key={section.heading} className="mt-10">
                    <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
                    {section.paragraphs?.map(paragraph => (
                        <p key={paragraph} className="text-foreground-accent mb-3 leading-relaxed">{paragraph}</p>
                    ))}
                    {section.list && (
                        <ul className="list-disc pl-6 text-foreground-accent space-y-2">
                            {section.list.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    )}
                </section>
            ))}
        </div>
    )
}

export default LegalSections
