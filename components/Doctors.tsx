import React from 'react'

function Doctors() {
    return (
        <>
        {/*<section className="text-gray-600 body-font dark:bg-slate-800">
            <div className="container px-5 pb-20 mx-auto">
                <h1 className='text-center text-3xl font-bold mb-14 dark:text-white'>Our Expert Doctors</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="shadow-lg border-opacity-60 rounded-lg overflow-hidden dark:shadow-xl">
                            <img className="lg:h-56 md:h-36 w-full object-cover object-center" src="/doc.png" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">M.B.B.S</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white">Adom Smith</h1>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>*/}
        <div className="bg-white pt-14 pb-28 dark:bg-slate-800">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Meet our Doctors</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">We have a team of experts doctors who will guide you in every step and be there for you throught the process.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">M.B.B.S</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Walter White</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">M.D</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">M.D</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Jessie Pinkman</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">M.B.B.S</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Lisa Lin</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">P.H.D</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Harry Brook</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">M.D</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-gray-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>

      
    </ul>
  </div>
</div>

        </>
    )
}

export default Doctors
