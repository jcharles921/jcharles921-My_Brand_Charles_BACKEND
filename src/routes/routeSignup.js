import express from "express";
import { Signup } from "../controllers/Signup.js";







const router= express.Router();
router.get("/", Signup )


export default router;