import React from "react";
import './About.css'

export default function About() {
   return(
      <section id="about">

  <h1>About Me</h1>

  <p className="subtitle">Get to know me better.</p>

  <div className="about-container">

    {/* Left Side */}

    <div className="about-left">

      <h2>My Journey</h2>

      <div className="about-text">

        <p>
          Hi, I'm <span>Tariq Aziz</span>, a Software Engineering student from
          Buner, Khyber Pakhtunkhwa, currently pursuing my Bachelor's degree at
          the University of Peshawar. Alongside my academic journey, I am
          dedicated to learning modern web development and continuously
          improving my skills by building real-world projects.
        </p>

        <p>
          I specialize in creating responsive, interactive, and visually
          appealing web applications using HTML, CSS, JavaScript, and React.
          I enjoy solving real-world problems through clean, efficient code
          and continuously exploring new technologies.
        </p>

      </div>

    </div>

    {/* Right Side */}

    <div className="about-right">

      <div className="about-cards">

        <div className="card">
          <div className="icon">💻</div>
          <div>
            <h3>Specialization</h3>
            <p>Frontend Development</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">⚛️</div>
          <div>
            <h3>Learning</h3>
            <p>React.js & Modern JavaScript</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">🛠️</div>
          <div>
            <h3>Tech Stack</h3>
            <p>HTML • CSS • JavaScript • React</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">🎯</div>
          <div>
            <h3>Career Goal</h3>
            <p>Become a Full Stack Developer</p>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>
   )
}
