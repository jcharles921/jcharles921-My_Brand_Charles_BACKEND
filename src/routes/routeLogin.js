import express from "express";
import { Login } from "../controllers/Login.js";






const router= express.Router();
router.get("/", Login)
export default router;