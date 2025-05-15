import React from 'react'
import { motion } from "framer-motion"; 
import "../Styles/Services.css"
import { FaLaptopCode, FaProjectDiagram, FaCloudUploadAlt, FaFileCode, FaGlobe } from 'react-icons/fa';
export default function Services() {
    const services = [
        {
          icon: <FaLaptopCode size={40} />,
          title: "Portfolio Websites",
          description: "Get a beautiful, responsive, and custom-designed portfolio to impress recruiters.",
        },
        {
          icon: <FaProjectDiagram size={40} />,
          title: "Final Year Projects",
          description: "Fully working academic projects with frontend, backend & documentation.",
        },
        {
          icon: <FaCloudUploadAlt size={40} />,
          title: "Live Deployment",
          description: "Deployed and ready-to-use projects on Vercel, Render, or your chosen platform.",
        },
        {
          icon: <FaFileCode size={40} />,
          title: "Source Code + Docs",
          description: "Complete code with clear documentation for learning and submission.",
        },
        {
          icon: <FaGlobe size={40} />,
          title: "Domain & Hosting",
          description: "Help setting up domain, GitHub pages, or Netlify for your site.",
        }
      ];
      
  return (
    <section id="services" className="py-5 bg-dark text-light">
    <div className="container text-center">
      <h2 className="mb-5 fw-bold">Our <span className="text-primary">Services</span></h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div
            className="col-md-6 col-lg-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-secondary h-100 p-4 rounded shadow-lg border border-light">
              <div className="mb-3 text-primary">{service.icon}</div>
              <h5 className="fw-bold">{service.title}</h5>
              <p className="small">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}
