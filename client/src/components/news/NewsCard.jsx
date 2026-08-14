function NewsCard({ news }) {
          return (
              <article className="content-card news-card">

                    {news.image ? (
                            <img
                                      className="card-image"
                                                src={`http://localhost:5000/uploads/news/${news.image}`}
                                                          alt={news.title}
                                                                  />
                                                                        ) : (
                                                                                <div className="card-image card-image-placeholder">
                                                                                          No Image
                                                                                                  </div>
                                                                                                        )}

                                                                                                              <div className="content-card-body">

                                                                                                                      <h3>{news.title}</h3>

                                                                                                                              <p>{news.content}</p>

                                                                                                                                      <div className="card-meta">
                                                                                                                                                <span>
                                                                                                                                                            {new Date(
                                                                                                                                                                          news.created_at
                                                                                                                                                                                      ).toLocaleDateString()}
                                                                                                                                                                                                </span>
                                                                                                                                                                                                        </div>

                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                  </article>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    export default NewsCard;


