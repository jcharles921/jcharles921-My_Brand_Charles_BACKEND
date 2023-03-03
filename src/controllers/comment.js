import comment from '../models/commentModel.js';
import allErr_Success from '../utils/allErr_Success.js';



class Comment{
    static async createComment(req, res){
        const {name, email, message} = req.body;
        const newComment = new comment({
            name,
            email,
            message
        })
        try {
            await newComment.save();
            allErr_Success.successMsg(res, 201, "Comment created", newComment);
        }
        catch (error) {
            console.log(error);
            // allErr_Success.failureMsg(res, 409, "Query already exists");
            res.status(500).json({
                message: errorMsg,
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