const db = require("../config/database");

const getAllStaff = (callback) => {
  const sql = `
      SELECT
            staff.*,
                  departments.name AS department_name
                      FROM staff
                          INNER JOIN departments
                                ON staff.department_id = departments.id
                                    ORDER BY staff.full_name ASC
                                      `;

                                        db.query(sql, callback);
                                        };

                                        const getStaffById = (id, callback) => {
                                          db.query(
                                              "SELECT * FROM staff WHERE id = ?",
                                                  [id],
                                                      callback
                                                        );
                                                        };

                                                        const createStaff = (staff, callback) => {
                                                          const sql = `
                                                              INSERT INTO staff
                                                                  (department_id, full_name, position, email, phone, biography, image)
                                                                      VALUES (?, ?, ?, ?, ?, ?, ?)
                                                                        `;

                                                                          db.query(
                                                                              sql,
                                                                                  [
                                                                                        staff.department_id,
                                                                                              staff.full_name,
                                                                                                    staff.position,
                                                                                                          staff.email,
                                                                                                                staff.phone,
                                                                                                                      staff.biography,
                                                                                                                            staff.image || null,
                                                                                                                                ],
                                                                                                                                    callback
                                                                                                                                      );
                                                                                                                                      };

                                                                                                                                      const updateStaff = (id, staff, callback) => {
                                                                                                                                        const sql = `
                                                                                                                                            UPDATE staff
                                                                                                                                                SET
                                                                                                                                                      department_id = ?,
                                                                                                                                                            full_name = ?,
                                                                                                                                                                  position = ?,
                                                                                                                                                                        email = ?,
                                                                                                                                                                              phone = ?,
                                                                                                                                                                                    biography = ?,
                                                                                                                                                                                          image = ?
                                                                                                                                                                                              WHERE id = ?
                                                                                                                                                                                                `;

                                                                                                                                                                                                  db.query(
                                                                                                                                                                                                      sql,
                                                                                                                                                                                                          [
                                                                                                                                                                                                                staff.department_id,
                                                                                                                                                                                                                      staff.full_name,
                                                                                                                                                                                                                            staff.position,
                                                                                                                                                                                                                                  staff.email,
                                                                                                                                                                                                                                        staff.phone,
                                                                                                                                                                                                                                              staff.biography,
                                                                                                                                                                                                                                                    staff.image || null,
                                                                                                                                                                                                                                                          id,
                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                  callback
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                    const deleteStaff = (id, callback) => {
                                                                                                                                                                                                                                                                      db.query(
                                                                                                                                                                                                                                                                          "DELETE FROM staff WHERE id = ?",
                                                                                                                                                                                                                                                                              [id],
                                                                                                                                                                                                                                                                                  callback
                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                    module.exports = {
                                                                                                                                                                                                                                                                                      getAllStaff,
                                                                                                                                                                                                                                                                                        getStaffById,
                                                                                                                                                                                                                                                                                          createStaff,
                                                                                                                                                                                                                                                                                            updateStaff,
                                                                                                                                                                                                                                                                                              deleteStaff,
                                                                                                                                                                                                                                                                                              };