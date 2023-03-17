import express from "express";
import { Signup } from "../controllers/Signup.js";
import protection from "../middleware/isProtected.js";
var router = express.Router();
router.post("/", Signup.registerController);
router.get("/", protection.isProtectedUser, Signup.getAlluser);
export default router;
