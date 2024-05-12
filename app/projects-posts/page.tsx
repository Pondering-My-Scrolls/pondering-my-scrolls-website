import React from 'react';

import PageHeader from '../../components/page-header/pageHeader.js';
import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/post-preview/PostPreview.js';

import './projects-posts.scss';

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
      <main className="posts wo">
          <PageHeader h1="Projects & Posts" />
          <section className="posts__wrapper">
              {postPreviews}
          </section>
      </main>
  );
};

export default Portfolio;