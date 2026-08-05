const db = require("../config/database");

const getAllGalleries = (callback) => {
  db.query(
      "SELECT * FROM galleries ORDER BY created_at DESC",
          callback
            );
            };

            const getGalleryById = (id, callback) => {
              db.query(
                  "SELECT * FROM galleries WHERE id=?",
                      [id],
                          callback
                            );
                            };

                            const createGallery = (gallery, callback) => {
                              const sql = `
                                INSERT INTO galleries
                                  (title,description,image,category)
                                    VALUES(?,?,?,?)
                                      `;

                                        db.query(
                                            sql,
                                                [
                                                      gallery.title,
                                                            gallery.description,
                                                                  gallery.image,
                                                                        gallery.category
                                                                            ],
                                                                                callback
                                                                                  );
                                                                                  };

                                                                                  const updateGallery = (id, gallery, callback) => {
                                                                                    const sql = `
                                                                                      UPDATE galleries
                                                                                        SET
                                                                                          title=?,
                                                                                            description=?,
                                                                                              image=?,
                                                                                                category=?
                                                                                                  WHERE id=?
                                                                                                    `;

                                                                                                      db.query(
                                                                                                          sql,
                                                                                                              [
                                                                                                                    gallery.title,
                                                                                                                          gallery.description,
                                                                                                                                gallery.image,
                                                                                                                                      gallery.category,
                                                                                                                                            id
                                                                                                                                                ],
                                                                                                                                                    callback
                                                                                                                                                      );
                                                                                                                                                      };

                                                                                                                                                      const deleteGallery = (id, callback) => {
                                                                                                                                                        db.query(
                                                                                                                                                            "DELETE FROM galleries WHERE id=?",
                                                                                                                                                                [id],
                                                                                                                                                                    callback
                                                                                                                                                                      );
                                                                                                                                                                      };

                                                                                                                                                                      module.exports = {
                                                                                                                                                                        getAllGalleries,
                                                                                                                                                                          getGalleryById,
                                                                                                                                                                            createGallery,
                                                                                                                                                                              updateGallery,
                                                                                                                                                                                deleteGallery,
                                                                                                                                                                                };