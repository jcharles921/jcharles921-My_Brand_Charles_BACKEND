import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
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

const query = mongoose.model("query", querySchema)

export default query;