import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const SolutionCards = () => {

  // Card data
  const cards = [
    {
      id: "01",
      title: "Frontend Development",
      description:
        "Skilled in HTML, CSS, React, Bootstrap, JQuery, and Tailwind CSS.",
    },
    {
      id: "02",
      title: "Database Management",
      description:
        "Experienced with MongoDB, MySQL.",
    },
    {
      id: "03",
      title: "Version Control",
      description:
        "Proficient in Git for effective code management and seamless collaboration within teams.",
    },
    {
      id: "04",
      title: "Problem Solving",
      description: "Strong knowledge of data structures and algorithms.",
    },
  ];

  return (
    <div className="w-full bg-black p-8">
      <section className="solutions-container">
        <div className="solutions-inner">
          <div className="solutions-header">
            <p className="solutions-subheading"></p>
            <h2 className="solutions-heading">
              <span className="solutions-heading-regular">
                <motion.div
                  className="section-title text-center mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2>Real Problem Solving Experience</h2>
                </motion.div>
              </span>
            </h2>
          </div>

          <div className="solutions-grid">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="solution-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} // This triggers the animation when the element enters the viewport
                viewport={{ once: true }} // This ensures the animation only triggers once
                transition={{ delay: index * 0.2, duration: 0.5 }} // Delay each card animation slightly for staggered effect
              >
                <div className="card-header">
                  <h3 className="card-number">{card.id}.</h3>
                  <h4 className="card-title">{card.title}</h4>
                  {/* <div className="card-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div> */}
                </div>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionCards;
