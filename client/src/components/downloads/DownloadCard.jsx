const DownloadCard = ({ item }) => {
        const fileUrl =
            `http://localhost:5000/uploads/downloads/${item.file_name}`;

              return (
                  <article className="content-card download-card">
                        <div className="content-card-body">

                                <span className="card-label">
                                          {item.category || "Resource"}
                                                  </span>

                                                          <h3>{item.title}</h3>

                                                                  {item.description && (
                                                                            <p>{item.description}</p>
                                                                                    )}

                                                                                            <div className="card-meta">
                                                                                                      <span>
                                                                                                                  {item.file_type} · {item.file_size}
                                                                                                                            </span>
                                                                                                                                    </div>

                                                                                                                                            <a
                                                                                                                                                      className="card-button"
                                                                                                                                                                href={fileUrl}
                                                                                                                                                                          target="_blank"
                                                                                                                                                                                    rel="noopener noreferrer"
                                                                                                                                                                                            >
                                                                                                                                                                                                      Download
                                                                                                                                                                                                              </a>

                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                        </article>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          };

                                                                                                                                                                                                                          export default DownloadCard;

