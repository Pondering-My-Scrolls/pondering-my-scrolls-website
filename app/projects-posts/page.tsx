import React from 'react';

import getPostMetadata from '../../components/getPostMetadata';
import PageHeader from '../../components/page-header/pageHeader.js';
import PostPreview from '../../components/post-preview/PostPreview.js';

import './projects-posts.scss';

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
      <main className="portfolio wo">
          <PageHeader h1="Portfolio" />
          <section className="portfolio__posts">
              {postPreviews}
          </section>
      </main>
  );
};

export default Portfolio;