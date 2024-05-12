import React from 'react';
import Link from "next/link";

function sitemapLink(props) {
  return (
    <li>
      <Link href={`/posts/${props.slug}`}>
        {props.title}
      </Link>
    </li>
  )
}

export default sitemapLink;