const validateAnnouncement = (req, res, next) => {
      const { title, content, publish_date } = req.body;

        if (!title || !content || !publish_date) {
            return res.status(400).json({
                  success: false,
                        message: "Title, content and publish date are required.",
                            });
                              }

                                next();
                                };

                                module.exports = validateAnnouncement;
