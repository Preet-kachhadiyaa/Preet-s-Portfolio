import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbersOnly = value.replace(/[^0-9]/g, "");

      if (numbersOnly.length > 10) return;

      setFormData({
        ...formData,
        [name]: numbersOnly,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({
      submitted: false,
      submitting: true,
      info: {
        error: false,
        msg: null,
      },
    });

    emailjs
      .send(
        "service_zgy2sk5",
        "template_sqpc3wm",
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "DI9dM14PSlf3R7_ah",
      )
      .then((response) => {
        console.log("SUCCESS!", response);

        setStatus({
          submitted: true,
          submitting: false,
          info: {
            error: false,
            msg: "Message sent successfully!",
          },
        });

        // Reset Form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);

        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: "Something went wrong!",
          },
        });
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="contact-container">
      <div className="contact-inner">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <motion.div
            className="contact-info"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="contact-heading"
            >
              <span className="highlight">Contact Me</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="contact-desc"
            >
              I'm eager to collaborate and bring your ideas to life.
              Let's connect and explore how we can achieve your goals together!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="office-info"
            >
              <h3>Main Office</h3>

              <div className="office-address">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>

                <p>
                  B-2,307, Golden City, Mota Varachha, Surat.
                </p>
              </div>

              <div className="contact-link">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>

                <a href="mailto:preetk02700270@gmail.com">
                  preetk02700270@gmail.com
                </a>
              </div>

              <div className="contact-link">
                <div className="icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </div>

                <a href="tel:+916351581680">
                  +91 63515 81680
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="social-links"
            >
              <h3>Follow Me</h3>

              <div className="social-icons">
                <a
                  href="https://github.com/Preet-kachhadiyaa"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/preet-k-320b97287/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="https://wa.me/+916351581680"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="form-heading"
            >
              Get In Touch
            </motion.h2>

            {status.info.msg && (
              <motion.div
                className={`p-3 rounded-md mb-4 text-sm font-medium flex items-center gap-2 ${
                  status.info.error
                    ? "bg-red-500/10 text-red-500 border border-red-500/20"
                    : "bg-green-500/10 text-green-500 border border-green-500/20"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i
                  className={`fas ${
                    status.info.error
                      ? "fa-exclamation-circle"
                      : "fa-check-circle"
                  }`}
                ></i>

                {status.info.msg}
              </motion.div>
            )}

            {/* FULL NAME */}
            <div className="form-row">
              <motion.div
                variants={itemVariants}
                className="form-group"
              >
                <label>Full Name</label>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    autoComplete="off"
                    required
                  />

                  <span className="input-icon">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                variants={itemVariants}
                className="form-group"
              >
                <label>Email Address</label>

                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    autoComplete="off"
                    required
                  />

                  <span className="input-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* PHONE + SUBJECT */}
            <div className="form-row">
              <motion.div
                variants={itemVariants}
                className="form-group"
              >
                <label>Phone Number</label>

                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    autoComplete="off"
                    required
                  />

                  <span className="input-icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="form-group"
              >
                <label>Subject</label>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                    autoComplete="off"
                    required
                  />

                  <span className="input-icon">
                    <i className="fas fa-font"></i>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* MESSAGE */}
            <motion.div
              variants={itemVariants}
              className="form-group"
            >
              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                autoComplete="off"
                required
              ></textarea>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              variants={itemVariants}
              className="form-submit"
            >
              <button
                type="submit"
                className="contact-btn"
                disabled={status.submitting}
              >
                {status.submitting
                  ? "Sending..."
                  : "Send Me Message"}

                {!status.submitting && (
                  <i className="fas fa-chevron-right"></i>
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;