const Program = require("../models/programModel");

const getPrograms = (req, res) => {
  Program.getAllPrograms((err, results) => {
      if (err) {
            return res.status(500).json({
                    success: false,
                            message: err.message,
                                  });
                                      }

                                          res.json({
                                                success: true,
                                                      count: results.length,
                                                            data: results,
                                                                });
                                                                  });
                                                                  };
const getProgram = (req, res) => {
        const { slug } = req.params;

          Program.getProgramBySlug(slug, (err, results) => {
              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }

                                                  if (results.length === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "Program not found",
                                                                              });
                                                                                  }

                                                                                      res.json({
                                                                                            success: true,
                                                                                                  data: results[0],
                                                                                                      });
                                                                                                        });
                                                                                                        };
const createProgram = (req, res) => {
        Program.createProgram(req.body, (err, result) => {
            if (err) {
                  return res.status(500).json({
                          success: false,
                                  message: err.message,
                                        });
                                            }

                                                res.status(201).json({
                                                      success: true,
                                                            message: "Program created successfully",
                                                                  id: result.insertId,
                                                                      });
                                                                        });
                                                                        };

const updateProgram = (req, res) => {
        const { slug } = req.params;

          Program.updateProgram(slug, req.body, (err, result) => {

              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }

                                                  if (result.affectedRows === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "Program not found",
                                                                              });
                                                                                  }

                                                                                      res.json({
                                                                                            success: true,
                                                                                                  message: "Program updated successfully",
                                                                                                      });
                                                                                                        });
                                                                                                        };

const deleteProgram = (req, res) => {

        const { slug } = req.params;

          Program.deleteProgram(slug, (err, result) => {

              if (err) {
                    return res.status(500).json({
                            success: false,
                                    message: err.message,
                                          });
                                              }


                                                  if (result.affectedRows === 0) {
                                                        return res.status(404).json({
                                                                success: false,
                                                                        message: "Program not found",
                                                                              });
                                                                                  }


                                                                                      res.json({
                                                                                            success: true,
                                                                                                  message: "Program deleted successfully",
                                                                                                      });

                                                                                                        });

                                                                                                        };


                                                                  module.exports = {
                                                                    getPrograms, getProgram, createProgram, updateProgram, deleteProgram
                                                                    };