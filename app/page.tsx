"use client"
import AppointmentModal from '@/components/AppointmentModal';
import Doctors from '@/components/Doctors';
import Testinomials from '@/components/Testinomials';
import classes from '@/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <div className='flex min-h-[70vh] items-center w-[100vw] dark:bg-slate-800 lg:pb-20 lg:pt-6'>
        <div className='lg:w-[50%] sm:w-[80%] w-[100%] xl:pl-36 lg:pl-32 md:pl-20 pl-10 sm:pr-0 pr-10'>
          <h1 className='xl:text-6xl lg:text-5xl md:text-4xl text-4xl font-semibold mb-6 dark:text-white'>Silver Gardens Hospital</h1>
          <h3 className='xl:text-2xl lg:text-xl md:text-lg text-lg dark:text-gray-500 mb-1'>We provide best services to our patients</h3>
          <h3 className='xl:text-2xl mb-8 lg:text-xl md:text-lg text-lg dark:text-gray-500'>You can book an Appointment with a single click</h3>
          <button className='md:px-10 md:py-5 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 dark:bg-transparent dark:hover:bg-slate-900 dark:border-2 dark:border-gray-700 transition-colors px-6 py-3' onClick={()=>setIsOpen(true)}>Book Appointment</button>
        </div>
        <div className='xl:-ml-20 md:block hidden '>
          <img src="/bg.png" alt="Background" />
        </div>
      </div>
      {/*<div className="relative xl:max-h-[100vh] xl:min-w-[100vw]">
        <img src="/bg.jpg" alt="Background" className="xl:max-h-[100vh] xl:min-w-[100vw]" />
        <button onClick={()=>setIsOpen(true)} className={`${classes.book} left-[20%] px-1 py-1 absolute text-white xl:px-10 xl:py-5 rounded-md shadow-md xl:left-[14%] lg:left-[16%] md:left-[18%] md:py-4 md:px-8 sm:py-3 sm:px-6 sm:left-[20%]`} style={{ background: 'linear-gradient(45deg, rgba(2,0,36,0.6) 0%, rgba(39,39,181,0.6) 50%, rgba(0,212,255,0.4) 100%)', top:'70%', transform: 'translateX(-50%)' }}>Book Appointment</button>
      </div>*/}
      {isOpen && <AppointmentModal setIsOpen={setIsOpen} />}
      <Doctors />
      <Testinomials />
      </div>
    </>
  );
}
