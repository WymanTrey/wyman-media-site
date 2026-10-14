import React from 'react'

import Container from './Container';

interface Props {
    title: string;
    subtitle?: string;
}

const PageShell: React.FC<React.PropsWithChildren<Props>> = ({ title, subtitle, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <section className="bg-hero-background text-white pt-32 pb-12 md:pt-40 md:pb-16">
                <Container>
                    <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl text-balance">{title}</h1>
                    {subtitle && <p className="mt-4 text-white/70 max-w-2xl">{subtitle}</p>}
                </Container>
            </section>
            <Container className="py-12 md:py-16">
                {children}
            </Container>
        </>
    )
}

export default PageShell
