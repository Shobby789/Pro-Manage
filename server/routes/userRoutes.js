const express = require("express");
const {
  CreateUser,
  LoginUser,
  ResetPassword,
} = require("../controllers/userController");
const router = express.Router();

router.post("/createuser", CreateUser);
router.post("/loginuser", LoginUser);
router.put("/changepassword", ResetPassword);

module.exports = router;
