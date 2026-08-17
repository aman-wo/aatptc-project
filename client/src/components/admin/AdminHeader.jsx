import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
            navigate("/admin/login");
              };

                return (
                    <header className="admin-header">
                          <div className="admin-header-container">
                                  <h1>AATPTC Admin Panel</h1>

                                          <div className="admin-user">
                                                    <span>Administrator</span>
                                                              <button onClick={handleLogout}>Logout</button>
                                                                      </div>
                                                                            </div>
                                                                                </header>
                                                                                  );
                                                                                  }

                                                                                  export default AdminHeader;
