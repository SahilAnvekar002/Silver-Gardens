import connectToMongo from "@/middleware/connectToMongo";
import BlogModel from "@/models/BlogModel";

export const dynamic = 'force-dynamic';

const handler = async (req: Request) => {

    try {

        const blogs = await BlogModel.find();

        return Response.json({ blogs }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0, must-revalidate', // Ensure no caching
            },
        });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


