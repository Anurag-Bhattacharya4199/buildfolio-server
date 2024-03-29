const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes");
const educationRoutes = require("./routes/educationRoutes");
const workExperienceRoutes = require("./routes/workExperienceRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const referenceRoutes = require("./routes/referenceRoutes");

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

//all workhouse routes
app.use("/workExperiences", workExperienceRoutes);

//all project routes
app.use("/projects", projectRoutes);

//all skill routes
app.use("/skills", skillRoutes);

//all reference routes
app.use("/references", referenceRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
