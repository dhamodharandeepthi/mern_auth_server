const databaseConnection = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
databaseConnection();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

//route
app.get("/", (req, res) => {
  res.send("welcome");
});


app.listen(PORT, () => {
  console.log("server running..:::", `http://localhost:${PORT}`);
});
