import mongoose from "mongoose";
var commentSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        lowercase: true
    },
    email: {
        type: String,
        lowercase: true
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
var comment = mongoose.model("comment", commentSchema);
export default comment;
