function EventCard({ event }) {
      return (
          <article>
                <h3>{event.title}</h3>

                      <p>{event.description}</p>

                            <p>
                                    Date: {new Date(event.event_date).toLocaleDateString()}
                                          </p>
                                              </article>
                                                );
                                                }

                                                export default EventCard;
