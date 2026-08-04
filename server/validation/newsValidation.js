const validateNews = (req, res, next) => {
      const { title, slug, content } = req.body;

        if (!title || !slug || !content) {
            return res.status(400).json({
                  success: false,
                        message: "Title, slug and content are required.",
                            });
                              }

                                next();
                                };

                                module.exports = validateNews;
