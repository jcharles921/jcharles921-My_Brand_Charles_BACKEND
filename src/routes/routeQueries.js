import express from "express";
import Queries from "../controllers/Queries.js";
import isProtected from "../middleware/isProtected.js";
const router= express.Router();
router.post("/",isProtected, Queries.createQuery);
router.get("/",isProtected,  Queries.getAllQueries );


export default router;