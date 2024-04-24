"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SiteNav() {
    const pathname = usePathname();

    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/about" aria-current={pathname == "/about" ? "page" : "false"}>
                    About
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
