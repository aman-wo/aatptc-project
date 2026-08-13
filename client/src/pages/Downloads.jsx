import { useEffect, useState } from "react";
import api from "../services/api";
import DownloadCard from "../components/downloads/DownloadCard";

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchDownloads = async () => {
                  try {
                          const response = await api.get("/downloads");

                                  setDownloads(response.data.data);
                                        } catch (err) {
                                                console.error(err);
                                                        setError("Failed to load downloads.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchDownloads();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return <p>Loading downloads...</p>;
                                                                                              }

                                                                                                if (error) {
                                                                                                    return <p>{error}</p>;
                                                                                                      }

                                                                                                        if (downloads.length === 0) {
                                                                                                            return <p>No downloads available.</p>;
                                                                                                              }

                                                                                                                return (
                                                                                                                    <div>
                                                                                                                          <h1>Downloads</h1>

                                                                                                                                <div>
                                                                                                                                        {downloads.map((item) => (
                                                                                                                                                  <DownloadCard
                                                                                                                                                              key={item.id}
                                                                                                                                                                          item={item}
                                                                                                                                                                                    />
                                                                                                                                                                                            ))}
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        };

                                                                                                                                                                                                        export default Downloads;