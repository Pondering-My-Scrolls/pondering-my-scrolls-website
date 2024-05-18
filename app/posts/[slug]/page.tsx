import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

import getPostMetadata from '../../../components/getPostMetadata';
import Date from '../../../components/postDate';

import './posts.scss';

export async function generateMetadata({ params, searchParams }) {
    return {
        title: 'My title',
        description: 'My description',
    }
}

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
                <header className="post__header col-4-10 m-col-2-9">
                    <h1 className="h1">
                        {post.data.title}
                    </h1>
                    <p>
                        Summary: {post.data.summary}
                    </p>
                </header>

                <aside className="post__aside col-1-4 m-col-2-9">
                    <p>
                        <Date dateString={post.data.date} />
                    </p>
                    <p>
                        Penned by <a rel="author" href="#">{post.data.author}</a>
                    </p>
                    <p>
                        Categorized as “<a href="#">{post.data.category}</a>”
                    </p>
                </aside>

                <Markdown className="wysiwyg col-4-10 m-col-2-9">
                    {post.content}
                </Markdown>

            </article>
        </main>
    )
}

export default Post