import React from "react";
import tariqaziz from "../../assets/images/tariqaziz.png"
import './Hero.css'

export default function () {
  return (
    <section id="hero" >
      <div className="hero-left">
        <p className="intro">Hello, I'm</p>

        <h1>
          Tariq <span>Aziz</span>
        </h1>

        <h2>Frontend Developer & Software Engineering Student</h2>

        <p className="description">
          Passionate about creating modern, responsive and interactive web
          applications using React, JavaScript and modern web technologies.
        </p>

        <div className="hero-btns">
          <button>Download CV</button>

          <button>Contact Me</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={tariqaziz} alt="tariqaziz-profilepic" />
      </div>
    </section>
  );
}
