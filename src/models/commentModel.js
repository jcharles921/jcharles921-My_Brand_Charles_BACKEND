import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    lowercase: true
  },
  email:{
    type: String,
    lowercase: true
  },
  message: {
    type: String, 
    // required: true,
   
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const comment = mongoose.model("comment", commentSchema)

export default comment;