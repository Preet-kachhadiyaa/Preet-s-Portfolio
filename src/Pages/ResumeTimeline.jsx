import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResumeTimeline = () => {
  const experiences = [
    {
      period: "Aug 2023 - Present",
      position: "Front-End Devloper",
    },
    {
      period: "2024 July - Aug 2024",
      position: "Full Stack Intern",
    },
    {
      period: "July 2023 - Jan 2024",
      position: "Node js Developer",
      company: "ITCODE HELP",
    },
    {
      period: "March 2023 - July 2023",
      position: "Node js Intern",
      company: "ITCODE HELP",
    },
  ];

  return (
    <div className="resume-container w-100" id="resume">
      <div className="container-xxl w-100 p-0">
        <motion.div
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Resume</h2>
        </motion.div>

        <motion.div
          className="resume-header text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="resume-title">
            <span className="highlight">Development</span> Journey
          </h1>
        </motion.div>

        <div className="resume-timeline">
          <div className="row">
            <div className="col-lg-12">
              <div className="timeline-grid">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="card-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="card-period">{exp.period}</div>
                    <div className="card-position">{exp.position}</div>
                    <div className="card-company">{exp.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;
