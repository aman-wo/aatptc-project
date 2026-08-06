const db = require("../config/database");

exports.getStats = (callback) => {

    const sql = `
            SELECT
                        (SELECT COUNT(*) FROM departments) AS departments,
                                    (SELECT COUNT(*) FROM programs) AS programs,
                                                (SELECT COUNT(*) FROM news) AS news,
                                                            (SELECT COUNT(*) FROM events) AS events,
                                                                        (SELECT COUNT(*) FROM staff) AS staff,
                                                                                    (SELECT COUNT(*) FROM galleries) AS gallery,
                                                                                                (SELECT COUNT(*) FROM downloads) AS downloads,
                                                                                                            (SELECT COUNT(*) FROM contacts) AS contacts
                                                                                                                `;

                                                                                                                    db.query(sql, callback);

                                                                                                                    };