const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware.js");
const isAdmin = require("../middleware/adminMiddleware");
const validateDepartment = require("../validation/departmentValidation");

const {
  getDepartments,getDepartment, createDepartment, updateDepartment, deleteDepartment
  } = require("../controllers/departmentController.js");

  router.get("/", getDepartments);
  router.get("/:slug", getDepartment);
  router.post("/", verifyToken, isAdmin, validateDepartment, createDepartment);
router.put("/:slug", verifyToken, updateDepartment);
router.delete("/:slug", verifyToken, deleteDepartment);

  module.exports = router;