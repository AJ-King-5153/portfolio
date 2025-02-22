import React from 'react';
import '../styles/animatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            <div className="gradient-sphere"></div>
            <div className="grid"></div>
            <div className="particles">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="particle"></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground; 