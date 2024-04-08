const mongoose = require("mongoose");

const userTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
    expires: 30 * 86400,
  },
});

mongoose.model("UserToken", userTokenSchema);
