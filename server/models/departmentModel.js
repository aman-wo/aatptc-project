const db = require("../config/database");

const getAllDepartments = (callback) => {
  const sql = "SELECT * FROM departments ORDER BY name ASC";
    db.query(sql, callback);
    };

    const getDepartmentBySlug = (slug, callback) => {
        const sql = "SELECT * FROM departments WHERE slug = ?";
          db.query(sql, [slug], callback);
          };
    const createDepartment = (department, callback) => {
        const sql = `
            INSERT INTO departments
                (name, slug, description, head_of_department, email, phone)
                    VALUES (?, ?, ?, ?, ?, ?)
                      `;

                        db.query(
                            sql,
                                [
                                      department.name,
                                            department.slug,
                                                  department.description,
                                                        department.head_of_department,
                                                              department.email,
                                                                    department.phone,
                                                                        ],
                                                                            callback
                                                                              );
                                                                              };
    

                                                                              const updateDepartment = (slug, department, callback) => {
                                                                                  const sql = `
                                                                                      UPDATE departments
                                                                                          SET
                                                                                                name = ?,
                                                                                                      description = ?,
                                                                                                            head_of_department = ?,
                                                                                                                  email = ?,
                                                                                                                        phone = ?
                                                                                                                            WHERE slug = ?
                                                                                                                              `;

                                                                                                                                db.query(
                                                                                                                                    sql,
                                                                                                                                        [
                                                                                                                                              department.name,
                                                                                                                                                    department.description,
                                                                                                                                                          department.head_of_department,
                                                                                                                                                                department.email,
                                                                                                                                                                      department.phone,
                                                                                                                                                                            slug,
                                                                                                                                                                                ],
                                                                                                                                                                                    callback
                                                                                                                                                                                      );
                                                                                                                                                                                      };
                
                                                                                                                                                                                      
                                                                                                                                                                                      const deleteDepartment = (slug, callback) => {
                                                                                                                                                                                            const sql = "DELETE FROM departments WHERE slug = ?";

                                                                                                                                                                                              db.query(sql, [slug], callback);
                                                                                                                                                                                              };
                                                                                                                                                                                      
    module.exports = {
      getAllDepartments, getDepartmentBySlug, createDepartment, updateDepartment, deleteDepartment
      };