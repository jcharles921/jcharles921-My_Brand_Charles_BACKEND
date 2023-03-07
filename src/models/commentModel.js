import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  email:{
    type: String,
    required: true,
    lowercase: true
  },
  message: {
    type: String, 
    required: true,
   
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const comment = mongoose.model("comment", commentSchema)

export default comment;