import React from 'react';

import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/post-preview/PostPreview.js';

import './projects-posts.scss';

export const metadata = {
  title: 'Projects & Posts | Pondering My Scrolls',
}

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
      <main className="posts wo">
          <h1 className="h1 pv">
              Projects & Posts
          </h1>
          <div className="posts__wrapper">
              {postPreviews}
          </div>
      </main>
  );
};

export default Portfolio;