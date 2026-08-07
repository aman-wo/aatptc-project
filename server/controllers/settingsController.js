const Settings = require("../models/settingsModel");

getSettings = (req, res) => {
            res.json({
                    message: "Settings controller is working"
                        });
                        };


                                            updateSettings = (req, res) => {

                                                Settings.updateSettings(req.body, (err, results) => {

                                                        if (err) {
                                                                    return res.status(500).json(err);
                                                                            }

                                                                                    res.json({
                                                                                                message: "Settings updated successfully."
                                                                                                        });

                                                                                                            });

                                                                                                            };

                                            module.exports = {getSettings, updateSettings};