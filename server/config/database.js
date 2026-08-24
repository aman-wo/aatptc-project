const mysql = require("mysql2");

console.log("🔍 Database configuration:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD set:", !!process.env.DB_PASSWORD);
console.log("DB_SSL_CA set:", !!process.env.DB_SSL_CA);

const sslConfig = process.env.DB_SSL_CA
  ? {
        ca: process.env.DB_SSL_CA.replace(/\\n/g, "\n"),
            }
              : undefined;

              const pool = mysql.createPool({
                host: process.env.DB_HOST,
                  port: Number(process.env.DB_PORT) || 3306,
                    user: process.env.DB_USER,
                      password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                          ssl: sslConfig,

                            waitForConnections: true,
                              connectionLimit: 10,
                                queueLimit: 0,
                                  connectTimeout: 20000,
                                  });

                                  pool.getConnection((err, connection) => {
                                    if (err) {
                                        console.log("❌ Database connection failed!");
                                            console.log("Error code:", err.code);
                                                console.log("Error message:", err.message);
                                                  } else {
                                                      console.log("✅ MySQL Connection Pool Created Successfully");
                                                          connection.release();
                                                            }
                                                            });

                                                            module.exports = pool;