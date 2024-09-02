"use client"
import { updateDoctor } from '@/redux/features/doctor/doctorSlice'
import { useAppDispatch } from '@/redux/store/hooks'
import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react'

type doctorInfoType = {
    _id : string,
    name: string,
    address: string
    mobile: string
    qualification: string
}

type PropsType = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    doctorInfo : doctorInfoType
}

function EditDoctorModal({ setIsOpen, doctorInfo: initialDoctorInfo }: PropsType) {

    const dispatch = useAppDispatch();

    const ref = useRef<HTMLFormElement>(null);

    const [doctorInfo, setDoctorInfo] = useState<doctorInfoType>(initialDoctorInfo);

    const handleChange = (info: doctorInfoType) => {
        setDoctorInfo(info);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/update-doctor`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(doctorInfo)
        });

        const json = await res.json();
        if(json.success){
            dispatch(updateDoctor(json.payload));
        }
        setIsOpen(false);
    }

    const handleClick = () => {
        ref.current?.requestSubmit();
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 lg:w-full lg:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-slate-800">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <h3 className="mb-3 text-base font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">Doctor Details</h3>
                                    <div className="pt-4 border-t border-gray-900/10 dark:border-gray-700">
                                        <div className="border-b border-gray-900/10 pb-8 dark:border-gray-700">
                                            <form ref={ref} onSubmit={(e) => handleSubmit(e)}>
                                                <div className="mt-2 grid grid-cols-1 gap-x-0 gap-y-6 sm:grid-cols-6">
                                                    <div className="sm:col-span-full">
                                                        <label htmlFor="name" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Name</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={doctorInfo.name} onChange={(e) => handleChange({ ...doctorInfo, name: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-span-full">
                                                        <label htmlFor="address" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Address</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="address" id="address" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={doctorInfo.address} onChange={(e) => handleChange({ ...doctorInfo, address: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-full">
                                                        <label htmlFor="mobile" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                                                        <div className="mt-2">
                                                            <input id="mobile" name="mobile" type="tel" autoComplete="mobile tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={doctorInfo.mobile} onChange={(e) => handleChange({ ...doctorInfo, mobile: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-full">
                                                        <label htmlFor="qualification" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Qualification</label>
                                                        <div className="mt-2">
                                                            <input id="qualification" name="qualification" type="text" autoComplete="mobile tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={doctorInfo.qualification} onChange={(e) => handleChange({ ...doctorInfo, qualification: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                <button type="submit" style={{ display: 'none' }} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 dark:bg-slate-800">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700" onClick={() => handleClick()}>Edit Doctor</button>
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditDoctorModal;
