
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">

      <h1>Contact Me</h1>

      <p className="subtitle">
        Let's Build Something Amazing Together.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            I'm always open to new opportunities, collaborations, and exciting
            projects. Feel free to reach out if you'd like to work together or
            simply say hello.
          </p>

          <p><strong>Email:</strong> tariqaziz32492@gmail.com</p>
          <p><strong>Whatsapp:</strong>+923435024380</p>
          <p><strong>Location:</strong> Buner, Khyber Pakhtunkhwa, Pakistan</p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}