const express = require("express");
const router = express.Router();

const {
  getDepartments,getDepartment, createDepartment, updateDepartment, deleteDepartment
  } = require("../controllers/deparnentController.js");

  router.get("/", getDepartments);
  router.get("/:slug", getDepartment);
  router.post("/", createDepartment);
router.put("/:slug", updateDepartment);
router.delete("/:slug", deleteDepartment);

  module.exports = router;