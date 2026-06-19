import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import { projects } from "./ProjectData";

const Projects = () => {
  // Component for a single project
  const ProjectItem = ({ project, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="mb-5"
      >
        <div className="row g-4 align-items-center">
          {/* Image column - full width on mobile, alternating order on desktop */}
          <div className={`col-12 col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
            <motion.div
              className="project-image-container"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}dcadm
                alt={project.title}
                className="img-fluid rounded shadow w-100"
                loading="lazy"
              />
            </motion.div>
          </div>
          
          {/* Content column - full width on mobile, alternating order on desktop */}
          <div className={`col-12 col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
            <div className="project-content p-3 p-md-4">
              <span className="project-category d-inline-block mb-2">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <motion.button 
                className="contact-btn mt-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/projects/${project.id}`} className="text-decoration-none text-white d-block w-100">
                  View Project
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };



  return (
    <div className="container py-4 py-md-5">
      <div className="text-center mb-4 mb-md-5">
        <h2 className="display-4 fw-bold">Projects</h2>
        <p className="lead px-2">Explore my latest work and creative solutions</p>
      </div>

      <div className="projects-container px-2 px-md-4">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};



export default Projects;