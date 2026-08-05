const validateDownload = (req, res, next) => {
      const { title, file_name } = req.body;

        if (!title || !file_name) {
            return res.status(400).json({
                  success: false,
                        message: "Title and file name are required.",
                            });
                              }

                                next();
                                };

                                module.exports = validateDownload;
