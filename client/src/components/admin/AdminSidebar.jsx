import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
      <aside className="admin-sidebar">
            <nav className="admin-nav">
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                            <NavLink to="/admin/departments">Departments</NavLink>
                                    <NavLink to="/admin/programs">Programs</NavLink>
                                            <NavLink to="/admin/news">News</NavLink>
                                                    <NavLink to="/admin/events">Events</NavLink>
                                                            <NavLink to="/admin/staff">Staff</NavLink>
                                                                    <NavLink to="/admin/gallery">Gallery</NavLink>
                                                                            <NavLink to="/admin/downloads">Downloads</NavLink>
                                                                                    <NavLink to="/admin/announcements">Announcements</NavLink>
                                                                                            <NavLink to="/admin/contacts">Contacts</NavLink>
                                                                                                  </nav>
                                                                                                      </aside>
                                                                                                        );
                                                                                                        }

                                                                                                        export default AdminSidebar;