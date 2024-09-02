import connectToMongo from "@/middleware/connectToMongo";
import FeedbackModel from "@/models/FeedbackModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { fname, lname, email, mobile, message } = body;

        const feedback = new FeedbackModel({ fname, lname, email, mobile, message });
        await feedback.save();

        return Response.json({ success: "Feedback sent successfully", payload: feedback });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const POST = connectToMongo(handler);


