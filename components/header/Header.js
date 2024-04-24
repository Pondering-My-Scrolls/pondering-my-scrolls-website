"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import SiteNav from './SiteNav.js';

function Header() {
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
            <nav 
                className="header__nav col-5-13 m-col-4-10 s-col-3-5" 
                role="navigation"
                aria-label="Site Navigation"
                onClick={siteNavToggleClick}
            >
                <button 
                    id="siteNavToggle" 
                    aria-controls="siteNav" 
                    aria-expanded={`${!isOpen ? false : true}`}
                    aria-label="Toggle Navigation"
                >
                    Menu
                </button>
                <div className={`header__nav__wrap ${!isOpen ? '' : 'open'}`}>
                    <SiteNav />
                </div>       
            </nav>
        </header>
        <div id="main-content"></div>
        </>
    )
}

export default Header