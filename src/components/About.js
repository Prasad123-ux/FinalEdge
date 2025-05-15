import React from "react" 
import {motion} from 'framer-motion'; 
import "../Styles/About.css"


export default function About(){
    return (

<section id="about" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="row align-items-center">
          {/* Image or illustration */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/about-image.svg" // Replace with your image
              alt="About FinalEdge"
              className="img-fluid rounded shadow-lg"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="fw-bold mb-3">About <span className="text-primary">FinalEdge</span></h2>
            <p className="lead">
              I'm <strong>Prasad Metkar</strong>, a passionate full stack developer and founder of <strong>FinalEdge</strong>.  
              Our goal is to empower students with beautifully designed portfolio websites and real-world final year projects.
            </p>
            <p>
              Whether you're a BCA, MCA, or engineering student, we deliver complete, ready-to-deploy projects and custom portfolios that help you stand out in placements.
            </p>
            <ul className="list-unstyled mt-3">
              <li>✅ Customized Portfolios</li>
              <li>✅ Complete Final Year Projects</li>
              <li>✅ Hosted on Vercel / Render</li>
              <li>✅ Fast Delivery & Student-Friendly Prices</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    )
}