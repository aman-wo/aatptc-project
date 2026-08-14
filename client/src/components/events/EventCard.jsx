function EventCard({ event }) {
        return (
            <article className="content-card event-card">
                  <div className="content-card-body">

                          <span className="card-label">
                                    Upcoming Event
                                            </span>

                                                    <h3>{event.title}</h3>

                                                            <p>{event.description}</p>

                                                                    <div className="card-meta">
                                                                              <span>
                                                                                          Date:{" "}
                                                                                                      {new Date(
                                                                                                                    event.event_date
                                                                                                                                ).toLocaleDateString()}
                                                                                                                                          </span>
                                                                                                                                                  </div>

                                                                                                                                                        </div>
                                                                                                                                                            </article>
                                                                                                                                                              );
                                                                                                                                                              }

                                                                                                                                                              export default EventCard;
