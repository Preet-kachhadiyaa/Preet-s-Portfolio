import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiJavascript,
} from "react-icons/si";

const colors = {
  primary: "#3775b4",
  secondary: "#ECF0F1",
  dark: "#000000",
  text: "#BDC3C7",
};

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 className="text-white" size={48} />,
    proficiency: 96,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-purple-400" size={48} />,
    proficiency: 95,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-red-500" size={48} />,
    proficiency: 96,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-red-500" size={48} />,
    proficiency: 75,
  },
  {
    name: "JQuery",
    icon: <SiJquery className="text-red-500" size={48} />,
    proficiency: 70,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-300" size={48} />,
    proficiency: 50,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-green-400" size={48} />,
    proficiency: 56,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={48} />,
    proficiency: 60,
  },
  {
    name: "MySql",
    icon: <SiMysql className="text-green-500" size={48} />,
    proficiency: 80,
  },
  {
    name: "Git & Github",
    icon: <FaGitAlt className="text-red-400" size={48} />,
    proficiency: 80,
  },
];

const SkillsShowcase = () => {
  return (
    <div className="bg-black min-h-screen p-5 text-white">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-center mb-5">
          <motion.h1
            className="display-4 font-weight-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            My{" "}
            <span style={{ color: colors.primary }}>
              Skills Set & Expertise
            </span>
          </motion.h1>
          <motion.p
            className="lead mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            As a Front-End Web Developer, I have expertise in  frontend technologies.
          </motion.p>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="col-12 col-md-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className="bg-dark p-4 rounded text-center shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-3">{skill.icon}</div>
                <h5 className="mb-2">{skill.name}</h5>
                <div
                  className="progress bg-secondary"
                  style={{ height: "10px" }}
                >
                  <motion.div
                    className="progress-bar"
                    style={{ backgroundColor: colors.highlight, width: "0%" }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  />
                </div>
                <div className="text-muted mt-2">{skill.proficiency}%</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsShowcase;
