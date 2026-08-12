import { useEffect, useState } from "react";
import api from "../services/api";
import NewsCard from "../components/news/NewsCard";

function News() {

  const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {

            api.get("/news")
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
                                                                                    return <p>Loading news...</p>;
                                                                                      }

                                                                                        if (error) {
                                                                                            return <p>{error}</p>;
                                                                                              }

                                                                                                return (
                                                                                                    <section>

                                                                                                          <h2>Latest News</h2>

                                                                                                                {news.length === 0 ? (
                                                                                                                        <p>No news available.</p>
                                                                                                                              ) : (
                                                                                                                                      news.map((item) => (
                                                                                                                                                <NewsCard
                                                                                                                                                            key={item.id}
                                                                                                                                                                        news={item}
                                                                                                                                                                                  />
                                                                                                                                                                                          ))
                                                                                                                                                                                                )}

                                                                                                                                                                                                    </section>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }

                                                                                                                                                                                                      export default News;