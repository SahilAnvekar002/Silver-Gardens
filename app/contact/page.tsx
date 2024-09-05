"use client"
import React, { FormEvent, useState } from 'react'
import { Building, Mail, PhoneCall } from 'tabler-icons-react'

type ContactInfoType = {
    fname : string,
    lname : string,
    email : string,
    mobile : string,
    message : string
}

function ContactPage() {
    const [contactInfo, setContactInfo] = useState({
        fname : "",
        lname : "",
        email: "",
        mobile : "",
        message: ""
    });

    const handleChange = (info: ContactInfoType)=>{
        setContactInfo(info);
    }

    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add-feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        });

        const json = await res.json();
        setContactInfo({
            fname: "",
            lname :"",
            email :"",
            mobile :"",
            message :""
        });
    }

    return (
        <div className='flex lg:flex-row flex-col justify-center items-center dark:bg-slate-800'>
            <div className='flex flex-col justify-center lg:w-1/2 lg:pl-24 lg:pr-10 lg:pt-0 pt-20 lg:px-0 sm:px-32 px-14 lg:pb-0 pb-14 lg:border-none border-b-2 border-gray-200 dark:border-gray-700'>
                <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold text-gray-900 leading-tight dark:text-white">Get in touch
                </h1>
                <p className="mb-8 leading-relaxed text-base sm:text-lg dark:text-gray-500">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                <div className='flex mb-4'>
                    <div className='dark:text-gray-500'>
                        <Building className='mr-4' />
                    </div>
                    <div>
                        <p className="leading-relaxed dark:text-gray-500">545 Mavis Island</p>
                        <p className="leading-relaxed dark:text-gray-500">Chicago, IL 99191</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='dark:text-gray-500'>
                        <PhoneCall className='mr-4' />
                    </div>
                    <div>
                        <p className="leading-relaxed dark:text-gray-500">+1 (555) 234-5678</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='dark:text-gray-500'>
                        <Mail className='mr-4' />
                    </div>
                    <div>
                        <p className="leading-relaxed dark:text-gray-500">hello@example.com</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center lg:w-1/2 sm:px-24 px-0 lg:pt-24 pt-14 lg:pb-24 pb-24 w-80'>
                <form className="w-full" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">First name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="dark:focus:ring-white outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={contactInfo.fname} onChange={(e)=>handleChange({...contactInfo, fname : e.target.value})} required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">Last name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="dark:focus:ring-white outline-none  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={contactInfo.lname} onChange={(e)=>handleChange({...contactInfo, lname : e.target.value})} required/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" autoComplete="email" className="dark:focus:ring-white outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={contactInfo.email} onChange={(e)=>handleChange({...contactInfo, email : e.target.value})} required/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">Phone number</label>
                            <div className="relative mt-2.5">
                                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="dark:focus:ring-white outline-none  block w-full rounded-md border-0 px-3.5 py-2 pl-text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={contactInfo.mobile} onChange={(e)=>handleChange({...contactInfo, mobile : e.target.value})} required/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message" rows={4} className="outline-none dark:focus:ring-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none" value={contactInfo.message} onChange={(e)=>handleChange({...contactInfo, message : e.target.value})} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-600">Lets talk</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactPage
