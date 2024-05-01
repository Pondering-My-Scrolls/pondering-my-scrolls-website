"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './header.scss';

function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); 
    const siteNavToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className="header wo-full" role="banner">
            {/* Skip Link */}
            <Link href="#main-content" className="skip-link" scroll={false} prefetch={false}>
                Skip Navigation
            </Link>

            {/* Branding */}
            <div className="header__logo col-1-5 m-col-1-4 s-col-1-3">
                <Link href="/">
                    Logo here
                </Link>
            </div>

            {/* Nav */}
            <div className="col-5-13 m-col-4-10 s-col-3-5">
                <nav 
                    className="header__nav"
                    role="navigation"
                    aria-label="Site Navigation"
                >
                    <Link href="/projects-posts" aria-current={pathname == "/projects-posts" ? "page" : "false"}>
                        Projects & Posts
                    </Link>
                    <button 
                        id="siteNavToggle" 
                        aria-controls="siteNav" 
                        aria-expanded={`${!isOpen ? false : true}`}
                        aria-label="Toggle Navigation"
                        onClick={siteNavToggleClick}
                        className="button"
                    >
                        More +
                    </button>
                    <div className={`header__nav__modal ${!isOpen ? '' : 'open'}`}>
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
                    </div>       
                </nav>
            </div>

        </header>
        <div id="main-content"></div>
        </>
    )
}

export default Header