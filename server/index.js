const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { DbConnection } = require("./models/connection");
const app = express();
app.use(cors());
app.use(bodyParser.json());
DbConnection();

app.listen(1200, () => {
  console.log("Server running on port 1200");
});
