import React from 'react';

import PageHeader from '../../components/page-header/pageHeader';
import getPostMetadata from '../../components/getPostMetadata';
import SitemapLink from '../../components/sitemap-link/SitemapLink';
import Link from "next/link";

export const metadata = {
    title: 'Sitemap | Pondering My Scrolls',
}

function Sitemap() {
    const postMetadata = getPostMetadata();
    const postLoop = postMetadata.map((post) => (
      <SitemapLink key={post.slug} {...post} />
    ));

    return (
        <main class="wo">
            <PageHeader h1="Sitemap" />
            <div class="wysiwyg">
                <h2>
                    Pages
                </h2>
                <ul>
                    <li>
                        <Link href="/about">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/accessibility-privacy">
                            Accessibility & Privacy
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Home page
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects-posts">
                            Projects & Posts
                        </Link>
                    </li>
                </ul>
                <h2>
                    Posts & Projects
                </h2>
                <ul>
                    {postLoop}
                </ul>
            </div>
        </main>
    )
}

export default Sitemap