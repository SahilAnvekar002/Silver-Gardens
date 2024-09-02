import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    category : {
        type: String,
        required : true
    },
    title : {
        type: String,
        required : true
    },
    des : {
        type: String,
        required : true
    },
    author : {
        type: String,
        required : true
    },
    slug : {
        type: String
    }
}, {
    timestamps : true
});

export default mongoose.models.blog || mongoose.model('blog', BlogSchema);