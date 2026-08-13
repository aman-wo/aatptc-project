import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../events/EventCard";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            api
                  .get("/events")
                        .then((response) => {
                                setEvents(
                                          Array.isArray(response.data)
                                                      ? response.data
                                                                  : response.data.data
                                                                          );
                                                                                  setLoading(false);
                                                                                        })
                                                                                              .catch((error) => {
                                                                                                      console.error(error);
                                                                                                              setError("Unable to load events.");
                                                                                                                      setLoading(false);
                                                                                                                            });
                                                                                                                              }, []);

                                                                                                                                if (loading) {
                                                                                                                                    return (
                                                                                                                                          <section>
                                                                                                                                                  <h2>Upcoming Events</h2>
                                                                                                                                                          <p>Loading events...</p>
                                                                                                                                                                </section>
                                                                                                                                                                    );
                                                                                                                                                                      }

                                                                                                                                                                        if (error) {
                                                                                                                                                                            return (
                                                                                                                                                                                  <section>
                                                                                                                                                                                          <h2>Upcoming Events</h2>
                                                                                                                                                                                                  <p>{error}</p>
                                                                                                                                                                                                        </section>
                                                                                                                                                                                                            );
                                                                                                                                                                                                              }

                                                                                                                                                                                                                return (
                                                                                                                                                                                                                    <section>
                                                                                                                                                                                                                          <h2>Upcoming Events</h2>

                                                                                                                                                                                                                                {events.length === 0 ? (
                                                                                                                                                                                                                                        <p>No events available.</p>
                                                                                                                                                                                                                                              ) : (
                                                                                                                                                                                                                                                      events.slice(0, 3).map((item) => (
                                                                                                                                                                                                                                                                <EventCard
                                                                                                                                                                                                                                                                            key={item.id}
                                                                                                                                                                                                                                                                                        event={item}
                                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                                          ))
                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                      export default UpcomingEvents;
