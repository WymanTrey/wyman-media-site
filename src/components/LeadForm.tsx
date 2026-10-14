'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { businessDetails, smsConsent } from '@/data/legal';

const trades = ['Roofing', 'Concrete', 'General contractor', 'HVAC', 'Plumbing', 'Electrical', 'Painting', 'Fencing', 'Garage doors', 'Landscaping', 'Other'];

const inputClass = "w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary";

type Status = 'idle' | 'sending' | 'sent' | 'error';

const LeadForm: React.FC = () => {
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('sending');
        setError('');

        const form = new FormData(event.currentTarget);
        const payload = {
            firstName: form.get('firstName'),
            lastName: form.get('lastName'),
            businessName: form.get('businessName'),
            trade: form.get('trade'),
            phone: form.get('phone'),
            email: form.get('email'),
            message: form.get('message'),
            smsCare: form.get('smsCare') === 'on',
            smsMarketing: form.get('smsMarketing') === 'on',
        };

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Something went wrong.');
            }
            setStatus('sent');
        } catch (err) {
            setStatus('error');
            setError(err instanceof Error ? err.message : 'Something went wrong.');
        }
    };

    if (status === 'sent') {
        return (
            <div className="max-w-2xl rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold">Got it. Thanks!</h2>
                <p className="mt-3 text-foreground-accent">Trey will reach out within one business day. Need it sooner? Call or text {businessDetails.phone}.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="firstName" className="block text-base font-semibold mb-1.5">First name</label>
                    <input id="firstName" name="firstName" required autoComplete="given-name" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-base font-semibold mb-1.5">Last name</label>
                    <input id="lastName" name="lastName" autoComplete="family-name" className={inputClass} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="businessName" className="block text-base font-semibold mb-1.5">Business name</label>
                    <input id="businessName" name="businessName" autoComplete="organization" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="trade" className="block text-base font-semibold mb-1.5">Type of work</label>
                    <select id="trade" name="trade" defaultValue="" className={inputClass}>
                        <option value="" disabled>Choose one</option>
                        {trades.map(trade => <option key={trade} value={trade}>{trade}</option>)}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="phone" className="block text-base font-semibold mb-1.5">Phone</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-base font-semibold mb-1.5">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-base font-semibold mb-1.5">What can we help with?</label>
                <textarea id="message" name="message" rows={4} className={inputClass} />
            </div>

            <fieldset className="space-y-4 rounded-xl bg-gray-50 p-5">
                <legend className="sr-only">Text message consent (optional)</legend>
                <label htmlFor="smsCare" className="flex gap-3 items-start text-sm text-foreground-accent leading-relaxed">
                    <input id="smsCare" name="smsCare" type="checkbox" className="mt-1 h-4 w-4 flex-none accent-primary" />
                    <span>{smsConsent.care}</span>
                </label>
                <label htmlFor="smsMarketing" className="flex gap-3 items-start text-sm text-foreground-accent leading-relaxed">
                    <input id="smsMarketing" name="smsMarketing" type="checkbox" className="mt-1 h-4 w-4 flex-none accent-primary" />
                    <span>{smsConsent.marketing}</span>
                </label>
                <p className="text-sm text-foreground-accent">
                    Both boxes are optional. See our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link> and <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>.
                </p>
            </fieldset>

            {status === 'error' && (
                <p role="alert" className="text-base text-red-700">{error} You can also call or text {businessDetails.phone}.</p>
            )}

            <button type="submit" disabled={status === 'sending'} className="text-white bg-primary hover:bg-primary-accent disabled:opacity-60 px-8 py-3 rounded-full transition-all duration-200 font-semibold">
                {status === 'sending' ? 'Sending...' : 'Get My Free Preview'}
            </button>
        </form>
    );
};

export default LeadForm;
