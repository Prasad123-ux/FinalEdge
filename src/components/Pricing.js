import React from "react" 
import {motion} from "framer-motion"; 
import "../Styles/Pricing.css" 

export default function Pricing(){
    const plans = [
        {
          title: "Basic Plan",
          price: "₹499",
          features: ["1 Page Portfolio", "Responsive Design", "Fast Delivery", "Source Code"],
          button: "Get This Plan",
        },
        {
          title: "Standard Plan",
          price: "₹999",
          features: [
            "Multi-page Portfolio",
            "Animations + Deployment",
            "Live Support",
            "Source Code + Docs"
          ],
          button: "Popular Plan",
        },
        {
          title: "Final Year Project",
          price: "₹1499+",
          features: [
            "Full Project (Frontend + Backend)",
            "Live Demo + Hosting",
            "Project Synopsis",
            "Project Report & Documentation with",
            "Support till Submission"
          ],
          button: "Get Your Project",
        }
      ];
    return (
        <section id="pricing" className="py-5 bg-dark text-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <div className="row g-4">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 text-dark shadow-lg border-0">
                  <div className="card-body p-4 bg-light rounded">
                    <h4 className="fw-bold text-dark mb-3">{plan.title}</h4>
                    <h2 className="text-primary fw-bold">{plan.price}</h2>
                    <ul className="list-unstyled my-3 text-start">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2">✅ {feature}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary w-100">
                      {plan.button}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ) 

}