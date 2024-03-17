const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../models/db/userSchema");
const UserModel = mongoose.model("Users");
const { SECRET_KEY } = require("../data/key");

module.exports.CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(200).json({ message: "Email already registered" });
    }
    await UserModel.create({ name, email, password: encryptedPassword });
    return res.status(200).json({ message: "Account created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isRegisteredUser = await UserModel.findOne({ email });
    if (!isRegisteredUser) {
      return res.status(401).json({ message: "Email is not registered" });
    }
    if (await bcrypt.compare(password, isRegisteredUser.password)) {
      const accessToken = jwt.sign(
        { email: isRegisteredUser.email },
        SECRET_KEY,
        { expiresIn: "1d" }
      );
      if (res.status(201)) {
        return res.status(200).json({
          message: "Login successfull",
          data: {
            user: {
              _id: isRegisteredUser._id,
              name: isRegisteredUser.name,
              email: isRegisteredUser.email,
            },
            accessToken,
          },
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }
    res.status(401).json({ message: "Invalid Email or Password" });
  } catch (error) {
    console.log("LoginError >> ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.ResetPassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: "Email is not registerd" });
    }
    await UserModel.findOneAndUpdate(
      { email: user.email },
      { password: newPassword }
    );
    return res.status(200).json({ message: "Password Updated" });
  } catch (error) {}
};
