const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.DB_URI;

module.exports.DbConnection = () => {
  // const DB_URI =
  //   "mongodb+srv://smshoaib2001:promanage@cluster0.udpqtk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  mongoose.connect(DB_URI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));
};
