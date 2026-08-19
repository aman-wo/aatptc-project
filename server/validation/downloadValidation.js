const validateDownload = (req, res, next) => {
    const { title } = req.body;

      const fileName = req.file
          ? req.file.filename
              : req.body.file_name;

                if (!title || !fileName) {
                    return res.status(400).json({
                          success: false,
                                message: "Title and file are required."
                                    });
                                      }

                                        req.body.file_name = fileName;

                                          next();
                                          };

                                          module.exports = validateDownload;

