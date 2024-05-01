"use client";

import React from 'react';

function Footer() {
    return (
        <footer className="footer wo" role="contentinfo">
            {/* Copyright & Legal */}
            <div className="col-1-12 m-col-1-10 s-col-1-5">
                <p>
                    &copy; Pondering My Scrolls {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer