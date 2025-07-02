import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contactImg from "./assets/contact.jpg";

function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);

    useEffect(() => {
        const leftObserver = new window.IntersectionObserver(
            ([entry]) => setLeftVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        const rightObserver = new window.IntersectionObserver(
            ([entry]) => setRightVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (leftRef.current) leftObserver.observe(leftRef.current);
        if (rightRef.current) rightObserver.observe(rightRef.current);
        return () => {
            if (leftRef.current) leftObserver.unobserve(leftRef.current);
            if (rightRef.current) rightObserver.unobserve(rightRef.current);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_rn6cf8c",         // Service ID
            "template_87tjavk",        // Template ID
            form.current,
            "hlOO2duGKgxcO1d9F"        // Public Key
        ).then(
            (result) => {
                setSent(true);
                form.current.reset();
                setTimeout(() => setSent(false), 3500);
            },
            (error) => {
                alert("Error sending message. Try again!");
            }
        );
    };

    return (
        <section className="contact-section py-5" id="contact">
            <div className="container">
                <h1 className="section-title gradient-text mb-4">Contact Us</h1>
                <div className="row align-items-center">
                    {/* Left Side: Image + Info */}
                    <div
                        className={`col-md-6 text-center mb-4 mb-md-0 contact-left${leftVisible ? ' fade-in-left' : ''}`}
                        ref={leftRef}
                    >
                        <img src={contactImg} alt="Contact" className="contact-img mb-3" />
                        <h3 className="contact-letstalk">Let's talk</h3>
                        <div className="contact-info-text">
                            <p className="contact-phone"><strong>Phone:</strong> +92 312 1285775</p>
                            <p className="contact-email"><strong>Email:</strong> hasssansaleem333@gmail.com</p>
                            <p className="contact-desc">Feel free to reach out for any project, collaboration, or just to say hi! I usually reply within 24 hours.</p>
                        </div>
                    </div>
                    {/* Right Side: Form */}
                    <div
                        className={`col-md-6${rightVisible ? ' fade-in-right' : ''}`}
                        ref={rightRef}
                    >
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <input type="text" name="name" required placeholder=" " />
                                <label className="floating-label">Your Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" required placeholder=" " />
                                <label className="floating-label">Your Email</label>
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="5" required placeholder=" " />
                                <label className="floating-label">Your Message</label>
                            </div>
                            <button type="submit" className="btn btn-theme">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
                {/* Success Toast Notification */}
                {sent && (
                    <div className="contact-toast">
                        <span className="toast-icon">✔️</span>
                        <span>Message sent successfully!</span>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact; 