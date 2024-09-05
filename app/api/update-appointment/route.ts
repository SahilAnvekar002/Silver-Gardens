import connectToMongo from "@/middleware/connectToMongo";
import AppointmentModel from "@/models/AppointmentModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { id, status, time } = body;

        let updatedAt;

        if(time){
            updatedAt = new Date(time);
            //console.log(time)
            //console.log(updatedAt);
        }
        else{
            updatedAt = new Date();
        }

        await AppointmentModel.findByIdAndUpdate(id, { status: status, updatedOn : updatedAt });
        const appointment = await AppointmentModel.findById(id);

        return Response.json({ success: 'Appoinetment request updated successfully', payload: appointment });

    } catch (error) {
        return Response.json({ error: 'Internal server error'});
    }

}

export const POST = connectToMongo(handler);


