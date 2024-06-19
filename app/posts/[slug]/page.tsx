import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from 'next';

import getPostMetadata from '../../../components/getPostMetadata';
import Date from '../../../components/postDate';
import SummaryToggle from '../../../components/post-summary-toggle/summaryToggle';

import './posts.scss';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // function to parse out specific text 
    function betweenMarkers(text, begin, end) {
        var firstChar = text.search(begin);
        var lastChar = text.search(end);
        var newText = text.substring(firstChar + 15, lastChar);
        return newText;
    }

    // read route params
    let slug = params.slug
   
    // fetch data
    let postContent = await fetch(`http://localhost:3000/posts/${slug}`).then((res) => res.text());
    let postTitle = betweenMarkers(postContent,'<h1 class="h1">',"</h1>");
    if (postTitle != "") {
        postTitle = postTitle;
    } else {
        postTitle = "";
    }

    return {
      title: postTitle + " | Pondering My Scrolls",
    }
}

const Post = (props: any) => {
    // Post Content
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <main className="post pv">
            <article className="wo">
                <header className="post__header col-4-10 m-col-2-9">
                    <h1 className="h1">
                        {post.data.title}
                    </h1>
                </header>

                <aside className="post__aside col-1-4 m-col-2-9">
                    <p>
                        <Date dateString={post.data.date} />
                    </p>
                    <p>
                        Penned by “{post.data.author}”
                    </p>
                    <p>
                        Categorized as “{post.data.category}”
                    </p>
                </aside>

                <div className="post__summary col-4-10 m-col-2-9">
                    <SummaryToggle content={post.data.summary} />
                </div>

                <Markdown className="wysiwyg col-4-10 m-col-2-9">
                    {post.content}
                </Markdown>

            </article>
        </main>
    )
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

export default Post