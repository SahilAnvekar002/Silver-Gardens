import connectToMongo from "@/middleware/connectToMongo";
import BlogModel from "@/models/BlogModel";

const handler = async (req: Request) => {

    try {

        const body = await req.json();
        const { category, title, des, author } = body;

        const slug = title.trim().replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-');

        const blog = new BlogModel({ category, title, des, author, slug });
        await blog.save();

        return Response.json({ success: "New blog added successfully", payload: blog });

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}

export const POST = connectToMongo(handler);


