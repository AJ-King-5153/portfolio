import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import StarBackground from './components/StarsBackground';
import headshot from './assets/images/headshot.JPG';

import './App.css';

function App() {
    return (
        <Router>
            <div>
                <StarBackground />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <div className="home-container">
                                <img className="profile-img" src={headshot} alt="AJ King" />
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




