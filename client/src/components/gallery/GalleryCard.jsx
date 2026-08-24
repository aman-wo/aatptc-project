const GalleryCard = ({ item }) => {
        const imageUrl = item.image
            ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/gallery/${item.image}`
                : null;

                  return (
                      <article className="content-card gallery-card">

                            {imageUrl ? (
                                    <img
                                              className="card-image"
                                                        src={imageUrl}
                                                                  alt={item.title}
                                                                          />
                                                                                ) : (
                                                                                        <div className="card-image card-image-placeholder">
                                                                                                  No Image
                                                                                                          </div>
                                                                                                                )}

                                                                                                                      <div className="content-card-body">

                                                                                                                              {item.category && (
                                                                                                                                        <span className="card-label">
                                                                                                                                                    {item.category}
                                                                                                                                                              </span>
                                                                                                                                                                      )}

                                                                                                                                                                              <h3>{item.title}</h3>

                                                                                                                                                                                      {item.description && (
                                                                                                                                                                                                <p>{item.description}</p>
                                                                                                                                                                                                        )}

                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  </article>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    };

                                                                                                                                                                                                                    export default GalleryCard;
