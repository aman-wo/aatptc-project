import { useEffect, useState } from "react";
import api from "../../services/api";
import ProgramCard from "../programs/ProgramCard";

function ProgramsPreview() {
  const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            api
                  .get("/programs")
                        .then((response) => {
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
                                                                                                                                    return (
                                                                                                                                          <section>
                                                                                                                                                  <h2>Our Programs</h2>
                                                                                                                                                          <p>Loading programs...</p>
                                                                                                                                                                </section>
                                                                                                                                                                    );
                                                                                                                                                                      }

                                                                                                                                                                        if (error) {
                                                                                                                                                                            return (
                                                                                                                                                                                  <section>
                                                                                                                                                                                          <h2>Our Programs</h2>
                                                                                                                                                                                                  <p>{error}</p>
                                                                                                                                                                                                        </section>
                                                                                                                                                                                                            );
                                                                                                                                                                                                              }

                                                                                                                                                                                                                return (
                                                                                                                                                                                                                    <section>
                                                                                                                                                                                                                          <h2>Our Programs</h2>

                                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                                        Discover programs designed to develop
                                                                                                                                                                                                                                                practical and professional skills.
                                                                                                                                                                                                                                                      </p>

                                                                                                                                                                                                                                                            {programs.length === 0 ? (
                                                                                                                                                                                                                                                                    <p>No programs available.</p>
                                                                                                                                                                                                                                                                          ) : (
                                                                                                                                                                                                                                                                                  programs.slice(0, 3).map((item) => (
                                                                                                                                                                                                                                                                                            <ProgramCard
                                                                                                                                                                                                                                                                                                        key={item.id}
                                                                                                                                                                                                                                                                                                                    program={item}
                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                      ))
                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                  export default ProgramsPreview;
