import comment from '../models/commentModel.js';
import allErr_Success from '../utils/allErr_Success.js';
import post from '../models/blogModel.js';



class Comment{
    static async createComment(req, res){

        const {username, email, message, _id} = req.body;

        try {
            // await newComment.save();
            const Post = await post.findById(_id);
            Post.commentSection.push({username, email, message});
            await Post.save();
            allErr_Success.successMsg(res, 201, "Comment created");
        }
        catch (error) {
            console.log(error);
            // allErr_Success.failureMsg(res, 409, "Query already exists");
            res.status(500).json({
                message: error.message,
                Code: error
              });
        }
    }
    static async getAllComments(req, res){
        try{
            const allComments = await comment.find();
            allErr_Success.successMsg(res, 200, "All comments", allComments);
        }
        catch{
            allErr_Success.failureMsg(res, 404, "No comments found");
        }
    }
}
export default Comment;