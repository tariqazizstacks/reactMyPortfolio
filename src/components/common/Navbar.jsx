import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div id='navbar'>
        <div className="logo">
        <h2>Tariq Aziz</h2>
        </div>
        <ul>
            <li>
                <a href="#hero">Home</a>
            </li>

            <li>
                <a href="#about">About Me</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>

    </div>
  )
}
