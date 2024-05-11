import React from 'react';

import getPostMetadata from '../components/getPostMetadata';
import PostPreview from "../components/latest-post/latestPost.js";

export const metadata = {
    title: 'Home | Pondering My Scrolls',
    description: '',
}

function Home() {
    const postMetadata = getPostMetadata();
    const latestPost = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));

    return (
        <main id="mainContent" className="home">
            <section className="wo pv">
                <h1 className="h1--large col-1-7">
                    Welcome, come ponder scrolls with us :)
                </h1>
                <div className="col-8-13">
                    {latestPost.entries().next().value[1]}
                </div>
            </section>
        </main>
    )
}

export default Home