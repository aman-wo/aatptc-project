require("dotenv").config();
const express = require("express");
const cors = require("cors");
const departmentRoutes = require("./routes/departmentRoutes.js");
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes.js");
const programRoutes = require("./routes/programRoutes");
const eventRoutes = require("./routes/eventRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const staffRoutes = require("./routes/staffRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const app = express();


// Connect to database
require("./config/database.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/departments", departmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/gallery", galleryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("AATPTC College API is Running...");
  });
  app.use(errorHandler);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    });