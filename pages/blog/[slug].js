import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'
// import {Susep}

export default function Blog({ mdxSource, frontMatter }) {
    // console.log(mdxSource)
    const content = <MDXRemote {...mdxSource}></MDXRemote>
    // console.log(frontMatter)
    return (<BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>)
}

export async function getStaticPaths() {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('blog', params.slug);

    return { props: post }
}