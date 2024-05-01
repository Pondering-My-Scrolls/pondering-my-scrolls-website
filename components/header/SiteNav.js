"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './site-nav.scss';

function SiteNav() {
    const pathname = usePathname();

    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/about" aria-current={pathname == "/about" ? "page" : "false"}>
                    About us
                </Link>
            </li>
            <li>
                <Link href="/accessibility-privacy" aria-current={pathname == "/accessibility-privacy" ? "page" : "false"}>
                    Accessibility & Privacy
                </Link>
            </li>
            <li>
                <Link href="/sitemap" aria-current={pathname == "/sitemap" ? "page" : "false"}>
                    Sitemap
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
