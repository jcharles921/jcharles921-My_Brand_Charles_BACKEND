import  jwt  from "jsonwebtoken";




const valideToken = (req, res, next) => {
       // Get the token from the request
       let token =  req.headers.authorization;
       console.log(req.headers)
    //    console.log(req.headers)
     
   
    if (!token) {
        res.status(401).json({
        message: "no token Provided",
        });
    } else {
        // console.log(token + "\n");
        let splitedToken= token.split(" ")[1];
        // console.log(splitedToken);
        // const decoded = jwt.verify(splitedToken , process.env.SECRET);
        const decoded = jwt.verify(token , process.env.SECRET);
        if(!decoded){
           return res.status(401).json({
                message: "You are not authorized to access this path",
                });
        }
        next();
    }
    }

export default valideToken;