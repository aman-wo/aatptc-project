import { useEffect, useState } from "react";
import api from "../services/api";
import StaffCard from "../components/staff/StaffCard";

const Staff = () => {
  const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchStaff = async () => {
                  try {
                          const response = await api.get("/staff");

                                  setStaff(response.data.data);
                                        } catch (err) {
                                                console.error(err);
                                                        setError("Failed to load staff.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchStaff();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return <p>Loading staff...</p>;
                                                                                              }

                                                                                                if (error) {
                                                                                                    return <p>{error}</p>;
                                                                                                      }

                                                                                                        if (staff.length === 0) {
                                                                                                            return <p>No staff members found.</p>;
                                                                                                              }

                                                                                                                return (
                                                                                                                  <section className="section">
                                                                                                                    <div>
                                                                                                                          <h1 className="section-title">Our Staff</h1>

                                                                                                                                <div>
                                                                                                                                        {staff.map((member) => (
                                                                                                                                                  <StaffCard
                                                                                                                                                              key={member.id}
                                                                                                                                                                          staff={member}
                                                                                                                                                                                    />
                                                                                                                                                                                            ))}
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                      </section>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        };

                                                                                                                                                                                                        export default Staff;