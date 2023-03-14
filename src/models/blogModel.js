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
    unique:true
    
  }, 
  imageUrl: {
    type: String,
    required: true,
  },
  commentSection:[{
    username: { type: String },
    message: {type:String},
    createdAt:{
        type:Date,
        default:Date.now()
    }

  }],
    like:[{
      email: {type: String}
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const post = mongoose.model("post", postSchema);

export default post;