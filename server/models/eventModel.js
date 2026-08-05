const db = require("../config/database");

const getAllEvents = (callback) => {
  const sql = `
      SELECT *
          FROM events
              ORDER BY start_date DESC
                `;

                  db.query(sql, callback);
                  };

const getEventBySlug = (slug, callback) => {

    const sql = `
        SELECT *
            FROM events
                WHERE slug = ?
                  `;

                    db.query(sql, [slug], callback);

                    };


  const createEvent = (event, callback)=>{

    const sql = `
    INSERT INTO events
    (
    title,
    slug,
    description,
    start_date,
    end_date,
    location,
    organizer,
    registration_link,
    image,
    status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
    sql,
    [
    event.title,
    event.slug,
    event.description,
    event.start_date,
    event.end_date,
    event.location,
    event.organizer,
    event.registration_link,
    event.image || null,
    event.status
    ],
    callback
    );

    };
  
                

    const updateEvent = (slug, event, callback) => {
        const sql = `
            UPDATE events
                SET
                      title = ?,
                            description = ?,
                                  start_date = ?,
                                        end_date = ?,
                                              location = ?,
                                                    organizer = ?,
                                                          registration_link = ?,
                                                                image = ?,
                                                                      status = ?
                                                                          WHERE slug = ?
                                                                            `;

                                                                              db.query(
                                                                                  sql,
                                                                                      [
                                                                                            event.title,
                                                                                                  event.description,
                                                                                                        event.start_date,
                                                                                                              event.end_date,
                                                                                                                    event.location,
                                                                                                                          event.organizer,
                                                                                                                                event.registration_link,
                                                                                                                                      event.image || null,
                                                                                                                                            event.status,
                                                                                                                                                  slug,
                                                                                                                                                      ],
                                                                                                                                                          callback
                                                                                                                                                            );
                                                                                                                                                            };

                                                                                                                                                            const deleteEvent = (slug, callback) => {
                                                                                                                                                              const sql = "DELETE FROM events WHERE slug = ?";

                                                                                                                                                                db.query(sql, [slug], callback);
                                                                                                                                                                };

                                                                  
    
                    module.exports = {
                        getAllEvents,
                          getEventBySlug,
                            createEvent, updateEvent, deleteEvent
                            };
                    