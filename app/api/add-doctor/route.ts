import connectToMongo from "@/middleware/connectToMongo";
import DoctorModel from "@/models/DoctorModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { name, address, mobile, qualification } = body;

        const doctor = new DoctorModel({ name, address, mobile, qualification });
        await doctor.save();

        return Response.json({ success: "New doctor added successfully", payload: doctor });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const POST = connectToMongo(handler);


