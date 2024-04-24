import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import './post-preview.scss';

function postPreview(props) {
  return (
    <article className="post-preview">
      <div className="post-preview__content">
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
      </div>
    </article>
  )
}

export default postPreview;