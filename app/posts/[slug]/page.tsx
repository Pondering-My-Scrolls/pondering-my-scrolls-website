import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

import getPostMetadata from '../../../components/getPostMetadata';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <main className="post pv">
            <article className="wo">
                <header className="post__header col-3-10 m-col-1-10">
                    <h1 className="h2">
                        {post.data.title}
                    </h1>
                    <p>
                        Summary: {post.data.summary}
                    </p>
                </header>

                <Markdown className="wysiwyg col-3-8 m-col-1-5">
                    {post.content}
                </Markdown>

            </article>
            <aside className="wo">
                <div className="post__aside col-1-3  m-col-1-10">
                    <p>
                        Penned by <a rel="author" href="#">{post.data.author}</a>
                    </p>
                    <p>
                        Categorized as “<a href="#">{post.data.category}</a>”
                    </p>

                </div>
            </aside>
        </main>
    )
}

export default Post