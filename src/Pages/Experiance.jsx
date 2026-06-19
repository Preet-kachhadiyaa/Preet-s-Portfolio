import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Experience = () => {
  const [isVisible, setIsVisible] = useState({
    card1: false,
    card2: false,
  });

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = ["card1", "card2"];

      elements.forEach((element) => {
        const el = document.getElementById(element);
        if (el) {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight - 100;

          setIsVisible((prev) => ({
            ...prev,
            [element]: isInViewport,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation class helper
  const animationClass = (element) => {
    if (element === "card1") {
      return isVisible[element] ? "slide-in-left visible" : "slide-in-left";
    } else {
      return isVisible[element] ? "slide-in-right visible" : "slide-in-right";
    }
  };

  return (
    <div className="experience-page">
      {/* Header */}
      <header className="text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">My Experience</h1>
          <p className="lead">
            Delivering exceptional web solutions with expertise and innovation
          </p>
        </div>
      </header>

      <div className="container py-4">
        {/* Card 1: Image Left, Text Right */}
        <div
          id="card1"
          className={`row align-items-center py-5 ${animationClass("card1")}`}
        >
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="card border-0 shadow-sm overflow-hidden">
              <img
                src="/Image/frontend.jpeg"
                className="card-img experience-img"
                alt="Web Development Experience"
              />
              <div className="card-img-overlay d-flex align-items-end">
                <h3 className="text-white bg-dark bg-opacity-75 p-2 m-0">
                  Web Development
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h2 className="mb-4">Frontend Excellence</h2>
              <p className=" mb-4">
                We've created stunning, responsive user interfaces for clients
                across various industries. With 1 year of hands-on experience in
                frontend development—primarily using React—I've built performant
                and visually appealing web applications. My expertise lies in
                crafting seamless user experiences, and I'm continuously
                learning and adapting with modern frontend frameworks like
                Angular and Vue.js.
              </p>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="experience-icon text-white me-3">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Modern Frameworks</h5>
                    <small className="text-primary">
                      React, HTML5, CSS, Javascript, Bootstrap, Tailwind.
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="experience-icon text-white me-3">
                    <i className="bi bi-layout-text-window"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Responsive Design</h5>
                    <small className="text-primary">
                      Mobile-first approach
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="experience-icon text-white me-3">
                    <i className="bi bi-speedometer2"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Performance Optimization</h5>
                    <small className="text-primary">Fast loading times</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Text Left, Image Right (Opposite) */}
        
      </div>

      {/* Call to Action */}
      <section className="bg-dark py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Work Together?</h2>
          <p className="lead  mb-4">
            Let us bring our expertise to your next project
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;
