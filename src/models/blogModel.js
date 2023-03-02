import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  }, 
  content: {
    type: String,
    required: true,
  }, 
  imageUrl: {
    type: String,
    required: true,
  },
  commentSection:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const post = mongoose.model("post", postSchema);

export default post;