import express from "express";
import { CRUD } from "../controllers/CRUD.js";
import protection from "../middleware/isProtected.js";
import Comment from "../controllers/comment.js";
;



const router= express.Router();
router.post("/", CRUD.createPost);
router.get("/",  CRUD.getAllPosts );
router.patch("/:id", CRUD.upddatePost);
router.delete("/:id", CRUD.deletePost);
router.get("/:id", CRUD.getPostById);
router.put('/:id/comments',Comment.createComment)
router.put('/:id/like',Comment.like)


export default router;