import AdminPage from "./AdminPage";

async function Admin() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-doctors`, {cache : 'no-store'});
    const json = await res.json();
    const doctors = json.doctors;

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-appointments`, { cache: 'no-store' });
    const json2 = await res2.json();
    const appointments = json2.appointments;

    const res3 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-blogs`, {cache : 'no-store'});
    const json3 = await res3.json();
    const blogs = json3.blogs;

    return (
        <AdminPage doctors={doctors} blogs={blogs} appointments={appointments} />
    )
}

export default Admin
