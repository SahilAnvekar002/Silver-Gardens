import connectToMongo from "@/middleware/connectToMongo";
import BlogModel from "@/models/BlogModel";

const handler = async (req: Request, {params}: {params: {slug: string}}) => {

    try {

        const slug = params.slug;

        const blog = await BlogModel.findOne({slug});

        return Response.json({ blog: blog });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const GET = connectToMongo(handler);


