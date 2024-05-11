import React from 'react';
import Link from "next/link";

import './latest-post.scss';

function latestPost(props) {
  const truncate = (input) => input?.length > 35 ? `${input.substring(0, 35)}...` : input;
  
  return (
    <article className="latest-post">
      <h2>
        Our latest post
      </h2>
      <h3>
        <Link href={`/posts/${props.slug}`}>
          {props.title}
        </Link>
      </h3>
      <p>
        {truncate(props.summary)}
      </p>
    </article>
  )
}

export default latestPost;