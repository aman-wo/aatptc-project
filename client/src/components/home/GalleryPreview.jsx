import { useEffect, useState } from "react";
import api from "../../services/api";
import GalleryCard from "../gallery/GalleryCard";

function GalleryPreview() {
  const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchGallery = async () => {
                  try {
                          const response = await api.get("/gallery");
                                  setGallery(response.data.data);
                                        } catch (error) {
                                                console.error(error);
                                                        setError("Unable to load gallery.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchGallery();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return (
                                                                                                  <section>
                                                                                                          <h2>College Gallery</h2>
                                                                                                                  <p>Loading gallery...</p>
                                                                                                                        </section>
                                                                                                                            );
                                                                                                                              }

                                                                                                                                if (error) {
                                                                                                                                    return (
                                                                                                                                          <section>
                                                                                                                                                  <h2>College Gallery</h2>
                                                                                                                                                          <p>{error}</p>
                                                                                                                                                                </section>
                                                                                                                                                                    );
                                                                                                                                                                      }

                                                                                                                                                                        return (
                                                                                                                                                                            <section>
                                                                                                                                                                                  <h2>College Gallery</h2>

                                                                                                                                                                                        {gallery.length === 0 ? (
                                                                                                                                                                                                <p>No gallery images available.</p>
                                                                                                                                                                                                      ) : (
                                                                                                                                                                                                              gallery.slice(0, 3).map((item) => (
                                                                                                                                                                                                                        <GalleryCard
                                                                                                                                                                                                                                    key={item.id}
                                                                                                                                                                                                                                                item={item}
                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                  ))
                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                              export default GalleryPreview;
