import { useEffect, useState } from "react";
import api from "../services/api";
import GalleryCard from "../components/gallery/GalleryCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchGallery = async () => {
                  try {
                          const response = await api.get("/gallery");

                                  setGallery(response.data.data);
                                        } catch (err) {
                                                console.error(err);
                                                        setError("Failed to load gallery.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchGallery();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return <p>Loading gallery...</p>;
                                                                                              }

                                                                                                if (error) {
                                                                                                    return <p>{error}</p>;
                                                                                                      }

                                                                                                        if (gallery.length === 0) {
                                                                                                            return <p>No gallery images found.</p>;
                                                                                                              }

                                                                                                                return (
                                                                                                                    <div>
                                                                                                                          <h1>College Gallery</h1>

                                                                                                                                <div>
                                                                                                                                        {gallery.map((item) => (
                                                                                                                                                  <GalleryCard
                                                                                                                                                              key={item.id}
                                                                                                                                                                          item={item}
                                                                                                                                                                                    />
                                                                                                                                                                                            ))}
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        };

                                                                                                                                                                                                        export default Gallery;