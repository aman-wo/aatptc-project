import { Link } from "react-router-dom";

function ContactCTA() {
  return (
      <section className="contact-cta">
            <div className="container contact-cta-container">

                    <div className="contact-cta-content">
                              <p className="contact-cta-subtitle">
                                          Get in Touch
                                                    </p>

                                                              <h2>Have Questions About AATPTC?</h2>

                                                                        <p>
                                                                                    Contact Addis Ababa Tegbareid Polytechnic College
                                                                                                for more information about our programs, departments,
                                                                                                            and services.
                                                                                                                      </p>

                                                                                                                                <Link to="/contact" className="btn-primary">
                                                                                                                                            Contact Us
                                                                                                                                                      </Link>
                                                                                                                                                              </div>

                                                                                                                                                                    </div>
                                                                                                                                                                        </section>
                                                                                                                                                                          );
                                                                                                                                                                          }

                                                                                                                                                                          export default ContactCTA;