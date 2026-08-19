const express = require("express");
const router = express.Router();

const validateGallery = require("../validation/galleryValidation");
const createUpload = require("../middleware/uploadMiddleware");
const uploadGallery = createUpload("gallery");

const {
  getGalleries,
    getSingleGallery,
      createGallery,
        updateGallery,
          deleteGallery
          } = require("../controllers/galleryController");

          const verifyToken = require("../middleware/authMiddleware");
          const isAdmin = require("../middleware/adminMiddleware");

          router.get("/", getGalleries);

          router.get("/:id", getSingleGallery);

          router.post(
            "/",
              verifyToken,
                isAdmin,
                  uploadGallery.single("image"),
                    validateGallery,
                      createGallery
                      );

                      router.put(
                        "/:id",
                          verifyToken,
                            isAdmin,
                              validateGallery,
                                updateGallery
                                );

                                router.delete(
                                  "/:id",
                                    verifyToken,
                                      isAdmin,
                                        deleteGallery
                                        );

                                        module.exports = router;