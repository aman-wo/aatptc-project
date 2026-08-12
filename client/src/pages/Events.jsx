import { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/events/EventCard";

function Events() {

  const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {

            api.get("/events")
                  .then((response) => {

                          console.log("Events API response:", response.data);

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
                                                                                                                                      return <p>Loading events...</p>;
                                                                                                                                        }

                                                                                                                                          if (error) {
                                                                                                                                              return <p>{error}</p>;
                                                                                                                                                }

                                                                                                                                                  return (
                                                                                                                                                      <section>

                                                                                                                                                            <h2>Upcoming Events</h2>

                                                                                                                                                                  {events.length === 0 ? (
                                                                                                                                                                          <p>No events available.</p>
                                                                                                                                                                                ) : (
                                                                                                                                                                                        events.map((item) => (
                                                                                                                                                                                                  <EventCard
                                                                                                                                                                                                              key={item.id}
                                                                                                                                                                                                                          event={item}
                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                            ))
                                                                                                                                                                                                                                                  )}

                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        export default Events;