import React from 'react'
import classes from '@/styles/About.module.css';

function AboutPage() {
  return (
    <section className="text-gray-600 body-font dark:bg-slate-800">
      <div className="xl:mx-auto flex px-6 sm:px-16 pb-20 lg:pt-6 pt-20 lg:flex-row flex-col lg:items-center lg:w-[100vw]">
        <div className="lg:flex-grow md:w-[70%] lg:w-[50%] md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900 leading-tight dark:text-white">We believe in providing best services
          </h1>
          <p className="mb-8 leading-relaxed text-lg dark:text-gray-500">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, delectus.</p>
        </div>

        <div className="flex flex-wrap md:-mt-36 lg:-m-1 lg:max-w-xl lg:w-[50%] w-full h-[100vh]">
          <div className={`flex flex-wrap w-1/3 h-full ${classes.images1}`}>
            <div className="md:p-2 p-1 h-[40%] invisible">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 h-[40%] w-full">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" />
            </div>
            <div className="md:p-2 p-1 h-[20%] invisible">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>
          <div className={`flex flex-wrap w-1/3 h-full ${classes.images2}`}>
            <div className="md:p-2 p-1 h-[20%] invisible">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 h-[40%] w-full">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" />
            </div>
            <div className="md:p-2 p-1 h-[40%] w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" />
            </div>
          </div>
          <div className={`flex flex-wrap w-1/3 h-full ${classes.images3}`}>
            <div className="md:p-2 p-1 h-[40%] w-full">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" />
            </div>
            <div className="md:p-2 p-1 h-[40%] w-full">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" />
            </div>
            <div className="md:p-2 p-1 h-[20%] invisible">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>

        </div>
      </div>
      <div className='flex px-6 sm:px-16 sm:pt-10 md:flex-row flex-col'>
        <div className='lg:w-[60%] md:w-[70%] w-full lg:ml-16'>
          <h1 className='title-font sm:text-3xl text-2xl mb-8 font-bold text-gray-900 leading-tight dark:text-white'>Our Mission</h1>
          <p className="mb-5 leading-relaxed sm:text-lg text-base dark:text-gray-500 ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric.</p>
          <p className="mb-5 leading-relaxed sm:text-lg text-base dark:text-gray-500">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, delectus.</p>
          <p className="mb-5 leading-relaxed sm:text-lg text-base dark:text-gray-500">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, delectus.</p>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-[40%] md:w-[30%] lg:ml-0 md:ml-10 w-full">
          <div className='flex flex-col items-center mb-10'>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-black w-12 h-12 mb-3 inline-block dark:text-gray-500" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-500">2.7K</h2>
            <p className="leading-relaxed">New patients annually</p>
          </div>
          <div className='flex flex-col items-center mb-10'>
            <svg fill="#000000" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-black w-12 h-12 mb-3 inline-block dark:fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.545 495.545" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M364.374,207.697V25.508H156.687v100.57H0v343.717h156.687v0.241h338.858V207.69H364.374V207.697z M103.291,455.226 v-82.651H67.976v82.651H14.579V140.65h142.108v314.576H103.291z M480.968,455.464H296.352V308.503h-63.158v146.961h-61.937V126.078 v-85.99h178.536v182.188h131.175V455.464z M190.144,75.303h30.369v67.539h-30.369V75.303z M248.334,75.303h30.358v67.539h-30.358 V75.303z M304.308,75.303h30.371v67.539h-30.371V75.303z M190.144,179.022h30.369v74.828h-30.369V179.022z M248.334,179.022h30.358 v74.828h-30.358V179.022z M304.308,179.022h30.371v74.828h-30.371V179.022z M388.721,324.421h-30.359v-69.362h30.359V324.421z M388.721,435.426h-30.359v-71.18h30.359V435.426z M452.478,324.421h-30.358v-69.362h30.358V324.421z M452.478,435.426h-30.358 v-71.18h30.358V435.426z M38.569,164.88h30.359v69.357H38.569V164.88z M38.569,274.058h30.359v71.179H38.569V274.058z M102.329,164.88h30.358v69.357h-30.358V164.88z M102.329,274.058h30.358v71.179h-30.358V274.058z"></path> </g> </g></svg>
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-500">22</h2>
            <p className="leading-relaxed">Branches worldwide</p>
          </div>
          <div className='flex flex-col items-center mb-8'>
            <svg fill="#000000" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-black w-12 h-12 mb-3 inline-block dark:fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.792 489.792" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <ellipse cx="348.696" cy="394.521" rx="15.5" ry="16.7"></ellipse> <path d="M166.796,332.721c-7.4-7.4-16.3-12.1-25.7-12.1c-9.7,0-18.7,4.7-26,12.4 C129.096,330.021,146.896,328.421,166.796,332.721z"></path> <path d="M489.396,449.721c-12-82.8-60.6-152.8-127.5-190.9c3.1,23.3,6.2,63-1.2,98c14.8,5.4,25.7,20.2,25.7,37.7 c0,22.2-16.7,39.6-37.7,39.6s-37.7-17.8-37.7-39.6c0-19,12.4-34.6,29.2-38.9c10.1-41.2,1.9-94.5-0.4-108.1 c-2.7-1.2-5.4-2.3-8.2-3.5c-22.5,23.3-52.9,37.7-86.7,37.7c-33,0-63.4-14-85.5-36.5c-3.5,7.8-10.1,26.8-8.9,55.2 c33,6.6,58.3,47,58.3,95.6c0,17.9-3.5,35.8-10.1,50.9c-3.6,11.4-18.7,16-25.7,16c-10.5,0-19-8.9-19-20.2c0-11.3,8.6-20.2,19-20.2 c3.1,0,7.4,0.8,12.1,2.7c8-23.1,1.9-54.4-1.9-64.9c-37.3-17.1-71.5-5.4-84,0c-3.5,10.5-10.2,39.1-1.9,64.9 c4.7-1.9,8.9-2.7,12.1-2.7c10.5,0,19,8.9,19,20.2c0,11.3-8.6,20.2-19,20.2c-6.6,0-21.4-4.3-25.3-14.8l0,0 c-7-15.5-10.5-33.4-10.5-52.1c0-48.2,24.9-88.2,57.1-95.6c-0.8-18.7,1.6-34.2,4.3-45.5c-70.9,37.4-122.2,109.3-134.6,194.8 c-3.1,21,12.4,40,32.3,40h424.1C476.996,489.721,492.496,470.721,489.396,449.721z"></path> <path d="M244.896,264.321c58.3,0,105.7-50.1,105.7-112c0-8.6-0.8-16.7-2.7-24.9c0,0-49.7-15.5-103-15.5 c-53.2,0-102.6,15.5-102.6,15.5c-1.6,8.2-2.7,16.3-2.7,24.9C139.196,214.521,186.596,264.321,244.896,264.321z"></path> <path d="M339.396,103.421c7.4-29.2,14.4-58.7,21.4-87.9c-75.9-20.6-155.9-20.6-231.7,0c7,29.2,14.4,58.7,21.4,87.9 C212.196,86.621,277.596,86.621,339.396,103.421z M216.496,36.121h19.8v-21h17.1v21h19.8v17.9h-19.8v21h-17.1v-21h-19.8 L216.496,36.121z"></path> </g> </g> </g> </g></svg>
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-500">62</h2>
            <p className="leading-relaxed">Expert Doctors</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center sm:py-20 py-10'>
        <img src="https://images.unsplash.com/photo-1577896851905-dc99e1f8b4b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team" className='max-h-[600px] lg:rounded-xl' />
      </div>

      <div className='px-6 sm:px-16 flex flex-col pb-20 sm:pt-10 pt-6'>
        <h1 className='title-font sm:text-3xl text-2xl mb-2 font-bold text-gray-900 leading-tight dark:text-white'>Our Values</h1>
        <p className="leading-relaxed sm:text-lg text-base dark:text-gray-500">Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem, ipsum dolor.</p>
        <p className="lg:mb-10 mb-5 leading-relaxed sm:text-lg text-base dark:text-gray-500">Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>

        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:pr-14 sm:py-4 py-2">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>

      <div className=" pb-24 sm:pt-10 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">Trusted by the world’s most innovative teams</h2>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:invert" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
            <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:invert" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
