import mongoose from "mongoose";
var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    commentSection: [
        {
            username: {
                type: String
            },
            message: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
var post = mongoose.model("post", postSchema);
export default post;
