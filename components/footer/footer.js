"use client";

import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <footer className="footer wo border--upper-line" role="contentinfo">
            {/* Copyright & Legal */}
            <div className="footer__container col-1-12 m-col-1-10 s-col-1-5">
                <p>
                    &copy; Pondering My Scrolls {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer