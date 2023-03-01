class allErr_Success{
  static async failureMsg (res, status, msg) {
    res.status(status).json({
      message: msg,
    });
  };
  static async serverError(res, errorMsg) {
    res.status(500).json({
      message: errorMsg
    });
  };
  static async successMsg(res, status, msg, data){
    res.status(status).json({
      message: msg,
      data: data
    });
  };
  static async loginFail(res){
    res.status(401).json({
      message: "Invalid Credentials"
    });
  }
  static async loginSuccess(res, user, token){
    res.status(200).json({
      data: {
        email: user.email,
        isAdmin: user.isAdmin
      },
      token: token,
    })
  }
  static async signupSuccess(res, user){
    res.status(201).json({
      message: "New User successfully created",
      // data: user
      email: user.email,
      isAdmin: user.isAdmin
    });
  }
  static async signupFail(error,res){
   if(error.code ===11000){
      res.status(403).json({
        message: "Email already exists"
      });
   }
   else{
    res.status(500).json({
      message: error.message
    });
   }
  }
  
}
  
  export default allErr_Success;