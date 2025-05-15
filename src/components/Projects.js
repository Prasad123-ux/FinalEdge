import React from "react" 
import { motion } from "framer-motion"; 
import "../Styles/Projects.css" 


export default function Projects(){
   

      const handleShare = (title, demoLink) => {
        const productURL = window.location.href;
        
        
        const message = `Hello Prasad! I'm interested in your project. Please give me more info about it: ${title}. This is the link of the project: ${demoLink}`;
        
        const whatsappURL = `https://wa.me/919307173845?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, "_blank");
      };
     
        
      
    const projects = [
        {
          title:"Grocery Delivery Application",
          image:"https://res.cloudinary.com/det3aoore/image/upload/v1736834141/product_images/18Sep24_shv9sb.png",
          demoLink:"https://gurukrupa-kirana-frontend.vercel.app/",
          buyLink:"buyLink: 'https://wa.me/9307173845"
        },
        {
          title: 'Modern Portfolio for Students',
          image: 'https://res.cloudinary.com/det3aoore/image/upload/v1746670661/depositphotos_65828845-stock-photo-portfolio-written-on-notebook_ukunts.webp', // Replace with your image path
          demoLink: 'https://prasad123-ux.github.io/PortFolio-Website/',
          buyLink: 'https://wa.me/9307173845', // WhatsApp or form link
        },
        {
          title: 'Final Year Job Listing Application',
          image:"https://res.cloudinary.com/det3aoore/image/upload/v1746672631/download_2_b60ehe.jpg",
          demoLink: 'https://react-application-beige.vercel.app/',
          buyLink: 'https://wa.me/9307173845',
        },
        {
          title: 'AI Implemented Dieses finder for tree',
          image: 'https://res.cloudinary.com/det3aoore/image/upload/v1746672631/download_1_nlffa5.jpg',
          demoLink: 'https://ecocare-frontend.vercel.app/',
          buyLink: 'https://wa.me/9307173845',
        },
      ];
      const slides = [
        { id: 1, image: 'https://via.placeholder.com/300x200', title: 'Project One' },
        { id: 2, image: 'https://via.placeholder.com/300x200', title: 'Project Two' },
        { id: 3, image: 'https://via.placeholder.com/300x200', title: 'Project Three' },
        { id: 4, image: 'https://via.placeholder.com/300x200', title: 'Project Four' },
        { id: 5, image: 'https://via.placeholder.com/300x200', title: 'Project Five' },
      ];
    return (
        <section id="projects" className="py-5 bg-light text-dark">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our <span className="text-primary">Projects</span></h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-lg border-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit:"fill" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <div className="mt-auto">
                      <a
                        href={project.demoLink}
                        className="btn btn-outline-primary me-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Demo
                      </a>
                      <motion.button
                        onClick={()=>{handleShare(project.title, project.demoLink)}}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


     <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  {projects.map((item, index)=>{
  return  <div class="carousel-item active" data-bs-interval="10000">
      <div class="carousel-caption d-none d-md-block">
         <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-lg border-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit:"fill" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <div className="mt-auto">
                      <a
                        href={item.demoLink}
                        className="btn btn-outline-primary me-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Demo
                      </a>
                      <motion.button
                        onClick={()=>{handleShare(item.title, item.demoLink)}}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
      </div>
    </div>
  })
  }
  </div>
  </div>
    
   
       
      </section>

    )
}
