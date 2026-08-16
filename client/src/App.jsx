import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";

import Departments from "./pages/Departments";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Staff from "./pages/Staff";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import Announcements from "./pages/Announcements";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";

import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
      <Routes>

            {/* Public website */}
                  <Route path="/" element={<MainLayout />}>

                          <Route index element={<Home />} />
                                  <Route path="about" element={<About />} />
                                          <Route path="departments" element={<Departments />} />
                                                  <Route path="programs" element={<Programs />} />
                                                          <Route path="events" element={<Events />} />
                                                                  <Route path="staff" element={<Staff />} />
                                                                          <Route path="gallery" element={<Gallery />} />
                                                                                  <Route path="downloads" element={<Downloads />} />
                                                                                          <Route path="announcements" element={<Announcements />} />
                                                                                                  <Route path="news" element={<News />} />
                                                                                                          <Route path="contact" element={<Contact />} />

                                                                                                                </Route>

                                                                                                                      {/* Admin website */}
                                                                                                                            <Route path="/admin" element={<AdminLayout />}>
                                                                                                                              <Route path="login" element={<AdminLogin />} />
                                                                                                                                <Route path="dashboard" element={<AdminDashboard />} />
                                                                                                                                </Route>

                                                                                                                                              </Routes>
                                                                                                                                                );
                                                                                                                                                }

                                                                                                                                                export default App;

                                                                
