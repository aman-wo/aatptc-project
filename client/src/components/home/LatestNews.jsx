import { useEffect, useState } from "react";
import api from "../../services/api";
import NewsCard from "../news/NewsCard";

function LatestNews() {
  const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            api
                  .get("/news")
                        .then((response) => {
                                setNews(response.data);
                                        setLoading(false);
                                              })
                                                    .catch((error) => {
                                                            console.error(error);
                                                                    setError("Unable to load news.");
                                                                            setLoading(false);
                                                                                  });
                                                                                    }, []);

                                                                                      if (loading) {
                                                                                          return (
                                                                                                <section>
                                                                                                        <h2>Latest News</h2>
                                                                                                                <p>Loading news...</p>
                                                                                                                      </section>
                                                                                                                          );
                                                                                                                            }

                                                                                                                              if (error) {
                                                                                                                                  return (
                                                                                                                                        <section>
                                                                                                                                                <h2>Latest News</h2>
                                                                                                                                                        <p>{error}</p>
                                                                                                                                                              </section>
                                                                                                                                                                  );
                                                                                                                                                                    }

                                                                                                                                                                      return (
                                                                                                                                                                          <section>
                                                                                                                                                                                <h2>Latest News</h2>

                                                                                                                                                                                      {news.length === 0 ? (
                                                                                                                                                                                              <p>No news available.</p>
                                                                                                                                                                                                    ) : (
                                                                                                                                                                                                            news.slice(0, 3).map((item) => (
                                                                                                                                                                                                                      <NewsCard
                                                                                                                                                                                                                                  key={item.id}
                                                                                                                                                                                                                                              news={item}
                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                ))
                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                            export default LatestNews;
