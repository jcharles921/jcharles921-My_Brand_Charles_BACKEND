import  express from "express";
import Comment from "../controllers/comment.js";


const router= express.Router();
router.post("/:id", Comment.createComment)
router.get("/", Comment.getAllComments)

export default router;