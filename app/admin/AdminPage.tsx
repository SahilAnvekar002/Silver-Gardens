"use client"
import moment from 'moment';
import Chart from 'react-google-charts'

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
    appointments: AppointmentType[],
    blogs: BlogType[],
    doctors: DoctorType[]
}

function AdminPage({ appointments, blogs, doctors }: PropsType) {

    let monthsCount = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    blogs.forEach(blog => {
        const date = new Date(blog.createdAt);
        const monthIndex = date.getMonth();
        monthsCount[monthIndex][0]++;
    });

    doctors.forEach(blog => {
        const date = new Date(blog.createdAt);
        const monthIndex = date.getMonth();
        monthsCount[monthIndex][1]++;
    });

    appointments.forEach(blog => {
        const date = new Date(blog.createdAt);
        const monthIndex = date.getMonth();
        monthsCount[monthIndex][2]++;
    });

    console.log(monthsCount);

    const data = [
        ["Month", "Blogs", "Doctors", "Appointments"],
        ["Jan", monthsCount[0][0], monthsCount[0][1], monthsCount[0][2]],
        ["Feb", monthsCount[1][0], monthsCount[1][1], monthsCount[1][2]],
        ["March", monthsCount[2][0], monthsCount[2][1], monthsCount[2][2]],
        ["April", monthsCount[3][0], monthsCount[3][1], monthsCount[3][2]],
        ["May", monthsCount[4][0], monthsCount[4][1], monthsCount[4][2]],
        ["June", monthsCount[5][0], monthsCount[5][1], monthsCount[5][2]],
        ["July", monthsCount[6][0], monthsCount[6][1], monthsCount[6][2]],
        ["Aug", monthsCount[7][0], monthsCount[7][1], monthsCount[7][2]],
        ["Sept", monthsCount[8][0], monthsCount[8][1], monthsCount[8][2]],
        ["Oct", monthsCount[9][0], monthsCount[9][1], monthsCount[9][2]],
        ["Nov", monthsCount[10][0], monthsCount[10][1], monthsCount[10][2]],
        ["Dec", monthsCount[11][0], monthsCount[11][1], monthsCount[11][2]],
    ];

    const options = {
        chartArea: { width: '90%', height: '80%' },
        hAxis: {
            title: 'Month',
            titleTextStyle: {
                color: 'gray',
                italic: false
            },
            textStyle: {
                color: 'gray'
            }
        },
        vAxis: {
            textStyle: {
                color: 'gray'
            },
            gridlines: {
                color: ''
            }
        },
        backgroundColor: '',
        legend: 'none'
    };

    return (
        <div className='py-24 sm:py-14 px-12 w-full dark:bg-gray-800 sm:ml-64 sm:mt-14'>
            <h1 className='font-semibold text-lg dark:text-white'>Good Morning, Admin</h1>
            <section className="text-gray-600 body-font py-8">
                <h1 className='font-bold mb-8 dark:text-gray-500'>Overview</h1>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="py-4 mx-4 w-[20%] border-t border-gray-200 dark:border-gray-700">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">{appointments.length}</h2>
                            <p className="leading-relaxed dark:text-gray-500">Appointments</p>
                        </div>
                        <div className="py-4 mx-4 w-[20%] border-t border-gray-200 dark:border-gray-700">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">{doctors.length}</h2>
                            <p className="leading-relaxed dark:text-gray-500">Doctors</p>
                        </div>
                        <div className="py-4 mx-4 w-[20%] border-t border-gray-200 dark:border-gray-700">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">{blogs.length}</h2>
                            <p className="leading-relaxed dark:text-gray-500">Blogs</p>
                        </div>
                        <div className="py-4 mx-4 w-[20%] border-t border-gray-200 dark:border-gray-700">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-white">2.7K</h2>
                            <p className="leading-relaxed dark:text-gray-500">Patients</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-6'>
                <h1 className='text-gray-800 text-lg dark:text-white'>Hospital Performance</h1>
                <span className='text-gray-400 dark:text-gray-500'>Blogs, Doctots and Appointments 2024</span>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
            <div>
                <h1 className='font-semibold dark:text-gray-500 mt-12 mb-8'>Recent Appointments</h1>
                <div className="w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap mb-10">
                        <thead>
                            <tr className='dark:border-b border-gray-700'>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  dark:bg-gray-800 rounded-tl rounded-bl dark:text-white">Appointment ID</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Name</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Address</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Patient Mobile</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Time</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white">Staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.sort((a, b) => {
                                const dateA = a.updatedOn ? new Date(a.updatedOn).getTime() : -Infinity; // Treat invalid dates as the oldest
                                const dateB = b.updatedOn ? new Date(b.updatedOn).getTime() : -Infinity; // Treat invalid dates as the oldest
                                return dateB - dateA; // Latest first
                            }).map((appointment, i) => {
                                if (i < 6) {
                                    return (
                                        <tr className='dark:border-b border-gray-700' key={appointment._id}>
                                            <td className="px-4 py-3 dark:text-gray-500">#{appointment._id.substring(0, 6)}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.fname} {appointment.lname}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.address} {appointment.city}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{appointment.mobile}</td>
                                            <td className="px-4 py-3 dark:text-gray-500">{moment(appointment.updatedOn).calendar()}</td>
                                            <td className="w-10 text-center dark:text-gray-500">{appointment.status}</td>
                                        </tr>
                                    )
                                }
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
