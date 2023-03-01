import express from "express";
import { CRUD } from "../controllers/CRUD.js";



const router= express.Router();
router.post("/", CRUD.createPost);
router.get("/", CRUD.getAllPosts );
router.patch("/:id", CRUD.upddatePost);
router.delete("/:id", CRUD.deletePost);
router.get("/:id", CRUD.getPostById);


export default router;