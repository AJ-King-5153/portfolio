import React from 'react';
import '../styles/contacts.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className="contacts-wrapper">
            <div className="contacts-container">
                <h2>Let's Connect</h2>
                <p className="contacts-subtitle">Feel free to reach out through any of these platforms</p>
                
                <div className="contact-cards-container">
                    <a 
                        href="https://github.com/AJ-King-5153" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-card github"
                    >
                        <FaGithub className="contact-icon" />
                        <h3>GitHub</h3>
                        <p>Check out my projects and contributions</p>
                        <span className="contact-link">github.com/AJ-King-5153</span>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/allan-king-477917172" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-card linkedin"
                    >
                        <FaLinkedin className="contact-icon" />
                        <h3>LinkedIn</h3>
                        <p>Connect with me professionally</p>
                        <span className="contact-link">linkedin.com/in/allan-king</span>
                    </a>

                    <a 
                        href="mailto:ajking5153@gmail.com" 
                        className="contact-card email"
                    >
                        <FaEnvelope className="contact-icon" />
                        <h3>Email</h3>
                        <p>Send me a message directly</p>
                        <span className="contact-link">ajking5153@gmail.com</span>
                    </a>
                </div>

                <div className="contact-message">
                    <p>Looking forward to connecting with you!</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts; 