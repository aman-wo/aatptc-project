function NewsCard({ news }) {
        return (
            <article>

                  {news.image && (
                          <img
                                    src={`http://localhost:5000/uploads/news/${news.image}`}
                                              alt={news.title}
                                                      />
                                                            )}

                                                                  <h3>{news.title}</h3>

                                                                        <p>{news.content}</p>

                                                                              <small>
                                                                                      {new Date(news.created_at).toLocaleDateString()}
                                                                                            </small>

                                                                                                </article>
                                                                                                  );
                                                                                                  }

                                                                                                  export default NewsCard;

