const validateEvent = (req, res, next) => {
      const {
          title,
              slug,
                  description,
                      start_date,
                          status,
                            } = req.body;

                              if (!title || !slug || !description || !start_date || !status) {
                                  return res.status(400).json({
                                        success: false,
                                              message: "Title, slug, description, start date and status are required.",
                                                  });
                                                    }

                                                      next();
                                                      };

                                                      module.exports = validateEvent;
