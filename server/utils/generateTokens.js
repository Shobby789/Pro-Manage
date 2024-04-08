const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserToken = mongoose.model("UserToken");
require("dotenv").config();
const Access_KEY = "THIS_IS_MY_ACCESS_TOKEN_KEY";
const REFRESH_TOKEN_KEY = "THIS_IS_MY_REFRESH_TOKEN_KEY";

module.exports.generateToken = async (user) => {
  try {
    const payload = {
      _id: user._id,
      roles: user.roles,
    };

    const accessToken = jwt.sign(payload, Access_KEY, { expiresIn: "14m" });
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, {
      expiresIn: "30d",
    });

    const token = await UserToken.findOne({ userId: user._id });
    if (token) {
      await UserToken.findOneAndDelete({ userId: user._id });
    }

    await new UserToken({ userId: user._id, token: refreshToken }).save();

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    console.log("generateTokens error >> ", error);
    return Promise.reject(error);
  }
};
