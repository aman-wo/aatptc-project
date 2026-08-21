import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const slides = [
      "Developing skilled professionals through quality technical and vocational education and training.",
          "Empowering students with practical skills, technical knowledge, and the confidence to build a successful future.",
              "Building a skilled workforce through practical learning, innovation, and quality technical education.",
                ];

                  const [currentSlide, setCurrentSlide] = useState(0);

                    useEffect(() => {
                        const timer = setInterval(() => {
                              setCurrentSlide((prev) => (prev + 1) % slides.length);
                                  }, 5000);

                                      return () => clearInterval(timer);
                                        }, [slides.length]);

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
                                                                                                                                                  {slides[currentSlide]}
                                                                                                                                                            </p>

                                                                                                                                                                      <div className="hero-actions">
                                                                                                                                                                                  <Link to="/programs" className="btn-primary">
                                                                                                                                                                                                Explore Programs
                                                                                                                                                                                                            </Link>

                                                                                                                                                                                                                        <Link to="/contact" className="btn-secondary">
                                                                                                                                                                                                                                      Contact Us
                                                                                                                                                                                                                                                  </Link>
                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                      <div className="hero-dots">
                                                                                                                                                                                                                                                                                  {slides.map((_, index) => (
                                                                                                                                                                                                                                                                                                <button
                                                                                                                                                                                                                                                                                                                key={index}
                                                                                                                                                                                                                                                                                                                                className={`hero-dot ${
                                                                                                                                                                                                                                                                                                                                                  currentSlide === index ? "active" : ""
                                                                                                                                                                                                                                                                                                                                                                  }`}
                                                                                                                                                                                                                                                                                                                                                                                  onClick={() => setCurrentSlide(index)}
                                                                                                                                                                                                                                                                                                                                                                                                  aria-label={`Go to slide ${index + 1}`}
                                                                                                                                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default Hero;
