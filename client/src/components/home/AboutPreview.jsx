import { Link } from "react-router-dom";

function AboutPreview() {
  return (
      <section className="section about-preview">
            <div className="container about-preview-container">

                    <div className="about-preview-content">
                              <p className="about-preview-subtitle">
                                          About AATPTC
                                                    </p>

                                                              <h2>
                                                                          Addis Ababa Tegbareid Polytechnic College
                                                                                    </h2>

                                                                                              <p>
                                                                                                          Addis Ababa Tegbareid Polytechnic College
                                                                                                                      provides technical and vocational education
                                                                                                                                  and training opportunities for students.
                                                                                                                                            </p>

                                                                                                                                                      <Link to="/about" className="btn-primary">
                                                                                                                                                                  Learn More
                                                                                                                                                                            </Link>
                                                                                                                                                                                    </div>

                                                                                                                                                                                          </div>
                                                                                                                                                                                              </section>
                                                                                                                                                                                                );
                                                                                                                                                                                                }

                                                                                                                                                                                                export default AboutPreview;