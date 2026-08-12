import { useEffect, useState } from "react";
import api from "../services/api";
import ProgramCard from "../components/programs/ProgramCard";

function Programs() {

  const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {

            api.get("/programs")
                  .then((response) => {

                          console.log("Programs API response:", response.data);

                                  setPrograms(
                                            Array.isArray(response.data)
                                                        ? response.data
                                                                    : response.data.data
                                                                            );

                                                                                    setLoading(false);

                                                                                          })
                                                                                                .catch((error) => {

                                                                                                        console.error(error);
                                                                                                                setError("Unable to load programs.");
                                                                                                                        setLoading(false);

                                                                                                                              });

                                                                                                                                }, []);

                                                                                                                                  if (loading) {
                                                                                                                                      return <p>Loading programs...</p>;
                                                                                                                                        }

                                                                                                                                          if (error) {
                                                                                                                                              return <p>{error}</p>;
                                                                                                                                                }

                                                                                                                                                  return (
                                                                                                                                                      <section>

                                                                                                                                                            <h2>Our Programs</h2>

                                                                                                                                                                  {programs.length === 0 ? (
                                                                                                                                                                          <p>No programs available.</p>
                                                                                                                                                                                ) : (
                                                                                                                                                                                        programs.map((item) => (
                                                                                                                                                                                                  <ProgramCard
                                                                                                                                                                                                              key={item.id}
                                                                                                                                                                                                                          program={item}
                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                            ))
                                                                                                                                                                                                                                                  )}

                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        export default Programs;
