import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./assets/logo.png";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];

// Section mapping: skills -> services, projects -> portfolio
const sectionMap = {
    home: "home",
    about: "about",
    skills: "services",
    projects: "portfolio",
    contact: "contact",
};

function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = ["home", "about", "skills", "projects", "contact"];
            const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
            const scrollPos = window.scrollY + 120; // 120 for header height offset
            let current = "home";
            for (let section of sections) {
                if (section.offsetTop <= scrollPos) {
                    current = section.id;
                }
            }
            setActiveSection(sectionMap[current] || current);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-gradient shadow navbar-custom">
            <div className="container">
                <a className="navbar-brand fw-bold fs-3 gradient-text" href="#home">
                    <img src={logo} alt="Logo" width="80" height="65" className="me-2 align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-gap">
                        {navLinks.map(link => (
                            <li className="nav-item" key={link.id}>
                                <a
                                    className={`nav-link nav-underline${activeSection === link.id ? " active" : ""}`}
                                    href={`#${link.id}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item">
                            <a className="btn btn-cv ms-3" href="/resume.pdf" download>
                                <span>Download CV</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header; 