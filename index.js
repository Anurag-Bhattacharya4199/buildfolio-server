const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to My API");
});

// Use CORS middleware
app.use(cors());

// all users routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
