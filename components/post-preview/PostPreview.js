import React from 'react';
import Link from "next/link";
import Date from '../../components/postPreviewDate';

import './post-preview.scss';


function postPreview(props) {
  const truncate = (input) => input?.length > 35 ? `${input.substring(0, 200)}...` : input;

  return (
    <article className="post-preview">
      <h2>
        <Link href={`/posts/${props.slug}`}>
          {props.title}
        </Link>
      </h2>
      <p>
        <Date dateString={props.date} />
      </p>
      <p>
        {truncate(props.summary)}
      </p>
    </article>
  )
}

export default postPreview;