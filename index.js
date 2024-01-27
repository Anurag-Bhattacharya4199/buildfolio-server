const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes");
const educationRoutes = require("./routes/educationRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to My API");
});

app.use(express.json());

// Use CORS middleware
app.use(cors());

//all users routes
app.use("/users", userRoutes);

//all education routes
app.use("/educations", educationRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
