"use client"
import DoctorModal from '@/components/DoctorModal'
import EditDoctorModal from '@/components/EditDoctorModal';
import { deleteDoctor, setDoctors } from '@/redux/features/doctor/doctorSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

interface DoctorType {
    _id: string,
    name: string,
    address: string,
    mobile: string,
    qualification: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

interface PropsType {
    doctors: DoctorType[]
}

function DoctorsPage({ doctors }: PropsType) {

    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.doctor);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [doctorInfo, setDoctorInfo] = useState({
        _id: "",
        name: "",
        address: "",
        mobile: "",
        qualification: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
    });

    useEffect(() => {
        if (data.doctors.length == 0) {
            dispatch(setDoctors(doctors));
        }
        setInitialized(true);
    }, [])

    const removeDoctor = async (id: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete-doctor/${id}`, {
            method: 'DELETE'
        })
        const json = await res.json();
        if (json.success) {
            dispatch(deleteDoctor(json.payload));
        }
    }

    return (
        <>
            <div className='py-24 sm:py-14 px-12 w-full dark:bg-gray-800 sm:ml-64 sm:mt-10 min-h-[95vh]'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-xl dark:text-white'>Doctors Information</h1>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700 transition-colors' onClick={() => setIsOpen(true)}>Add Doctor</button>
                </div>
                <div className="w-full mx-auto overflow-auto mt-8">
                    <table className="table-auto w-full text-left whitespace-no-wrap mb-10">
                        <thead>
                            <tr className='dark:border-b border-gray-700'>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  dark:bg-gray-800 rounded-tl rounded-bl dark:text-white">Doctor ID</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Doctor Name</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Doctor Address</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Doctor Mobile</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Qualification</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialized && data.doctors.map((doctor) => {
                                return (
                                    <tr className='dark:border-b border-gray-700' key={doctor._id}>
                                        <td className="px-4 py-3 dark:text-gray-500">#{doctor._id.substring(0, 6)}</td>
                                        <td className="px-4 py-3 dark:text-gray-500">{doctor.name}</td>
                                        <td className="px-4 py-3 dark:text-gray-500">{doctor.address}</td>
                                        <td className="px-4 py-3 dark:text-gray-500">{doctor.mobile}</td>
                                        <td className="w-10 text-center dark:text-gray-500">{doctor.qualification}</td>
                                        <td className="w-10 text-center dark:text-gray-500">
                                            <button onClick={() => setDoctorInfo(doctor)}><IconEdit size={20} className='mr-2' onClick={() => setIsOpen2(true)} /></button>
                                            <button onClick={() => removeDoctor(doctor._id)}><IconTrash size={20} /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen && <DoctorModal setIsOpen={setIsOpen} />}
            {isOpen2 && <EditDoctorModal setIsOpen={setIsOpen2} doctorInfo={doctorInfo} />}
        </>
    )
}

export default DoctorsPage;
