import connectToMongo from "@/middleware/connectToMongo";
import DoctorModel from "@/models/DoctorModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { _id, name, address, mobile, qualification } = body;

        
        await DoctorModel.findByIdAndUpdate(_id, {name: name, address: address, mobile: mobile, qualification: qualification});
        const doctor = await DoctorModel.findById(_id);

        return Response.json({ success: "Doctor updated successfully", payload: doctor });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const POST = connectToMongo(handler);


