import { useEffect, useState } from "react";
import api from "../services/api";
import AnnouncementCard from "../components/announcements/AnnouncementCard";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchAnnouncements = async () => {
                  try {
                          const response = await api.get("/announcements");

                                  setAnnouncements(response.data.data);
                                        } catch (err) {
                                                console.error(err);
                                                        setError("Failed to load announcements.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchAnnouncements();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return <p>Loading announcements...</p>;
                                                                                              }

                                                                                                if (error) {
                                                                                                    return <p>{error}</p>;
                                                                                                      }

                                                                                                        if (announcements.length === 0) {
                                                                                                            return <p>No announcements available.</p>;
                                                                                                              }

                                                                                                                return (
                                                                                                                    <main>
                                                                                                                          <h1>Announcements</h1>

                                                                                                                                <div>
                                                                                                                                        {announcements.map((announcement) => (
                                                                                                                                                  <AnnouncementCard
                                                                                                                                                              key={announcement.id}
                                                                                                                                                                          announcement={announcement}
                                                                                                                                                                                    />
                                                                                                                                                                                            ))}
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </main>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        };

                                                                                                                                                                                                        export default Announcements;