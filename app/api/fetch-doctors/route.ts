import connectToMongo from "@/middleware/connectToMongo";
import DoctorModel from "@/models/DoctorModel";

const handler = async (req: Request) => {

    try {

        const doctors = await DoctorModel.find();

        return Response.json({ doctors });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


