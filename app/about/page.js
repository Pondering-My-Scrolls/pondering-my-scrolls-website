import React from 'react';
import Link from "next/link";

import PageHeader from '../../components/page-header/pageHeader.js';

export const metadata = {
    title: 'About | Pondering My Scrolls',
}

function About() {
    return (
        <main className="about wo">
            <PageHeader h1="About" />
            <article className="page-content wo">
                <div className="wysiwyg col-3-10 m-col-3-8 s-col-1-5">
                    <h2>Nicky Wolfe (any/all pronouns)</h2>
                    <p>
                        In a world where the mundane reigns supreme, Nicky Wolfe is a frontend developer
                        who isn't afraid to stand in their truth and commit to making a truly exemplary digital product.
                    </p>
                    <p>
                        Gifted with a special interest in accessibility and efficiency, and an innate love of <s>pondering orbs</s> research projects,
                        it was Nicky's idea to make a website where they and Jenica could write about what
                        matters in tech today.
                    </p>
                    <p>With a little bit of time and planning, the core concept of Pondering my Scrolls was formed over a shared plate of fries at a local diner.</p>
                </div>
                <div className="decorative col-3-10 m-col-3-8 s-col-1-5">
                    <img class="decorative--blend-mode" src="../../assets/images/horizontal-border-medieval-woodcut.jpg" alt="Decorative medieval woodcut illustration of a skeleton lying down"></img>
                </div>
                <div className="wysiwyg col-3-10 m-col-3-8 s-col-1-5">
                    <h2>Jenica Woitowicz (she/her)</h2>
                    <p>When a high intelligence modifier is paired with hard work, you get Jenica Woitowicz!</p>
                    <p>
                        Also a frontend developer, Jenica is someone who loves to keep up to date on digital subjects. That could be anything from
                        cutting-edge accessibility to how wonky the next dog robot looks wonky.
                    </p>
                    <p>
                        Jenica's strategy for making Pondering My Scrolls was to keep all the early planning notes in an ancient
                        mutilated notebook, and to kill her darlings as much as needed to make a straightforward product that can offer some delight.
                        And if you're reading this now, then that strategy probably paid off!
                    </p>
                </div>
            </article>
        </main>
    )
}

export default About