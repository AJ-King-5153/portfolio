import React from 'react';
import ResumePic from '../assets/images/Resume.png';

const Resume = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>My Resume</h2>
            <iframe 
                src={ResumePic}
                width="80%" 
                height="600px"
                style={{ border: '2px solid #5eb954', borderRadius: '10px' }}
                title="Resume"
            ></iframe>
        </div>
    );
};

export default Resume;
