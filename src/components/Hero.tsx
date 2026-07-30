import React from 'react';
import Link from 'next/link';

import { heroDetails } from '@/data/hero';
import { ctaDetails } from '@/data/cta';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-16 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 w-full bg-hero-background">
                <div
                    className="absolute inset-0 h-full w-full opacity-70"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(45deg, rgba(14,154,166,0.14) 0px, rgba(14,154,166,0.14) 2px, transparent 2px, transparent 16px), repeating-linear-gradient(-45deg, rgba(232,98,44,0.12) 0px, rgba(232,98,44,0.12) 2px, transparent 2px, transparent 16px)',
                    }}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,#000_50%,transparent_100%)] bg-hero-background" />
            </div>

            <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-secondary/15 text-secondary border border-secondary/30 text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                    Built for salons, barbers, aestheticians &amp; chiropractors
                </span>

                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-white/80 max-w-xl mx-auto">{heroDetails.subheading}</p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-3 w-fit mx-auto">
                    <Link href={ctaDetails.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-primary hover:bg-primary-accent shadow-lg shadow-primary/30 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold w-full sm:w-auto text-center">
                        Get My Free Preview
                    </Link>
                    <Link href="#work" className="text-white border border-white/30 hover:border-white/60 hover:bg-white/5 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold w-full sm:w-auto text-center">
                        See Example Sites
                    </Link>
                </div>

                <p className="mt-6 text-sm text-white/50">No contracts. No setup fees. Cancel anytime.</p>
            </div>
        </section>
    );
};

export default Hero;
