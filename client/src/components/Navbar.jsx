import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav>
            <div>
                    <Link to="/">AATPTC</Link>
                          </div>

                                <div>
                                        <Link to="/">Home</Link>
                                                <Link to="/about">About</Link>
                                                <Link to="/departments">Departments</Link>
                                                        <Link to="/programs">Programs</Link>
                                                                <Link to="/news">News</Link>
                                                                        <Link to="/contact">Contact</Link>
                                                                              </div>
                                                                                  </nav>
                                                                                    );
                                                                                    }

                                                                                    export default Navbar;