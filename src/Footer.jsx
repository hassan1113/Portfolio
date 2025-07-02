import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGitAlt, faGithub, faJava } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    const [showUp, setShowUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowUp(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer-section">
            <div className="footer-content container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="footer-logo-name d-flex align-items-center mb-3 mb-md-0">
                    <img src={logo} alt="Logo" width="44" height="44" className="footer-logo me-3 rounded-circle" />
                    <span className="footer-name fw-bold fs-3">Hassan Saleem</span>
                </div>
                <div className="footer-desc text-center text-md-start mb-2 mb-md-0">
                    Frontend Developer | React Specialist | Let's connect!
                </div>
                <div className="footer-socials d-flex gap-3">
                    <a href="https://www.linkedin.com/in/hassan1113/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/hassan1113" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://wa.me/923121285775" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            {showUp && (
                <button className="pageup-btn" onClick={scrollToTop} aria-label="Scroll to top">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </footer>
    );
}

export default Footer; 