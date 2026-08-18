import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchStats = async () => {
                  try {
                          const response = await api.get("/dashboard/stats");
                                  setStats(response.data);
                                        } catch (error) {
                                                console.error("Failed to load dashboard statistics:", error);
                                                        setError("Failed to load dashboard statistics.");
                                                              } finally {
                                                                      setLoading(false);
                                                                            }
                                                                                };

                                                                                    fetchStats();
                                                                                      }, []);

                                                                                        if (loading) {
                                                                                            return <p>Loading dashboard...</p>;
                                                                                              }

                                                                                                if (error) {
                                                                                                    return <p>{error}</p>;
                                                                                                      }

                                                                                                        return (
                                                                                                            <div className="admin-dashboard">
                                                                                                                  <h2>Admin Dashboard</h2>
                                                                                                                        <p>Welcome to the AATPTC Admin Panel.</p>

                                                                                                                              <div className="dashboard-stats">
                                                                                                                                      <div className="stat-card">
                                                                                                                                                <h3>Departments</h3>
                                                                                                                                                          <p>{stats.departments}</p>
                                                                                                                                                                  </div>

                                                                                                                                                                          <div className="stat-card">
                                                                                                                                                                                    <h3>Programs</h3>
                                                                                                                                                                                              <p>{stats.programs}</p>
                                                                                                                                                                                                      </div>

                                                                                                                                                                                                              <div className="stat-card">
                                                                                                                                                                                                                        <h3>News</h3>
                                                                                                                                                                                                                                  <p>{stats.news}</p>
                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                  <div className="stat-card">
                                                                                                                                                                                                                                                            <h3>Events</h3>
                                                                                                                                                                                                                                                                      <p>{stats.events}</p>
                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                      <div className="stat-card">
                                                                                                                                                                                                                                                                                                <h3>Staff</h3>
                                                                                                                                                                                                                                                                                                          <p>{stats.staff}</p>
                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                          <div className="stat-card">
                                                                                                                                                                                                                                                                                                                                    <h3>Gallery</h3>
                                                                                                                                                                                                                                                                                                                                              <p>{stats.gallery}</p>
                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                              <div className="stat-card">
                                                                                                                                                                                                                                                                                                                                                                        <h3>Downloads</h3>
                                                                                                                                                                                                                                                                                                                                                                                  <p>{stats.downloads}</p>
                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                  <div className="stat-card">
                                                                                                                                                                                                                                                                                                                                                                                                            <h3>Contacts</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                      <p>{stats.contacts}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                          export default AdminDashboard;
