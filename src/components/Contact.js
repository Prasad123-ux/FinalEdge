import React from 'react'
import { useState } from 'react';
import {motion} from "framer-motion" 

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  
  const handleSubmit= async(e)=>{
  
    e.preventDefault()
    const { prevDetails, ...formDataWithoutPrevDetail } = formData;
  
  
    try{
      const response =await fetch('https://formspree.io/f/xzbnpgno',{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(formDataWithoutPrevDetail),
      })
      if(response.ok){
      setFormData({ name: '', email: '', message: '' });
       alert ("Thank You ! We will react you soon", "success")
      }else{
        alert("Sorry there is some problem , Please contact us through  other platform", "error")
     }
    }catch(error){
    alert("Sorry there is some problem , Please contact us through  other platform", "error")
      }finally{
      
    }
  
  }
  
  return (
    <section id="contact" className="py-5 bg-light text-dark">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-primary">Us</span>
        </motion.h2>

        <div className="row g-5">
          {/* Contact Form */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-md-6 d-flex flex-column justify-content-center align-items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold">Get in Touch</h5>
            <p>Email: <a href="mailto:your@email.com">finaledge@gmail.com</a></p>
            <p>Call us at : +919307173845</p>
            <p>WhatsApp: <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">Click to Chat</a></p>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success mt-3"
            >
              📲 Contact on WhatsApp
            </a>
            <a
              href="mailto:your@email.com"
              className="btn btn-outline-dark mt-2"
            >
              ✉️ Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
