const isAdmin = (req, res, next) => {
      if (req.admin.role !== "admin" && req.admin.role !== "super_admin") {
          return res.status(403).json({
                success: false,
                      message: "Access denied. Admin only."
                          });
                            }

                              next();
                              };

                              module.exports = isAdmin;
