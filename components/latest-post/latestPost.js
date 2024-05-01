import React from 'react';
import Link from "next/link";

import './latest-post.scss';

function latestPost(props) {
  return (
    <article className="latest-post">
      <h2>
        <Link href={`/posts/${props.slug}`}>
          {props.title}
        </Link>
      </h2>
    </article>
  )
}

export default latestPost;