// import userModel from "../models/userModel.js"
import allErr_Success from "../utils/allErr_Success.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const loginController = async (req, res) => {
    // email and password
    const { email, password } = req.body;
    try {
      // find user with the email 
      const user = await User.findOne({ email });
  
      // check if that user exists or not
      if (!user) {
        allErr_Success.loginFail(res);
      } else {
        // check password
       
        const comparedHashedPassword = await bcrypt.compare(password, user.password);
        if (!comparedHashedPassword) {

        allErr_Success.loginFail(res);

        } else {
          // create a sign in token
          const token = jwt.sign({isAdmin: user.isAdmin}, process.env.SECRET, {expiresIn: '1h'})
          res.cookie("authorized", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        });
        const tokenUser= jwt.sign({realUser:true},process.env.SECRET,{expiresIn:'1h'} )
        
        res.cookie('authorization',tokenUser,{
          httpOnly: true,
          maxAge: 1000 * 60 // 1h
          
        })
        // allErr_Success.loginSuccess(res, user, token);

  
        allErr_Success.loginSuccess(res, user, token);
        }
      }
    } catch (error) {
    allErr_Success.serverError(res, error.message);
    }
  };

export default loginController;