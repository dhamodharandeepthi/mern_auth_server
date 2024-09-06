const databaseConnection = require("./config/db");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
require("dotenv").config();
databaseConnection();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/auth", authRoutes);
app.use("/api/auth/profile", profileRoutes);

app.listen(PORT, () => {
  console.log("server running..:::", `http://localhost:${PORT}`);
});
