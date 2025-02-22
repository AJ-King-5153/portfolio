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
              A modern, responsive portfolio website built from scratch using React and Node.js. 
              Features include real-time visitor tracking, animated backgrounds, and a clean, 
              professional design with smooth transitions and interactions.
            </p>
            
            <ul className="project-highlights">
              <li>Built with React for the frontend, utilizing React Router for seamless navigation</li>
              <li>Backend powered by Node.js and Express, with MongoDB Atlas for visitor tracking</li>
              <li>Technologies & Features:
                <ul className="design-patterns">
                  <li>React.js with Hooks and React Router</li>
                  <li>Node.js & Express.js backend</li>
                  <li>MongoDB Atlas for database</li>
                  <li>CSS animations and transitions</li>
                  <li>Responsive design with CSS Grid and Flexbox</li>
                  <li>Real-time visitor statistics</li>
                  <li>Custom animated background effects</li>
                  <li>Environment variables for secure configuration</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="project-tech">
            React • Node.js • Express • MongoDB • CSS3 • HTML5 • JavaScript
          </div>
          <div className="project-links">
            <a href="https://github.com/YourUsername/portfolio" target="_blank" rel="noopener noreferrer">View Source</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
