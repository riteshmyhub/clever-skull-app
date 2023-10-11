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
   resetPasswordToken: String,
   resetPasswordExpire: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
