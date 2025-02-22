import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contacts';
import StarBackground from './components/StarsBackground';
import headshot from './assets/images/headshot.JPG';
import { Link } from 'react-router-dom';
import VisitorStats from './components/VisitorStats';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <StarBackground />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <div className="home-container">
                                <div className="profile-section">
                                    <img className="profile-img" src={headshot} alt="AJ King" />
                                    <h1 className="name">ALLAN (A.J.) KING</h1>
                                    <h2 className="title">Computer Science Student & Software Developer</h2>
                                    <div className="cta-buttons">
                                        <Link to="/projects" className="cta-button primary">View Projects</Link>
                                        <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
                                    </div>
                                    <VisitorStats />
                                </div>
                            </div>
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;




