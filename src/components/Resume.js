import React from 'react';
import ResumePic from '../assets/images/Resume.pdf';
import '../styles/resume.css';

const Resume = () => {
    return (
        <div className="resume-wrapper">
            <div className="resume-header">
                <h2>My Resume</h2>
                <a 
                    href={ResumePic} 
                    download="Allan_King_Resume.png"
                    className="download-button"
                >
                    Download Resume
                </a>
            </div>
            
            <div className="resume-container">
                <div className="resume-frame">
                    <img 
                        src={ResumePic} 
                        alt="Allan King's Resume" 
                        className="resume-image"
                    />
                </div>
                
                <div className="resume-overlay">
                    <div className="overlay-content">
                        <p>Click to view full size</p>
                        <span>or</span>
                        <p>Download using the button above</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
