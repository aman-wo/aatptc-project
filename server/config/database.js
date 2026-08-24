const mysql = require("mysql2");

const sslConfig = process.env.DB_SSL_CA
  ? {
        ca: process.env.DB_SSL_CA.replace(/\\n/g, "\n"),
            }
              : undefined;

              const pool = mysql.createPool({
                host: process.env.DB_HOST,
                  user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                      database: process.env.DB_NAME,
                        ssl: sslConfig,

                          // Connection pool settings
                            waitForConnections: true,
                              connectionLimit: 10,
                                queueLimit: 0,
                                });

                                // Test the database connection
                                pool.getConnection((err, connection) => {
                                  if (err) {
                                      console.log("❌ Database connection failed!");
                                          console.log(err.message);
                                            } else {
                                                console.log("✅ MySQL Connection Pool Created Successfully");
                                                    connection.release();
                                                      }
                                                      });

                                                      module.exports = pool;