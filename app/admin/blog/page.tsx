"use client"
import React, { FormEvent, useState } from 'react'

type BlogDataType = {
    category: string,
    title: string,
    des: string,
    author: string
}

function BlogForm() {

    const [blogData, setblogData] = useState<BlogDataType>({
        category: "",
        title: "",
        des: "",
        author: ""
    })

    const handleChange = (info: BlogDataType) => {
        setblogData(info);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add-blog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });

        const json = await res.json();

        setblogData({
            category: "",
            title: "",
            des: "",
            author: ""
        })
    }

    return (
        <div className='py-24 sm:py-14 px-12 w-full dark:bg-gray-800 sm:ml-64 sm:mt-10 min-h-[95vh]'>
            <h1 className='font-semibold text-xl dark:text-white'>Add a New Blog</h1>
            <form className='mt-8' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="category" className='mb-2 dark:text-gray-400'>Category</label>
                    <input type="text" id='category' className='py-1 px-3 border-2 border-gray-200 rounded-md lg:w-3/4 outline-none' value={blogData.category} onChange={(e) => handleChange({ ...blogData, category: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="title" className='mb-2 dark:text-gray-400'>Title</label>
                    <input type="text" id='title' className='py-1 px-3 border-2 border-gray-200 rounded-md lg:w-3/4 outline-none' value={blogData.title} onChange={(e) => handleChange({ ...blogData, title: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="description" className='mb-2 dark:text-gray-400'>Description</label>
                    <textarea id='description' className='py-1 px-3 border-2 border-gray-200 rounded-md lg:w-3/4 outline-none resize-none' rows={5} value={blogData.des} onChange={(e) => handleChange({ ...blogData, des: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="author" className='mb-2 dark:text-gray-400'>Author</label>
                    <input type="text" id='author' className='py-1 px-3 border-2 border-gray-200 rounded-md lg:w-3/4 outline-none' value={blogData.author} onChange={(e) => handleChange({ ...blogData, author: e.target.value })} />
                </div>
                <button className='py-2 px-4 rounded-md dark:bg-transparent bg-indigo-600 text-white dark:border-2 border-gray-700 mt-2'>Add Blog</button>
            </form>
        </div>
    )
}

export default BlogForm
