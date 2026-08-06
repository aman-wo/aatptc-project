const db = require("../config/database.js");

getAllNews = (page, limit, search, sort, order, callback) => {

      const offset = (page - 1) * limit;

          const sql = `
                  SELECT *
                          FROM news
                                  WHERE title LIKE ?
                                          ORDER BY ${sort} ${order}
                                                  LIMIT ? OFFSET ?
                                                      `;

                                                          db.query(
                                                                  sql,
                                                                          [`%${search}%`, limit, offset],
                                                                                  callback
                                                                                      );

                                                                                      };


const getNewsBySlug = (slug, callback) => {
    const sql = "SELECT * FROM news WHERE slug = ?";

      db.query(sql, [slug], callback);
      };

      const createNews = (news, callback) => {
        const sql = `
            INSERT INTO news
                (title, slug, content, image)
                    VALUES (?, ?, ?, ?)
                      `;

                        db.query(
                            sql,
                                [
                                      news.title,
                                            news.slug,
                                                  news.content,
                                                        news.image || null,
                                                            ],
                                                                callback
                                                                  );
                                                                  };

                                                                  const updateNews = (slug, news, callback) => {
                                                                    const sql = `
                                                                        UPDATE news
                                                                            SET
                                                                                  title = ?,
                                                                                        content = ?,
                                                                                              image = ?
                                                                                                  WHERE slug = ?
                                                                                                    `;

                                                                                                      db.query(
                                                                                                          sql,
                                                                                                              [
                                                                                                                    news.title,
                                                                                                                          news.content,
                                                                                                                                news.image || null,
                                                                                                                                      slug,
                                                                                                                                          ],
                                                                                                                                              callback
                                                                                                                                                );
                                                                                                                                                };

                                                                                                                                                const deleteNews = (slug, callback) => {
                                                                                                                                                  const sql = "DELETE FROM news WHERE slug = ?";

                                                                                                                                                    db.query(sql, [slug], callback);
                                                                                                                                                    };


                  module.exports = {
                      getAllNews,
                        getNewsBySlug,
                          createNews,
                            updateNews,
                              deleteNews,
                              };
                  