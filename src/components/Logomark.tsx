import React from 'react';

interface Props {
    className?: string;
}

const Logomark: React.FC<Props> = ({ className }: Props) => {
    return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
            <polygon points="16,2 29,16 16,20 3,16" fill="var(--primary)" />
            <polygon points="16,12 29,16 16,30 3,16" fill="var(--secondary)" />
        </svg>
    );
};

export default Logomark;
