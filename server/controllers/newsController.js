const News = require("../models/newsModel");


getNews = (req, res) => {

          const page = parseInt(req.query.page) || 1;
              const limit = parseInt(req.query.limit) || 10;
                  const search = req.query.search || "";
                      const sort = req.query.sort || "created_at";
                          const order = req.query.order || "DESC";

                              News.getAllNews(page, limit, search, sort, order, (err, results) => {

                                      if (err) {
                                                  return res.status(500).json(err);
                                                          }

                                                                  res.json(results);

                                                                      });

                                                                      };


const getSingleNews = (req, res) => {
        const { slug } = req.params;

          News.getNewsBySlug(slug, (err, results) => {
              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }

                                                  if (results.length === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "News article not found",
                                                                              });
                                                                                  }

                                                                                      res.json({
                                                                                            success: true,
                                                                                                  data: results[0],
                                                                                                      });
                                                                                                        });
                                                                                                        };
                                                                                                        const createNews = (req, res) => {
                                                                                                            const image = req.file
                                                                                                              ? req.file.filename
                                                                                                                : null;
                                                                                                                const news = {
                                                                                                                    ...req.body,
                                                                                                                      image,
                                                                                                                      };
                                                                                                                
                                                                                                              News.createNews(news, (err, result) => {
                                                                                                                  if (err) {
                                                                                                                        return res.status(500).json({
                                                                                                                                success: false,
                                                                                                                                        message: err.message,
                                                                                                                                              });
                                                                                                                                                  }

                                                                                                                                                      res.status(201).json({
                                                                                                                                                            success: true,
                                                                                                                                                                  message: "News created successfully",
                                                                                                                                                                        id: result.insertId,
                                                                                                                                                                            });
                                                                                                                                                                              });
                                                                                                                                                                        };

                                                                                                      
const updateNews = (req, res) => {
        const { slug } = req.params;

          News.updateNews(slug, req.body, (err, result) => {
              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }

                                                  if (result.affectedRows === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "News article not found",
                                                                              });
                                                                                  }

                                                                                      res.json({
                                                                                            success: true,
                                                                                                  message: "News updated successfully",
                                                                                                      });
                                                                                                        });
                                                                                                        };
const deleteNews = (req, res) => {
        const { slug } = req.params;

          News.deleteNews(slug, (err, result) => {
              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }

                                                  if (result.affectedRows === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "News article not found",
                                                                              });
                                                                                  }

                                                                                      res.json({
                                                                                            success: true,
                                                                                                  message: "News deleted successfully",
                                                                                                      });
                                                                                                        });
                                                                                                        };


                                                                  
module.exports = {
        getNews,
          getSingleNews,
            createNews,
              updateNews,
                deleteNews,
                };
