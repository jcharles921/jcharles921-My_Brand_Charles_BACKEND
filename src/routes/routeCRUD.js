import express from "express";
import { CRUD } from "../controllers/CRUD.js";



const router= express.Router();
router.post("/", CRUD.createPost);
router.get("/", CRUD.getAllPosts );
router.put("/:id", CRUD.upddatePost);
router.delete("/", CRUD.deletePost);
router.get("/:id", CRUD.getPostById);


export default router;