// import comment from '../models/commentModel.js';
import allErr_Success from '../utils/allErr_Success.js';
import post from '../models/blogModel.js';



class Comment{
    static async createComment(req, res){
        const {id}= req.params

        const {username, message} = req.body;

        try {
            // await newComment.save()

            const Post = await post.findById(id);
    
            Post.commentSection.push({username, message});
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
    static async like(req, res){
        const {id}= req.params
        // const {email}= req.body;
        try{
            console.log(id);
            const theLike = await post.findById(id);
            theLike.like += 1;
         

            await theLike.save();

            allErr_Success.successMsg(res, 200, "The like", theLike.like);
        }
        catch(error){
            // console.log(error)
            console.log(error.message)
            allErr_Success.failureMsg(res, 404, error.message);
            // allErr_Success.failureMsg(res, 404, "No likes found");
        }
    }
}
export default Comment;