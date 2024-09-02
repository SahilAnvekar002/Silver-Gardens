import connectToMongo from "@/middleware/connectToMongo";
import AppointmentModel from "@/models/AppointmentModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { fname, lname, email, mobile, address, city, state, pincode } = body;

        const appointment = new AppointmentModel({ fname, lname, email, mobile, address, city, state, pincode });
        appointment.save()

        return Response.json({ success: 'Appoinetment request sent successfully', payload: appointment });

    } catch (error) {
        return Response.json({ error: 'Internal server error' });
    }
}

export const POST = connectToMongo(handler);


