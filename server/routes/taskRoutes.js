const express = require("express");
const {
  CreateTask,
  DeleteTask,
  GetAllTasks,
  UpdateTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddlware");
const router = express.Router();

router.post("/create-task", CreateTask);
router.get("/get-all-tasks", GetAllTasks);
router.put("/update-task", UpdateTask);
router.delete("/delete-task", DeleteTask);

module.exports = router;
