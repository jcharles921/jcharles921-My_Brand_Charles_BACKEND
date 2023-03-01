import express from "express";
import { Signup } from "../controllers/Signup.js";







const router= express.Router();
router.post("/", Signup.registerController)


export default router;