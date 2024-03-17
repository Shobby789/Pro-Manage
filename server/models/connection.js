// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =

const mongoose = require("mongoose");

//   "mongodb+srv://smshoaib2001:promanage@cluster0.udpqtk8.mongodb.net/?ProManageretryWrites=true&w=majority&appName=Cluster0";
module.exports.DbConnection = () => {
  // MongoDB Connection
  const DB_URI =
    "mongodb+srv://smshoaib2001:promanage@cluster0.udpqtk8.mongodb.net/?ProManageretryWrites=true&w=majority&appName=Cluster0";
  mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));
};
