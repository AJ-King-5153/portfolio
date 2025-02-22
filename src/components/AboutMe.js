import React from 'react';
import '../styles/about.css';

function AboutMe() {
    return (
        <section id="about">
            <div className="about-header">
                <h1>ALLAN (A.J.) KING</h1>
                <div className="intro-section">
                    <p className="greeting">
                        👋 Hi, I'm AJ King!
                    </p>
                    <p className="intro">
                        I'm a motivated Computer Science student with a passion for software development,
                        algorithms, and creating innovative solutions.
                    </p>
                </div>
            </div>

            <div className="content-sections">
                <div className="section">
                    <h2>🎓 Education</h2>
                    <div className="content-block">
                        <h3>University of Minnesota, Twin Cities</h3>
                        <p>Bachelor of Computer Science (Expected 2026)</p>
                        <ul>
                            <li>📊 GPA: 3.5</li>
                            <li>🏆 Dean's List</li>
                            <li>🎮 Big 10 Conference Esports Team</li>
                            <li>👥 Social Coding Club Member</li>
                        </ul>
                        <div className="coursework">
                            <h4>📚 Key Coursework</h4>
                            <ul>
                                <li>Algorithms & Data Structures</li>
                                <li>Program Design & Development</li>
                                <li>Machine Architecture & Organization</li>
                                <li>Operating Systems</li>
                                <li>Advanced Programming Principles</li>
                                <li>Linear Algebra</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>💼 Experience</h2>
                    <div className="content-block">
                        <div className="experience-item">
                            <h3>Tech Academy - Intern Teacher</h3>
                            <p className="location">📍 Eden Prairie, MN | 2024</p>
                            <ul>
                                <li>🤖 Instructed students on basic artificial intelligence concepts</li>
                                <li>🐍 Taught introductory Python programming</li>
                                <li>👥 Collaborated with fellow educators to enhance learning environment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>🔧 Technical Skills</h2>
                    <div className="content-block skills-container">
                        <div className="skill-category">
                            <h3>💻 Programming</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C/C++</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>OCaml</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>🛠️ Developer Tools</h3>
                            <ul>
                                <li>Windows</li>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Visual Studio</li>
                                <li>IntelliJ</li>
                                <li>Azure</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>⚛️ Frameworks</h3>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>JUnit</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>📚 Libraries</h3>
                            <ul>
                                <li>Pandas</li>
                                <li>NumPy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>🌟 Interests & Activities</h2>
                    <div className="content-block">
                        <ul>
                            <li>🏋️ Weightlifting enthusiast</li>
                            <li>💻 Social coding projects contributor</li>
                            <li>🔧 Building and maintaining computers</li>
                            <li>🎮 Former High School Esports coach</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
