import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGitAlt, faGithub, faJava } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const FlutterIcon = () => (
    <svg width="32" height="32" viewBox="0 0 256 317" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M156.6 0L0 158.2l44.2 44.2L244.9 0h-88.3z" fill="#47C5FB" />
            <path d="M156.6 0L0 158.2l44.2 44.2L244.9 0h-88.3z" fill="url(#paint0_linear)" />
            <path d="M244.9 0L88.3 158.2l44.2 44.2L256 79.5V0h-11.1z" fill="#00569E" />
            <path d="M88.3 158.2l44.2 44.2L256 79.5V0L88.3 158.2z" fill="url(#paint1_linear)" />
            <path d="M0 316.4h88.3l66.2-66.2-44.2-44.2L0 316.4z" fill="#00B5F8" />
            <path d="M132.5 206l-44.2-44.2L0 316.4l132.5-110.4z" fill="url(#paint2_linear)" />
            <path d="M132.5 206l66.2 66.2h88.3l-110.4-110.4-44.1 44.2z" fill="#00569E" />
            <path d="M132.5 206l66.2 66.2h88.3l-110.4-110.4-44.1 44.2z" fill="url(#paint3_linear)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear" x1="122.45" y1="0" x2="122.45" y2="202.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#47C5FB" />
                <stop offset="1" stopColor="#00569E" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="172.15" y1="0" x2="172.15" y2="202.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#47C5FB" />
                <stop offset="1" stopColor="#00569E" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="66.25" y1="161.8" x2="66.25" y2="316.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#47C5FB" />
                <stop offset="1" stopColor="#00B5F8" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="198.65" y1="161.8" x2="198.65" y2="316.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#47C5FB" />
                <stop offset="1" stopColor="#00569E" />
            </linearGradient>
        </defs>
    </svg>
);

const skills = [
    { icon: faHtml5, label: "HTML5", color: "#e34c26", level: 85 },
    { icon: faCss3Alt, label: "CSS3", color: "#1572b6", level: 80 },
    { icon: faJs, label: "JavaScript", color: "#f7df1e", level: 65 },
    { icon: faReact, label: "React", color: "#61dafb", level: 70 },
    { icon: faBootstrap, label: "Bootstrap", color: "#7952b3", level: 70 },
    { icon: FlutterIcon, label: "Flutter", color: "#02569B", level: 80, isSvg: true },
    { icon: faJava, label: "Java", color: "#e76f00", level: 80 },
    { icon: faDatabase, label: "MySQL", color: "#00758F", level: 75 },
    { icon: faCode, label: "C++", color: "#00599C", level: 70 },
    { icon: faGitAlt, label: "Git", color: "#f34f29", level: 75 },
    { icon: faGithub, label: "GitHub", color: "#333", level: 75 },
    { icon: faCode, label: "REST APIs", color: "#764ba2", level: 70 },
];

function Skills() {
    const sectionRef = useRef();
    const [animateBars, setAnimateBars] = useState(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                    setAnimateBars(true);
                    setInView(true);
                } else {
                    setAnimateBars(false);
                    setInView(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`skills-section py-5${inView ? " in-view" : ""}`} id="skills" ref={sectionRef}>
            <div className="container">
                <h1 className="section-title gradient-text mb-4">Skills</h1>
                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <div className={`skill-card skill-anim-${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
                            <span className={`skill-icon${skill.label === "Flutter" ? " flutter-icon" : ""}`} style={{ color: skill.color }}>
                                {skill.isSvg ? <skill.icon /> : <FontAwesomeIcon icon={skill.icon} size="2x" />}
                            </span>
                            <span className="skill-label">{skill.label}</span>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: animateBars ? `${skill.level}%` : 0 }}
                                ></div>
                            </div>
                            <span className="skill-level">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills; 