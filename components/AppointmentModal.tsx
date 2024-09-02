"use client"
import { bookAppointment } from '@/redux/features/appointment/appointmentSlice'
import { useAppDispatch } from '@/redux/store/hooks'
import React, { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react'

type PropsType = {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

type patientInfoType = {
    fname: string,
    lname: string,
    email: string,
    mobile: string,
    address: string
    city: string,
    state: string,
    pincode: string
}

function AppointmentModal({ setIsOpen }: PropsType) {

    const dispatch = useAppDispatch();

    const ref = useRef<HTMLFormElement>(null);

    const [patientInfo, setPatientInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const handleChange = (info: patientInfoType) => {
        setPatientInfo(info);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        setIsOpen(false);
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/book-appointment`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(patientInfo)
        });

        const json = await res.json();

        if(json.success){
            dispatch(bookAppointment(json.payload));
        }
        
        setPatientInfo({
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            address: "",
            city: "",
            state: "",
            pincode: ""
        })
    }

    const handleClick = () => {
        ref.current?.requestSubmit();
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-slate-800">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="mb-3 text-base font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">Personal Details</h3>
                                    <div className="pt-4 border-t border-gray-900/10 dark:border-gray-700">
                                        <div className="border-b border-gray-900/10 pb-8 dark:border-gray-700">
                                            <form ref={ref} onSubmit={(e) => handleSubmit(e)}>
                                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">First name</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={patientInfo.fname} onChange={(e) => handleChange({ ...patientInfo, fname: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="last-name" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={patientInfo.lname} onChange={(e) => handleChange({ ...patientInfo, lname: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                                        <div className="mt-2">
                                                            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={patientInfo.email} onChange={(e) => handleChange({ ...patientInfo, email: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="mobile" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                                                        <div className="mt-2">
                                                            <input id="mobile" name="mobile" type="tel" autoComplete="mobile tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={patientInfo.mobile} onChange={(e) => handleChange({ ...patientInfo, mobile: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label htmlFor="street-address" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 dark:focus:ring-white" value={patientInfo.address} onChange={(e) => handleChange({ ...patientInfo, address: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                        <label htmlFor="city" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">City</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none px-3 dark:focus:ring-white" value={patientInfo.city} onChange={(e) => handleChange({ ...patientInfo, city: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="region" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none px-3 dark:focus:ring-white" value={patientInfo.state} onChange={(e) => handleChange({ ...patientInfo, state: e.target.value })} required />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="postal-code" className="dark:text-gray-500 block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none px-3 dark:focus:ring-white" value={patientInfo.pincode} onChange={(e) => handleChange({ ...patientInfo, pincode: e.target.value })} required />
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
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700" onClick={() => handleClick()}>Book Appointment</button>
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppointmentModal
