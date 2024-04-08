const mongoose = require("mongoose");
const UserToken = mongoose.model("UserToken");
const jwt = require("jsonwebtoken");
const REFRESH_TOKEN_KEY = "THIS_IS_MY_REFRESH_TOKEN_KEY";

module.exports.VerifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    UserToken.findOne({ token: refreshToken }, (err, doc) => {
      if (!doc) {
        return reject({ error: true, message: "Invalid refresh token" });
      }

      jwt.verify(refreshToken, REFRESH_TOKEN_KEY, (err, tokenDetails) => {
        if (err) {
          return reject({ error: true, message: "Invalid refresh token" });
        }
        resolve({
          tokenDetails,
          error: false,
          message: "Valid Refresh Token",
        });
      });
    });
  });
};
