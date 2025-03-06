import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">AK</div>
            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                {/* ... existing nav items ... */}
            </div>
        </nav>
    );
};

export default Navbar; 