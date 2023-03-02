import mongoose from "mongoose";

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
// const {password, confirmPass} =req.body;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address']

},
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: function(v) {

        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v);
      },
      message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character, and be at least 6 characters long'
    }
  },
  // confirmPass:{
  //   type: String,
  //   required: true,
  //   minLength: 6,
  //   validate: {
  //     validator: function(v) {
  //       return v === this.password;
  //     },
  //     message: 'Confirm password must match password'
  //   }
  // },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

export default User;
