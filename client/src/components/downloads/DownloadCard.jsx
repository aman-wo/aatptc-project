const DownloadCard = ({ item }) => {
      const fileUrl = `http://localhost:5000/uploads/downloads/${item.file_name}`;

        return (
            <div>
                  <h3>{item.title}</h3>

                        {item.category && <p>{item.category}</p>}

                              {item.description && <p>{item.description}</p>}

                                    <p>
                                            {item.file_type} · {item.file_size}
                                                  </p>

                                                        <a
                                                                href={fileUrl}
                                                                        target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                      >
                                                                                              Download
                                                                                                    </a>
                                                                                                        </div>
                                                                                                          );
                                                                                                          };

                                                                                                          export default DownloadCard;
