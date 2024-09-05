import moment from 'moment-timezone';
import React from 'react'

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
    blog: BlogType
}

function BlogPage({blog} : PropsType) {

    return (
        <div className='w-full flex flex-col justify-center items-center py-16 dark:bg-slate-800'>
            <div className='lg:w-1/2 sm:w-3/5 w-3/4'>
                <h1 className='font-bold sm:text-3xl mb-2 text-2xl dark:text-white'>{blog.title}</h1>
                <div className='border-b border-gray-400 py-6 dark:border-gray-700'>
                    {blog.des.split('\n').map((para, i)=>{
                        return(
                            <p key={i} className='sm:text-lg text-base leading-relaxed mb-3 dark:text-gray-500'>{para}</p>
                        )
                    })}
                </div>
                <h1 className='mt-6 font-semibold dark:text-white'>Author : <span className='font-normal dark:text-white'>{blog.author}</span></h1>
                <h1 className='mt-2 font-semibold dark:text-white'>Date : <span className='font-normal dark:text-white'>{moment(blog.createdAt).tz('Asia/Kolkata').calendar()}</span></h1>
            </div>
        </div>
    )
}

export default BlogPage;
