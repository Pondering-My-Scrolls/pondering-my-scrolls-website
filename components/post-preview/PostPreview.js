import React from 'react';
import Link from "next/link";

import './post-preview.scss';


function postPreview(props) {
  const truncate = (input) =>
    input?.length > 35 ? `${input.substring(0, 35)}...` : input;

  return (
    <article className="post-preview">
      <div className="post-preview__content">
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
        <p>
          {props.date}
        </p>
        <p>
          {truncate(props.summary)}
        </p>
      </div>
    </article>
  )
}

export default postPreview;