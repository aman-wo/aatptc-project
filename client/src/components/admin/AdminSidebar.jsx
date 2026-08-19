import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const menuItems = [
      {
            name: "Dashboard",
                  path: "/admin/dashboard",
                      },
                          {
                                name: "Departments",
                                      path: "/admin/departments",
                                          },
                                              {
                                                    name: "Programs",
                                                          path: "/admin/programs",
                                                              },
                                                                  {
                                                                        name: "News",
                                                                              path: "/admin/news",
                                                                                  },
                                                                                      {
                                                                                            name: "Events",
                                                                                                  path: "/admin/events",
                                                                                                      },
                                                                                                          {
                                                                                                                name: "Staff",
                                                                                                                      path: "/admin/staff",
                                                                                                                          },
                                                                                                                              {
                                                                                                                                    name: "Gallery",
                                                                                                                                          path: "/admin/gallery",
                                                                                                                                              },
                                                                                                                                                  {
                                                                                                                                                        name: "Downloads",
                                                                                                                                                              path: "/admin/downloads",
                                                                                                                                                                  },
                                                                                                                                                                      {
                                                                                                                                                                            name: "Announcements",
                                                                                                                                                                                  path: "/admin/announcements",
                                                                                                                                                                                      },
                                                                                                                                                                                          {
                                                                                                                                                                                                name: "Contacts",
                                                                                                                                                                                                      path: "/admin/contacts",
                                                                                                                                                                                                          },
                                                                                                                                                                                                            ];

                                                                                                                                                                                                              return (
                                                                                                                                                                                                                  <aside className="admin-sidebar">
                                                                                                                                                                                                                        <div className="admin-sidebar-title">
                                                                                                                                                                                                                                <h2>AATPTC</h2>
                                                                                                                                                                                                                                        <p>Admin Panel</p>
                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                    <nav className="admin-nav">
                                                                                                                                                                                                                                                            {menuItems.map((item) => (
                                                                                                                                                                                                                                                                      <NavLink
                                                                                                                                                                                                                                                                                  key={item.path}
                                                                                                                                                                                                                                                                                              to={item.path}
                                                                                                                                                                                                                                                                                                          className={({ isActive }) =>
                                                                                                                                                                                                                                                                                                                        isActive ? "admin-nav-link active" : "admin-nav-link"
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                                                          {item.name}
                                                                                                                                                                                                                                                                                                                                                                    </NavLink>
                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                  </nav>
                                                                                                                                                                                                                                                                                                                                                                                      </aside>
                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                        export default AdminSidebar;