require("dotenv").config();
const express = require("express");
const cors = require("cors");
const departmentRoutes = require("./routes/departmentRoutes.js");
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes.js");

const app = express();


// Connect to database
require("./config/database.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/departments", departmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("AATPTC College API is Running...");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    });