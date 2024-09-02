import connectToMongo from "@/middleware/connectToMongo";
import DoctorModel from "@/models/DoctorModel";

const handler = async (req: Request, { params }: { params: { id: string } }) => {

    try {

        const id = params.id;

        await DoctorModel.findByIdAndDelete(id);

        return Response.json({success : 'Doctor deleted successfully', payload: id});

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const DELETE = connectToMongo(handler);


