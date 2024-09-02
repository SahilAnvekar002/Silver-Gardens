"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface BlogType {
    _id: string,
    category: string,
    title: string,
    des: string,
    author: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

interface PropsType {
    blogs: BlogType[]
}

function BlogsPage({ blogs }: PropsType) {

    const [initialBlogs, setInitialBlogs] = useState(blogs);

    useEffect(() => {
        setInitialBlogs(blogs);
    }, [blogs])


    return (
        <section className="text-gray-600 body-font overflow-hidden dark:bg-slate-800 py-5 w-full">
            <div className="container px-16 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {initialBlogs.length > 0 && initialBlogs.map((blog) => {
                        return (
                            <div className="p-6 md:w-1/2 flex flex-col items-start" key={blog._id}>
                                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{blog.category}</span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-white">{blog.title}</h2>
                                <p className="leading-relaxed mb-8 dark:text-slate-400">{blog.des.substring(0, 300)}...</p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 dark:border-gray-700 mt-auto w-full">
                                    <Link href={`/blog/${blog.slug}`} className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
                                        {blog.author}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogsPage
