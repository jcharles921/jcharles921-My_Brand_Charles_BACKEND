import routeCRUD from "./routeCRUD.js";
import routeLogin from "./routeLogin.js";
import routeSignup from "./routeSignup.js"
import express from "express";
const router= express.Router();

router.use("/CRUD", routeCRUD);
router.use("/Login", routeLogin);
router.use("/Signup", routeSignup);



export default router;


