import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// Example projects data
const projects = [
    {
        subtitle: "Frontend Project",
        desc: "This is Daniel Mariney's landing page, built using HTML5, CSS3, and JavaScript. It is fully responsive, ensuring an optimal viewing experience on any device.",
        image: "/src/assets/1.png",
        github: "https://github.com/hassan1113/Daniel-Mariney",
        demo: "https://hassan1113.github.io/Daniel-Mariney/"
    },
    {
        subtitle: "Frontend Project",
        desc: "This is Fast Food landing page, built using HTML5, CSS3, and JavaScript. It is fully responsive, ensuring an optimal viewing experience on any device.",
        image: "/src/assets/2.png",
        github: "https://github.com/hassan1113/Fast-Food",
        demo: "https://hassan1113.github.io/Fast-Food/"
    },
    {
        subtitle: "Frontend Project",
        desc: "This is Future Of Education landing page, built using HTML5, CSS3, and JavaScript. It is fully responsive, ensuring an optimal viewing experience on any device.",
        image: "/src/assets/3.png",
        github: "https://github.com/hassan1113/FOE",
        demo: "https://hassan1113.github.io/FOE/"
    },
    {
        subtitle: "Frontend Project",
        desc: "This is Marinade Bold Burger landing page, built using HTML5, CSS3, and JavaScript. It is fully responsive, ensuring an optimal viewing experience on any device.",
        image: "/src/assets/4.png",
        github: "https://github.com/hassan1113/Marinade_Bold_Burger",
        demo: "https://hassan1113.github.io/Marinade_Bold_Burger/"
    }
];

function Projects() {
    return (
        <section className="projects-section py-5" id="projects">
            <div className="container">
                <h1 className="section-title gradient-text mb-4">Projects</h1>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    spaceBetween={40}
                    slidesPerView={1}
                    allowTouchMove={true}
                    navigation={false}
                    pagination={false}
                    className="projects-swiper"
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="row align-items-center project-row">
                                <div className="col-md-6 text-center mb-4 mb-md-0">
                                    <img src={project.image} alt={project.subtitle} className="project-img-main" />
                                </div>
                                <div className="col-md-6 text-center text-md-start">
                                    <h4 className="project-subtitle">{project.subtitle}</h4>
                                    <p className="project-desc-main">{project.desc}</p>
                                    <div className="project-btns mt-3 d-flex justify-content-center justify-content-md-start gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-theme">
                                            <span><FontAwesomeIcon icon={faGithub} size="lg" /></span>
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-theme">
                                            <span><FontAwesomeIcon icon={faEye} size="lg" /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Projects; 