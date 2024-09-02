"use client"
import Hamburger from 'hamburger-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { Sun, Moon } from 'tabler-icons-react';

function Navbar() {

    const [mode, setMode] = useState('light');
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMode = () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            setMode('light');
        }
        else {
            document.body.classList.add('dark');
            setMode('dark');
        }
    }

    const toggleSidebar = () => {
        if (ref.current?.classList.contains('translate-x-full')) {
            ref.current?.classList.replace('translate-x-full', 'translate-x-0');
        }
        else {
            ref.current?.classList.replace('translate-x-0', 'translate-x-full');
        }
    }

    return (
        <>
            {!pathname.includes('/admin') && <header className="flex justify-between items-center h-[70px] shadow-md dark:bg-slate-800 dark:border-b-2 dark:border-gray-700">
                <div className="md:ml-16 ml-4">
                    <Image src='/logo.png' alt='Logo' width={150} height={30} className='dark:grayscale dark:invert' />
                </div>
                <ul className="md:flex hidden justify-center items-center h-[100%]">
                    <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all h-[100%] flex items-center dark:text-white"><Link href='/'>Home</Link></li>
                    <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all h-[100%] flex items-center dark:text-white"><Link href='/about'>About</Link></li>
                    <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all h-[100%] flex items-center dark:text-white"><Link href='/contact'>Contact</Link></li>
                    <li className="px-4 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all h-[100%] flex items-center dark:text-white"><Link href='/blog'>Blog</Link></li>
                </ul>
                <div className="md:flex hidden mr-16">
                    <button className='border-2 border-gray-300 p-1 rounded-md dark:text-white' onClick={toggleMode}>
                        {mode == 'dark' ? <Sun size={26} /> : <Moon size={26} />}
                    </button>
                </div>
                <div className="flex md:hidden mr-4 z-20 dark:text-white">
                    <Hamburger size={22} onToggle={toggleSidebar} />
                </div>
            </header>}

            {!pathname.includes('/admin') && <div ref={ref} className="fixed bg-white top-0 right-0 transform transition-transform translate-x-full h-full w-80 dark:!bg-slate-800 z-10">
                <h1 className='mx-16 mt-8 pb-5 text-xl dark:text-white'>Navigation</h1>
                <ul className='flex flex-col justify-center items-center border-t-2 border-gray-200 dark:border-gray-700 py-6'>
                    <li className="mb-2 transition-all dark:text-white"><Link href='/'>Home</Link></li>
                    <li className="mb-2 transition-all dark:text-white"><Link href='/about'>About</Link></li>
                    <li className="mb-2 transition-all dark:text-white"><Link href='/contact'>Contact</Link></li>
                    <li className="mb-2 transition-all dark:text-white"><Link href='/blog'>Blog</Link></li>
                </ul>
                <div className='flex justify-center items-center w-[100%]'>
                    <button className='flex justify-center w-[80%] border-2 border-gray-200 rounded-md dark:text-white py-1 dark:border-gray-700' onClick={toggleMode}>
                        {mode == 'dark' ? <Sun size={26} /> : <Moon size={26} />}
                    </button>
                </div>
            </div>}
        </>
    )
}

export default Navbar
