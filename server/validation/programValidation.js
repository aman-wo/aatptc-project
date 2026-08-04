const validateProgram = (req, res, next) => {
      const {
          department_id,
              name,
                  slug,
                    } = req.body;

                      if (!department_id || !name || !slug) {
                          return res.status(400).json({
                                success: false,
                                      message: "Department, name and slug are required.",
                                          });
                                            }

                                              next();
                                              };

                                              module.exports = validateProgram;
