import { useEffect, useState } from "react";
import api from "../../services/api";
import DepartmentCard from "../departments/DepartmentCard";

function DepartmentsPreview() {
  const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            api
                  .get("/departments")
                        .then((response) => {
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
                                                                                          return (
                                                                                                <section>
                                                                                                        <h2>Our Departments</h2>
                                                                                                                <p>Loading departments...</p>
                                                                                                                      </section>
                                                                                                                          );
                                                                                                                            }

                                                                                                                              if (error) {
                                                                                                                                  return (
                                                                                                                                        <section>
                                                                                                                                                <h2>Our Departments</h2>
                                                                                                                                                        <p>{error}</p>
                                                                                                                                                              </section>
                                                                                                                                                                  );
                                                                                                                                                                    }

                                                                                                                                                                      return (
                                                                                                                                                                          <section>
                                                                                                                                                                                <h2>Our Departments</h2>

                                                                                                                                                                                      <p>
                                                                                                                                                                                              Explore the departments and areas of study
                                                                                                                                                                                                      available at AATPTC.
                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                  {departments.length === 0 ? (
                                                                                                                                                                                                                          <p>No departments available.</p>
                                                                                                                                                                                                                                ) : (
                                                                                                                                                                                                                                        departments.slice(0, 3).map((item) => (
                                                                                                                                                                                                                                                  <DepartmentCard
                                                                                                                                                                                                                                                              key={item.id}
                                                                                                                                                                                                                                                                          department={item}
                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                            ))
                                                                                                                                                                                                                                                                                                  )}
                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                        export default DepartmentsPreview;
