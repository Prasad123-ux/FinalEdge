import React from 'react'
import { motion } from 'framer-motion';
import "../Styles/Navbar.css"


export default function Navbar() {
  return (
      <motion.nav
    className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top"
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="container">
      <motion.a
        className="navbar-brand fw-bold fs-4"
        href="#"
        whileHover={{ scale: 1.5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        FinalEdge 🚀
      </motion.a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
          {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((section, index) => (
            <motion.li
              className="nav-item"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <a className="nav-link text-white fw-semibold" href={`#${section.toLowerCase()}`}>
                {section}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.nav>


      
    
  )
}
