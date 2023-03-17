import post from "../models/blogModel.js"
import allErr_Success from "../utils/allErr_Success.js";


class CRUD {

static async getAllPosts (req,res){
    console.log("all the posts are here");
    try{
        const allPosts = await post.find();
       
        allErr_Success.successMsg(res, 200, "All posts", allPosts);    
    }
    catch{
        allErr_Success.failureMsg(res, 404, "No posts found");
    }

}   

static async createPost(req,res){
    console.log("post created");
    const {title, content, imageUrl,commentSection, createdAt} = req.body;
    const newPost = new post({
        title,
        content,
        commentSection,
        imageUrl,
        createdAt
    })
    try {
        await newPost.save();
        // res.status(201).json({data:newPost});
        allErr_Success.successMsg(res, 201, "Post created", newPost);
    }
    catch (error) {
        res.status(409).json({message: error.message});
        // allErr_Success.failureMsg(res, 409, "Post already exists");
    }


}

static async upddatePost(req,res){
    const {title, content, imageUrl}= req.body;
    const {id} = req.params;
    try{
        const thepostToUpdate = await post.findByIdAndUpdate(id,{title,content,imageUrl}, {new: true});
        allErr_Success.successMsg(res, 200, "Post updated", thepostToUpdate);
    }
    catch(error){
        console.log(error.message)
        allErr_Success.failureMsg(res, 404, "Post not found");
        

    }

  
    
}
static async deletePost(req,res){
   
    try{
        console.log(req.params)

        const _id=req.params.id;
        const deleted_post= await post.findByIdAndDelete(_id);
        console.log(deleted_post);
       if(deleted_post){
        allErr_Success.successMsg(res, 200, "Post deleted", deleted_post);
       };
    }
    catch(error){
        console.log(error)
        allErr_Success.failureMsg(res, 404, "Post not found");

    }
    
}
static async getPostById(req,res){
    const {id} = req.params;
    try{
        const thePost = await post.findById(id);
        allErr_Success.successMsg(res, 200, "Post found", thePost);
    }
    catch(error){
        allErr_Success.failureMsg(res, 404, "Post not found");

    }
    
}
// static async commentController(req,res){
//     try {
        
//     } catch (error) {
        
//     }

// }
// static async likeController(req,res){
//     try {
        
//     } catch (error) {
        
//     }

// }


}

export {CRUD} ;