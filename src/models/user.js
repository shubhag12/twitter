import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userschema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userschema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};
userschema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, "secret", {
    expiresIn: "1h",
  });
};
const User = mongoose.model("User", userschema);
export default User;
