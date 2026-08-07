const express = require("express");
const router = express.Router();

const {
    getSettings,
        updateSettings
        } = require("../controllers/settingsController");

        const verifyToken = require("../middleware/authMiddleware");
        const isAdmin = require("../middleware/adminMiddleware");

        router.get("/", getSettings);

        router.put(
            "/",
                verifyToken,
                    isAdmin,
                        updateSettings
                        );

                        module.exports = router;