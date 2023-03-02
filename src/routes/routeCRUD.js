import express from "express";
import { CRUD } from "../controllers/CRUD.js";
import isProtected from "../middleware/isProtected.js";



const router= express.Router();
router.post("/",isProtected, CRUD.createPost);
router.get("/",  CRUD.getAllPosts );
router.patch("/:id",isProtected, CRUD.upddatePost);
router.delete("/:id",isProtected, CRUD.deletePost);
router.get("/:id", CRUD.getPostById);


export default router;