import connectToMongo from "@/middleware/connectToMongo";
import BlogModel from "@/models/BlogModel";

const handler = async (req: Request) => {

    try {

        const blogs = await BlogModel.find();
        
        return Response.json({ blogs });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


