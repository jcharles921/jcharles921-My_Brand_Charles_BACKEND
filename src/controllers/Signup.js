import allErr_Success from "../utils/allErr_Success.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";


class Signup {
    static async registerController(req, res){
        const { email, password/*confirmPass*/ } = req.body;
        try {
          const alluser= await User.find();
          if(alluser == ""){
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ email, password: hashedPassword, isAdmin:true, /*confirmPass*/});
              allErr_Success.signupSuccess(res, newUser);
          }
          else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ email, password: hashedPassword, isAdmin:false, /*confirmPass*/});
              allErr_Success.signupSuccess(res, newUser);

          }
    
        } catch (error) {
          console.log(error.code);
            allErr_Success.signupFail(error, res);
        }
      };
      




}

export {Signup} ;