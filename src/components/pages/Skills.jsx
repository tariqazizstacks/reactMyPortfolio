 import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">

      <h1>Skills</h1>

      <p className="subtitle">
        Technologies I Work With
      </p>

      <div className="skills-container">

        <div className="skill-card">
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <h3>React.js</h3>
        </div>

        <div className="skill-card">
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <h3>GitHub</h3>
        </div>

        <div className="skill-card">
          <h3>VS Code</h3>
        </div>

        <div className="skill-card">
          <h3>Responsive Design</h3>
        </div>

      </div>

    </section>
  );
}