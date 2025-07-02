import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPalette, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function About() {
    const leftRef = useRef();
    const rightRef = useRef();
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (leftRef.current) {
                const rect = leftRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                    setShowLeft(true);
                } else {
                    setShowLeft(false);
                }
            }
            if (rightRef.current) {
                const rect = rightRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                    setShowRight(true);
                } else {
                    setShowRight(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="about-section py-5" id="about">
            <div className="container">
                <h1 className="section-title gradient-text mb-4">About Me</h1>
                <div className="row align-items-center">
                    <div className="col-md-8 mx-auto text-center">
                        <p
                            className={`about-intro about-fadein-left about-fadein${showLeft ? " show" : ""}`}
                            ref={leftRef}
                        >
                            👋 Hi, I'm Muhammad Hassan Saleem! <br />
                            I'm a passionate <strong>Frontend &amp; Flutter Developer</strong> who loves crafting beautiful, high-performance web and mobile apps. My journey in tech is driven by curiosity and a desire to turn creative ideas into seamless digital experiences.<br /><br />
                            With hands-on expertise in <strong>React, Bootstrap, JavaScript, Flutter, and cross-platform UI</strong>, I specialize in building responsive interfaces that not only look great but also deliver real value to users.<br /><br />
                            I thrive on solving problems, learning new technologies, and collaborating with others to bring innovative projects to life. For me, every pixel and every line of code is an opportunity to make the web a more engaging place.<br /><br />
                            <span className="about-invite">Let's build something amazing together!</span>
                        </p>
                        <div
                            className={`about-highlights mt-4 about-fadein-right about-fadein${showRight ? " show" : ""}`}
                            ref={rightRef}
                        >
                            <div className="highlight-box">
                                <span className="highlight-icon">
                                    <FontAwesomeIcon icon={faBolt} color="#667eea" size="lg" />
                                </span>
                                <span>Fast & Responsive UI</span>
                            </div>
                            <div className="highlight-box">
                                <span className="highlight-icon">
                                    <FontAwesomeIcon icon={faPalette} color="#764ba2" size="lg" />
                                </span>
                                <span>Modern Design</span>
                            </div>
                            <div className="highlight-box">
                                <span className="highlight-icon">
                                    <FontAwesomeIcon icon={faLightbulb} color="#ffb300" size="lg" />
                                </span>
                                <span>Creative Problem Solver</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About; 