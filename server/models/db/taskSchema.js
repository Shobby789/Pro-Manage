const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    author:{type:String},
    title: { type: String },
    priority: { type: String },
    checkList: { type: Array },
    dueDate: { type: String },
  },
  {
    collection: "Tasks",
  }
);

mongoose.model("Tasks", taskSchema);
