const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { DbConnection } = require("./models/connection");
const authMiddleware = require("./middleware/authMiddlware");
const app = express();
app.use(cors());
app.use(bodyParser.json());
DbConnection();
require("dotenv").config();
const PORT = process.env.PORT;
require("./models/db/taskSchema");
require("./models/db/userSchema");

app.use("/api", require("./routes/taskRoutes"));
app.use("/api", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
