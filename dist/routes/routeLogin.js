import express from "express";
import loginController from "../controllers/Login.js";
var router = express.Router();
router.post("/", loginController);
export default router;
