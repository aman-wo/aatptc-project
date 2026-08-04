const db = require("../config/database");

const getAllPrograms = (callback) => {
  const sql = `
      SELECT
            programs.*,
                  departments.name AS department_name
                      FROM programs
                          INNER JOIN departments
                                ON programs.department_id = departments.id
                                    ORDER BY programs.name ASC
                                      `;

                                        db.query(sql, callback);
                                        };

const getProgramBySlug = (slug, callback) => {
    const sql = `
        SELECT
              programs.*,
                    departments.name AS department_name
                        FROM programs
                            INNER JOIN departments
                                  ON programs.department_id = departments.id
                                      WHERE programs.slug = ?
                                        `;

                                          db.query(sql, [slug], callback);
                                          };

const createProgram = (program, callback) => {
    const sql = `
        INSERT INTO programs
            (
                  department_id,
                        name,
                              slug,
                                    description,
                                          duration,
                                                level,
                                                      image
                                                          )
                                                              VALUES (?, ?, ?, ?, ?, ?, ?)
                                                                `;

                                                                  db.query(
                                                                      sql,
                                                                          [
                                                                                program.department_id,
                                                                                      program.name,
                                                                                            program.slug,
                                                                                                  program.description,
                                                                                                        program.duration,
                                                                                                              program.level,
                                                                                                                    program.image || null,
                                                                                                                        ],
                                                                                                                            callback
                                                                                                                              );
                                                                                                                              };


const updateProgram = (slug, program, callback) => {
        const sql = `
            UPDATE programs
                SET
                      department_id = ?,
                            name = ?,
                                  description = ?,
                                        duration = ?,
                                              level = ?,
                                                    image = ?
                                                        WHERE slug = ?
                                                          `;

                                                            db.query(
                                                                sql,
                                                                    [
                                                                          program.department_id,
                                                                                program.name,
                                                                                      program.description,
                                                                                            program.duration,
                                                                                                  program.level,
                                                                                                        program.image || null,
                                                                                                              slug,
                                                                                                                  ],
                                                                                                                      callback
                                                                                                                        );
                                                                                                                        };

const deleteProgram = (slug, callback) => {

        const sql = `
            DELETE FROM programs
                WHERE slug = ?
                  `;

                    db.query(sql, [slug], callback);

                    };


                                        module.exports = {
                                            getAllPrograms,
                                              getProgramBySlug, createProgram, updateProgram, deleteProgram
                                              };
                                        