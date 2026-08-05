const db = require("../config/database");

const getAllDownloads = (callback) => {
  db.query(
      "SELECT * FROM downloads ORDER BY created_at DESC",
          callback
            );
            };

            const getDownloadById = (id, callback) => {
              db.query(
                  "SELECT * FROM downloads WHERE id = ?",
                      [id],
                          callback
                            );
                            };

                            const createDownload = (download, callback) => {
                              const sql = `
                                  INSERT INTO downloads
                                      (title, description, file_name, file_type, file_size, category)
                                          VALUES (?, ?, ?, ?, ?, ?)
                                            `;

                                              db.query(
                                                  sql,
                                                      [
                                                            download.title,
                                                                  download.description,
                                                                        download.file_name,
                                                                              download.file_type,
                                                                                    download.file_size,
                                                                                          download.category,
                                                                                              ],
                                                                                                  callback
                                                                                                    );
                                                                                                    };

                                                                                                    const updateDownload = (id, download, callback) => {
                                                                                                      const sql = `
                                                                                                          UPDATE downloads
                                                                                                              SET
                                                                                                                    title = ?,
                                                                                                                          description = ?,
                                                                                                                                file_name = ?,
                                                                                                                                      file_type = ?,
                                                                                                                                            file_size = ?,
                                                                                                                                                  category = ?
                                                                                                                                                      WHERE id = ?
                                                                                                                                                        `;

                                                                                                                                                          db.query(
                                                                                                                                                              sql,
                                                                                                                                                                  [
                                                                                                                                                                        download.title,
                                                                                                                                                                              download.description,
                                                                                                                                                                                    download.file_name,
                                                                                                                                                                                          download.file_type,
                                                                                                                                                                                                download.file_size,
                                                                                                                                                                                                      download.category,
                                                                                                                                                                                                            id,
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                    callback
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      };

                                                                                                                                                                                                                      const deleteDownload = (id, callback) => {
                                                                                                                                                                                                                        db.query(
                                                                                                                                                                                                                            "DELETE FROM downloads WHERE id = ?",
                                                                                                                                                                                                                                [id],
                                                                                                                                                                                                                                    callback
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                      module.exports = {
                                                                                                                                                                                                                                        getAllDownloads,
                                                                                                                                                                                                                                          getDownloadById,
                                                                                                                                                                                                                                            createDownload,
                                                                                                                                                                                                                                              updateDownload,
                                                                                                                                                                                                                                                deleteDownload,
                                                                                                                                                                                                                                                };