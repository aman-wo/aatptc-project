const db = require("../config/database");

const getAllContacts = (callback) => {
  db.query(
      "SELECT * FROM contacts ORDER BY created_at DESC",
          callback
            );
            };

            const getContactById = (id, callback) => {
              db.query(
                  "SELECT * FROM contacts WHERE id = ?",
                      [id],
                          callback
                            );
                            };

                            const createContact = (contact, callback) => {
                              const sql = `
                                  INSERT INTO contacts
                                      (full_name,email,phone,subject,message)
                                          VALUES(?,?,?,?,?)
                                            `;

                                              db.query(
                                                  sql,
                                                      [
                                                            contact.full_name,
                                                                  contact.email,
                                                                        contact.phone,
                                                                              contact.subject,
                                                                                    contact.message,
                                                                                        ],
                                                                                            callback
                                                                                              );
                                                                                              };

                                                                                              const markAsRead = (id, callback) => {
                                                                                                db.query(
                                                                                                    "UPDATE contacts SET is_read = TRUE WHERE id = ?",
                                                                                                        [id],
                                                                                                            callback
                                                                                                              );
                                                                                                              };

                                                                                                              const deleteContact = (id, callback) => {
                                                                                                                db.query(
                                                                                                                    "DELETE FROM contacts WHERE id = ?",
                                                                                                                        [id],
                                                                                                                            callback
                                                                                                                              );
                                                                                                                              };

                                                                                                                              module.exports = {
                                                                                                                                getAllContacts,
                                                                                                                                  getContactById,
                                                                                                                                    createContact,
                                                                                                                                      markAsRead,
                                                                                                                                        deleteContact,
                                                                                                                                        };