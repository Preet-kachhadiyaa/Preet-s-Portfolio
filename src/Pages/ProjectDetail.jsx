import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Import shared project data
import { projects } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <motion.button
          className="contact-btn mt-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-decoration-none text-white">
            Back to Projects
          </Link>
        </motion.button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/Projects" className="text-decoration-none d-inline-block mb-4">
        <motion.button
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <motion.img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded shadow mb-4"
              style={{ maxWidth: "100%" }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Extended content for the project detail page */}
              <motion.div
                className="custom-card custom-overview"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="custom-card-body">
                  <h3 className="custom-overview-title">Project Overview</h3>
                  <p className="custom-overview-text">{project.overview}</p>
                </div>
              </motion.div>

              <div className="custom-row">
                <motion.div
                  className="custom-col"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.technologies.length !== 0 && (
                    <div className="custom-card">
                      <div className="custom-card-body">
                        <h4 className="custom-title">Technologies Used</h4>
                        <ul className="custom-list">
                          {project.technologies?.map((e) => (
                            <li>{e}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="custom"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.features.length !== 0 && (
                    <div className="custom-card">
                      <div className="custom-card-body">
                        <h4 className="custom-title">Key Features</h4>
                        <ul className="custom-list">
                          {project.features?.map((e) => (
                            <li>{e}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="custom-col"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.link !== "" && (
                    <div className="custom-card">
                      <div className="custom-card-body d-flex justify-content-between">
                        <h4 className="custom-title">Live link</h4>
                        <a
                          href={project.link}
                          target="_blank"
                          className="btn btn-primary"
                          rel="noopener noreferrer"
                        >
                          Visit site
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
