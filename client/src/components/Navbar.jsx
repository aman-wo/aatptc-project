import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
          };

            return (
                <nav className="navbar">
                      <div className="container navbar-container">

                              <Link to="/" className="navbar-brand" onClick={closeMenu}>
                                        AATPTC
                                                </Link>

                                                        <button type="button"
                                                                  className="navbar-toggle"
                                                                            onClick={() => setIsOpen(!isOpen)}
                                                                                      aria-label="Toggle navigation menu"
                                                                                                aria-expanded={isOpen}
                                                                                                        >
                                                                                                                  ☰
                                                                                                                          </button>

                                                                                                                                  <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                                                                                                                                            <Link to="/" onClick={closeMenu}>
                                                                                                                                                        Home
                                                                                                                                                                  </Link>

                                                                                                                                                                            <Link to="/about" onClick={closeMenu}>
                                                                                                                                                                                        About
                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                            <Link to="/departments" onClick={closeMenu}>
                                                                                                                                                                                                                        Departments
                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                            <Link to="/programs" onClick={closeMenu}>
                                                                                                                                                                                                                                                        Programs
                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                            <Link to="/news" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                        News
                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                            <Link to="/events" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                        Events
                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                            <Link to="/staff" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                                                        Staff
                                                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                                                            <Link to="/gallery" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                                                                                        Gallery
                                                                                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                                                                                            <Link to="/downloads" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                                                                                                                        Downloads
                                                                                                                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                                                                                                                            <Link to="/announcements" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        Announcements
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <Link to="/contact" onClick={closeMenu}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Contact
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </nav>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      export default Navbar;