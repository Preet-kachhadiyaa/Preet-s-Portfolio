import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faPhoneAlt,
  faDownload,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import ResumeTimeline from "./ResumeTimeline";
import SolutionCards from "./SolutionCards";
import QuickLinks from "./QuickLinks";

const Home = () => {
  const [text, setText] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const professions = ["Web Developer ", "Freelancer "];

  const handleScroll = () => {
    // Scroll behavior handling if needed
  };

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const profession = professions[professionIndex];

    const interval = setInterval(() => {
      if (currentIndex < profession.length) {
        currentText += profession[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setProfessionIndex(
              (prevIndex) => (prevIndex + 1) % professions.length
            );
            setIsFading(false);
          }, 400);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [professionIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="portfolio-container w-100">
        <div className="container-xxl w-100 p-0">
          <div className="row min-vh-100 w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center text-area">
              <div className="intro-text">
                <motion.h2
                  className="greeting"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  className="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  Preet Kachhadiya
                </motion.h1>
                <motion.h3
                  className={`profession ${isFading ? "fade-out" : "fade-in"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {text}
                </motion.h3>
                <motion.p
                  className="description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  Specializing in full stack development with expertise in
                  frontend and backend technologies.
                </motion.p>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <motion.button
                    className="contact-btn"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Contact Me <FontAwesomeIcon icon={faArrowRight} />
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className="col-md-6 profile-section d-flex align-items-center justify-content-center position-relative">
              <motion.div
                className="circular-background"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="profile-img-container">
                  {/* Profile image will be added via CSS */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-container w-100" id="about">
        <div className="container-xxl w-100 p-0">
          <motion.div
            className="section-title text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
          </motion.div>

          <div className="row">
            <div className="col-lg-6">
              <motion.div
                className="about-image-container"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/Image/pk-logo.png"
                  alt="Preet Kachhadiya"
                  className="img-fluid about-image"
                />
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="about-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3>
                  Professional{" "}
                  <span className="highlight">Front-End Web Developer</span>
                </h3>

                <p className="about-description mt-4">
                  I specialize in building scalable, efficient applications
                  using a strong foundation in both frontend and backend
                  technologies. Whether it's designing user interfaces or
                  developing robust backends, I'm committed to creating digital
                  products that offer seamless experiences and solve real-world
                  challenges.
                </p>

                <div className="skills-container mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <motion.div
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="skill-icon"
                        />
                        <span>Front-End Development</span>
                      </motion.div>

                      <motion.div
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="skill-icon"
                        />
                        <span>Database Management</span>
                      </motion.div>
                    </div>

                    <div className="col-md-6">
                      <motion.div
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="skill-icon"
                        />
                        <span>Web Development</span>
                      </motion.div>

                      <motion.div
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="skill-icon"
                        />
                        <span>Git & GitHub</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="contact-info mt-5">
                  <motion.div className="contact-item">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-icon"
                    />
                    <span>Email Me:</span>
                    <a href="mailto:preetk02700270@gmail.com">
                    preetk02700270@gmail.com
                    </a>
                  </motion.div>

                  <motion.div className="contact-item mt-2 mb-5">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="contact-icon"
                    />
                    <span>Make A Call:</span>
                    <a href="tel:+916351581680">+91 63515 81680</a>
                  </motion.div>
                </div>

                <motion.a
                  className="resume-btn mt-5"
                  href="/Pritkumar_Kachhadiya_24-09-2026.pdf"
                  download="Pritkumar_Kachhadiya_Resume.pdf"
                  target="_blank"
                >
                  Download Resume <FontAwesomeIcon icon={faDownload} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Timeline */}
      {/* <ResumeTimeline /> */}

      {/* Solution Card */}
      <SolutionCards />
      <hr className="mt-5 border-dark border-white" />
    </>
  );
};

export default Home;
