const db = require("../config/database");
const { getSettings, updateSettings } = require("../controllers/settingsController");

getSettings = (callback) => {

        const sql = `
                SELECT *
                        FROM settings
                                LIMIT 1
                                    `;

                                        db.query(sql, callback);

                                        };

updateSettings = (settings, callback) => {

            const sql = `
                    UPDATE settings
                            SET
                                        college_name = ?,
                                                    logo = ?,
                                                                favicon = ?,
                                                                            email = ?,
                                                                                        phone = ?,
                                                                                                    address = ?,
                                                                                                                facebook = ?,
                                                                                                                            telegram = ?,
                                                                                                                                        youtube = ?,
                                                                                                                                                    footer_text = ?
                                                                                                                                                            WHERE id = 1
                                                                                                                                                                `;

                                                                                                                                                                    const values = [
                                                                                                                                                                            settings.college_name,
                                                                                                                                                                                    settings.logo,
                                                                                                                                                                                            settings.favicon,
                                                                                                                                                                                                    settings.email,
                                                                                                                                                                                                            settings.phone,
                                                                                                                                                                                                                    settings.address,
                                                                                                                                                                                                                            settings.facebook,
                                                                                                                                                                                                                                    settings.telegram,
                                                                                                                                                                                                                                            settings.youtube,
                                                                                                                                                                                                                                                    settings.footer_text
                                                                                                                                                                                                                                                        ];

                                                                                                                                                                                                                                                            db.query(sql, values, callback);

                                                                                                                                                                                                                                                            };

                                

                            module.exports = {getSettings, updateSettings};
