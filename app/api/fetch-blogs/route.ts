import connectToMongo from "@/middleware/connectToMongo";
import BlogModel from "@/models/BlogModel";

const handler = async (req: Request) => {

    try {

        const blogs = await BlogModel.find();

        return Response.json({ blogs }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


