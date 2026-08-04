const express = require("express");
const router = express.Router();

const {
  getNews,
    getSingleNews,
      createNews,
        updateNews,
          deleteNews,
          } = require("../controllers/newsController");

          const verifyToken = require("../middleware/authMiddleware");
          const isAdmin = require("../middleware/adminMiddleware");
          const validateNews = require("../validation/newsValidation");


          router.get("/", getNews);

          router.get("/:slug", getSingleNews);

          router.post(
            "/",
              verifyToken,
                isAdmin,
                  validateNews,
                    createNews
                    );

                    router.put(
                      "/:slug",
                        verifyToken,
                          isAdmin,
                            validateNews,
                              updateNews
                              );

                              router.delete(
                                "/:slug",
                                  verifyToken,
                                    isAdmin,
                                      deleteNews
                                      );

                                      module.exports = router;