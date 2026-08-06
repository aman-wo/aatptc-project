const multer = require("multer");
const path = require("path");

const createUpload = (folder) => {

  const storage = multer.diskStorage({

      destination: (req, file, cb) => {

            cb(null, `uploads/${folder}`);

                },

                    filename: (req, file, cb) => {

                          const uniqueName =
                                  Date.now() +
                                          path.extname(file.originalname);

                                                cb(null, uniqueName);

                                                    }

                                                      });

                                                        return multer({
                                                            storage,
                                                              });

                                                              };

                                                              module.exports = createUpload;