import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">

      <h1>Education</h1>

      <p className="subtitle">
        My Academic Journey
      </p>

      <div className="education-container">

        <div className="education-card">

          <span className="year">2024 - Present</span>

          <h2>Bachelor of Software Engineering</h2>

          <h3>University of Peshawar</h3>

          <p>
            Currently pursuing a Bachelor's degree in Software Engineering,
            focusing on programming, web development, algorithms, databases,
            and modern software technologies.
          </p>

        </div>

      </div>

    </section>
  );
}