import Link from 'next/link';
import React from 'react';

// Pages that must load fresh, without the chat widget carried over from client-side
// navigation. GoHighLevel requires the widget to be the only SMS opt-in on a page,
// and the contact page has its own consent form.
const fullLoadPaths = ['/contact'];

interface Props {
    href: string;
    className?: string;
    onClick?: () => void;
}

const NavLink: React.FC<React.PropsWithChildren<Props>> = ({ href, className, onClick, children }: React.PropsWithChildren<Props>) => {
    if (fullLoadPaths.includes(href)) {
        return (
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a href={href} className={className} onClick={onClick}>{children}</a>
        );
    }
    return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}

export default NavLink
