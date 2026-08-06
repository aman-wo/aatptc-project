const Dashboard = require("../models/dashboardModel");

getStats = (req, res) => {

    Dashboard.getStats((err, results) => {

            if (err) {
                        return res.status(500).json(err);
                                }

                                        res.json(results[0]);

                                            });

                                            };
                                            module.exports = getStats;