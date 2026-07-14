import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer id="footer">

      <div className="footer-content">

        <h2>Tariq Aziz</h2>
        <p>
          Frontend Developer | React Developer
        </p>

        <div className="footer-links">
       <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your-email@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Tariq Aziz. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
  
