import express from "express";
import Queries from "../controllers/Queries.js";
import protection from "../middleware/isProtected.js";
var router = express.Router();
router.post("/", Queries.createQuery);
router.get("/", protection.isProtected, Queries.getAllQueries);
export default router;
