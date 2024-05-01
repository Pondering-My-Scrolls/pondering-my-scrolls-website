import React from 'react';
import Link from "next/link";

import PageHeader from '../../components/page-header/pageHeader.js';

export const metadata = {
    title: 'About | Pondering My Scrolls',
}

function About() {
    return (
        <main className="about">
            <PageHeader icon="" h1="About" description="" />
            <section className="page-content wo">
                <div className="wysiwyg col-3-9 m-col-3-8 s-col-1-5">
                 
                </div>
            </section>
        </main>
    )
}

export default About