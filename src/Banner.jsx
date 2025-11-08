import React from 'react';
import './Banner.css';
import developer from './assets/developer.png';
import resumePDF from './assets/resume.pdf';

const Banner = () => {
    return (
        <section className="banner-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side */}
                    <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
                        <h1 className="display-5 fw-bold mb-2 animate-fadein">
                            Hello<span className="wave-emoji">👋</span><br />
                            <span className="gradient-text">I am Muhammad Hassan Saleem</span>
                        </h1>
                        <h2 className="mb-1 animate-slidein dev-title-gradient">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle', marginRight: '10px', marginBottom: '5px' }}>
                                <path d="M8 17L3 12L8 7" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 7L21 12L16 17" stroke="#764ba2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            FRONTEND DEVELOPER
                        </h2>
                        <p className="lead mb-4 animate-fadein tagline">
                            <strong>Building Modern & Creative Web Experiences</strong>
                        </p>
                        <a href={resumePDF} className="btn btn-hireme btn-lg" download><span>Hire Me</span></a>
                    </div>
                    {/* Right Side */}
                    <div className="col-md-6 justify-content-center d-flex align-items-center">
                        <div className="avatar-gradient-circle animate-bounce">
                            <img
                                src={developer}
                                alt="Developer Avatar"
                                className="banner-img animate-img"
                                width="360"
                                height="360"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner