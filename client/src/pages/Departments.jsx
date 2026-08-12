import { useEffect, useState } from "react";
import api from "../services/api";
import DepartmentCard from "../components/departments/DepartmentCard";

function Departments() {

  const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {

            api.get("/departments")
                  .then((response) => {
//console.log("Departments API response:", response.data);
                          setDepartments(response.data.data);
                                  setLoading(false);

                                        })
                                              .catch((error) => {

                                                      console.error(error);

                                                              setError("Unable to load departments.");
                                                                      setLoading(false);

                                                                            });

                                                                              }, []);

                                                                                if (loading) {
                                                                                    return <p>Loading departments...</p>;
                                                                                      }

                                                                                        if (error) {
                                                                                            return <p>{error}</p>;
                                                                                              }

                                                                                                return (
                                                                                                    <section>

                                                                                                          <h2>Our Departments</h2>


                                                                                                                {departments.length === 0 ? (
                                                                                                                        <p>No departments available.</p>
                                                                                                                              ) : (
                                                                                                                                      departments?.map((item) => (
                                                                                                                                                <DepartmentCard
                                                                                                                                                            key={item.id}
                                                                                                                                                                        department={item}
                                                                                                                                                                                  />
                                                                                                                                                                                          ))
                                                                                                                                                                                                )}

                                                                                                                                                                                                    </section>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }

                                                                                                                                                                                                      export default Departments;