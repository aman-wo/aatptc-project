const GalleryCard = ({ item }) => {
      const imageUrl = item.image
          ? `http://localhost:5000/uploads/gallery/${item.image}`
              : null;

                return (
                    <div>
                          {imageUrl && (
                                  <img
                                            src={imageUrl}
                                                      alt={item.title}
                                                              />
                                                                    )}

                                                                          <h3>{item.title}</h3>

                                                                                {item.category && <p>{item.category}</p>}

                                                                                      {item.description && <p>{item.description}</p>}
                                                                                          </div>
                                                                                            );
                                                                                            };

                                                                                            export default GalleryCard;
