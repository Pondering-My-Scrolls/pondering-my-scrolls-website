import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

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