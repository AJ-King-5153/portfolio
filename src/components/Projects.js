import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Drone Simulation of College Campus</h3>
          <div className="project-content">
            <p>
              Developed a simulation model of drones navigating packages in a virtual
              representation of the University of Minnesota Twin Cities campus.
            </p>
            <ul className="project-highlights">
              <li>Integrated realistic pathfinding search algorithms</li>
              <li>Utilized design patterns including:</li>
              <ul className="design-patterns">
                <li>Factory</li>
                <li>Decorator</li>
                <li>Singleton</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <h3>AI Strategy Optimization for Reversi</h3>
          <div className="project-content">
            <p>
              Conducted an in-depth analysis of AI algorithms in Othello, implementing
              various strategic approaches.
            </p>
            <ul className="project-highlights">
              <li>Implemented advanced algorithms:</li>
              <ul className="algorithms">
                <li>Minimax</li>
                <li>Alpha-Beta Pruning</li>
                <li>Monte Carlo Tree Search</li>
              </ul>
              <li>
                Demonstrated algorithm tradeoffs between computational cost and accuracy
                in adversarial search strategies
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Website Project */}
        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <div className="project-content">
            <p>
              A responsive portfolio website built with React and Node.js, featuring 
              visitor analytics, animated elements, and a professional design.
            </p>
            
            <ul className="project-highlights">
              <li>Frontend built with React and React Router for seamless navigation</li>
              <li>Node.js/Express backend with MongoDB Atlas integration</li>
              <li>Key Features:
                <ul className="design-patterns">
                  <li>Responsive design with CSS Grid/Flexbox</li>
                  <li>Custom animations and transitions</li>
                  <li>Real-time visitor tracking</li>
                  <li>Secure configuration management</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
