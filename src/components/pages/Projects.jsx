import React from "react";
import "./Projects.css";
import weatherImg from "../../assets/images/weatherapp.png";
import portfolioImg from "../../assets/images/portfolio.png";
import calculatorImg from "../../assets/images/calculator.png";
import dicegameImg from "../../assets/images/dicegame.png";
import stdImg from "../../assets/images/std.png";
import colorchangerImg from "../../assets/images/colorchanger.png";
export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>

      <p className="subtitle">
        Some of the projects I've built during my learning journey.
      </p>

      <div className="projects-container">
        {/* Project 1 */}

        <div className="project-card">
          <img src={portfolioImg} alt="Portfolio Website" />
          <div className="project-content">
            <h2>Portfolio Website</h2>
            <p>
              A modern personal portfolio built with React, featuring responsive
              design and smooth user experience.
            </p>
            <span>React • CSS • JavaScript</span>
            <div className="project-buttons">
              {/* <a href="#" target="_blank" rel="noreferrer"> Live Demo </a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}

        <div className="project-card">
          <img src={weatherImg} alt="Weather App" />
          {/* <img src="" alt="Weather App" /> */}
          <div className="project-content">
            <h2>Weather App</h2>
            <p>
              A weather application that displays real-time weather data using
              an external API.
            </p>
            <span>React • API • CSS</span>
            <div className="project-buttons">
              {/* <a href="#">Live Demo</a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="https://tariqazizstacks.github.io/Weather-App/">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}

        <div className="project-card">
          <img src={calculatorImg} alt="Calculator" />

          <div className="project-content">
            <h2>Calculator</h2>

            <p>
              A responsive calculator capable of performing basic arithmetic
              operations.
            </p>

            <span>HTML • CSS • JavaScript</span>

            <div className="project-buttons">
              {/* <a href="#">Live Demo</a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="https://tariqazizstacks.github.io/calculator-app/">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}

        <div className="project-card">
          <img src={colorchangerImg} alt="Random Color Generator" />

          <div className="project-content">
            <h2>Random Color Generator</h2>

            <p>
              Generates random colors and allows users to copy HEX color codes
              instantly.
            </p>

            <span>JavaScript • CSS</span>

            <div className="project-buttons">
              {/* <a href="#">Live Demo</a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="https://tariqazizstacks.github.io/RandomColorChanger/">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}

        <div className="project-card">
          <img src={dicegameImg} alt="Dice Game" />

          <div className="project-content">
            <h2>Dice Game</h2>

            <p>
              A fun JavaScript dice game with random winner selection and smooth
              gameplay.
            </p>

            <span>HTML • CSS • JavaScript</span>

            <div className="project-buttons">
              {/* <a href="#">Live Demo</a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="https://tariqazizstacks.github.io/Dice-Game-App/">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 6 */}

        <div className="project-card">
          <img src={stdImg} alt="Student ID Generator" />

          <div className="project-content">
            <h2>Student ID Generator</h2>

            <p>
              A simple web application that generates digital student ID cards
              dynamically.
            </p>

            <span>HTML • CSS • JavaScript</span>

            <div className="project-buttons">
              {/* <a href="#">Live Demo</a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Live Demo Coming Soon 🚀");
                }}
              >
                Live Demo
              </a>
              <a href="https://tariqazizstacks.github.io/Student-Card-App/">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
