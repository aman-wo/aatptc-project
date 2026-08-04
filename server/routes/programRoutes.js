const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const validateProgram = require("../validation/programValidation");

const {
  getPrograms, getProgram, createProgram, updateProgram, deleteProgram
  } = require("../controllers/programController");

  router.get("/", getPrograms);
  router.get("/:slug", getProgram);
  router.post(
      "/",
        verifyToken,
          isAdmin,
            validateProgram,
              createProgram
              );
  router.put(
      "/:slug",
        verifyToken,
          isAdmin,
            validateProgram,
              updateProgram
              );


              router.delete(
                "/:slug",
                  verifyToken,
                    isAdmin,
                      deleteProgram
                      );
  
  

  module.exports = router;