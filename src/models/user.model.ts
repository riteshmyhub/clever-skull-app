import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email: {
      type: String,
      requied: [true, "required email"],
      unique: true,
      trim: true,
   },
   password: {
      type: String,
      requied: [true, "required password"],
   },
   allowRoles: {
      type: [String],
      enum: ["user", "admin"],
      default: ["user"],
   },
   profile: {
      name: {
         type: String,
         maxlength: [30, "name can't exceed 30 characters"],
         minlength: [2, "name min length must be 2"],
      },
      lastname: {
         type: String,
         maxlength: [30, "lastname can't exceed 30 characters"],
         minlength: [3, "lastname min length must be 3"],
      },
      username: {
         type: String,
         maxlength: [30, "lastname can't exceed 30 characters"],
         minlength: [3, "lastname min length must be 3"],
      },
      gender: {
         type: String,
         enum: ["female", "male"],
      },
   },
   resetPasswordToken: String,
   resetPasswordExpire: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
