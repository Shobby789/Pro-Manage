const mongoose = require("mongoose");
require("../models/db/taskSchema");
const TasksModel = mongoose.model("Tasks");

module.exports.CreateTask = async (req, res) => {
  const { author, title, priority, checkList, dueDate } = req.body;
  await TasksModel.create({
    author,
    title,
    priority,
    checkList,
    dueDate,
  });
  return res.status(200).json({ message: "Task Created" });
};

module.exports.GetAllTasks = async (req, res) => {
  const tasks = await TasksModel.find({ author: req.body.author });
  if (tasks.length > 0) {
    return res.status(200).json({ message: "Tasks", data: tasks });
  }
  return res.status(201).json({ message: "No tasks found" });
};

module.exports.UpdateTask = async (req, res) => {
  const { taskId } = req.body;
  console.log("taskId >> ", taskId);
  const findTask = await TasksModel.findOne({ _id: taskId });
  if (!findTask) {
    return res.status(200).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "success", data: findTask });
};

module.exports.DeleteTask = async (req, res) => {
  const { taskId } = req.body;
  const findTask = await TasksModel.findOne({ _id: taskId });
  if (findTask) {
    await TasksModel.findByIdAndDelete({ _id: taskId });
    return res.status(200).json({ message: "Task Deleted" });
  }
  return res.status(204).json({ message: "Task not found" });
};
