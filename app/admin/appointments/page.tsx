import AppointmentsPage from "./AppointmentsPage"

async function Appointments() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-appointments`, { cache: 'no-store' });
    const json = await res.json();
    const appointments = json.appointments;

    return (
        <AppointmentsPage appointments={appointments} />
    )
}

export default Appointments
