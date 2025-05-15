import React from 'react'
import { motion } from 'framer-motion';
import "../Styles/Home.css"

export default function Home() {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center bg-dark text-white">
    <div className="container">
      <div className="row align-items-center text-center text-lg-start">
        <motion.div
          className="col-lg-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="text-gradient">FinalEdge</span>
          </h1>
          <p className="lead">
            We craft modern, professional <strong>Portfolio Websites</strong> and deliver ready-to-use <strong>Final Year Projects</strong> for college students.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
            <motion.a
              href="#services"
              className="btn btn-primary px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              View Services
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline-light px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              Contact Now
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="col-lg-6 mt-5 mt-lg-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/home-illustration.svg" // Replace with your image or animation
            alt="FinalEdge illustration"
            className="img-fluid"
          />
        </motion.div>
      </div>
    </div>
  </section>
  )
}
