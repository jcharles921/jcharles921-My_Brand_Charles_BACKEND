import  jwt  from "jsonwebtoken";
import getCookie from "../utils/cookies.js";



const isProtected = (req, res, next) => {
       // Get the token from the request
       let token =  req.headers.authorized;
     
   
    if (!token) {
        res.status(401).json({
        message: "no token Provided",
        });
    } else {
        // console.log(token + "\n");
        let splitedToken= token.split(" ")[1];
        // console.log(splitedToken);
        const decoded = jwt.verify(token, process.env.SECRET);
        if(!decoded.isAdmin){
           return res.status(401).json({
                message: "You are not authorized to access this route",
                });
        }
        next();
    }
    }

export default isProtected;