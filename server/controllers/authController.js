const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel");

const login = (req, res) => {
  const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
              success: false,
                    message: "Email and password are required.",
                        });
                          }

                            Auth.findAdminByEmail(email, async (err, results) => {
                                if (err) {
                                      return res.status(500).json({
                                              success: false,
                                                      message: err.message,
                                                            });
                                                                }

                                                                    if (results.length === 0) {
                                                                          return res.status(401).json({
                                                                                  success: false,
                                                                                          message: "Invalid email or password",
                                                                                                });
                                                                                                    }

                                                                                                        const admin = results[0];

                                                                                                            const match = await bcrypt.compare(password, admin.password);

                                                                                                                if (!match) {
                                                                                                                      return res.status(401).json({
                                                                                                                              success: false,
                                                                                                                                      message: "Invalid email or password",
                                                                                                                                            });
                                                                                                                                                }

                                                                                                                                                    const token = jwt.sign(
                                                                                                                                                          {
                                                                                                                                                                  id: admin.id,
                                                                                                                                                                          role: admin.role,
                                                                                                                                                                                },
                                                                                                                                                                                      process.env.JWT_SECRET,
                                                                                                                                                                                            {
                                                                                                                                                                                                    expiresIn: "1d",
                                                                                                                                                                                                          }
                                                                                                                                                                                                              );

                                                                                                                                                                                                                  res.json({
                                                                                                                                                                                                                        success: true,
                                                                                                                                                                                                                              message: "Login successful",
                                                                                                                                                                                                                                    token,
                                                                                                                                                                                                                                          admin: {
                                                                                                                                                                                                                                                  id: admin.id,
                                                                                                                                                                                                                                                          full_name: admin.full_name,
                                                                                                                                                                                                                                                                  email: admin.email,
                                                                                                                                                                                                                                                                          role: admin.role,
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                      module.exports = {
                                                                                                                                                                                                                                                                                        login,
                                                                                                                                                                                                                                                                                        };