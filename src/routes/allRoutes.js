import routeCRUD from "./routeCRUD.js";
import routeLogin from "./routeLogin.js";
import routeSignup from "./routeSignup.js"
import routeQueries from "./routeQueries.js"
import routerComment from "./routeComment.js";
import express from "express";
const router= express.Router();

router.use("/CRUD", routeCRUD);
router.use("/Login", routeLogin);
router.use("/Signup", routeSignup);
router.use("/queries",routeQueries);
// router.use("/comments", routerComment);



export default router;


