import  jwt  from "jsonwebtoken";

const isProtected = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({
        message: "You are not authorized to access this route",
        });
    } else {
        // console.log(token + "\n");
        let splitedToken= token.split(" ")[1];
        // console.log(splitedToken);
        const decoded = jwt.verify(splitedToken, process.env.SECRET);
        req.user = decoded;
        next();
    }
    }

export default isProtected;