import connectToMongo from "@/middleware/connectToMongo";
import AppointmentModel from "@/models/AppointmentModel";

export const dynamic = 'force-dynamic';

const handler = async (req: Request) => {

    try {

        const appointments = await AppointmentModel.find();

        return Response.json({ appointments });

    } catch (error) {
        return Response.json({ error : "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


