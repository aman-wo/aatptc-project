const db = require("../config/database");

const getAllAnnouncements = (callback) => {
  db.query(
      "SELECT * FROM announcements ORDER BY publish_date DESC",
          callback
            );
            };

            const getAnnouncementById = (id, callback) => {
              db.query(
                  "SELECT * FROM announcements WHERE id = ?",
                      [id],
                          callback
                            );
                            };

                            const createAnnouncement = (announcement, callback) => {
                              const sql = `
                                  INSERT INTO announcements
                                      (title, content, priority, publish_date, expire_date, is_active)
                                          VALUES (?, ?, ?, ?, ?, ?)
                                            `;

                                              db.query(
                                                  sql,
                                                      [
                                                            announcement.title,
                                                                  announcement.content,
                                                                        announcement.priority,
                                                                              announcement.publish_date,
                                                                                    announcement.expire_date,
                                                                                          announcement.is_active,
                                                                                              ],
                                                                                                  callback
                                                                                                    );
                                                                                                    };

                                                                                                    const updateAnnouncement = (id, announcement, callback) => {
                                                                                                      const sql = `
                                                                                                          UPDATE announcements
                                                                                                              SET
                                                                                                                    title = ?,
                                                                                                                          content = ?,
                                                                                                                                priority = ?,
                                                                                                                                      publish_date = ?,
                                                                                                                                            expire_date = ?,
                                                                                                                                                  is_active = ?
                                                                                                                                                      WHERE id = ?
                                                                                                                                                        `;

                                                                                                                                                          db.query(
                                                                                                                                                              sql,
                                                                                                                                                                  [
                                                                                                                                                                        announcement.title,
                                                                                                                                                                              announcement.content,
                                                                                                                                                                                    announcement.priority,
                                                                                                                                                                                          announcement.publish_date,
                                                                                                                                                                                                announcement.expire_date,
                                                                                                                                                                                                      announcement.is_active,
                                                                                                                                                                                                            id,
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                    callback
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      };

                                                                                                                                                                                                                      const deleteAnnouncement = (id, callback) => {
                                                                                                                                                                                                                        db.query(
                                                                                                                                                                                                                            "DELETE FROM announcements WHERE id = ?",
                                                                                                                                                                                                                                [id],
                                                                                                                                                                                                                                    callback
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                      module.exports = {
                                                                                                                                                                                                                                        getAllAnnouncements,
                                                                                                                                                                                                                                          getAnnouncementById,
                                                                                                                                                                                                                                            createAnnouncement,
                                                                                                                                                                                                                                              updateAnnouncement,
                                                                                                                                                                                                                                                deleteAnnouncement,
                                                                                                                                                                                                                                                };