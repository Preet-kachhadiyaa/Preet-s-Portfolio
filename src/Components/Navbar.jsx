  import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaLaptopCode,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scroll logic here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle navbar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked (useful for mobile navigation)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full navbar navbar-expand-lg drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] sticky top-0 z-50 bg-dark transition-opacity duration-300 hover:opacity-50"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <div className="logo-main flex drop-shadow-lg px-3 items-center ">
            <img src="/Image/pk-logo.png" className="logo" alt="Logo" />
          </div>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          onClick={toggleMenu} // Toggle menu state
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto d-flex justify-content-center w-100">
            {[
              { name: "Home", icon: <FaHome />, path: "/" },
              { name: "Projects", icon: <FaLaptopCode />, path: "/projects" },
              { name: "Skills", icon: <FaTools />, path: "/skills" },
              {
                name: "Experience",
                icon: <FaBriefcase />,
                path: "/experience",
              },
              { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
            ].map((page, index) => {
              const isActive = location.pathname === page.path;
              return (
                <li key={index} className="nav-item mx-3">
                  <Link
                    className={`nav-link text-lg 
                      ${
                        isActive
                          ? "text-blue-400 font-weight-bold "
                          : "text-white hover:text-blue-500"
                      }`}
                    to={page.path}
                    onClick={closeMenu} // Close menu on link click
                  >
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <span>{page.icon}</span>
                      <span>{page.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
