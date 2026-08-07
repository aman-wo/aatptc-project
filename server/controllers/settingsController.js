const Settings = require("../models/settingsModel");

const getSettings = (req, res) => {

            Settings.getSettings((err, results) => {

                    if (err) {
                                return res.status(500).json(err);
                                        }

                                                res.json(results[0]);

                                                    });

                                                    };



                                           const updateSettings = (req, res) => {

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