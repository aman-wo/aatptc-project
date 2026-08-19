const validateGallery = (req, res, next) => {
      const { title } = req.body;

        const image = req.file ? req.file.filename : req.body.image;

          if (!title || !image) {
              return res.status(400).json({
                    success: false,
                          message: "Title and image are required."
                              });
                                }

                                  req.body.image = image;

                                    next();
                                    };

                                    module.exports = validateGallery;

