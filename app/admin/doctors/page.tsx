import DoctorsPage from "./DoctorsPage";

export default async function Doctors() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetch-doctors`, {cache : 'no-store'});
    const json = await res.json();
    const doctors = json.doctors;

    return (
        <DoctorsPage doctors={doctors}/>
    );
}