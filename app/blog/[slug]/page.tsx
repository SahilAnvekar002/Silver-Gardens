import BlogPage from "./BlogPage";

async function Blog({ params }: { params: { slug: string } }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get-blog/${params.slug}`, {cache : 'no-store'});
    const json = await res.json();
    const blog = json.blog;

    return (
        <BlogPage blog={blog} />
    )
}

export default Blog;
