import mongoose from "mongoose";
var validateEmail = function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
// const {password, confirmPass} =req.body;
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: [
            validateEmail,
            "Please fill a valid email address"
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    username: {
        type: String
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
        default: false
    }
});
var User = mongoose.model("User", userSchema);
export default User;
