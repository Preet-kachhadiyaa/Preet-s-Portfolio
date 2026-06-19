import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const QuickLink = () => {
  const scrollAnimation = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  return (
    <motion.div
      className="quick-link-container container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="row justify-content-center">
        {/* Address Section */}
        <motion.div
          className="col-12 col-md-6 address-section"
          variants={scrollAnimation}
        >
          <h2>Address</h2>
          <p>B-2,307, Golden City, Mota Varachha, Surat.</p>
          <p>preetk02700270@gmail.com</p>
          <p>+91 63515 81680</p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="col-12 col-md-6 links-section"
          variants={scrollAnimation}
        >
          <h1>Quick Links</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div className="footer" variants={scrollAnimation}>
        <p>Copyright ©2025, All Rights Reserved</p>
      </motion.div>
    </motion.div>
  );
};

export default QuickLink;
