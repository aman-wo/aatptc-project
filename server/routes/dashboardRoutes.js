const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

const getStats  = require("../controllers/dashboardController");

router.get(
    "/stats",
        verifyToken,
            isAdmin,
                getStats
                );

                module.exports = router;