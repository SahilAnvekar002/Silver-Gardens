import BlogsPage from "./BlogsPage";

const Blogs =async()=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-blogs`, {cache : 'no-store'});
    const json = await res.json();
    const blogs = json.blogs;

    return(
        <BlogsPage blogs={blogs} />
    )
}

export default Blogs;