"use client"
import AcceptAppointmentModal from '@/components/AcceptAppointmentModal';
import { setAppointments, updateAppointment } from '@/redux/features/appointment/appointmentSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { IconCheck, IconX } from '@tabler/icons-react'
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react'

interface AppointmentType {
    _id: string,
    fname: string,
    lname: string,
    email: string,
    mobile: string,
    address: string,
    city: string,
    state: string,
    pincode: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    updatedOn: string,
    __v: number,
}

interface PropsType {
    appointments: AppointmentType[]
}

function AppointmentsPage({ appointments }: PropsType) {

    const dispatch = useAppDispatch();

    const data = useAppSelector((state) => state.appointment);

    const [isOpen, setIsOpen] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');

    useEffect(() => {
        if (data.appointments.length == 0) {
            dispatch(setAppointments(appointments));
        }
        setInitialized(true);
    }, [])

    const rejectAppointment = async (id: string, status: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/update-appointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                status: status
            })
        });

        const json = await res.json();

        if (json.success) {
            dispatch(updateAppointment(json.payload));
        }
    }

    return (
        <>
            <div className='py-24 sm:py-14 px-12 w-full dark:bg-gray-800 sm:ml-64 sm:mt-10 min-h-[95vh]'>
                <div>
                    <h1 className='font-semibold text-xl dark:text-white'>Pending Appointments</h1>
                    <div className="w-full mx-auto overflow-auto mt-8">
                        <table className="table-auto w-full text-left whitespace-no-wrap mb-10">
                            <thead>
                                <tr className='dark:border-b border-gray-700'>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  dark:bg-gray-800 rounded-tl rounded-bl dark:text-white">Appointment ID</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Address</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Mobile</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialized && data.appointments.filter((item) => item.status == 'Pending').map((appointment) => {
                                    return (
                                        <tr className='dark:border-b border-gray-700' key={appointment._id}>
                                            <td className="px-4 py-3 dark:text-gray-500">#{appointment._id.substring(0, 6)}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.fname} {appointment.lname}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.address} {appointment.city}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.mobile}</td>
                                            <td className="w-10 text-center">
                                                <div className="flex">
                                                    <button className='px-2 py-1 bg-green-500 rounded-md mr-2' onClick={() => { setIsOpen(true), setCurrentId(appointment._id), setCurrentStatus('Accepted'), setCurrentEmail(appointment.email) }}> <IconCheck /> </button>
                                                    <button className='px-2 py-1 bg-red-500 rounded-md' onClick={() => rejectAppointment(appointment._id, 'Rejected')}> <IconX /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-xl dark:text-white'>Completed Appointments</h1>
                    <div className="w-full mx-auto overflow-auto mt-8">
                        <table className="table-auto w-full text-left whitespace-no-wrap mb-10">
                            <thead>
                                <tr className='dark:border-b border-gray-700'>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  dark:bg-gray-800 rounded-tl rounded-bl dark:text-white">Appointment ID</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Address</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Mobile</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Time</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialized && data.appointments.filter((item) => item.status != 'Pending').sort((a, b) => {
                                    const dateA = a.updatedOn ? new Date(a.updatedOn).getTime() : -Infinity; // Treat invalid dates as the oldest
                                    const dateB = b.updatedOn ? new Date(b.updatedOn).getTime() : -Infinity; // Treat invalid dates as the oldest
                                    return dateB - dateA; // Latest first
                                }).map((appointment) => {
                                    return (
                                        <tr className='dark:border-b border-gray-700' key={appointment._id}>
                                            <td className="px-4 py-3 dark:text-gray-500">#{appointment._id.substring(0, 6)}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.fname} {appointment.lname}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.address} {appointment.city}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.mobile}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{moment(appointment.updatedOn).tz('Asia/Kolkata').calendar()}</td>
                                            <td className="w-10 text-center dark:text-gray-500">{appointment.status}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isOpen && <AcceptAppointmentModal setIsOpen={setIsOpen} currentId={currentId} currentStatus={currentStatus} currentEmail={currentEmail} />}
        </>
    )
}

export default AppointmentsPage;
