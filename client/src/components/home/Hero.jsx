import { Link } from "react-router-dom";

function Hero() {
  return (
      <section className="hero">
            <div className="container hero-container">

                    <div className="hero-content">
                              <p className="hero-subtitle">
                                          Welcome to AATPTC
                                                    </p>

                                                              <h1>
                                                                          Addis Ababa Tegbareid Polytechnic College
                                                                                    </h1>

                                                                                              <p className="hero-description">
                                                                                                          Developing skilled professionals through
                                                                                                                      quality technical and vocational education
                                                                                                                                  and training.
                                                                                                                                            </p>

                                                                                                                                                      <div className="hero-actions">
                                                                                                                                                                  <Link to="/programs" className="btn-primary">
                                                                                                                                                                                Explore Programs
                                                                                                                                                                                            </Link>

                                                                                                                                                                                                        <Link to="/contact" className="btn-secondary">
                                                                                                                                                                                                                      Contact Us
                                                                                                                                                                                                                                  </Link>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                export default Hero;
