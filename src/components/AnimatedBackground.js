import React from 'react';
import '../styles/animatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            <div className="gradient-sphere"></div>
            <div className="gradient-sphere secondary"></div>
            <div className="grid"></div>
            <div className="particles">
                {[...Array(150)].map((_, i) => (
                    <div key={i} className="particle"></div>
                ))}
            </div>
            <div className="shooting-stars">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="shooting-star"></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground; 